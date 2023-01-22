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
      newFeelingArray = [];
      return newFeelingArray;
    default:
      return state;
  }
};

const understandingRating = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_UNDERSTANDING':
      let newUnderstandingNumber = action.payload;
      let newUnderstandingObject = {
        understanding: newUnderstandingNumber,
      };
      let newUnderstandingArray = [...state];
      newUnderstandingArray.push(newUnderstandingObject);
      return newUnderstandingArray;

    case 'RESET':
      newUnderstandingArray = [];
      return newUnderstandingArray;

    default:
      return state;
  }
};

const supportRating = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_SUPPORT':
      let newSupportNumber = action.payload;
      let newSupportObject = {
        support: newSupportNumber,
      };
      let newSupportArray = [...state];
      newSupportArray.push(newSupportObject);
      return newSupportArray;

    case 'RESET':
      newSupportArray = [];
      return newSupportArray;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_COMMENT':
      let newComment = action.payload;
      let newCommentObject = {
        comment: newComment,
      };
      let newCommentArray = [...state];
      newCommentArray.push(newCommentObject);
      return newCommentArray;

    case 'RESET':
      newCommentArray = [];
      return newCommentArray;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    feelingsRating,
    understandingRating,
    supportRating,
    comments,
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
