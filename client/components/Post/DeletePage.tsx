// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { FC } from "react";
import classes from "../../pages/blog/[topic]/post.module.css";
import Auth from "@/pocketbase/Auth";

interface IDeletePage {
  user: any;
  closeDeletePage: any;
  deletePage: any;
}

const DeletePage: FC<IDeletePage> = ({ user, closeDeletePage, deletePage }) => {
  const auth = <Auth />;
  return (
    <div className={classes.deletePage}>
      <div>
        <p>
          {user.isAuth
            ? "Are you sure you want to delete?"
            : `You must be logged in to delete.`}
        </p>
        <div>
          {user.isAuth ? (
            <>
              <button
                onClick={() => {
                  closeDeletePage();
                  deletePage();
                }}
                className={classes.confirmDelete}
                disabled={!user.isAuth}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  closeDeletePage();
                }}
                className={classes.confirmNo}
              >
                No
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {!user.isAuth ? auth : <></>}
    </div>
  );
};

export default DeletePage;
