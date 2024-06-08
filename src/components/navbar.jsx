import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-bgd/90 backdrop-blur-sm">
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer">ToDo List</div>
        <div className="text-lg font-semibold flex items-center gap-2">
          <Link
            href={""}
            className="rounded-md px-3 py-2 bg-btn bg-btnbg hover:text-htxt hover:bg-hbg "
          >
            Login
          </Link>
          <Link
            href={""}
            className=" rounded-md px-3 py-2 bg-btnbg hover:text-htxt hover:bg-hbg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
