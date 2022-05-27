import React, { createContext, useContext } from "react";
import { useTrailerReducer } from './reducers';

const ChoiceContext = createContext();
const { Provider } =ChoiceContext;


const ChoiceProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useTrailerReducer({
        trailers: [],
        displayTrailers:[],
        filters: [],
        currentFilter: ''
    })
    // console.log(state) // use this in order to confirm it works
    return <Provider value={[state, dispatch]} {...props} />
}

const useChoiceContext = () => {
    return useContext(ChoiceContext);
};

export { ChoiceProvider, useChoiceContext };