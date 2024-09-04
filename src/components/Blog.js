import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="max-w-[1000px]  grid grid-cols-3 mx-auto gap-5 rounded-[12px] ">
      {data.map((blog) => {
        console.log(blog);
        return (
          <BlogCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
            profileImg={blog.user.profile_image}
            name={blog.user.name}
          />
        );
      })}
    </div>
  );
};

export default Page;

export const BlogCard = (props) => {
  const { image, title, date, profileImg, name } = props;

  return (
    <div className="px-4 py-2 border border-solid rounded w-fit ">
      <img className="w-[360px] h-[240px]" src={image} alt={title} />
      <h2 className="text-2xl">{title}</h2>
      <p className="text-sm text-blue-600">Technology</p>

      <div className="flex">
        <img className="h-9 w-9    rounded-[28px]" src={profileImg}></img>
        <p className="text-base text-gray-400">{name}</p>
        <p className="text-base text-gray-400">{date}</p>
      </div>
    </div>
  );
};
