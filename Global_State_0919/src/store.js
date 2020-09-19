import React,{useState} from 'react';

const initalState = {
    name:"Gal",
    email:"email"
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initalState)

    return (
        <Context.Provider value = {[state,setState]}>{children}</Context.Provider>
    )
}
export default Store