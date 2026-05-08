"use client";

import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BorrowButton = ({ bookTitle }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleBorrow = () => {
    if (session?.user) {
      toast.success(`${bookTitle} is Successfully Borrowed`);
    } else {
      router.push("/signin");
    }
  };

  return (
    <button
      onClick={handleBorrow}
      className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-6 py-2.5 rounded-lg transition-colors"
    >
      Borrow this book
    </button>
  );
};

export default BorrowButton;
