import API, { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  CreateBrandMutation,
  CreateTruckInput,
  CreateTruckMutation,
  CreateTypeMutation,
} from "../API";
import { createBrand, createTruck, createType } from "../graphql/mutations";

const XLSX = require("xlsx");

export default function FileDropzone() {
  const [file, setFile] = useState<File>();

  console.log("The current file is:", file);

  const uploadFile = () => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (evt) => {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const brands: string[] = [];
        const types: string[] = [];
        let isEquipment = false;
        wb.SheetNames.forEach((wsname: string, index: number) => {
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

          if (index !== 0) {
            isEquipment = true;
          }

          data.forEach(async (row: any[]) => {
            if (typeof row[1] === "number") {
              console.log(row);
              const brand = row[6];
              const type = row[7];
              if (
                brand !== undefined &&
                brand !== "" &&
                !brands.includes(brand)
              ) {
                brands.push(brand);
                try {
                  const createNewBrands = (await API.graphql({
                    query: createBrand,
                    variables: { input: { name: brand } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
                  })) as { data: CreateBrandMutation };
                  console.log(
                    "New brands created successfully:",
                    createNewBrands,
                  );
                } catch (err) {
                  console.log("Error creating new brands:", err);
                }
              }
              if (type !== undefined && type !== "" && !types.includes(type)) {
                types.push(type);
                try {
                  const createNewTypes = (await API.graphql({
                    query: createType,
                    variables: { input: { name: type } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
                  })) as { data: CreateTypeMutation };
                  console.log(
                    "New types created successfully:",
                    createNewTypes,
                  );
                } catch (err) {
                  console.log("Error creating new types:", err);
                }
              }

              try {
                const createNewTruckInput: CreateTruckInput = {
                  unicode: row[1],
                  ...(!isEquipment && { model: row[2] }),
                  ...(isEquipment && { prefix: row[2] }),
                  chassis: row[3],
                  engineNumber: row[4],
                  description: row[5],
                  brand: brand,
                  type: type,
                  images: [],
                  startingPrice: row[8],
                  sold: false,
                  bidder: "",
                };

                const createNewTruck = (await API.graphql({
                  query: createTruck,
                  variables: { input: createNewTruckInput },
                  authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
                })) as { data: CreateTruckMutation };

                console.log("New post created successfully:", createNewTruck);
              } catch (err) {
                console.error("Error uploading vehicle");
              }
            }
          });
        });
      };
      reader.readAsBinaryString(file);
    }
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "application/vnd.ms-excel": [".xlsx", ".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
        ".xls",
      ],
    },
    onDrop,
  });

  return (
    <div className="flex flex-col">
      <div
        {...getRootProps()}
        className="text-center border-[3px] border-blue-700 border-dashed w-3/5 hover:cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button
        className="border-[2px] border-solid border-black w-[100px]"
        onClick={uploadFile}
      >
        Upload
      </button>
    </div>
  );
}
