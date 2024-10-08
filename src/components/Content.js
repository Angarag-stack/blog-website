import Link from "next/link";

export default function Content() {
  return (
    <div className="mx-auto max-w-[1000px] mb-[100px] flex mt-8 ">
      <div className="mr-[50px]">
        <Link href={"/home"}>
          <img className="w-[158px] h-[36px]" src=" Logo.svg"></img>
        </Link>
      </div>

      <div className="flex w-[667px] h-[24px] text-base gap-10 text-gray-600 justify-center">
        <Link href={"/home"}>
          <p>Home</p>
        </Link>
        <Link href={"/subblog"}>
          <p>Blog</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
      <div>
        <div className="bg-gray-100 w-[166px] h-[36px] flex py-2 pl-4 pr-2 gap-3 rounded-md ">
          <input
            className=" w-[114px] h-[20px] bg-gray-100 "
            type="text "
            id="name"
            placeholder="Search "
          ></input>
          <img className="w-4 h-4" src="search.svg"></img>
        </div>
      </div>
    </div>
  );
}
