import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/modalSlice";
import {
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  CalendarIcon,
  XIcon,
} from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const userImg = useSelector((state) => state.user.photoUrl);
  const dispatch = useDispatch();
  const tweetDetails = useSelector((state) => state.modals.commentTweetDetails);
  const user = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  async function sendComment(){
    if (!tweetDetails || !tweetDetails.id) {
      console.error("tweetDetails or tweetDetails.id is undefined");
      return;
    }

    const docRef = doc(collection(db, "posts", tweetDetails.id));
    const commentDetails = {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      comment: comment,
    };
    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails),
    });
  }

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className="
            w-full 
            h-full 
            sm:w-[680px] 
            sm:h-[386px]
            sm:p-10
            p-4
            relative
             bg-black border border-gray-500 rounded-lg text-white"
        >
          <div
            className="absolute w-[2px] h-[77px] bg-gray-500 
            left-[40px]
            top-[96px]
            sm:left-[64px]
            sm:top-[120px]
            "
          ></div>
          <div
            className="absolute top-4 cursor-pointer"
            onClick={() => dispatch(closeCommentModal())}
          >
            <XIcon className="w-6" />
          </div>
          <div className="mt-8">
            <div className="flex space-x-3 w-full">
              <img
                src={tweetDetails?.photoUrl}
                className=" w-12 h-12 rounded-full object-cover "
                alt="Tweet"
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">{tweetDetails?.name}</h1>
                  <h1 className="text-gray-500">@{tweetDetails?.username}</h1>
                </div>
                <p className="mt-1">{tweetDetails?.tweet}</p>
                <h1 className="text-gray-500 text-[15px] mt-2">
                  Replying to
                  <span className="text-[#1b9bf0]"> @{tweetDetails?.username}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <div className="flex space-x-3">
              <img
                src={userImg}
                className=" w-12 h-12 rounded-full object-cover "
                alt="User"
              />
              <div className="w-full">
                <textarea
                  className="w-full
              bg-transparent
              resize-none
              text-lg
              outline-none
              "
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tweet your reply"
                />
                <div className="pt-2 flex justify-between border-t border-gray-700">
                  <div className="flex space-x-0">
                    <div className="iconsAnimation">
                      <PhotographIcon className=" h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <ChartBarIcon className=" h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <EmojiHappyIcon className=" h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <CalendarIcon className=" h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <LocationMarkerIcon className=" h-[22px] text-[#1d9bf0]" />
                    </div>
                  </div>
                  <button
                    className="bg-[#1d9bf0] rounded-full px-4 py-1.5
          disabled:opacity-50
          "
                    disabled={!comment}
                    onClick={sendComment}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
