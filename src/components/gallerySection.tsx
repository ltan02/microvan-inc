import { Dispatch, SetStateAction } from "react";
import { Brand, Type, Truck } from "../API";
import FilterOptions from "./filterOptions";
import TruckGallery from "./truckGallery";

interface Props {
  trucks: Truck[];
  showFilterOptions: boolean;
  brands: Brand[];
  types: Type[];
  selectedBrands: Brand[];
  setSelectedBrands: Dispatch<SetStateAction<Brand[]>>;
  selectedTypes: Type[];
  setSelectedTypes: Dispatch<SetStateAction<Type[]>>;
}

function gallerySection({
  trucks,
  showFilterOptions,
  brands,
  types,
  selectedBrands,
  setSelectedBrands,
  selectedTypes,
  setSelectedTypes,
}: Props) {
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
