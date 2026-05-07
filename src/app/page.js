import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MarqueeBanner from "@/components/MarqueeBanner";
import ReadingHacks from "@/components/ReadingHacks";
import TopBooks from "@/components/TopBooks";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeBanner />
      <FeaturedBooks />
      <TopBooks />
      <ReadingHacks />
    </div>
  );
}
