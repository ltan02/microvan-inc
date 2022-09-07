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
  const [nextToken, setNextToken] = useState<string | null | undefined>(null);
  const [showFilterOptions, setShowFilterOptions] = useState(true);
  // Make a request to the GraphQL API
  useEffect(() => {
    const fetchTrucksFromApi = async (): Promise<Truck[]> => {
      const currentTrucks: Truck[] = [];
      let allTrucks = (await API.graphql({
        query: listTrucks,
        variables: { limit: 100 },
      })) as {
        data: ListTrucksQuery;
        errors: any[];
      };

      if (allTrucks.data) {
        console.log(JSON.stringify(allTrucks.data));
        setNextToken(allTrucks.data.listTrucks?.nextToken);
        console.log(allTrucks.data.listTrucks?.nextToken);
        currentTrucks.push(...(allTrucks.data.listTrucks?.items as Truck[]));
        console.log(trucks);
      } else {
        throw new Error("Could not get trucks");
      }

      console.log(nextToken);
      while (nextToken !== null && nextToken !== undefined) {
        allTrucks = (await API.graphql({
          query: listTrucks,
          variables: { limit: 100, nextToken },
        })) as {
          data: ListTrucksQuery;
          errors: any[];
        };

        if (allTrucks.data) {
          setNextToken(allTrucks.data.listTrucks?.nextToken);
          currentTrucks.push(...(allTrucks.data.listTrucks?.items as Truck[]));
        } else {
          throw new Error("Could not get trucks");
        }
      }

      console.log(currentTrucks);

      setTrucks(currentTrucks);
      return allTrucks.data.listTrucks?.items as Truck[];
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
