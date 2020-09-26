import React, { useState, useEffect } from 'react';

import XMLViewer from 'react-xml-viewer';

import { fetchDI } from '../../js/LoaderXSD.js';

const style = {
    root: {
        display: 'flex',
        paddingLeft: 111,
        paddingRight: 111,
    },
};

function ModelDI (props) {
    const [xsd, setXsd] = useState('');

    useEffect(() => {
        fetchDI(xsd => setXsd(xsd));
    }, []);

    return (
        <div style={style.root}>
          <XMLViewer xml={xsd} />
        </div>
    );
}

export default ModelDI;
