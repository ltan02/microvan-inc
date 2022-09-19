import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import { listTrucks } from "../graphql/queries";
import { ListTrucksQuery, Truck } from "../API";
import Header from "../components/header";
import FilterBar from "../components/filterBar";
import GallerySection from "../components/gallerySection";

type Props = {};

export default function gallery({}: Props) {
  const { user } = useUser();
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [showFilterOptions, setShowFilterOptions] = useState(true);
  // Make a request to the GraphQL API
  useEffect(() => {
    const fetchTrucksFromApi = async (): Promise<Truck[]> => {
      const allTrucks = (await API.graphql({
        query: listTrucks,
      })) as {
        data: ListTrucksQuery;
        errors: any[];
      };

      if (allTrucks.data) {
        setTrucks(allTrucks.data.listTrucks?.items as Truck[]);
        return allTrucks.data.listTrucks?.items as Truck[];
      } else {
        throw new Error("Could not get trucks");
      }
    };

    fetchTrucksFromApi();
  }, []);

  console.log("USERS:", user);
  console.log("TRUCKS:", trucks);

  return (
    <div className="flex flex-col bg-white min-h-full">
      <Header />

      <main className="flex flex-col grow shrink basis-0">
        <div className="flex w-screen flex-col mt-0 h-full">
          <div className="px-[32px] mx-auto w-screen">
            <FilterBar
              showFilterOptions={showFilterOptions}
              setShowFilterOptions={setShowFilterOptions}
            />
            <GallerySection
              trucks={trucks}
              showFilterOptions={showFilterOptions}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
