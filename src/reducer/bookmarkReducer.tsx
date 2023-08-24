import { v4 as uuidv4 } from 'uuid';
import { BookmarksAction, BookmarksState } from '../context/BookmarkContext';

const bookmarkReducer = (state: BookmarksState, action: BookmarksAction) => {
  switch (action.type) {
    case 'ADD_BOOKMARK': {
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks,
          {
            title: action.payload.title,
            url: action.payload.url,
            id: uuidv4(),
          },
        ],
      };
    }
    case 'REMOVE_BOOKMARK': {
      const id = action.payload;
      const updatedBookmarks = state.bookmarks.filter(
        (bookmark) => id !== bookmark.id
      );
      return { ...state, bookmarks: updatedBookmarks };
    }
    default: {
      return state;
    }
  }
};

export default bookmarkReducer;
