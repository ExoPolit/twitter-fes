import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

export default function PostsFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("Snapshot received: ", snapshot.docs);
      setTweets(snapshot.docs);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("Tweets:", tweets);
  console.log("collection", collection(db, "posts"));

  return (
    <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-grad-700 sticky top-0 z-50">
        Home
      </div>
      <TweetInput />
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />;
      })}
    </div>
  );
}
