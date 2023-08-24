import { useBookmarksDispatch } from "../context/BookmarkContext";
type BookmarkProps = {
  bookmark: {
    title: string;
    url: string;
    id: string;
  };
};

const Bookmark = ({ bookmark }: BookmarkProps) => {
  const { dispatch } = useBookmarksDispatch();
  const handleUrlOpen = (url: string) => {
    window.open(`${url}`);
  };

  const handleBookmarkRemove = (id: string) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: id });
  };
  const { id, title, url } = bookmark;
  return (
    <div className="bookmark" key={id}>
      <h3 className="title" onClick={() => handleUrlOpen(url)}>
        {title}
      </h3>
      <p className="url">{url}</p>
      <button onClick={() => handleBookmarkRemove(id)}>Remove </button>
    </div>
  );
};

export default Bookmark;
