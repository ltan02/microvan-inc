import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import { listBrands, listTrucks, listTypes } from "../graphql/queries";
import {
  Brand,
  ListBrandsQuery,
  ListTrucksQuery,
  ListTypesQuery,
  Truck,
  Type,
} from "../API";
import Header from "../components/header";
import FilterBar from "../components/filterBar";
import GallerySection from "../components/gallerySection";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

type Props = {};

export default function gallery({}: Props) {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  // Pagination useStates
  const [nextToken, setNextToken] = useState<string | null | undefined>(
    undefined,
  );
  const [nextNextToken, setNextNextToken] = useState<string | null | undefined>(
    undefined,
  );

  const [showFilterOptions, setShowFilterOptions] = useState(true);

  const [brands, setBrands] = useState<Brand[]>([]);
  const [types, setTypes] = useState<Type[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<Type[]>([]);

  const [filter, setFilter] = useState<any>(undefined);

  // Constants
  const { user } = useUser();
  const truckFetchLimit = 20;
  const hasNext = !!nextNextToken;

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

  // Make a request to the GraphQL API
  useEffect(() => {
    const fetchTrucksFromApi = async (): Promise<void> => {
      console.log(filter);
      const result = (await API.graphql({
        query: listTrucks,
        variables: {
          nextToken: nextToken,
          limit: truckFetchLimit,
          ...(filter && { filter: filter }),
        },
      })) as {
        data: ListTrucksQuery;
        errors: any[];
      };

      console.log(result);

      if (result.data) {
        setNextNextToken(result.data.listTrucks?.nextToken);
        setTrucks([...trucks, ...(result.data.listTrucks?.items as Truck[])]);
      } else {
        throw new Error("Could not get trucks");
      }
    };

    fetchTrucksFromApi();
  }, [nextToken]);

  useEffect(() => {
    console.log(selectedBrands);
    if (selectedBrands.length > 0) {
      setFilter({
        brand: {
          eq: selectedBrands[0].name,
        },
      });
    } else {
      setFilter(undefined);
    }
    console.log(filter);

    setTrucks([]);
    setNextToken(undefined);
  }, [selectedBrands.length, selectedTypes.length]);

  const next = () => {
    if (hasNext) {
      setNextToken(nextNextToken);
      setNextNextToken(undefined);
    }
  };

  useBottomScrollListener(next);

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
              brands={brands}
              types={types}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
