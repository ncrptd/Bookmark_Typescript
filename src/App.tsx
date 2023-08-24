import Header from "./components/Header";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header title="Bookmark App" />
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}
