import { HandOk } from "@gravity-ui/icons";

const TopBooks = () => {
  return (
    <section className="my-20 px-6">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
        <HandOk className="w-9 h-9 text-green-700" /> Our Satisfied Readers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-10">
        <div className="space-y-3 hover:scale-105 transition duration-300 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="reader"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-gray-500 font-semibold text-md">Ayesha Rahman</p>
          <p className="text-sm text-gray-600">
            “This platform helped me discover amazing books easily. I love the
            simple borrowing system.”
          </p>
        </div>

        <div className="space-y-3 hover:scale-105 transition duration-300 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="reader"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-gray-500 font-semibold text-md">Nafis Ahmed</p>
          <p className="text-sm text-gray-600">
            “A great digital library! I found many books that improved my daily
            reading habit.”
          </p>
        </div>

        <div className="space-y-3 hover:scale-105 transition duration-300 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/100?img=45"
            alt="reader"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-gray-500 font-semibold text-md">Sadia Karim</p>
          <p className="text-sm text-gray-600">
            “Clean interface and great collection of books. Reading online has
            never been this convenient.”
          </p>
        </div>

        <div className="space-y-3 hover:scale-105 transition duration-300 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/100?img=56"
            alt="reader"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-gray-500 font-semibold text-md">Mahin Chowdhury</p>
          <p className="text-sm text-gray-600">
            “Perfect for book lovers! I can explore, borrow, and read books
            anytime.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBooks;
