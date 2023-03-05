import Head from "next/head";
import {
  NavbarMain,
  LeftBar,
  Center,
  RightBar,
  BottomBar,
} from "../../components";
export default function index() {
  return (
    <>
      <Head>
        <title>Sociand</title>
      </Head>
      <div className="relative">
        <div className="">
          {/* <div className=""> */}
          <NavbarMain />
        </div>

        <div className="bg-primaryBg text-white flex flex-row justify-between ">
          <div className=" h-screen sticky top-0">
            <LeftBar />
          </div>

          <Center />
          <div className="h-screen sticky top-0">
            <RightBar />
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0">
          <BottomBar />
        </div>
      </div>
    </>
  );
}
