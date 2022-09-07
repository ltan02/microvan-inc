import { useRouter } from "next/router";
import { useUser } from "../context/AuthContext";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

function header() {
  const [hoverProfile, setHoverProfile] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  const isAdmin =
    user?.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] &&
    user?.getSignInUserSession()?.getAccessToken().payload[
      "cognito:groups"
    ][0] === "Admins";

  console.log(hoverProfile);

  return (
    <div
      className={
        "bg-white max-w-[100vw] h-[72px] top-0 z-[120] sticky shadow-[0_1px_0_0_rgba(229,232,235,0.25)] transition-[top] duration-500 delay-[0ms]"
      }
    >
      <nav className="flex h-full justify-between">
        <div className="flex">
          <div className="flex pl-[32px] items-center h-full">
            <img
              src="/logo.png"
              width={60}
              height={60}
              className="cursor-pointer object-contain"
              onClick={() =>
                user ? router.push("/gallery") : router.push("/")
              }
            />
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-3 pl-4 md:space-x-8 md:pl-7 lg:space-x-12 lg:pl-10">
              {currentPath !== "/" && (
                <li
                  className="headerLink"
                  onClick={() => {
                    router.push("/gallery");
                  }}
                >
                  Gallery
                </li>
              )}
              <li className="headerLink">Schedule</li>
              {isAdmin && currentPath !== "/" && (
                <li
                  className="headerLink"
                  onClick={() => router.push("/admin")}
                >
                  Admin
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="flex pr-[32px]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 hover:cursor-pointer fill-[#535664] hover:fill-black"
              onMouseOver={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {hoverProfile && (
            <div className="z-[9999] absolute inset-y-0 inset-x-[auto] m-0 profileDropDown">
              <div className="max-w-[350px] duration-300 -top-[10px] rounded-t-none rounded-b-[10px] relative text-[14px] font-semibold outline-0 break-words">
                <div className="duration-300 p-0 relative z-[1]">
                  <div>
                    <ul className="bg-white border-none rounded-[10px] m-0 pl-0 list-none">
                      <li className="border-[1px] border-solid border-[#e5e8eb] rounded-t-[10px] w-full list-none">
                        <div className="rounded-none border-none overflow-hidden w-full font-semibold text-[#353840] text-left flex no-underline p-[16px] hover:cursor-pointer">
                          <div className="self-center order-2 mr-[16px] flex-shrink-0 overflow-hidden items-center justify-center flex-col flex w-[24px] h-[24px]">
                            <PersonIcon className="text-[24px]" />
                          </div>
                          <div className="self-stretch flex-grow flex-shrink basis-auto flex-col justify-center order-3 overflow-hidden items-start text-[16px] flex mr-[16px] font-semibold text-[#04111d]">
                            Profile
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default header;
