/**
 * Created by liujinhe on 17/2/24.
 */

import thunk from 'redux-thunk';
import reducers from './reducers'
import {createStore,applyMiddleware,compose} from 'redux'

const createStoreWithMiddleware=compose(applyMiddleware(thunk))(createStore);


export default  function (initialState) {

    const store =createStoreWithMiddleware(reducers,initialState);

    if (module.hot) {

        module.hot.accept('./reducers', ()=> {
            const nextReducers = require('./reducers');
            store.replaceReducer = (nextReducers);
        })
    }


    return store;

}