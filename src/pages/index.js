import Blog from "../components/Blog";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import { Slider } from "@/components/Slider";

const url = "https://dev.to/api/articles";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Slider />
      <Trending />
      <Header />
      <Blog />
    </div>
  );
}
