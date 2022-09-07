import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListBrandsQuery, Brand, Type, ListTypesQuery, Truck } from "../API";
import { listBrands, listTypes } from "../graphql/queries";
import FilterOptions from "./filterOptions";
import TruckGallery from "./truckGallery";

interface Props {
  trucks: Truck[];
  showFilterOptions: boolean;
}

function gallerySection({ trucks, showFilterOptions }: Props) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [types, setTypes] = useState<Type[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<Type[]>([]);

  useEffect(() => {
    const fetchBrandsFromApi = async (): Promise<Brand[]> => {
      let allBrands = (await API.graphql({
        query: listBrands,
      })) as {
        data: ListBrandsQuery;
        errors: any[];
      };

      if (allBrands.data) {
        setBrands(allBrands.data.listBrands?.items as Brand[]);
        return allBrands.data.listBrands?.items as Brand[];
      } else {
        throw new Error("Could not get brands");
      }
    };

    fetchBrandsFromApi();
  }, []);

  useEffect(() => {
    const fetchTypesFromApi = async (): Promise<Type[]> => {
      let allTypes = (await API.graphql({
        query: listTypes,
      })) as {
        data: ListTypesQuery;
        errors: any[];
      };

      if (allTypes.data) {
        setTypes(allTypes.data.listTypes?.items as Type[]);
        return allTypes.data.listTypes?.items as Type[];
      } else {
        throw new Error("Could not get types");
      }
    };

    fetchTypesFromApi();
  }, []);

  return (
    <div className="flex w-full mt-[8px]">
      <div className="!hidden m-0 p-0" />
      {showFilterOptions && (
        <FilterOptions
          brands={brands}
          types={types}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      )}
      <TruckGallery
        trucks={trucks}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
    </div>
  );
}

export default gallerySection;
