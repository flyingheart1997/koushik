import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from "framer-motion"
import Image from "next/image";

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <ThemeProvider attribute='class'>
      <div className="grid grid-cols-12 gap-6 px-5 my-5 sidebar md:px-24 md:my-10 lg:px-4 lg:my-0 lg:scale-90 ">
        <div
          className="col-span-12 p-4 text-center shadow-md bg-slate-300 shadow-emerald-500 dark:bg-black lg:col-span-4 xl:col-span-3 rounded-2xl "
          style={{ fontSize: "16px"}}
        >
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 shadow-md bg-slate-300 shadow-emerald-500 dark:bg-black lg:col-span-8 xl:col-span-9 rounded-2xl" >
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
          <div className="fixed bottom-0 right-0 cursor-pointer animate-bounce">
            <a href="https://wa.me/7003885674"><Image 
            src='/images/wapp.png' alt='wapp'
            className="rounded-md "
            width={110}
            height={100}
            layout="intrinsic"/></a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
