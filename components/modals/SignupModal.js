import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `/assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`
    })

    router.reload()
  }
  //UseEffects cheks if user is signed it or net
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser);
      //Handle redux actions
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });

    return unsubscribe;
  }, []);

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest1586532158@gmail.com", "Streamlabs167!" )
    
  }

  return (
    <>
      <button
        className="bg-white
             border-white text-black  w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="
        w-[90%] 
        h-[600px]
         bg-black
         text-white
         md:w-[560px]
         md:h-[600px]
         border
         border-gray-700
         rounded-lg
         flex justify-center
         "
        >
          <div className="w-[90%]  mt-8 flex flex-col">
            <button
            onClick={handleGuestSignIn}
            className="bg-white text-black rounded-md w-full font-bold text-lg p-2">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="text-4xl mt-4 font-bold">Create your Account</h1>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Full Name"
              type={"name"}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              placeholder="Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              className="bg-white text-black rounded-md w-full font-bold text-lg p-2 mt-8"
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
