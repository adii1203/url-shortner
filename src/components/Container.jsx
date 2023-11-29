const Container = ({ children }) => {
  return (
    <div className="w-full md:w-[90%] sm:w-[100%] mx-auto px-4 md:px-6">
      {children}
    </div>
  );
};

export default Container;
