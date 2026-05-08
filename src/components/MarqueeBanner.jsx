import Marquee from "react-fast-marquee";
import { FaGift } from "react-icons/fa";

const MarqueeBanner = () => {
  return (
    <div className="bg-[#F3E8FF] border-y border-purple-100 py-3 rounded-md">
      <Marquee pauseOnHover={true} speed={100}>
        <div className="md:py-8 flex gap-20 items-center">
          <div className="flex items-center gap-3 ml-10">
            <span className="text-5xl badge badge-primary badge-soft badge-outline ">
              NEW{" "}
            </span>

            <span className="text-gray-700 font-semibold text-4xl">
              <span className="text-4xl text-pink-600">The Silent Forest</span>{" "}
              is now available in our collection
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-secondary text-4xl">
              <FaGift />
            </span>
            <span className="text-4xl text-gray-700">
              Get{" "}
              <span className="text-4xl text-primary font-bold ">20% Off</span>{" "}
              on Yearly Memberships
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-4xl text-secondary">
              <FaGift />
            </span>
            <span className="text-gray-700 text-4xl">
              Flash Sale: The Great Gatsby at{" "}
              <span className="text-primary font-bold ">40% Off</span>
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
