export default function Content() {
  return (
    <div className="mx-auto max-w-[1000px] mb-[100px] flex ">
      <div className="mr-[50px]">
        <img className="w-[158px] h-[36px]" src=" Logo.svg"></img>
      </div>

      <div className="flex w-[667px] h-[24px] text-base gap-10 text-gray-600 justify-center">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div>
        <div></div>
        <input
          className="bg-green"
          type="text "
          id="name"
          placeholder="Search "
        ></input>
      </div>
    </div>
  );
}
