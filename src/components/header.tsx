import { useRouter } from "next/router";
import { useUser } from "../context/AuthContext";

function header() {
  const { user } = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  const isAdmin =
    user?.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] &&
    user?.getSignInUserSession()?.getAccessToken().payload[
      "cognito:groups"
    ][0] === "Admins";

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
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
