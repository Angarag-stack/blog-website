import useSWR from "swr";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPostCard = (props) => {
  const { image, title, tags } = props;

  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <div className="flex gap-2">
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </div>
    </div>
  );
};

const Tag = (props) => {
  const { tag } = props;
  return <div className="p-2 bg-blue-500 w-fit rounded-xl">{tag}</div>;
};

const BlogsPage = () => {
  let { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <BlogPostCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            tags={blog.tag_list}
          />
        );
      })}
    </div>
  );
};

export default BlogsPage;
