import React from 'react';

const buildUrl = (data) => {
  return `http://localhost:5000/${data}`;
};

const callAPI = (data) => {
  fetch(buildUrl(data) ,{ headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
    .then(response => {
      response.json()
      return response})
    .then(data => (console.log(data)))
    .catch((error) => {
      console.error('An error occurred:', error);
    });
};

const Button = (props) => {
  const {text, data} = props;

  return (
    <button onClick={() => callAPI(data)}>{text}</button>
  )
};

export default Button;