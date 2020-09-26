import React from 'react';

import { Link } from 'react-router-dom';

const style = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 22,
    },
    container: {
        height: 55,
        width: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        background: 'rgba(255, 255, 255, 0.1)',
    },
    container_select: {
        height: 55,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        background: 'rgba(255, 255, 255, 1.0)',
    },
    label: {
        fontWeight:'bold',
        color: '#ffffff',
    },
    label_select: {
        fontWeight:'bold',
        color: '#a59564',
    },
};

function GlobalMenuItem (props) {
    const click = () => {
        props.callback(props.source);
    };

    return (
        <Link to={props.source.to}
              style={{textDecoration: 'none'}}>

          <div style={style.root} onClick={click}>
            <div style={props.source.select ? style.container_select : style.container}>
              <p style={props.source.select ? style.label_select : style.label}>
                {props.source.label}
              </p>
            </div>
          </div>

        </Link>
    );
}

export default GlobalMenuItem;
