import React, { Dispatch, SetStateAction, useState } from "react";
import { Type } from "../API";
import DoneIcon from "@mui/icons-material/Done";

interface Props {
  type: Type;
  selectedTypes: Type[];
  setSelectedTypes: Dispatch<SetStateAction<Type[]>>;
  index: number;
}

export default function filterSelectBox({
  type,
  selectedTypes,
  setSelectedTypes,
  index,
}: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <li className="flex w-full list-none" key={index}>
      <label className="w-full flex h-[48px] items-center hover:cursor-pointer hover:bg-[#fafafb] bg-white rounded-[12px] font-normal text-[16px] text-[#04111d] py-0 px-[10px]">
        <div className="flex w-[90%] items-center">
          <div className="flex mr-[12px] min-w-0 items-center">
            <div className="overflow-hidden whitespace-nowrap text-ellipsis font-normal text-[16px] text-[#04111d]">
              {type.name}
            </div>
          </div>
        </div>
        <div className="flex ml-auto">
          <span className="relative inline-flex rounded-[10px]">
            <input
              type="checkbox"
              className="appearance-none border-[2px] border-solid border-[#e5e8eb] hover:cursor-pointer h-[24px] min-w-[24px] max-w-[24px] rounded-[6px] bg-white outline-none m-0"
              onClick={() => {
                setSelected(!selected);
                if (selected) {
                  setSelectedTypes(
                    selectedTypes.filter((currItem: Type) => currItem !== type),
                  );
                } else {
                  setSelectedTypes([...selectedTypes, type]);
                }
              }}
            />
            {selected && (
              <div className="bg-[#2081e2] pointer-events-none absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] h-[24px] min-w-[24px] max-w-[24px] rounded-[6px] items-center justify-center">
                <DoneIcon className="text-[20px] text-white" />
              </div>
            )}
          </span>
        </div>
      </label>
    </li>
  );
}
