import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

let StoreModel = {
    modals: {},
    page_home: {},
    page_elements: {},
    page_write: {},
    page_view: {},
    page_xml: {},
    global_menu: {
        menus: [
            { code: 'home',     label: 'Home', to: '/',         select: false },
            { code: 'elements', label: '要素', to: '/elements', select: true },
            { code: 'write',    label: '書く', to: '/write',    select: false },
            { code: 'view',     label: '表示', to: '/view',     select: false },
            { code: 'xml',      label: 'XML', to: '/xml',       select: false },
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
