import Link from "next/link";
export const dynamic = "force-static";

export default function NotFound() {
  return (
    <section>
      <div className="container flex pt-32 min-h-screen  mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-current rounded-full  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <p className="mt-3 text-2xl font-semibold md:text-3xl">OOPS! </p>
          <h1 className="mt-1 text-xl font-semibold">404 page not found</h1>
          <Link href={"/"} className="mt-10 btn btn-success">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
