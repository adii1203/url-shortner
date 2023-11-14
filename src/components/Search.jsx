const Search = () => {
  return (
    <div className="flex items-center justify-between border-[1.5px] border-[#CECECE] w-60 md:w-80 px-4 py-1 outline-none rounded-full text-normal bg-white hover:bg-black/5 transition-colors">
      <input
        className="bg-transparent outline-none text-[#747474] font-comfortaa text-sm font-semibold"
        type="text"
        name="search"
        id="search"
        placeholder="search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#353535"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Search;
