import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Brand, Type } from "../API";
import BrandSelectBox from "./brandSelectBox";
import TypeSelectBox from "./typeSelectBox";

interface Props {
  brands: Brand[];
  types: Type[];
  selectedBrands: Brand[];
  setSelectedBrands: Dispatch<SetStateAction<Brand[]>>;
  selectedTypes: Type[];
  setSelectedTypes: Dispatch<SetStateAction<Type[]>>;
}

function filterOptions({
  brands,
  types,
  selectedBrands,
  setSelectedBrands,
  selectedTypes,
  setSelectedTypes,
}: Props) {
  const [showPrice, setShowPrice] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [brandFilter, setBrandFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleMinPriceChange = (event: FormEvent<HTMLInputElement>) => {
    setMinPrice(event.currentTarget.value);
  };

  const handleMaxPriceChange = (event: FormEvent<HTMLInputElement>) => {
    setMaxPrice(event.currentTarget.value);
  };

  const handleBrandFilterChange = (event: FormEvent<HTMLInputElement>) => {
    setBrandFilter(event.currentTarget.value);
  };

  const handleTypeFilterChange = (event: FormEvent<HTMLInputElement>) => {
    setTypeFilter(event.currentTarget.value);
  };

  // TODO: Fix regex
  const priceIsCorrect =
    (minPrice.length === 0 ||
      /^[1-9]\d{1,2}(\,\d{3})*(\.\d+)?|[1-9]\d*(\.\d+)?$/.test(minPrice)) &&
    (maxPrice.length === 0 ||
      /^[1-9]\d{1,2}(\,\d{3})*(\.\d+)?|[1-9]\d*(\.\d+)?$/.test(maxPrice));

  return (
    <div className="m-0 p-0">
      <div className="!hidden m-0 p-0" />
      <div className="options sticky flex-col t-[138px] w-[340px] overflow-auto -ml-[10px] mr-[16px]">
        <div className="pt-[8px] pr-[16px]">
          <div>
            <div>
              <div className="border-none bg-white rounded-[10px] border-[#04111d] overflow-hidden">
                <button
                  onClick={() => setShowPrice(!showPrice)}
                  className="py-0 px-[10px] h-[48px] text-[16px] bg-white text-left border-t-0 w-full items-center rounded-[10px] hover:cursor-pointer hover:bg-[#fafafb] flex font-semibold select-none border-0 m-0"
                >
                  <span>Price</span>
                  {!showPrice && (
                    <KeyboardArrowUpIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                  {showPrice && (
                    <KeyboardArrowDownIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                </button>
                {showPrice && (
                  <div className="border-t-0 text-[#353840] bg-[#fbfdff]">
                    <div className="overflow-visible transition-[height] duration-100 delay-[0ms]">
                      <div className="p-0 rounded-b-[10px]">
                        <div className="bg-white flex flex-col">
                          <div className="flex mt-[12px] py-0 px-[8px] items-center">
                            <div className="items-center justify-center bg-white w-[70px] h-[48px] mr-[8px] text-[#04111d] flex p-[12px]">
                              PHP
                            </div>
                            <div className="items-center bg-white w-[102px] h-[48px] border-[2px] border-solid border-[#e5e8eb] rounded-[12px] hover:cursor-text flex text-[#04111d] p-[12px] text-[16px]">
                              <input
                                placeholder="Min"
                                className="text-center font-normal text-[16px] bg-transparent border-0 outline-none w-full m-0"
                                onChange={handleMinPriceChange}
                              />
                            </div>
                            <div className="ml-[8px] mr-[8px]">
                              <div className="font-semibold text-[18px] text-[#04111d]">
                                to
                              </div>
                            </div>
                            <div className="items-center bg-white w-[102px] h-[48px] border-[2px] border-solid border-[#e5e8eb] rounded-[12px] hover:cursor-text flex text-[#04111d] p-[12px] text-[16px]">
                              <input
                                placeholder="Max"
                                className="text-center font-normal text-[16px] bg-transparent border-0 outline-none w-full m-0"
                                onChange={handleMaxPriceChange}
                              />
                            </div>
                          </div>
                          {!priceIsCorrect && (
                            <div className="mt-[16px] pl-[12px]">
                              <span className="font-semibold text-[14px] text-[#eb5757]">
                                Numeric inputs only
                              </span>
                            </div>
                          )}
                          <div className="mt-[16px] mb-[16px] py-0 px-[8px]">
                            <button
                              className={`${
                                (minPrice.length > 0 || maxPrice.length > 0) &&
                                priceIsCorrect
                                  ? "opacity-100"
                                  : "opacity-40"
                              } hover:cursor-default h-[48px] rounded-[12px] w-full bg-[#2081e2] border-0 items-center inline-flex flex-row justify-center text-[16px] font-semibold py-[17px] px-[24px]`}
                            >
                              <span className="flex items-center font-semibold text-[18px] text-white">
                                Apply
                              </span>
                            </button>
                          </div>
                          <div className="mt-0 mr-[12px] mb-[8px] ml-[10px] border-b-[1px] border-solid border-[#e5e8eb]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="border-0 bg-white rounded-[10px] text-[#04111d] overflow-hidden">
                <button
                  onClick={() => setShowBrands(!showBrands)}
                  className="py-0 px-[10px] h-[48px] text-[16px] bg-white text-left border-t-0 w-full items-center rounded-[10px] hover:cursor-pointer hover:bg-[#fafafb] flex font-semibold select-none border-0 m-0"
                >
                  <span>Brands</span>
                  {!showBrands && (
                    <KeyboardArrowUpIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                  {showBrands && (
                    <KeyboardArrowDownIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                </button>
                {showBrands && (
                  <div className="border-t-0 text-[#353840] bg-[#fbfdff]">
                    <div className="overflow-visible transition-[height] duration-100 delay-[0ms]">
                      <div className="p-0 rounded-b-[10px]">
                        <div className="bg-white flex flex-col">
                          <div className="mt-[8px] mb-[8px] py-0 px-[8px]">
                            <span className="font-normal text-[18px] text-[#04111d]">
                              <div className="border-[2px] h-[48px] items-center text-[16px] hover:cursor-text flex rounded-[12px] border-solid border-[#e5e8eb] text-[#04111d] w-full p-[12px]">
                                <div className="items-center flex flex-col mr-[8px] max-w-[24px]">
                                  <SearchIcon className="text-[24px]" />
                                </div>
                                <input
                                  placeholder="Filter"
                                  className="hover:cursor-text bg-transparent border-0 outline-none w-full m-0"
                                  onChange={handleBrandFilterChange}
                                />
                              </div>
                            </span>
                          </div>
                          <div className="max-h-[400px] flex flex-col">
                            <div className="overflow-x-hidden border-[transparent] overflow-y-auto">
                              <ul className="gap-[4px] mt-0 -mr-[17px] mb-0 ml-0 pr-[17px] flex max-h-[400px] overflow-auto flex-col">
                                {brands
                                  .filter((brand) => {
                                    if (brandFilter === "") {
                                      return brand;
                                    } else if (
                                      brand.name
                                        .toLowerCase()
                                        .includes(brandFilter.toLowerCase())
                                    ) {
                                      return brand;
                                    }
                                  })
                                  .map((brand, index) => (
                                    <BrandSelectBox
                                      brand={brand}
                                      selectedBrands={selectedBrands}
                                      setSelectedBrands={setSelectedBrands}
                                      index={index}
                                    />
                                  ))}
                              </ul>
                            </div>
                          </div>
                          <div className="h-0 mt-0 mr-[12px] mb-[8px] ml-[10px] border-b-[1px] border-solid border-[#e5e8eb]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="border-0 bg-white rounded-[10px] text-[#04111d] overflow-hidden">
                <button
                  onClick={() => setShowTypes(!showTypes)}
                  className="py-0 px-[10px] h-[48px] text-[16px] bg-white text-left border-t-0 w-full items-center rounded-[10px] hover:cursor-pointer hover:bg-[#fafafb] flex font-semibold select-none border-0 m-0"
                >
                  <span>Vehicle Types</span>
                  {!showTypes && (
                    <KeyboardArrowUpIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                  {showTypes && (
                    <KeyboardArrowDownIcon className="text-[#04111d] ml-auto text-[24px]" />
                  )}
                </button>
                {showTypes && (
                  <div className="border-t-0 text-[#353840] bg-[#fbfdff]">
                    <div className="overflow-visible transition-[height] duration-100 delay-[0ms]">
                      <div className="p-0 rounded-b-[10px]">
                        <div className="bg-white flex flex-col">
                          <div className="mt-[8px] mb-[8px] py-0 px-[8px]">
                            <span className="font-normal text-[18px] text-[#04111d]">
                              <div className="border-[2px] h-[48px] items-center text-[16px] hover:cursor-text flex rounded-[12px] border-solid border-[#e5e8eb] text-[#04111d] w-full p-[12px]">
                                <div className="items-center flex flex-col mr-[8px] max-w-[24px]">
                                  <SearchIcon className="text-[24px]" />
                                </div>
                                <input
                                  placeholder="Filter"
                                  className="hover:cursor-text bg-transparent border-0 outline-none w-full m-0"
                                  onChange={handleTypeFilterChange}
                                />
                              </div>
                            </span>
                          </div>
                          <div className="max-h-[400px] flex flex-col">
                            <div className="overflow-x-hidden border-[transparent] overflow-y-auto">
                              <ul className="gap-[4px] mt-0 -mr-[17px] mb-0 ml-0 pr-[17px] flex max-h-[400px] overflow-auto flex-col">
                                {types
                                  .filter((type) => {
                                    if (typeFilter === "") {
                                      return type;
                                    } else if (
                                      type.name
                                        .toLowerCase()
                                        .includes(typeFilter.toLowerCase())
                                    ) {
                                      return type;
                                    }
                                  })
                                  .map((type, index) => (
                                    <TypeSelectBox
                                      type={type}
                                      selectedTypes={selectedTypes}
                                      setSelectedTypes={setSelectedTypes}
                                      index={index}
                                    />
                                  ))}
                              </ul>
                            </div>
                          </div>
                          <div className="h-0 mt-0 mr-[12px] mb-[8px] ml-[10px] border-b-[1px] border-solid border-[#e5e8eb]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default filterOptions;
