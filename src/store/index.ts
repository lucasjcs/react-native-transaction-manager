import { createStore } from 'redux';

import reducers from './reducers';

declare global {
  interface Console {
    tron: any;
  }
}

const store = createStore(reducers);

export default store;
