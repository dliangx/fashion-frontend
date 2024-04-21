import { Close, SearchIcon } from "../common/Icon";

const Search = () => {
  return (
    <div>
      <SearchInput />
      <div className="ml-4">content</div>
    </div>
  );
};

export const SearchInput = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search Items"
        type="text"
        className="w-11/12 m-4 h-10 bg-transparent p-2 pl-8 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
        autoFocus
      ></input>
      <SearchIcon className="absolute top-6 left-4 z-10" />
      <Close
        className="absolute top-6 right-4 z-20"
        onClick={() => history.go(-1)}
      />
    </div>
  );
};

export default Search;
