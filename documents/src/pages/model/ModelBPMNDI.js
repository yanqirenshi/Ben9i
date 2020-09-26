import React, { useState, useEffect } from 'react';

import XMLViewer from 'react-xml-viewer';

import { fetchBPMNDI } from '../../js/LoaderXSD.js';

const style = {
    root: {
        display: 'flex',
        paddingLeft: 111,
        paddingRight: 111,
    },
};

function ModelBPMNDI (props) {
    const [xsd, setXsd] = useState('');

    useEffect(() => {
        fetchBPMNDI(xsd => setXsd(xsd));
    }, []);

    return (
        <div style={style.root}>
          <XMLViewer xml={xsd} />
        </div>
    );
}

export default ModelBPMNDI;
