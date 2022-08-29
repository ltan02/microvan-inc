import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function filterOptions() {
  return (
    <div className="options sticky flex-col t-[138px] w-[340px] overflow-auto -ml-[10px] mr-[16px]">
      <div className="pt-[8px] pr-[16px]">
        <div className="border-none bg-white rounded-[10px]">
          <button className="px-[10px] h-[48px] text-[16px] bg-white text-left w-full items-center rounded-[10px] hover:cursor-pointer flex font-semibold hover:bg-[#fafafb]">
            Price
            <KeyboardArrowUpIcon className="text-[#04111d] ml-auto" />
          </button>
          <div className="border-t-none bg-[#fbfdff]">
            <div className="overflow-visible transition-[height] duration-100 delay-[0ms]">
              <div className="p-0 rounded-b-[10px]">
                <div className="bg-white flex-col flex">
                  <div className="max-h-[400px] flex flex-col">
                    <div className="overflow-x-hidden border-transparent overflow-y-auto transition-[border-color] duration-200 delay-[0ms] ease-in">
                      <ul className="gap-[4px] -mr-[13px] pr-[13px] flex max-h-[400px] overflow-auto flex-col">
                        <li className="flex w-full list-none">
                          <label className="hover:bg-[#fafafb] w-full flex h-[48px] items-center hover:cursor-pointer bg-white rounded-[12px] font-normal text-[16px] text-[#04111d] pl-[10px]">
                            <div>1000+</div>
                            <div className="flex ml-auto">
                              <div className="relative inline-flex rounded-[10px]">
                                <input
                                  type="checkbox"
                                  className="filterCheckbox"
                                ></input>
                              </div>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16px] mr-12 mb-8 ml-10 border-b-1 border-b-solid border-b-[#e5e8eb]"></div>
        </div>
      </div>
    </div>
  );
}

export default filterOptions;
