import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { listTrucks, getTruck } from "../../graphql/queries";
import { API, withSSRContext } from "aws-amplify";
import { GetTruckQuery, ListTrucksQuery, Truck } from "../../API";

interface Props {
  truck: Truck;
}

export default function TruckPost({ truck }: Props) {
  console.log("GOT TRUCK:", truck);
  return <div>TruckPost</div>;
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
