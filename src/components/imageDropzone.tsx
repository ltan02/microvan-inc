import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const extract = require("extract-zip");

type Props = {};

export default function imageDropzone({}: Props) {
  const [zip, setZip] = useState();

  console.log("The current zip is:", zip);

  const uploadFile = () => {
    try {
      // empty try
    } catch (err) {
      console.log("Error unzipping:", err);
    }
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setZip(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "application/zip": [".zip"],
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
