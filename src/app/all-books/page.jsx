import BooksCard from "@/components/BooksCard";
import Category from "@/components/Category";
import { Label, SearchField } from "@heroui/react";

const AllBooks = async ({ searchParams }) => {
  const { category } = await searchParams;

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

  const filteredBooks = category
    ? data.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase(),
      )
    : data;

  return (
    <div>
      <div className=" space-y-4 mt-5">
        <SearchField fullWidth name="search" className="flex">
          <Label>Search Book</Label>
          <SearchField.Group className="border-2 border-blue-600">
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
            <button className="bg-blue-500 p-10 text-white font-semibold">
              Search
            </button>
          </SearchField.Group>
        </SearchField>
      </div>
      <h3 className="font-semibold text-2xl my-8">All Books</h3>

      <Category categories={categories} />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BooksCard key={book.id} data={book} />)
        ) : (
          <p className="col-span-full text-center text-gray-500"></p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
