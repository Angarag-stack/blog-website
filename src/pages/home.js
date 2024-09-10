import Blog from "../components/Blog";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import { Slider } from "@/components/Slider";
import LoadMore from "@/components/LoadMore";

const home = () => {
  return (
    <div>
      <Slider />
      <Trending />
      <Header />
      <Blog />
      <LoadMore />
    </div>
  );
};
export default home;
