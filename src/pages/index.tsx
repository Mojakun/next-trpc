import { type NextPage } from "next";
import Head from "next/head";

import { TaskList } from "../components/TaskList"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tRPC api test</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl font-bold text-blue-900 flex justify-center mb-2">tRPC</h1>
        <TaskList />
      </div>
    </>
  );
};

export default Home;