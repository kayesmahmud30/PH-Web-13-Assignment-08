import Motion from "./Motion";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://i.ibb.co.com/ymRfszXJ/hero-book.jpg')] 
    h-[50vh] sm:h-[70vh] md:h-[80vh] w-auto 
    bg-cover bg-no-repeat bg-center 
    flex items-center rounded-lg shadow-2xl"
    >
      <div className="w-full h-full rounded-lg bg-black/70 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white text-center">
          <h1 className="text-blue-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 max-w-2xl mx-auto leading-tight">
            Find Your Next Read
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 max-w-xl mx-auto text-gray-300">
            Explore a vast collection of books, borrow effortlessly, and unlock
            endless knowledge your digital library experience is just a click
            away.
          </p>
          <div>
            <Motion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
