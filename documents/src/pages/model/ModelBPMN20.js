import React, { useState, useEffect } from 'react';

import XMLViewer from 'react-xml-viewer';

import { fetchBPMN20 } from '../../js/LoaderXSD.js';

const style = {
    root: {
        display: 'flex',
        paddingLeft: 111,
        paddingRight: 111,
    },
};

function ModelBPMN20 (props) {
    const [xsd, setXsd] = useState('');

    useEffect(() => {
        fetchBPMN20(xsd => setXsd(xsd));
    }, []);

    return (
        <div style={style.root}>
          <XMLViewer xml={xsd} />
        </div>
    );
}

export default ModelBPMN20;
