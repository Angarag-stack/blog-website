export default function Footer() {
  return (
    <div className=" h-[495px] border border-solid   ">
      <div className="mt-[34px] mx-auto max-w-[1000px] flex ">
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
          <div className="flex gap-1 text-base">
            <p>Phone :</p>
            <p className="text-gray-600"> 880 123 456 789</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p>Home </p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex  w-4 h-4">
          <img src="fb.svg"></img>
          <img src="twitter.svg"></img>
          <img src="insta.svg"></img>
          <img src="linkedin.svg"></img>
        </div>
      </div>
    </div>
  );
}
