import {
    FETCH_BPMN_BPMN20,
    FETCH_BPMN_BPMNDI,
    FETCH_BPMN_DC,
    FETCH_BPMN_DI,
    FETCH_BPMN_Semantic,
} from '../actions/xsd.js';

const fetchedBPMN20 = (state, action) => {
    let new_state = {...state};

    new_state.bpmn20.xsd = action.results;

    return new_state;
};

const fetchedBPMNDI = (state, action) => {
    let new_state = {...state};

    new_state.bpmndi.xsd = action.results;

    return new_state;
};

const fetchedDC = (state, action) => {
    let new_state = {...state};

    new_state.dc.xsd = action.results;

    return new_state;
};

const fetchedDI = (state, action) => {
    let new_state = {...state};

    new_state.di.xsd = action.results;

    return new_state;
};

const fetchedSemantic = (state, action) => {
    let new_state = {...state};

    new_state.semantic.xsd = action.results;

    return new_state;
};

const dummy = () => {};

const page_model = (state = [], action) => {
    switch (action.type) {

    case FETCH_BPMN_BPMN20:
        return fetchedBPMN20(state, action);

    case FETCH_BPMN_BPMNDI:
        return fetchedBPMNDI(state, action);

    case FETCH_BPMN_DC:
        return fetchedDC(state, action);

    case FETCH_BPMN_DI:
        return fetchedDI(state, action);

    case FETCH_BPMN_Semantic:
        return fetchedSemantic(state, action);

    default:
        return state;
    }
};

export default page_model;
