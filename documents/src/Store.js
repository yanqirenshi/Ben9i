import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

let StoreModel = {
    modals: {},
    page_home: {},
    page_elements: {},
    page_b: {},
    page_c: {},
    global_menu: {
        menus: [
            { code: 'home',     label: 'Home', to: '/',         select: false },
            { code: 'elements', label: '要素', to: '/elements', select: true },
            { code: 'c',        label: 'P. B', to: '/b',        select: false },
            { code: 'd',        label: 'P. C', to: '/c',        select: false },
        ],
    },
};

const Store = createStore(
    rootReducer,
    StoreModel,
    applyMiddleware(
        thunk,
        logger,
    ),
);

export default Store;
