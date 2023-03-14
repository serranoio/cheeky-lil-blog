import "./Form.module.css";
import React, { FC, useState, useRef, RefObject } from "react";
import classes from "./Form.module.css";
import { topics } from "@/store/data/topics";
import Auth from "@/pocketbase/Auth";

interface FormInterface {
  action: any;
  onClose: any;
  type: string;
  post_id: string;
  post: any;
}

// Form: handles update and create
const Form: FC<FormInterface> = ({ action, onClose, type, post_id, post }) => {
  const [chosenTopic, updateChosenTopic] = useState("");

  const titleRef = useRef() as RefObject<HTMLInputElement>;
  const bodyRef = useRef() as RefObject<HTMLTextAreaElement>;
  const authorRef = useRef() as RefObject<HTMLInputElement>;

  // we have to input title, body, author into form
  // during update
  const [titleValue, setTitleValue] = useState(
    type === "create" ? "" : post.title
  );
  const [bodyValue, setBodyValue] = useState(
    type === "create" ? "" : post.body
  );
  const [authorValue, setAuthorValue] = useState(
    type === "create" ? "" : post.author
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = titleRef?.current?.value!;
    const body = bodyRef?.current?.value!;
    const author = authorRef?.current?.value!;

    const formData = new FormData();

    const picInput: HTMLInputElement = document.querySelector(
      "#pic"
    ) as HTMLInputElement;

    for (let file of picInput.files!) {
      formData.append("post_pic", file);
    }
    formData.append("topic", chosenTopic);
    formData.append("body", body);
    formData.append("title", title);
    formData.append("author", author);

    if (type === "create") {
      action(formData);
    } else {
      action(formData, post_id);
    }

    window.location.reload();

    // const title = titleRef?.current?.value!;
  };

  const auth = <Auth onClose={onClose} />;
  return (
    <figure className={classes.window}>
      {auth}
      <form onSubmit={handleSubmit} className={classes.form}>
        <h3 className={classes.formTitle}>
          {type === "create" ? "Create a post!" : "Update"}{" "}
        </h3>
        <div>
          {topics.map((topic: string, i: number) => {
            return (
              <>
                <input
                  onChange={(e) => updateChosenTopic(e.target.value)}
                  type="radio"
                  id={topic}
                  name="topic"
                  value={topic}
                />
                <label htmlFor={topic}>{topic}</label>
              </>
            );
          })}
          <input
            onChange={(e) => updateChosenTopic(e.target.value)}
            type="radio"
            id={"misc"}
            name="topic"
            value={"misc"}
          />
          <label htmlFor={"misc"}>{"miscillaneous"}</label>
        </div>
        <div>
          <label htmlFor="pic">Upload picture</label>
          <input id="pic" type="file" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            ref={titleRef}
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="body">body</label>
          <textarea
            rows={10}
            cols={70}
            id="body"
            value={bodyValue}
            ref={bodyRef}
            onChange={(e) => {
              setBodyValue(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input
            id="author"
            ref={authorRef}
            value={authorValue}
            onChange={(e) => {
              setAuthorValue(e.target.value);
            }}
          />
        </div>
        <button className={classes.submit} type="submit">
          {type === "create" ? "Post" : "Update"}{" "}
        </button>
      </form>
      <button className={classes.close} onClick={onClose.bind(null, false)}>
        Close
      </button>
    </figure>
  );
};

export default Form;
