import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';
import css from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedQuery = value.trim().toLocaleLowerCase();

    if (!normalizedQuery) {
      toast.warning('The query is empty! Try again.');
      return;
    }
    onSubmit(normalizedQuery);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    setValue('');
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          className={css.input}
        />
        <button type="submit">
          <ImSearch />
        </button>
        <button type="button" onClick={clearInput}>
          {' '}
          <BsTrash />
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
