import React from "react";
import { LeftBar, Navbar } from "../../../components";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Sociand | Notification</title>
      </Head>
      <section>
        <div className="fixed top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="bg-primaryBg text-white flex flex-row justify-between ">
          <div className=" h-screen sticky top-0">
            <LeftBar />
          </div>
        </div>
      </section>
    </>
  );
}