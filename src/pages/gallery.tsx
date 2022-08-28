import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useUser } from "../context/AuthContext";
import { listTrucks } from "../graphql/queries";
import { Truck } from "../API";

type Props = {};

export default function gallery({}: Props) {
  const { user } = useUser();
  const [trucks, setTrucks] = useState<Truck[]>([]);

  // Make a request to the GraphQL API
  useEffect(() => {
    const fetchTrucksFromApi = async (): Promise<Truck[]> => {
      const allTrucks = (await API.graphql({ query: listTrucks })) as {
        data: Truck[];
        errors: any[];
      };

      if (allTrucks.data) {
        setTrucks(allTrucks.data);
        return allTrucks.data;
      } else {
        throw new Error("Could not get trucks");
      }
    };

    fetchTrucksFromApi();
  }, []);

  console.log("USERS:", user);
  console.log("TRUCKS:", trucks);

  return <div>Hello World!</div>;
}
