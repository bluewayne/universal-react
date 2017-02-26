/**
 * Created by liujinhe on 17/2/22.
 */

import routes from  './routes';
import ReactDom from 'react-dom';
import React from 'react';
import configureStore from './store.js'
import { Provider } from 'react-redux'

let store = configureStore();

var render = routes=> {

    ReactDom.render(<Provider store={store}>
       <div> {routes}</div>
    </Provider>, document.getElementById('app'))

}

render(routes);

//if (module.hot) {
//    module.hot.accept('./routes', () => {
//        const newRoutes = require('./routes').default;
//        render(newRoutes);
//    });
//}

