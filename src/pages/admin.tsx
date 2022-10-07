import React from "react";
import FileDropzone from "../components/fileDropzone";
import Header from "../components/header";
import ImageDropzone from "../components/imageDropzone";

type Props = {};

export default function admin({}: Props) {
  return (
    <div>
      <Header />

      <FileDropzone />
      <ImageDropzone />
    </div>
  );
}
