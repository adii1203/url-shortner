import { Search } from "lucide-react";

const SearchBtn = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 bg-white rounded-md border flex items-center px-3">
      <input
        className="text-bold font-comfortaa flex h-10 w-full bg-transparent  py-2 text-sm placeholder:text-gray-600 outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search"></input>
      <Search className="text-[#100b00]" />
    </div>
  );
};

export default SearchBtn;
