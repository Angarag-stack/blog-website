import Link from "next/link";

const custom404 = () => {
  return (
    <div className="flex mx-auto max-w-[640px] gap-[40px] mb-[100px] ">
      <div>
        <h1 className="text-[72px] border-r  h-[160px] w-[170px]">404</h1>
      </div>
      <div>
        <p className="text-2xl mb-5">Page Not Found</p>
        <p className="text-lg text-gray-500 w-[350px] h-[52px] mb-5">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href={"/home"}>
          <button className="bg-[#4B6BFB] text-white py-[10px] px-4 text-sm rounded-md">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default custom404;
