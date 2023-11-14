const Container = ({ children }) => {
  return (
    <div className="lg:w-[60%] w-full md:w-[80%] sm:w-[90%] mx-auto px-4 md:px-6">
      {children}
    </div>
  );
};

export default Container;
