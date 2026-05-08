import BooksCard from "@/components/BooksCard";
import Category from "@/components/Category";
import { Label, SearchField } from "@heroui/react";

const AllBooks = async ({ searchParams }) => {
  const { category, search } = await searchParams;

  const [booksRes, categoryRes] = await Promise.all([
    fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
      cache: "no-store",
    }),
    fetch(`${process.env.BETTER_AUTH_URL}/category.json`, {
      cache: "no-store",
    }),
  ]);

  const data = await booksRes.json();
  const categories = await categoryRes.json();

  const filteredBooks = data
    .filter((book) =>
      category ? book.category.toLowerCase() === category.toLowerCase() : true,
    )
    .filter((book) =>
      search
        ? book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.description.toLowerCase().includes(search.toLowerCase())
        : true,
    );

  return (
    <div>
      <div className=" space-y-4 mt-5">
        <form method="get" className="flex">
          {category && <input type="hidden" name="category" value={category} />}
          <SearchField fullWidth name="search" className="flex">
            <Label>Search your favorite book</Label>
            <SearchField.Group className="relative border-2 border-blue-600">
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search..." />
              <SearchField.ClearButton />
              <button
                type="submit"
                className="absolute right-0 bg-blue-500 py-10 px-5 text-white font-semibold"
              >
                Search
              </button>
            </SearchField.Group>
          </SearchField>
        </form>
      </div>
      <h3 className="font-semibold text-2xl my-8">All Books</h3>

      <Category categories={categories} />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BooksCard key={book.id} data={book} />)
        ) : (
          <p className="mt-6 col-span-full text-center text-gray-500 text-lg font-medium">
            Oops! No Book Found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
