import React from "react";
import Image from "next/image";
import { avatarImg } from "../../public";

export default function RightBar() {
  const datas = [
    {
      id: 1,
      nama: "Dani Kurniawan",
    },
    {
      id: 2,
      nama: "Khamdanu",
    },
    {
      id: 3,
      nama: "Putra",
    },
    {
      id: 3,
      nama: "Putra",
    },
    {
      id: 3,
      nama: "Putra",
    },
    {
      id: 3,
      nama: "Putra",
    },
    {
      id: 3,
      nama: "Putra",
    },
  ];
  const no = datas.length;
  console.log({ no });

  return (
    <>
      <aside className="md:flex flex-col py-8 px-9 hidden mt-20">
        <section id="header">
          <div className="flex flex-row justify-between md:space-x-10 lg:space-x-20 p-5 rounded-t-lg border border-b-transparent  bg-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1976 0C19.1026 0 19.0051 0.0174979 18.9076 0.0574929L4.49944 5.84677H0.39995C0.179978 5.84677 0 6.03175 0 6.26172V13.7358C0 13.9658 0.179978 14.1507 0.39995 14.1507H2.94213C2.84964 14.4407 2.79965 14.7482 2.79965 15.0606C2.79965 16.7079 4.14448 18.0477 5.79928 18.0477C7.1841 18.0477 8.35146 17.1079 8.69641 15.838L18.9101 19.9425C19.0076 19.98 19.1051 20 19.2001 20C19.6225 20 20 19.645 20 19.1701V0.829896C19.9975 0.354956 19.6225 0 19.1976 0ZM5.79928 16.2555C5.13686 16.2555 4.59943 15.7205 4.59943 15.0606C4.59943 14.7807 4.69691 14.5132 4.87439 14.3007L6.99663 15.1531C6.94663 15.768 6.4292 16.2555 5.79928 16.2555ZM18.1977 17.7153L5.16935 12.4809L4.84689 12.351H1.79978V7.64654H4.84689L5.16935 7.51656L18.1977 2.28221V17.7153Z"
                fill="#D9D9D9"
              />
            </svg>
            <div>Message</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div className="bg-primary pb-5 px-4 lg:pl-11 rounded-b-lg border border-t-transparent">
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
                  className=" font-poppins block  px-4 py-2 pl-10  text-sm text-white rounded-lg bg-primaryBg border-transparent focus:border-transparent focus:ring-white outline-none"
                  placeholder="Search "
                  required
                />
              </div>
            </form>
          </div>
        </section>
        <section id="message">
          {" "}
          <div
            className={`mt-3 flex flex-col p-5 space-y-4 rounded-lg border item-center bg-primary ${
              datas.length < 6 ? "h-auto" : "h-[22rem]"
            } overflow-auto`}
          >
            {datas.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center justify-between "
              >
                <div className="flex flex-row items-center space-x-2">
                  <Image
                    className="w-10 h-10 rounded-full  "
                    src={avatarImg}
                    alt="avatar"
                  />
                  <p>{item.nama}</p>
                </div>

                <time className="items-end">1m</time>
              </div>
            ))}
            <p className="text-center">no other chats</p>
          </div>
        </section>
      </aside>
    </>
  );
}
