import FilterListIcon from "@mui/icons-material/FilterList";
import { Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  showFilterOptions: boolean;
  setShowFilterOptions: Dispatch<SetStateAction<boolean>>;
}

function filterBar({ showFilterOptions, setShowFilterOptions }: Props) {
  return (
    <div className="flex sticky h-[66px] z-40 top-[71px] w-full">
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
            <div className="w-full">
              <div className="!hidden m-0 p-0" />
              <div className="flex h-full w-full items-center">
                <div className="w-full">
                  <div className="m-0 p-0">
                    <div className="w-full justify-center flex-col flex">
                      <div className="flex h-[45px] justify-center">
                        <div className="mr-[32px] leading-[26px] p-[8px] searchBarTransition hover:cursor-text flex items-center rounded-[12px] border-[2px] border-solid border-[#e5e8eb] text-[#04111d] w-full h-[48px] text-[16px]">
                          <SearchIcon className="justify-center flex flex-col text-[#8a939b]" />
                          <input
                            className="hover:cursor-text text-ellipsis bg-transparent border-none outline-none w-full m-0"
                            placeholder="Search vehicles"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-[240px] ml-auto shrink-0">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default filterBar;
