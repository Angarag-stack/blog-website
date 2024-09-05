import useSWR from "swr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const url = "https://dev.to/api/articles?state=rising";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...Oh sorry error</p>;
  }
  const slicedData = [...data]?.slice(0.9);

  const trendingBlog = slicedData[currentSlideIndex];

  const handleClickNextSlide = () => {
    if (currentSlideIndex < data.length - 1) {
      setCurrentSlideIndex((next) => next + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };
  const handleClickPrevSlide = () => {
    if (currentSlideIndex < data.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  return (
    <div className="rounded-[12px] mb-[100px] mx-auto max-w-[1000px]">
      <Slide
        key={trendingBlog.id}
        image={trendingBlog.cover_image}
        title={trendingBlog.title}
        date={trendingBlog.published_at}
        tags={trendingBlog.tag_list}
      />

      <div className="flex ml-auto w-fit mt-2 gap-2">
        <div
          className="p-4 border border-solid rounded-lg cursor-pointer"
          onClick={handleClickPrevSlide}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="p-4 border border-solid rounded-lg cursor-pointer"
          onClick={handleClickNextSlide}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export const Slide = (props) => {
  const { image, title, tags, date } = props;

  return (
    <div
      style={{
        height: 600,
        width: "100%",
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
        {" "}
        <div className="w-[598px] h-[252px] bg-gray-100 rounded xl p-10">
          <p className="w-fit h-fit  py-1 px-3 rounded-md bg-[#4B6BFB] text-gray-100">
            {tags[0]}
          </p>
          <h className="text-black mt-4 text-4xl">{title}</h>
          <p className="text-gray-400 text-base mt-6">{date}</p>
        </div>
      </div>
    </div>
  );
};
