import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionScene from '../QuestionScene';
import DebugTitle from '../DebugTitle';
import Title from '../Title/index';
import DebugQuestion from '../DebugQuestion/index';

const Main = () => (
  <Switch>
    <Route path="/foo" component={Title} />
    <Route path="/debug" component={DebugQuestion} />
    <Route path="/" component={DebugTitle} />
  </Switch>
);

export default Main;
