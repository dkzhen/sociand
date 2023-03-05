import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { avatarImg, postImage1 } from "../../../public";
import { LeftBarProfile } from "../../../components";
import Link from "next/link";

export default function index() {
  const handleError = (e: any) => {
    e.target.style.display = "none";
  };
  interface post {
    id: number;
    nama: string;
    tanggal: string;
    content: string;
    img: StaticImageData | "";
  }

  const datas: post[] = [
    {
      id: 1,
      nama: "Dani Kurniawan",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: "",
    },
    {
      id: 2,
      nama: "Khamdanu Syakir",
      tanggal: "03/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
    {
      id: 3,
      nama: "Jokowi",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
    {
      id: 4,
      nama: "Jokowi",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
    {
      id: 3,
      nama: "Jokowi",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
    {
      id: 3,
      nama: "Jokowi",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
    {
      id: 3,
      nama: "Jokowi",
      tanggal: "02/03/2023",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum velit sint eius fugit facilis nobis recusandae eveniet quidem quo et dolorem soluta, ratione distinctio autem! Vero eligendi deleniti distinctio?",
      img: postImage1,
    },
  ];
  return (
    <>
      <Head>
        <title> Dani Kurniawan</title>
      </Head>
      <main id="all" className="bg-primaryBg text-white font-poppins">
        <div className="bg-primaryBg text-white justify-center md:justify-start flex md:flex-row">
          <div className=" h-screen sticky top-0">
            <LeftBarProfile />
          </div>
          <section id="profile" className="flex flex-col md:items-start">
            <section
              id="nav-bar"
              className="md:hidden flex flex-row justify-between items-center px-2 pr-3 py-2 mb-8 bg-primary sticky top-0 "
            >
              <div className="flex flex-row justify-between items-center space-x-1">
                <Link href={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-left w-9 h-9"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </Link>
                <h1 className="font-poppins font-semibold text-lg">dk_zhen</h1>
              </div>
              <Link href={"/setting"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </section>
            <section
              id="profile-name"
              className="flex flex-col md:pt-20  items-center md:pl-20 px-3 "
            >
              <Image
                src={avatarImg}
                alt="profile"
                className="lg:w-[150px] lg:h-[150px] w-[90px] h-[90px] rounded-full"
              />
              <h1 className="lg:text-32px md:text-16px text-xl font-semibold pt-4 lg:pt-8 font-Roboto">
                Dani Kurniawan
              </h1>
              <p className="lg:text-lg text-sm pb-6 md:pb-0 font-semibold font-poppins py-3 md:mx-0 mx-22 px-10 md:px-0 text-center ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                eum.
              </p>
              <section
                id="count-follower"
                className="flex flex-row gap-10 lg:gap-20 pb-5"
              >
                <div className="flex flex-col ">
                  <h1 className="lg:text-2xl text-lg font-semibold items-center">
                    2.1M
                  </h1>
                  <p className="text-md">Posts</p>
                </div>
                <div className="flex flex-col items-center ">
                  <h1 className="lg:text-2xl text-lg font-semibold">5.1M</h1>
                  <p className="text-md">Followers</p>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="lg:text-2xl text-lg font-semibold">2.1M</h1>
                  <p className="text-md">Followings</p>
                </div>
              </section>
              <div id="edit-btn" className="flex flex-row items-center gap-5">
                <div className="bg-primaryRed px-4 py-1 lg:py-3 md:px-8 lg:px-20 rounded-lg text-md lg:text-lg ">
                  Edit Profile
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="lg:w-9 lg:h-9 w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </section>
            <section
              id="post"
              className="grid grid-cols-1 mx-5 md:grid-cols-2 -mb-4 md:gap-2 lg:gap-3 md:pr-3 lg:pr-10  mt-5 md:mx-2 lg:mx-5 "
            >
              {datas.map((item) => (
                <section
                  key={item.id}
                  id="posts"
                  className="flex flex-col  border rounded-lg md:my-5 my-2 p-5  bg-primary"
                >
                  <h1 className="flex flex-row items-center gap-3">
                    <Image
                      className="w-14 h-14 rounded-full"
                      src={avatarImg}
                      alt="avatar"
                    />
                    <div className="flex flex-col">
                      <Link href={"profile"} className="font-poppins text-xl">
                        {item.nama}
                      </Link>
                      <time className="font-poppins text-sm">
                        {item.tanggal}
                      </time>
                    </div>
                  </h1>
                  <div
                    className={`py-3 ${
                      item.img == ""
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg h-full text-center md:m-4 my-3 md:my-0 md:mt-3 px-3 flex items-center"
                        : ""
                    }`}
                  >
                    {item.content}
                  </div>
                  <div>
                    <Image
                      className="rounded-md"
                      src={item.img || ""}
                      alt="post-1"
                      onError={handleError}
                    />
                  </div>
                  <div className="flex flex-row justify-between pt-5  px-5">
                    <div className="flex flex-row gap-2">
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
                          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                        />
                      </svg>
                      <p>Like</p>
                    </div>
                    <div className="flex flex-row gap-2">
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
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>

                      <p>Comment</p>
                    </div>
                    <div className="flex flex-row gap-2">
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
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>

                      <p>Share</p>
                    </div>
                  </div>
                </section>
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
