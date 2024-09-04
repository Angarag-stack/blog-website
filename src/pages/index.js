import useSWR from "swr";
import Blog from "../components/Blog";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import Content from "@/components/Content";

const url = "https://dev.to/api/articles";

export default function Home() {
  return (
    <div>
      <Content />
      <Trending />
      <Header />
      <Blog />
    </div>
  );
}
