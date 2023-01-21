import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const feelingsRating = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_FEELING':
      let newFeelingNumber = action.payload;
      let newFeelingObject = {
        feeling: newFeelingNumber,
      };
      let newFeelingArray = [...state];
      newFeelingArray.push(newFeelingObject);
      return newFeelingArray;

    case 'RESET':
      return state;
    default:
      return state;
  }
};


const store = createStore(
  combineReducers({
    feelingsRating,
  }),
  applyMiddleware(logger)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
