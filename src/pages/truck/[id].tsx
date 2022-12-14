import React, { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { listTrucks, getTruck } from "../../graphql/queries";
import { withSSRContext, Storage, API } from "aws-amplify";
import {
  GetTruckQuery,
  ListTrucksQuery,
  Truck,
  UpdateTruckMutation,
} from "../../API";
import Header from "../../components/header";
import Image from "next/image";
import SubjectIcon from "@mui/icons-material/Subject";
import LabelIcon from "@mui/icons-material/Label";
import RefreshIcon from "@mui/icons-material/Refresh";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { useUser } from "../../context/AuthContext";
import { updateTruck } from "../../graphql/mutations";

interface Props {
  truck: Truck;
}

export default function TruckPost({ truck }: Props) {
  const [truckImage, setTruckImage] = useState<string | null>(null);
  const [bidValue, setBidValue] = useState<number>(truck?.startingPrice + 5000);
  const [makeBid, setMakeBid] = useState<boolean>(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  console.log("GOT TRUCK:", truck);

  const isHighestBidder = truck?.bidder === user?.getUsername();
  console.log(isHighestBidder);

  useEffect(() => {
    async function getImageFromStorage() {
      try {
        const signedURL = await Storage.get("truck.jpeg"); // get key from Storage.list
        console.log("Found Image:", signedURL);
        setTruckImage(signedURL);
      } catch (error) {
        console.log("No image found.");
      }
    }

    getImageFromStorage();
  }, []);

  // useEffect(() => {
  //   router.reload();
  // }, [truck.startingPrice]);

  const updateBid = async () => {
    const truckDetails = {
      id: truck.id,
      unicode: truck.unicode,
      ...(truck.model && { model: truck.model }),
      ...(truck.prefix && { prefix: truck.prefix }),
      ...(truck.chassis && { chassis: truck.chassis }),
      ...(truck.engineNumber && { engineNumber: truck.engineNumber }),
      description: truck.description,
      brand: truck.brand,
      type: truck.type,
      images: truck.images,
      startingPrice: bidValue,
      sold: truck.sold,
      bidder: user?.getUsername(),
    };

    const updatedTruck = (await API.graphql({
      query: updateTruck,
      variables: { input: truckDetails },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as {
      data: UpdateTruckMutation;
      errors: any[];
    };

    if (updatedTruck.errors) {
      console.error("Error updating truck", updatedTruck.errors);
    } else {
      router.reload();
    }
  };

  const confirmBid = () => {
    confirmAlert({
      title: `${truck.brand} - ${truck.type}`,
      message: `Do you confirm your bid of PHP ${bidValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => updateBid(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="flex flex-col bg-white min-h-full">
      <Header />

      <main className="flex flex-col flex-grow shrink basis-0">
        <div className="flex flex-col h-full flex-grow shrink basis-0">
          <div className="flex flex-col items-center">
            <div className="px-0 pt-[8px] pb-[16px] w-[1280px]">
              <div className="m-0 p-0 flex flex-row">
                <div className="w-0 max-w-[43%] flex-shrink-0 basis-0 flex-grow-[3]">
                  <div className="hover:cursor-pointer w-full max-h-[1000px] min-h-[200px]">
                    <div className="items-center justify-center flex flex-col h-full min-h-[inherit] w-full relative">
                      <div className="h-full w-[600px] flex items-center justify-center max-h-full max-w-full overflow-hidden relative">
                        {truckImage && (
                          <Image
                            objectFit="contain"
                            src={truckImage ?? ""}
                            className="w-auto h-auto max-w-full max-h-full"
                            layout="fill"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <section className="m-[20px] bg-white rounded-[10px] border-[1px] border-solid border-[#e5e8eb] overflow-hidden">
                    <div>
                      <div className="border-t-0 border-r-0 border-l-0 -mb-[1px] mt-[1px] rounded-none border-b-[1px] border-solid border-t-[#e5e8eb] text-[#04111d] bg-white overflow-hidden">
                        <button
                          className="m-0 rounded-none w-full items-center flex text-[16px] font-semibold p-[20px] bg-white "
                          type="button"
                        >
                          <SubjectIcon className="mr-[10px] text-[24px]" />
                          <span>Description</span>
                        </button>
                        <div className="border-l-0 border-r-0 rounded-none border-t-[1px] border-t-solid border-solid border-t-[#e5e8eb] text-[#353840] bg-[#fbfdff]">
                          <div className="h-[initial] max-h-[200px] overflow-auto">
                            <div className="p-[30px] rounded-b-[10px]">
                              <section className="flex items-center text-[#8a939b]">
                                <div className="m-0 p-0 flex items-center font-normal text-[16px] text-[#04111d]">
                                  {truck?.description}
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="border-t-0 border-r-0 border-l-0 -mb-[1px] mt-[1px] rounded-none border-b-[1px] border-solid border-t-[#e5e8eb] text-[#04111d] bg-white overflow-hidden">
                          <button
                            className="m-0 rounded-none w-full items-center flex text-[16px] font-semibold p-[20px] bg-white "
                            type="button"
                          >
                            <LabelIcon className="mr-[10px] text-[24px]" />
                            <span>Categories</span>
                          </button>
                          <div className="border-l-0 border-r-0 rounded-none border-t-[1px] border-t-solid border-solid border-t-[#e5e8eb] text-[#353840] bg-[#fbfdff]">
                            <div className="h-[initial] max-h-[200px] overflow-auto">
                              <div className="flex flex-wrap p-[5px] rounded-b-[10px]">
                                <a
                                  href="/gallery"
                                  className="text-[#2081e2] no-underline hover:cursor-pointer"
                                >
                                  <div className="m-[5px] w-[150px] rounded-[6px] border-[1px] border-solid border-[#15b1e5] p-[10px] text-center bg-[#15b1e50f]">
                                    <div className="text-[#353840] text-[15px] font-medium leading-[30px] overflow-auto">
                                      {truck?.brand}
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href="/gallery"
                                  className="text-[#2081e2] no-underline hover:cursor-pointer"
                                >
                                  <div className="m-[5px] w-[150px] rounded-[6px] border-[1px] border-solid border-[#15b1e5] p-[10px] text-center bg-[#15b1e50f]">
                                    <div className="text-[#353840] text-[15px] font-medium leading-[30px] overflow-auto">
                                      {truck?.type}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="flex-grow-[4] flex-shrink-0 basis-0 -ml-[20px]">
                  <section className="mt-[20px] mr-[20px] mb-[15px] ml-[20px] flex flex-col flex-wrap justify-between">
                    <div className="flex items-center justify-between mb-[5px] max-w-full">
                      <div className="flex items-center max-w-full w-[420px] overflow-hidden text-ellipsis whitespace-nowrap">
                        <div className="flex items-center overflow-hidden text-ellipsis">
                          <a
                            href="/gallery"
                            className="text-[16px] overflow-hidden text-ellipsis whitespace-nowrap text-[#2081e2] no-underline"
                          >
                            {truck?.brand}
                          </a>
                        </div>
                      </div>
                      <div className="max-w-fit">
                        <div className="w-fit flex">
                          <button className="truckPostButton rounded-[10px]">
                            <div
                              className="flex mb-0 ml-0 mr-0 max-h-[22px] pointer-events-none"
                              onClick={() => router.reload()}
                            >
                              <RefreshIcon className="text-[22px]" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[710px] text-[30px] font-semibold max-w-full m-0 overflow-hidden text-ellipsis leading-[normal]">
                      {truck?.type}
                    </div>
                  </section>
                  <div className="m-[20px]">
                    <section className="rounded-[10px] border-[1px] border-solid border-[#e5e8eb] overflow-hidden">
                      <div className="rounded-t-[10px] border-b-[1px] border-solid border-[#e5e8eb] text-[#707a83] p-[20px] bg-white">
                        <div className="justify-between flex items-center">
                          <div className="flex">
                            <div className="flex items-center mr-[4px]">
                              <ScheduleIcon className="text-[24px]" />
                            </div>
                            <div className="inline">
                              <span className="font-normal text-[16px] text-[#353840] m-0">
                                Sale ends
                              </span>
                              &nbsp;
                              <span className="font-normal text-[16px] text-[#353840] m-0">
                                September 26, 2022 at 7:21pm GMT-7
                              </span>
                              &nbsp;
                              <span className="font-normal text-[16px] text-[#353840] m-0"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-[20px] bg-[#fbfdff]">
                        <div className="text-[#707a83]">Current price</div>
                        <div className="flex flex-wrap mb-[8px]">
                          <div className="text-[30px] items-center flex font-semibold w-fit max-w-full text-[#353840]">
                            <div className="items-center justify-center flex flex-col w-[24px] h-[24px] text-[24px]">
                              ???
                            </div>
                            <div className="ml-[0.3em] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                              {truck?.startingPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                          </div>
                        </div>
                        <div className="flex max-w-[420px]">
                          <div className="w-full contents">
                            <div className="inline-flex w-1/2">
                              <button
                                onClick={
                                  !isHighestBidder ? confirmBid : undefined
                                }
                                className={`w-full inline-flex flex-row items-center justify-center rounded-[12px] text-[16px] font-semibold leading-[22px] tracking-[0.01em] py-[17px] px-[24px] text-white border-[2px] border-solid ${
                                  !isHighestBidder
                                    ? "bg-[#2081e2] border-[#2081e2]"
                                    : "bg-[#2081e24b] border-[#2081e24b] hover:cursor-default"
                                }`}
                              >
                                <div className="flex mb-0 ml-0 mr-[12px] max-h-[22px] pointer-events-none">
                                  <LocalOfferIcon className="text-[22px]" />
                                </div>
                                Make Offer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Call an external API to get trucks.
  const SSR = withSSRContext();
  const trucksQuery = (await SSR.API.graphql({
    query: getTruck,
    variables: { id: params?.id },
  })) as { data: GetTruckQuery };

  // By returning { props: { posts } }, the Truck Post component
  // will receive `truck` as a prop at build time
  return {
    props: {
      truck: trucksQuery.data.getTruck,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();
  const response = (await SSR.API.graphql({ query: listTrucks })) as {
    data: ListTrucksQuery;
    error: any[];
  };

  // Get the paths we want to pre-render based on trucks
  const paths =
    response.data.listTrucks?.items.map((truck) => ({
      params: { id: truck?.id },
    })) ?? [];

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};
