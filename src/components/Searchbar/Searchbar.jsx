import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searcbar.module.css';

const Searcbar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handelNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    // проверяем не пустой ли нам инпут
    if (movieName.trim() === '') {
      toast.warn('Ввидите название!');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handelSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={movieName}
          onChange={handelNameChange}
        />
      </form>
    </header>
  );
};

Searcbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searcbar;
