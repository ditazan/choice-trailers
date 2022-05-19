import React, { createContext, useContext } from "react";
import { useTrailerReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;


const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useTrailerReducer({
        trailers: [],
        displayTrailers:[],
        filters: [],
        currentFilter: ''
    })
    // console.log(state) // use this in order to confirm it works
    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };