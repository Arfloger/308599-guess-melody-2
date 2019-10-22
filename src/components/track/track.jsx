import React from 'react';
import PropTypes from 'prop-types';

export const Track = (props) => {
  const {value} = props;
  return (
    <div className="track">
      <button className="track__button track__button--play" type="button"></button>
      <div className="track__status">
        <audio></audio>
      </div>
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={value}
          id={value}
        />
        <label className="game__check" htmlFor={value}>Отметить</label>
      </div>
    </div>
  );
};

Track.propTypes = {
  value: PropTypes.string.isRequired,
};
