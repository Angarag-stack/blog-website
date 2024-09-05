import Link from "next/link";
import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="max-w-[1000px]  grid grid-cols-3 mx-auto gap-5 rounded-[12px] ">
      {data.map((blog) => {
        return (
          <Link href={`blog/${blog.id}`}>
            <BlogCard
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
              // profileImg={blog.user.profile_image}
              // name={blog.user.name}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Page;

export const BlogCard = (props) => {
  const { image, title, date, name, tags } = props;

  return (
    <div className="px-4 py-2 border border-solid rounded w-fit h-fit ">
      <img className="w-[360px] h-[240px]" src={image} alt={title} />
      <p className="w-fit h-7 text-[#4B6BFB] bg-[#4B6BFB0D] py-1 px-3 rounded-md mt-4">
        {tags[0]}
      </p>
      <h2 className="text-2xl mt-5 ">{title}</h2>
      <p className="text-gray-400 mt-3">{date}</p>
    </div>
  );
};
