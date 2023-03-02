import Image from "next/image";
import { avatarImg } from "../public";
export default function Navbar() {
  return (
    <>
      <nav className="bg-primary items-center text-white px-4 md:ox-0 flex flex-row justify-between ">
        <section
          className="font-Roboto font-semibold pl-3 md:pl-10 md:text-2xl text-lg"
          id="logo"
        >
          Sociand
        </section>
        <section id="search" className="hidden md:block">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-white sr-only "
            ></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" font-poppins block w-full px-4 py-2 pl-10 md:pr-32 lg:pr-52 text-sm text-white rounded-lg bg-primaryBg border-transparent focus:border-transparent focus:ring-white outline-none"
                placeholder="Search "
                required
              />
            </div>
          </form>
        </section>
        <section id="profile" className="pr-3 md:pr-10 py-2">
          <div className="flex flex-row items-center space-x-2">
            <div className="font-poppins pr-1 md:pr-5 md:text-lg">Zhen</div>
            <div className="">
              <Image
                className="rounded-full md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                src={avatarImg}
                alt={"avatar"}
              />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
