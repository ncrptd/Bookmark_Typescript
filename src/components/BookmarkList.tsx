import { useBookmarks } from "../context/BookmarkContext";
import Bookmark from "./Bookmark";

const BookmarkList = () => {
  const { state } = useBookmarks();

  return (
    <div className="bookmark-list">
      {state.bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} />
      ))}
    </div>
  );
};

export default BookmarkList;
