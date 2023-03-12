import pb from "./pocketbase";
import classes from "./Auth.module.css";
import React, { FC, RefObject, useRef, useState } from "react";
import Spinner from "@/components/Misc/Spinner";
import { useDispatch } from "react-redux";
import { authUserLogin } from "@/store/UserAuth";
import { useSelector } from "react-redux";

interface AuthInterface {
  onClose: any;
}

const Auth: FC<AuthInterface> = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const emailInputRef = useRef() as RefObject<HTMLInputElement>;
  const passwordInputRef = useRef() as RefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.userReducer);

  const loginSigninHandler = async (e: any) => {
    if (user.isAuth) {
      pb.authStore.clear();
      window.location.reload();
      return;
    }

    e.preventDefault();
    const email = emailInputRef?.current?.value!;
    const password = passwordInputRef?.current?.value!;

    try {
      setLoading(true);
      const authData = await pb.admins.authWithPassword(email, password);
      dispatch(authUserLogin(authData));
    } catch (e: any) {
      console.log("Error");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  console.log(user.isAuth);
  return (
    <figure className={classes.signinForm}>
      <form onSubmit={loginSigninHandler}>
        <h3>
          {user.isAuth ? "Admin log out" : "Admin log in to delete posts"}
        </h3>
        {!user.isAuth ? (
          <>
            <label htmlFor="email">email</label>
            <input ref={emailInputRef} id="email" placeholder="example" />
            <label htmlFor="password">password</label>
            <input
              ref={passwordInputRef}
              id="password"
              placeholder="password123"
            />
          </>
        ) : (
          <></>
        )}
        <button disabled={isLoading} type="submit">
          {isLoading ? "Loading" : `${user.isAuth ? "log out" : "sign in"}`}
        </button>
        {isLoading ? <Spinner /> : <></>}
      </form>
      <button onClick={onClose.bind(null, false)}>Close</button>
    </figure>
  );
};

export default Auth;
