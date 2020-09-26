import React, { useState } from 'react';

import Tabs from '../components/Tabs';

import ModelBPMN20 from './model/ModelBPMN20.js';
import ModelBPMNDI from './model/ModelBPMNDI.js';
import ModelDC from './model/ModelDC.js';
import ModelDI from './model/ModelDI.js';
import ModelSemantic from './model/ModelSemantic.js';

const selectedTabCode = (location, tabs) => {
    const query_params = new URLSearchParams(location.search);
    let selected_code = query_params.get('tab');

    if (!selected_code || !tabs.find(d => d.code===selected_code))
        return tabs[0].code;

    return selected_code;
};

function PageModel (props) {
    const [tabs] = useState([
        { code: 'BPMN20',   label: 'BPMN20.xsd'   },
        { code: 'BPMNDI',   label: 'BPMNDI.xsd'   },
        { code: 'DC',       label: 'DC.xsd'       },
        { code: 'DI',       label: 'DI.xsd'       },
        { code: 'Semantic', label: 'Semantic.xsd' },
    ]);
    console.log(props);
    const callback = (tab) => {
        props.history.push({search: `?tab=${tab.code}`});
    };

    const selected_code = selectedTabCode(props.location, tabs);
    const path = '/assets/xsd/';
    return (
        <div style={{marginTop: 22, marginLeft: 77}}>
          <Tabs source={tabs}
                callback={callback}
                selected={selected_code}/>

          {selected_code==='BPMN20'   && <ModelBPMN20   path={path} code={selected_code} />}
          {selected_code==='BPMNDI'   && <ModelBPMNDI   path={path} code={selected_code} />}
          {selected_code==='DC'       && <ModelDC       path={path} code={selected_code} />}
          {selected_code==='DI'       && <ModelDI       path={path} code={selected_code} />}
          {selected_code==='Semantic' && <ModelSemantic path={path} code={selected_code} />}
        </div>
    );
}

export default PageModel;
