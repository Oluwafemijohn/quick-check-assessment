import {createStore} from 'redux';
// import reducer from './bug';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from './TopStoriesState';

const store = createStore(
  reducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  devToolsEnhancer({
    trace: true,
  }),
);

export default function configureStore() {
  return store;
}
