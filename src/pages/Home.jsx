import { useEffect, useState } from 'react'
import QuoteForm from '../components/QuoteForm'
import { useQuoteContext } from '../hooks/useQuoteContext'
import QuoteCard from '../components/QuoteCard'

const Home = () => {
    // const [quotes, setQuotes] = useState(null)
    const {quotes, dispatch} = useQuoteContext()

    useEffect(() => {
        const fetchQuotes = async () => {
            const resp = await fetch('/api/quotes')
            const respJson = await resp.json()
            if(resp.ok){
                // setQuotes(respJson)
                dispatch({type: 'SET_QUOTE', payload: respJson})
                // console.log(respJson)
            }
        }
        fetchQuotes()
    }, [])

    useEffect(() => {
        console.log(quotes)
    })

    return (
        <div className="home px-20 mt-10 flex flex-row space-x-10 items-start">
            <div className="quotes w-2/3">
                {quotes && quotes.map(quote => (
                    <QuoteCard  key={quote._id} quote={quote}/>
                ))}
            </div>
            <div className="form w-1/3">
                <h3 className='font-bold mb-4'>Add a new quote</h3>
                <QuoteForm />
            </div>
        </div>   
    )
}

export default Home