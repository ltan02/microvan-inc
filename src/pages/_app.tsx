import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import React from "react";
import Head from "next/head";

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Microvan Incorporated</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700&display=swap');
        </style>
      </Head>
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
