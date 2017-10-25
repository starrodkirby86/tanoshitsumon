import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default middleware;
