import { combineReducers } from 'redux';

import global_menu from './global_menu';
import modals from './modals';
import page_elements from './page_elements';
import page_write from './page_write';
import page_view from './page_view';
import page_home from './page_home';

export default combineReducers({
    global_menu,
    modals,
    page_elements,
    page_write,
    page_view,
    page_home,
});
