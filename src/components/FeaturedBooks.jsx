import BooksCard from "./BooksCard";

const FeaturedBooks = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const topData = data.slice(0, 4);

  return (
    <div>
      <h1 className="font-bold text-2xl mt-16 mb-6">Featured Books</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {topData.map((book) => (
          <BooksCard key={book.id} data={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
