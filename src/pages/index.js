import Blog from "../components/Blog";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import { Slider } from "@/components/Slider";
import Footer from "@/components/Footer";

const url = "https://dev.to/api/articles";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <Trending />
      <Header />
      <Blog />
    </div>
  );
}
