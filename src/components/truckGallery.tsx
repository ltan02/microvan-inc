import { Grid } from "@mui/material";
import { Truck } from "../API";
import TruckPreview from "./truckPreview";

interface Props {
  trucks: Truck[];
}

function truckGallery({ trucks }: Props) {
  return (
    <div className="p-0 border-none w-full">
      <div className="pb-[16px]">
        <div className="p-0 m-0 w-full">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ sm: 2, md: 3, lg: 5 }}
            className="relative w-full max-w-full"
          >
            {trucks.map((truck: Truck) => {
              return <TruckPreview key={truck.id} truck={truck} />;
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default truckGallery;
