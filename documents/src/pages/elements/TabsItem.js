import React from 'react';

function TabsItem (props) {
    const d = props.source;

    const click = () => {
        props.callback(props.source);
    };

    return (
        <li key={d.code}
            className={d.code===props.selected ? 'is-active' : null}
            onClick={click}>
          <a>
            <span>{d.label}</span>
          </a>
        </li>
    );
}

export default TabsItem;
