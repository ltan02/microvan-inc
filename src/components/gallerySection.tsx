import { Truck } from "../API";
import FilterOptions from "./filterOptions";
import TruckGallery from "./truckGallery";

interface Props {
  trucks: Truck[];
}

function gallerySection({ trucks }: Props) {
  return (
    <div className="flex w-full mt-[8px]">
      <FilterOptions />
      <TruckGallery trucks={trucks} />
    </div>
  );
}

export default gallerySection;
