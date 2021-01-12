import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searcbar.module.css';

const Searcbar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handelNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    history.push({
      ...location,
      search: `query=${e.target.form.movieName.value}`,
    });

    // проверяем не пустой ли нам инпут
    if (movieName.trim() === '') {
      toast.warn('Ввидите название!');
      return;
    }
    setMovieName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button
          type="submit"
          onClick={handelSubmit}
          className={s.SearchForm_button}
        >
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={movieName}
          name="movieName"
          id=""
          onChange={handelNameChange}
        />
      </form>
    </header>
  );
};

export default Searcbar;
