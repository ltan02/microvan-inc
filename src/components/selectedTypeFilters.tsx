import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Type } from "../API";

interface Props {
  selectedType: Type;
  selectedTypes: Type[];
  setSelectedTypes: Dispatch<SetStateAction<Type[]>>;
}

export default function selectedFilters({
  selectedType,
  selectedTypes,
  setSelectedTypes,
}: Props) {
  return (
    <li className="flex list-none">
      <div className="flex py-[12px] px-[20px] items-center rounded-[8px] bg-[#e5e8eb80]">
        <div className="font-semibold text-[16px] text-[#04111d]">
          {selectedType.name}
        </div>
        <CloseIcon
          className="font-semibold text-[20px] ml-[6px] hover:cursor-pointer text-[#04111d]"
          onClick={() => {
            setSelectedTypes(
              selectedTypes.filter((type) => type !== selectedType),
            );
          }}
        />
      </div>
    </li>
  );
}
