import React from 'react';
import PropTypes from 'prop-types';

export const Artist = (props) => {
  const {value, srcPath, title} = props;
  return (
    <div className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value={value}
        id={value}
      />
      <label className="artist__name" htmlFor={value}>
        <img
          className="artist__picture"
          src={srcPath}
          alt={title}/>
        {title}
      </label>
    </div>
  );
};

Artist.propTypes = {
  value: PropTypes.string.isRequired,
  srcPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
