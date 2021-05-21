import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { Grid } from "@material-ui/core";

interface TITLE {
  title: string;
}

const Layout: React.FC<TITLE> = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-NotoSans">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav
          style={{ backgroundColor: "#268300" }}
          className="w-screen h-24 topNav"
        >
          <Grid container>
            <Grid item xs={1}>
              <div className="flex justify-center items-center m-2 cursor-pointer">
                <Link href="/">
              <Image src="/images/icon.jpg" alt="Icon" width={320} height={180} className="rounded"/>
              </Link>
              </div>
            </Grid>
            <Grid item xs={11}>
            <Grid container item>
              <Grid item xs={3} className="cursor-pointer">
              <Link href="/basic">
                <div className="bg-white h-10 m-1 p-2 flex justify-center items-center rounded font-bold text-xl transition-opacity duration-500 ease-in hover:bg-green-100">
                  서러브레드 기본 정보
                </div>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <div className="bg-white h-10 m-1 p-2 flex justify-center items-center rounded">
                  Navigation Bar 1
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="bg-white h-10 m-1 p-2 flex justify-center items-center rounded">
                  Navigation Bar 1
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="bg-white h-10 m-1 p-2 flex justify-center items-center rounded">
                  Navigation Bar 1
                </div>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={4}>
                <div className="bg-black h-10 m-1 p-2 flex justify-center items-center rounded text-white">
                  Navigation Bar 2
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="bg-black h-10 m-1 p-2 flex justify-center items-center rounded text-white">
                  Navigation Bar 2
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="bg-black h-10 m-1 p-2 flex justify-center items-center rounded text-white">
                  Navigation Bar 2
                </div>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer 
      style={{ backgroundColor: "#1d4f0d" }}
      className="w-full h-12 flex justify-center items-center border-t">
        Harry Kim 2021
      </footer>
    </div>
  );
};

export default Layout;
