import { useContext } from "react"
import { QuoteContext } from "../contexts/QuoteContext"

export const useQuoteContext = () => {
    const context = useContext(QuoteContext)
    if(!context){
        throw Error('useQuoteContext must be used inside a QuoteContextProvider')
    }
    return context
}