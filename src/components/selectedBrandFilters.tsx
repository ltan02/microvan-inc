import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Brand } from "../API";

interface Props {
  selectedBrand: Brand;
  selectedBrands: Brand[];
  setSelectedBrands: Dispatch<SetStateAction<Brand[]>>;
}

export default function selectedFilters({
  selectedBrand,
  selectedBrands,
  setSelectedBrands,
}: Props) {
  return (
    <li className="flex list-none">
      <div className="flex py-[12px] px-[20px] items-center rounded-[8px] bg-[#e5e8eb80]">
        <div className="font-semibold text-[16px] text-[#04111d]">
          {selectedBrand.name}
        </div>
        <CloseIcon
          className="font-semibold text-[20px] ml-[6px] hover:cursor-pointer text-[#04111d]"
          onClick={() => {
            setSelectedBrands(
              selectedBrands.filter((brand) => brand !== selectedBrand),
            );
          }}
        />
      </div>
    </li>
  );
}
