import classes from "./CreatePost.module.css";
import { useRef, FC, RefObject, useState } from "react";
import { topics } from "@/store/data/topics";
import { createPost } from "@/pocketbase/pocketbase";
import Form from "../Misc/Form";
import { create } from "domain";
import SectionModal from "../SectionModal/SectionModal";

interface CreatePostInterface {
  isOpened: any;
  open: any;
}
const CreatePost: FC<CreatePostInterface> = ({ isOpened, open }) => {
  return (
    <SectionModal isOpened={isOpened} open={open} size={{ x: 80, y: 70 }}>
      <Form action={createPost} type="create" post={{}} post_id={""} />
    </SectionModal>
  );
};

export default CreatePost;
