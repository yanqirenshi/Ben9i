import React from 'react';
import { connect } from 'react-redux';

import GlobalMenuItem from './GlobalMenuItem';

import { selectedMenu } from '../actions/global_menu.js';


const style = {
    root: {
        background: '#a59564',
        height: '100vh',
        width: 77,
        position: 'fixed',
        left: 0,
        top: 0,
        paddingTop: 22,
    },
};

function GlobalMenu (props) {
    const callback = (code) => {
        props.selectedMenu(code);
    };

    return (
        <div style={style.root}>
          {props.global_menu.menus.map((d, i) => {
              return <GlobalMenuItem key={i}
                                     source={d}
                                     callback={callback}/>;
          })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        global_menu: state.global_menu,
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedMenu: (nodes) => {
        return dispatch(selectedMenu(nodes));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GlobalMenu);
