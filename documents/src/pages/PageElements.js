import React, { useState } from 'react';

import Tabs from './elements/Tabs';

import FlowElementEvent from './elements/FlowElementEvent';
import FlowElementActivity from './elements/FlowElementActivity';
import FlowElementGateway from './elements/FlowElementGateway';
import FlowElementTask from './elements/FlowElementTask';
import FlowElementFlow from './elements/FlowElementFlow';
import FlowElementPool from './elements/FlowElementPool';
import FlowElementLane from './elements/FlowElementLane';

const isSelected = (tabs, code) => {
    const tab = tabs.find(d => d.code===code);

    return tab.select;
};

const selectedTabCode = (location, tabs) => {
    const query_params = new URLSearchParams(location.search);
    let selected_code = query_params.get('tab');

    if (!selected_code || !tabs.find(d => d.code===selected_code))
        return tabs[0].code;

    return selected_code;
};

function PageElements (props) {
    const [tabs, setTabs] = useState([
        { code: 'event',    label: 'イベント' },
        { code: 'task',     label: 'タスク' },
        { code: 'activity', label: 'アクティビティ' },
        { code: 'flow',     label: 'フロー・ノード' },
        { code: 'gateway',  label: 'ゲートウェイ' },
        { code: 'pool',     label: 'プール' },
        { code: 'lane ',    label: 'レーン' },
    ]);

    const callback = (tab) => {
        props.history.push({search: `?tab=${tab.code}`});
    };

    const selected_code = selectedTabCode(props.location, tabs);
    console.log(selected_code);
    return (
        <div style={{marginTop: 22, marginLeft: 77}}>

          <Tabs source={tabs} callback={callback} selected={selected_code}/>

          {selected_code==='event'    && <FlowElementEvent    callback={callback} />}
          {selected_code==='task'     && <FlowElementTask     callback={callback} />}
          {selected_code==='activity' && <FlowElementActivity callback={callback} />}
          {selected_code==='flow'     && <FlowElementFlow     callback={callback} />}
          {selected_code==='gateway'  && <FlowElementGateway  callback={callback} />}
          {selected_code==='pool'     && <FlowElementPool     callback={callback} />}
          {selected_code==='lane '    && <FlowElementLane     callback={callback} />}
        </div>
    );
}

export default PageElements;
