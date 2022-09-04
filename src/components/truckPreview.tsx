import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Truck } from "../API";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

interface Props {
  truck: Truck;
}

function truckPreview({ truck }: Props) {
  const router = useRouter();
  const [truckImage, setTruckImage] = useState<string | undefined>(undefined);

  return (
    <Grid item xs={5} sm={5} md={5} lg={3} xl={3}>
      <div>
        <article
          className="truckIconBox"
          onClick={() => router.push(`/truck/${truck.id}`)}
        >
          <a className="flex flex-col h-full overflow-hidden rounded-[inherit] no-underline text-[#04111d] pointer-events">
            <div className="h-[193px] w-[193px] overflow-hidden rounded-t-[10px] relative">
              <div className="rounded-[inherit] min-h-[inherit] h-full w-full">
                <div className="items-center justify-center flex flex-col relative h-full w-full rounded-[inherit] min-h-[inherit]">
                  <div className="h-full w-[193px] rounded-[inherit] items-center flex justify-center max-h-full max-w-full overflow-hidden relative">
                    <div className="block overflow-hidden absolute inset-0 m-0">
                      {truckImage && (
                        <Image
                          objectFit="contain"
                          src={truckImage}
                          className="absolute inset-0 p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full"
                          layout="fill"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-[150px] gap-y-[12px] px-[16px] py-[12px]">
              <div className="w-4/5">
                <div className="flex">
                  <div className="font-semibold text-[12px] w-full overflow-wrap whitespace-wrap text-ellipsis">
                    {`${truck.brand} - ${truck.type}`}
                  </div>
                </div>
                {truck.description && (
                  <div className="h-[18px] max-w-full flex items-center mb-2">
                    <div className="font-normal text-[12px] w-full overflow-hidden whitespace-nowrap text-ellipsis">
                      {truck.description}
                    </div>
                  </div>
                )}
                <div className="flex flex-col w-2/5 h-[40px] items-start flex-grow flex-shrink-0 basis-0">
                  <div className="font-semibold text-[12px] text-[#353840]">
                    Price
                  </div>
                  <div className="items-center flex font-semibold text-[16px] justify-end max-w-[15ch] cursor-pointer">
                    <div className="items-center overflow-hidden justify-center flex flex-col h-[16px]">
                      ₱
                    </div>
                    <div className="ml-[0.3em] w-full overflow-hidden whitespace-nowrap text-ellipsis">
                      {
                        truck.startingPrice /* TODO: Change this to the current bidding price? */
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </a>
        </article>
      </div>
    </Grid>
  );
}

export default truckPreview;
