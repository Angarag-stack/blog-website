import useSWR from "swr";
import { BlogCard } from "./Blog";

const url = "https://dev.to/api/articles?state=rising";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  let { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const slicedData = [...data]?.slice(0, 4);

  return (
    <div className="max-w-[1000px] flex mx-auto gap-5 rounded-[12px] mb-[100px]">
      {slicedData.map((blog) => {
        return (
          <Trendingcard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
            tags={blog.tag_list}
          />
        );
      })}
    </div>
  );
};

export default function Trending() {
  return (
    <div className="mx-auto  max-w-[1000px] ">
      <h1 className="text-2xl mb-[30px]">Trending </h1>
      <Page />
    </div>
  );
}

export const Trendingcard = (props) => {
  const { image, title, name, tags } = props;

  return (
    <div
      style={{
        height: 320,
        width: 290,
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "opacity(20%)",
        overflow: "hidden",
      }}
      className="rounded-xl"
    >
      <div
        className="h-full w-full flex flex-col justify-end px-4 py-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex gap-1 flex-wrap">
          {/* {tags?.map((tag) => {
          return (
            <p className="rounded-lg px-3 bg-[#4B6BFB] text-cyan-50  ">{tag}</p>
          );
        })} */}
          <p className="rounded-lg px-3 bg-[#4B6BFB] text-cyan-50  ">
            {tags[0]}
          </p>
        </div>

        <h className="text-white mt-4">{title}</h>
      </div>
    </div>
  );
};
