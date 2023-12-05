import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-black gap-2 flex-wrap">
      {/* <Link
        href="/portfolio/3d"
        className="bg-slate-700 text-white p-2 rounded hover:bg-slate-600"
      >
        Portfolio3D
      </Link> */}
      <Link
        href="/portfolio/3d"
        className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 flex justify-center items-center"
      >
        <span className="relative z-10">Portfolio3D</span>
      </Link>
      {/* <Link
        href="/portfolio/3d"
        className="text-red hover:before:bg-red relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full flex justify-center items-center"
      >
        <span className="relative z-10">Portfolio3D</span>
      </Link> */}
    </main>
  );
}
