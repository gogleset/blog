import { frontmatters } from "@/app/util/mdx";
import SearchModal from "../common/SearchModal";
import { openModal } from "../Wrapper/SearchModalEventListener";

const SearchButton = async () => {
  const frontmatterList = await frontmatters();

  return (
    <>
      {/* size: lg */}
      <label className="border border-2 p-2 flex items-center justify-around gap-2 rounded-3xl bg-current text-center max-lg:hidden cursor-pointer">
        <button
          className="border-0 clip-rect-0 h-1 -m-1 overflow-hidden p-0 absolute whitespace-nowrap w-1"
          onClick={openModal}>
          open modal
        </button>
        <p className="text-accent text-sm">Search...</p>
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      {/* size: max-lg */}
      <label className=" hidden max-lg:flex h-[40px]  items-center justify-center cursor-pointer">
        <button
          onClick={openModal}
          className="border-0 clip-rect-0 h-1 -m-1 overflow-hidden p-0 absolute whitespace-nowrap w-1">
          open modal
        </button>
        <svg
          className="pointer-events-none stroke-current  text-base-content"
          width="33"
          height="33"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </label>
      <SearchModal frontmatterList={frontmatterList} />
    </>
  );
};

export default SearchButton;
