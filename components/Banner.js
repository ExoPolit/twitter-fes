import SignUpModal from "./modals/SignupModal";
import LoginModal from "./modals/LoginModal";

export default function Banner() {
  return (
    <div className="flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bg-[#1b9bf0] bottom-0">
      <div className="hidden xl:inline">
        <h1 className="text-2xl text-white font-bold">
          Dont miss whats happening
        </h1>
        <span className="text-[18px] font-bold">
          People on Twitter are the first to know
        </span>
      </div>
      <div className="space-x-3">
        <LoginModal />
        <SignUpModal />
      </div>
    </div>
  );
}
