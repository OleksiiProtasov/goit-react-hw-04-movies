import { useState } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export default function Searchbar({ onSubmitBar }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("enter name film what you want");
      return;
    }

    onSubmitBar(query);
    setQuery("");
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleFormSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="input name films "
          onChange={handleInputChange}
          value={query}
        />
        <button type="submit" className={style.button}>
          <span className={style.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmitBar: PropTypes.func.isRequired,
};
