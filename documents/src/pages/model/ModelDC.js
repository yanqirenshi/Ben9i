import React, { useState, useEffect } from 'react';

import XMLViewer from 'react-xml-viewer';

import { fetchDC } from '../../js/LoaderXSD.js';

const style = {
    root: {
        display: 'flex',
        paddingLeft: 111,
        paddingRight: 111,
    },
};

function ModelDC (props) {
    const [xsd, setXsd] = useState('');

    useEffect(() => {
        fetchDC(xsd => setXsd(xsd));
    }, []);

    return (
        <div style={style.root}>
          <XMLViewer xml={xsd} />
        </div>
    );
}

export default ModelDC;
