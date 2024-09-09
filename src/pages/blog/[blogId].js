import { useRouter } from "next/router";
import useSWR from "swr";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const router = useRouter();

  const { blogId } = router.query;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const bodyMarkdown = blogDetail.body_markdown;

  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center">
      {" "}
      <div className="text-2xl">{blogDetail.title}</div>{" "}
      <img src={blogDetail.cover_image} />{" "}
      <div class="prose">
        {" "}
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {bodyMarkdown}
        </Markdown>{" "}
      </div>{" "}
    </div>
  );
};

export default BlogPage;
