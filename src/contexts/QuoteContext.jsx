import { createContext, useReducer } from "react";

export const QuoteContext = createContext()

export const QuoteReducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUOTE':
            return {quotes: action.payload}
        case 'ADD_QUOTE':
            return {quotes: [action.payload, ...state.quotes]}
        case 'DELETE_QUOTE':
            return {
                quotes: state.quotes.filter((quote) => (quote._id!==action.payload._id))
            }
        default:
            return state
    }
}

export const QuoteContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(QuoteReducer, {quotes: null})
    return (
        <QuoteContext.Provider value={{...state, dispatch}}>
            {children}
        </QuoteContext.Provider>
    )
}