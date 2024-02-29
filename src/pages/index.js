import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
   <>
   <Home/>
   </>
  );
}
