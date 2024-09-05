import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const router = useRouter();

  const { blogId } = router.query;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  console.log(data);
  return (
    <div className="max-w-[1000px]  grid grid-cols-3 mx-auto gap-5 rounded-[12px] ">
      {blogId}
    </div>
  );
};

export default BlogPage;
