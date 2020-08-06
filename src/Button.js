import React from 'react';

const buildUrl = (data) => {
  return `http://localhost:5000/${data}`;
};

const waterPlants = (data) => {
  fetch(buildUrl(data))
    .then(response => response.json());
};

const Button = (props) => {
  const {text, data} = props;

  return (
    <button onClick={() => waterPlants(data)}>{text}</button>
  )
};

export default Button;