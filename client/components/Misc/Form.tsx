import "./Form.module.css";
import React, { FC, useState, useRef, RefObject } from "react";
import classes from "./Form.module.css";
import { topics } from "@/store/data/topics";
import { Form as FormikForm, Formik, Field } from "formik";
import Select from "react-select";

interface FormInterface {
  action: any;
  type: string;
  post_id: string;
  post: any;
}

// Form: handles update and create
const Form: FC<FormInterface> = ({ action, type, post_id, post }) => {
  // we have to input title, body, author into form
  // during update

  const handleSubmit = (
    topic: string,
    body: string,
    title: string,
    author: string
  ) => {
    console.log(topic);

    const formData = new FormData();

    const picInput: HTMLInputElement = document.querySelector(
      "#pic"
    ) as HTMLInputElement;

    for (let file of picInput.files!) {
      formData.append("post_pic", file);
    }

    formData.append("topic", topic);
    formData.append("body", body);
    formData.append("title", title);
    formData.append("author", author);

    if (type === "create") {
      action(formData);
    } else {
      action(formData, post_id);
    }

    // const title = titleRef?.current?.value!;
  };

  const allTopics = topics.map((topic: string, i: number) => {
    return (
      <option key={topic} value={topic} id={topic}>
        {topic}
      </option>
    );
  });
  allTopics.push(
    <option key={"miscillaneous"} value={"miscillaneous"} id={"miscillaneous"}>
      miscillaneous
    </option>
  );

  return (
    <figure className={classes.window}>
      <Formik
        onSubmit={(values, actions) => {
          console.log(values);

          handleSubmit(values.topic, values.body, values.title, values.author);
        }}
        initialValues={{
          topic: "",
          title: post.title,
          body: type === "create" ? "" : post.body,
          author: type === "create" ? "" : post.author,
        }}
      >
        <FormikForm className={classes.form}>
          <h3 className={classes.formTitle}>
            {type === "create" ? "Create a post!" : "Update"}{" "}
          </h3>
          <div>
            <Field
              id="topic"
              name="topic"
              component="select"
              style={{
                fontSize: "1.6rem",
                padding: ".6rem 2.4rem",
                border: "2px solid var(--h2)",
                color: "var(--h2)",
                background: "none",
                cursor: "pointer",
              }}
            >
              {allTopics}
            </Field>
          </div>
          <div>
            <label htmlFor="pic">Upload picture</label>
            <input id="pic" type="file" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" />
          </div>
          <div>
            <label htmlFor="body">body</label>
            <Field rows={10} cols={70} id="body" name="body" as="textarea" />
          </div>
          <div>
            <label htmlFor="author">author</label>
            <Field id="author" name="author" />
          </div>
          <button className={classes.submit} type="submit">
            {type === "create" ? "Post" : "Update"}{" "}
          </button>
        </FormikForm>
      </Formik>
    </figure>
  );
};

export default Form;
