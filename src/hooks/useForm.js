import { useState } from "react"

const useForm = (initalState={}) => {
    const [ state, setState ] = useState(initalState);
    
    const onChange = (key, val) => {
        if(state.hasOwnProperty(key)) {
            setState({
                ...state,
                [key]: val
            })
        }
    }

    return {
        state,
        onChange
    } 
};

export default useForm;