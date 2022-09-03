import React from "react";
import Dropzone from "../components/dropzone";
import Header from "../components/header";

type Props = {};

export default function admin({}: Props) {
  return (
    <div>
      <Header />

      <Dropzone />
    </div>
  );
}
