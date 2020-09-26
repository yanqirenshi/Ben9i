import React from 'react';

import TabsItem from './TabsItem';

function Tabs (props) {
    const data = props.source || [];

    return (
        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            {data.map((d) => {
                return <TabsItem key={d.code}
                                 source={d}
                                 callback={props.callback}
                                 selected={props.selected} />;
            })}
          </ul>
        </div>    );
}

export default Tabs;
