import React from 'react';
import 'bpmn-font/dist/css/bpmn.css';
import ElementEventTable from './ElementEventTable';

function FlowElementEvent () {
    return (
        <section className="section">
          <div className="container">
            <ElementEventTable />
          </div>
        </section>
    );
}

export default FlowElementEvent;
