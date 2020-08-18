import { combineReducers } from 'redux';

import { reducer as transaction } from './Transaction';

export default combineReducers({
  transaction,
});
