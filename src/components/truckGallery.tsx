import { Grid } from "@mui/material";
import { Brand, Truck, Type } from "../API";
import TruckPreview from "./truckPreview";
import { Dispatch, SetStateAction, useState } from "react";
import SelectedBrandFilters from "./selectedBrandFilters";
import SelectedTypeFilters from "./selectedTypeFilters";

interface Props {
  trucks: Truck[];
  selectedBrands: Brand[];
  setSelectedBrands: Dispatch<SetStateAction<Brand[]>>;
  selectedTypes: Type[];
  setSelectedTypes: Dispatch<SetStateAction<Type[]>>;
}

function truckGallery({
  trucks,
  selectedBrands,
  setSelectedBrands,
  selectedTypes,
  setSelectedTypes,
}: Props) {
  const [trucksWithFilter, setTrucksWithFilter] = useState<Truck[]>(trucks);

  // useEffect(() => {
  //   const tempTrucks = trucks;
  //   if (selectedBrands.length > 0) {
  //     setTrucksWithFilter(
  //       tempTrucks.filter((truck) =>
  //         selectedBrands.some((brand) => brand.brand === truck.brand),
  //       ),
  //     );
  //   } else {
  //     setTrucksWithFilter(trucks);
  //   }
  // }, []);

  // console.log(trucksWithFilter);

  return (
    <div>
      <div className="p-0 border-none w-full flex-grow flex-shrink-0 basis-0">
        <div className="m-0 p-0">
          <div className="mb-[16px] pt-[8px]">
            <div className="m-0 p-0">
              <ul className="gap-[8px] flex m-0 flex-wrap pl-0 list-none">
                {selectedBrands.map((selectedBrand) => (
                  <SelectedBrandFilters
                    selectedBrand={selectedBrand}
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                  />
                ))}
                {selectedTypes.map((selectedType) => (
                  <SelectedTypeFilters
                    selectedType={selectedType}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                  />
                ))}
                {(selectedBrands.length > 0 || selectedTypes.length > 0) && (
                  <li className="flex ml-[28px] list-none">
                    <div className="flex font-semibold text-[16px] text-[#04111d]">
                      <button
                        className="inline-flex items-center text-[100%] border-0 hover:cursor-pointer p-0 m-0"
                        onClick={() => {
                          setSelectedBrands([]);
                          setSelectedTypes([]);
                        }}
                      >
                        Clear all
                      </button>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-[16px]">
          <div className="p-0 m-0 w-full max-w-full">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ sm: 2, md: 3, lg: 5 }}
              className="w-full max-w-full"
            >
              {trucks.map((truck: Truck) => {
                return <TruckPreview key={truck.id} truck={truck} />;
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default truckGallery;
