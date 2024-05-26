import { Inter } from "@next/font/google";
import Sidebar from "@/components/Sidebar";
import PostsFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import Banner from "@/components/Banner";
import { useSelector } from "react-redux";
import CommentModal from "@/components/modals/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const userName = useSelector(state => state.user.username)
  console.log(userName)
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#e7e9ea] 
    flex max-w-[1400px] mx-auto"
      >
        <Sidebar />
        <PostsFeed />
        <Trending />
      </div>

      <CommentModal />
      {!userName && <Banner />}
    </div>
  );
}
