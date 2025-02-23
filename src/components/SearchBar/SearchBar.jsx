import { header, search_form, search_input, search_btn } from "./SearchBar.module.css";
import { MdImageSearch } from "react-icons/md";

function SearchBar({ onSubmit }) {
  return (
    <header className={header}>
      <form className={search_form} onSubmit={(e) => onSubmit(e)}>
        <input
          className={search_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
        />
        <button className={search_btn} type="submit">
          <MdImageSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
