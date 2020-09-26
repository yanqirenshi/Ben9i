import ApiFile from '../js/ApiFile.js';

export const FETCH_BPMN_BPMN20 = 'FETCH_BPMN_BPMN20';
export const FETCH_BPMN_BPMNDI = 'FETCH_BPMN_BPMNDI';
export const FETCH_BPMN_DC = 'FETCH_BPMN_DC';
export const FETCH_BPMN_DI = 'FETCH_BPMN_DI';
export const FETCH_BPMN_Semantic = 'FETCH_BPMN_BPMN20';

const fetchedXSDFile = (results, action) => ({
    type: action,
    results: results,
});

const fetchXSDFile = (filename, action) => {
    return (dispatch) => {
        let path = '/assets/xsd/' + filename;

        ApiFile.get(path)
            .then((results) => {
                if (results.statusText==="OK") {
                    dispatch(fetchedXSDFile(results.data, action));
                }
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
    };
};

export const fetchBPMN20 = () => {
    return fetchXSDFile('BPMN20.xsd', FETCH_BPMN_BPMN20);
};

export const fetchBPMNDI = () => {
    return fetchXSDFile('BPMNDI.xsd', FETCH_BPMN_BPMNDI);
};

export const fetchDC = () => {
    return fetchXSDFile('DC.xsd', FETCH_BPMN_DC);
};

export const fetchDI = () => {
    return fetchXSDFile('DI.xsd', FETCH_BPMN_DI);
};

export const fetchSemantic = () => {
    return fetchXSDFile('Semantic.xsd', FETCH_BPMN_Semantic);
};
