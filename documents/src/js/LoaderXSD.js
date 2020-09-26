import ApiFile from './ApiFile.js';

const fetchXSDFile = (filename, callback) => {
    let path = `${process.env.PUBLIC_URL}/assets/xsd/${filename}`;

    ApiFile.get(path)
        .then((results) => {
            if (results.statusText==="OK")
                callback(results.data);
        })
        .catch(() => {
            console.log('通信に失敗しました。');
        });
};

export const fetchBPMN20 = (callback) => {
    return fetchXSDFile('BPMN20.xsd', callback);
};

export const fetchBPMNDI = (callback) => {
    return fetchXSDFile('BPMNDI.xsd', callback);
};

export const fetchDC = (callback) => {
    return fetchXSDFile('DC.xsd', callback);
};

export const fetchDI = (callback) => {
    return fetchXSDFile('DI.xsd', callback);
};

export const fetchSemantic = (callback) => {
    return fetchXSDFile('Semantic.xsd', callback);
};
