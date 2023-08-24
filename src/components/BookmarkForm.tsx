import React, { useState } from "react";
import { useBookmarksDispatch } from "../context/BookmarkContext";

type FormValue = {
  title: string;
  url: string;
};
const BookmarkForm = () => {
  const [formValue, setFormValue] = useState<FormValue>({
    title: "",
    url: ""
  });

  const { dispatch } = useBookmarksDispatch();

  const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValue((prevFormValue) => {
      const { name, value } = e.target;
      return { ...prevFormValue, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOKMARK", payload: formValue });

    setFormValue({ title: "", url: "" });
  };

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formValue.title}
        required
        onChange={handleFormValue}
      />

      <label htmlFor="url">URL</label>
      <input
        type="url"
        name="url"
        id="url"
        value={formValue.url}
        required
        onChange={handleFormValue}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookmarkForm;
