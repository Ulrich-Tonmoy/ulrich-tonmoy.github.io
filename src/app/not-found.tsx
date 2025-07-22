import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative h-screen bg-[#030005]">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[767px] w-full line-height-1.4 text-center">
        <div className="relative h-[180px] mb-5 z-[-1]">
          <h1
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[224px] text-[182px] font-black mt-0 mb-0 -ml-3 text-[#030005] uppercase -tracking-[20px]"
            style={{
              textShadow: "-1px -1px 0px #8400ff, 1px 1px 0px #ff005a",
            }}
          >
            404
          </h1>
          <h2
            className="absolute left-0 right-0 top-[110px] font-bold text-2xl md:text-[42px] text-white uppercase tracking-[6px] m-0"
            style={{
              textShadow: "0px 2px 0px #8400ff",
            }}
          >
            Page not found
          </h2>
        </div>
        <Link
          href="/"
          className="inline-block uppercase text-[#ff005a] border-2 px-10 py-2.5 text-sm font-bold transition-all duration-200 hover:text-[#8400ff]"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
