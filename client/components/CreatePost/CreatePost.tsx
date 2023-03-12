import classes from "./CreatePost.module.css";
import { useRef, FC, RefObject, useState } from "react";
import { topics } from "@/store/data/topics";
import { createPost } from "@/pocketbase/pocketbase";
import Form from "../Misc/Form";
import { create } from "domain";

interface CreatePostInterface {
  onClose: any;
}
const CreatePost: FC<CreatePostInterface> = ({ onClose }) => {
  return (
    <Form
      action={createPost}
      onClose={onClose}
      type="create"
      post={{}}
      post_id={""}
    />
  );
};

export default CreatePost;
