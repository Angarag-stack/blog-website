import Link from "next/link";

export default function Footer() {
  return (
    <div className=" h-[495px] border border-solid   ">
      <div className="mt-[34px] mx-auto max-w-[1000px] flex  ">
        <div>
          <h1 className="text-lg">About</h1>
          <p className="w-[280px] h-[120px] text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex gap-1 text-base">
            <p>Email : </p>
            <p className="text-gray-600"> info@jstemplate.net</p>
          </div>
          <div className="flex gap-1 text-base ">
            <p>Phone :</p>
            <p className="text-gray-600"> 880 123 456 789</p>
          </div>
        </div>
        <div className="text-gray-600   gap-2 ml-[180px]">
          <Link href={"/home"}>
            <p>Home </p>
          </Link>
          <Link href={"/subblog"}>
            <p>Blog</p>
          </Link>
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </div>
        <div className="flex gap-4 ml-[180px] ">
          <img className=" w-4 h-4" src="fb.svg"></img>
          <img className=" w-4 h-4" src="twitter.svg"></img>
          <img className=" w-4 h-4" src="insta.svg"></img>
          <img className=" w-4 h-4" src="linkedin.svg"></img>
        </div>
      </div>
      <div className="mx-auto max-w-[1000px] flex justify-between  py-[32px] border-t-2 mt-4  ">
        <img className="w-[231px] h-[54px] " src="footer.svg"></img>
        <div className="flex text-gray-600 text-base  gap-3 py-2">
          <p className="border-r w-[110px] h-[24px]  ">Terms of Use</p>
          <p className="border-r w-[110px] h-[24px]">Privacy Policy</p>
          <p className=" w-[105px] h-[24px]">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
