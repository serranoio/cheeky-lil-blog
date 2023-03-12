import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import pb, { deletePost, updatePost } from "@/pocketbase/pocketbase";
import classes from "./post.module.css";
import HtmlSVG from "@/assets/svg/HtmlSVG";
import Form from "@/components/Misc/Form";
import PictureGrid from "@/components/PictureGrid/PictureGrid";
import { useSelector } from "react-redux";

export default function Post() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [deletePageModalState, openDeletePageModal] = useState(false);

  const user = useSelector((state: any) => state.userReducer);

  const [post, changePost] = useState({
    title: "",
    body: "",
    created: "",
    topic: "",
    post_pic: "",
    author: "",
    id: "",
  });
  useEffect(() => {
    const topic = router.query.topic;
    if (router.query.post === undefined) {
      return;
    }

    const postName = router.query.post![0].split("-")[0];
    const postId = router.query.post![0].split("-")[1];
    const getRecord = async () => {
      try {
        const record = await pb.collection("posts").getOne(postId);

        changePost({
          title: record.title,
          body: record.body,
          created: record.created,
          topic: record.topic,
          post_pic: `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.post_pic}`,
          author: record.author,
          id: record.id,
        });
      } catch (e: any) {
      } finally {
      }
    };

    getRecord();
  }, [router]);

  const updatePage = () => {
    setShowModal(true);
  };
  const closeUpdate = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {};

  const [postList, changePostList] = useState([]);

  useEffect(() => {
    pb.collection("posts")
      .getFullList()
      .then((data) => {
        changePostList((prevPosts: any[]) => {
          return [
            // ...prevPosts,
            ...data.map((record: any, i: number) => {
              return {
                picture: `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.post_pic}`,
                title: record.title,
                recordId: record.id,
              };
            }),
          ];
        });
      });
  }, [router]);

  if (router.query.post !== undefined && router.query.post[0] === "posts") {
    return (
      <div>
        <h1 className={classes.pageName}>Posts</h1>
        <PictureGrid
          routerLink={`/blog/${router.query.topic}/`}
          list={postList}
        />
      </div>
    );
  }

  const deletePage = () => {
    if (user.isAuth) {
      router.push("/blog");
      deletePost(post.id);
    } else {
    }
  };

  const openDeletePage = () => {
    openDeletePageModal(true);
  };
  const closeDeletePage = () => {
    openDeletePageModal(false);
  };

  const deletePageModal = (
    <div className={classes.shadow}>
      <div className={classes.deletePage}>
        <p>Are you sure you want to delete?</p>
        <p>{user.isAuth ? "" : "You must log into admin to delete"}</p>
        <div>
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
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.main}>
      <div
        className={classes.postPic}
        style={{
          backgroundImage: `url(${post.post_pic})`,
          backgroundPosition: `center`,
          backgroundSize: "cover",
        }}
      ></div>
      <h2 className={classes.postTitle}>
        {post.title}
        <button
          className={classes.delete}
          onClick={() => {
            openDeletePageModal((prevState: boolean) => !prevState);
          }}
        >
          delete x
        </button>
        <button className={classes.update} onClick={updatePage}>
          update
          <HtmlSVG />
        </button>
      </h2>
      <p className={classes.date}>
        <span>{post.author}</span>
        <span>
          {new Date(post.created).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </p>
      {deletePageModalState ? deletePageModal : <></>}
      {showModal ? (
        <div className={classes.shadow}>
          <Form
            onClose={closeUpdate}
            type="update"
            action={updatePost}
            post_id={post.id}
            post={post}
          />
        </div>
      ) : (
        <></>
      )}
      <p className={classes.postBody}>{post.body}</p>
    </div>
  );
}
