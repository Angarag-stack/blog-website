export default function Contact() {
  return (
    <div className="mx-auto  max-w-[640px]">
      <h1 className="text-4xl mb-5 ">Contact Us</h1>
      <p className="text-base text-gray-500 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex gap-[50px] mb-[50px]">
        <div className="w-[294px] h-[133px] border border-solid py-4 px-4 rounded-xl">
          <h1 className="text-2xl">Address</h1>
          <p className="text-[#696A75] w-[220px] h-[52px] ">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="w-[294px] h-[133px] border border-solid py-4 px-4 rounded-xl">
          <h1 className="text-2xl">Contact</h1>
          <p className="text-[#696A75] w-[160px] h-[52px]">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className=" w-[643px] h-[440px] bg-gray-100 rounded-[10px] pt-[29px] pb-[26px] pl-[35px] pr-[130px] mb-[100px] ">
        <h1 className="mb-[24px] text-lg">Leave a Message</h1>
        <div className="flex gap-[28px] mb-5 ">
          <div>
            <input
              type="text"
              id="your  Name"
              placeholder="Your name "
              className="w-[225px] h-[38px]  text-base py-4 pl-5 pr-4"
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="your email"
              placeholder="Your email"
              className="w-[225px] h-[38px] text-base py-4 pl-5 pr-4"
            ></input>
          </div>
        </div>
        <input
          type="text"
          id="Subject"
          placeholder="Subject"
          className="w-[478px] h-[35px] py-[14px] pl-5 pr-[14px] mb-5"
        ></input>
        <input
          type="text"
          id="write a message "
          placeholder="Write a message"
          className=" w-[478px] h-[134px] py-[14px] pl-5 pr-[14px]  "
        ></input>
        <button className=" bg-[#4B6BFB] w-[130px] h-[40px] text-white py-[10px] px-[16px] text-sm rounded-md mt-[30px]">
          Send Message{" "}
        </button>
      </div>
    </div>
  );
}
