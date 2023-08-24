import React, { createContext, ReactNode, useContext, useReducer } from "react";
import bookmarkReducer from "../reducer/bookmarkReducer";

export const initialState = {
  bookmarks: []
};

type AddBookmarkAction = {
  type: "ADD_BOOKMARK";
  payload: { title: string; url: string };
};

type RemoveBookmarkAction = {
  type: "REMOVE_BOOKMARK";
  payload: string;
};

type BookmarksAction = AddBookmarkAction | RemoveBookmarkAction;

type BookmarkType = {
  id: string;
  title: string;
  url: string;
};

type BookmarksState = {
  bookmarks: BookmarkType[];
};

type BookmarksContextType = {
  state: BookmarksState;
};

type BookmarksDispatchContextType = {
  dispatch: React.Dispatch<BookmarksAction>;
};

const BookmarksContext = createContext<BookmarksContextType | undefined>(
  undefined
);
const BookmarksDispatchContext = createContext<
  BookmarksDispatchContextType | undefined
>(undefined);

export const BookmarksProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);

  return (
    <BookmarksContext.Provider value={{ state }}>
      <BookmarksDispatchContext.Provider value={{ dispatch }}>
        {children}
      </BookmarksDispatchContext.Provider>
    </BookmarksContext.Provider>
  );
};

const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return context;
};

const useBookmarksDispatch = () => {
  const context = useContext(BookmarksDispatchContext);
  if (!context) {
    throw new Error(
      "useBookmarksDispatch must be used within a BookmaksProvider"
    );
  }
  return context;
};

export { BookmarksAction, BookmarksState, useBookmarks, useBookmarksDispatch };
