import React from 'react';
import { Route } from 'react-router-dom';
import QuestionScene from '../QuestionScene';
import Title from '../Title';

const Main = () => (
  <div>
    <Route path="/" component={Title} />
  </div>
);

export default Main;
