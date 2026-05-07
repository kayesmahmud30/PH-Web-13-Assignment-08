import Image from "next/image";

const categoryStyle = {
  Story: { bg: "bg-purple-50", text: "text-purple-800" },
  Tech: { bg: "bg-blue-50", text: "text-blue-800" },
  Science: { bg: "bg-green-50", text: "text-green-800" },
};

const BooksDetailsPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    "https://ph-web-13-assignment-08.vercel.app/data.json",
  );
  const books = await res.json();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="text-center py-20 text-gray-400">Book not found.</div>
    );
  }

  const cat = categoryStyle[book.category] ?? {
    bg: "bg-gray-100",
    text: "text-gray-700",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-xl font-medium mb-6">Book details</h1>

      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr]">
          <div className="flex items-center p-4 justify-center border-b md:border-b-0 md:border-r border-gray-200">
            <div className="relative w-full h-100">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-8 flex flex-col gap-5">
            <div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${cat.bg} ${cat.text}`}
              >
                {book.category}
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-medium leading-snug">
                {book.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">by {book.author}</p>
            </div>

            <hr className="border-gray-100" />

            <p className="text-sm text-gray-500 leading-relaxed">
              {book.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Category</p>
                <p className="text-sm font-medium">{book.category}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Available copies</p>
                <p className="text-sm font-medium text-green-700">
                  {book.available_quantity} copies left
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Author</p>
                <p className="text-sm font-medium">{book.author}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Book ID</p>
                <p className="text-sm font-medium">#{book.id}</p>
              </div>
            </div>

            <div className="mt-auto pt-2">
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-6 py-2.5 rounded-lg transition-colors">
                Borrow this book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
