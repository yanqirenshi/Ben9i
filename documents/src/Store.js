import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const makeGlobalMenu = () => {
    let code = window.location.pathname.split('/')[1];

    if (code==="")
        code = 'home';

    let menus = [
        { code: 'home',     label: 'Home', to: '/',         select: true },
        { code: 'elements', label: '要素', to: '/elements', select: false },
        { code: 'write',    label: '書く', to: '/write',    select: false },
        { code: 'view',     label: '表示', to: '/view',     select: false },
        { code: 'model',    label: 'Mdl',  to: '/model',    select: false },
    ];

    return menus.map(d => {
        d.select = d.code===code;
        return d;
    });
};

let StoreModel = {
    modals: {},
    page_home: {},
    page_elements: {},
    page_write: {},
    page_view: {},
    page_model: {
        bpmn20:   { xsd: null },
        bpmndi:   { xsd: null },
        dc:       { xsd: null },
        di:       { xsd: null },
        semantic: { xsd: null },
    },
    global_menu: {
        menus: makeGlobalMenu(),
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
