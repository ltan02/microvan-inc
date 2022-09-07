import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import WindowIcon from "@mui/icons-material/Window";
import GridOnIcon from "@mui/icons-material/GridOn";
import { Dispatch, SetStateAction } from "react";

interface Props {
  showFilterOptions: boolean;
  setShowFilterOptions: Dispatch<SetStateAction<boolean>>;
}

function filterBar({ showFilterOptions, setShowFilterOptions }: Props) {
  return (
    <div className="flex sticky h-[66px] z-40 top-[71px]">
      <div className="filterBar bg-white h-full filterShadow top-0">
        <div className="flex items-center h-full w-full mx-auto px-[32px]">
          <div className="flex w-full items-center">
            <div className="flex items-center">
              <button
                className="bg-white flex items-center justify-center w-[48px] h-[48px] p-[12px] border-none rounded-full hover:drop-shadow-lg transition"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
              >
                <FilterListIcon />
              </button>
            </div>
            <div className="w-[240px] ml-auto shrink-0">
              <span className="w-full font-semibold text-[14px] text-[#04111d]">
                <div className="w-full !hidden m-0 p-0" />
                <div className="m-0 p-0">
                  <div className="m-0 p-0">
                    <div className="w-auto h-[48px] flex items-center pl-[24px] pr-[20px] font-semibold text-[16px] hover:cursor-pointer pt-[12px] pb-[12px] rounded-[10px] border-2 border-[#e5e8eb]">
                      <input
                        placeholder="Sort by"
                        className="hover:cursor-pointer bg-transparent border-none outline-0 m-0 w-full"
                        aria-invalid="false"
                        readOnly
                        aria-haspopup="true"
                      />
                      <div className="flex flex-col justify-center -ml-[12px]">
                        <KeyboardArrowDownIcon className="hover:cursor-pointer text-[#04111d] text-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="ml-[12px]">
              <div className="m-0 p-0">
                <div className="flex w-fit">
                  <button className="border-[#e5e8eb] border-2 border-solid h-[48px] bg-white rounded-none button hover:cursor-pointer flex flex-col items-center justify-center p-[17px] rounded-l-[12px]">
                    <div className="flex">
                      <WindowIcon className="text-[22px] font-normal" />
                    </div>
                  </button>
                  <button className="border-[#e5e8eb] border-2 border-solid h-[48px] bg-white rounded-none button hover:cursor-pointer flex flex-col items-center justify-center p-[17px] rounded-r-[12px] -ml-[2px]">
                    <div className="flex">
                      <GridOnIcon className="text-[22px] font-normal" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default filterBar;
