import { useState } from 'react'
import { useQuoteContext } from '../hooks/useQuoteContext'

const QuoteForm = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)
    const {quotes, dispatch} = useQuoteContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const quoteData = {quote, author}
        const resp = await fetch('/api/quotes', {
            method: "POST",
            body: JSON.stringify(quoteData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respJson = await resp.json()
        if(!resp.ok){
            setError(resp.error)
        }
        if(resp.ok){
            setQuote('')
            setAuthor('')
            setError(null)
            dispatch({type: 'ADD_QUOTE', payload: respJson})
            console.log('new quote added', respJson)
        }
    }

    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className='mt-4'>Quote</label>
            <input
                type="text"
                onChange={(e) => setQuote(e.target.value)}
                value={quote}
                className='rounded-md border-2 border-gray-400'
            />
            <label className='mt-4'>Author</label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                className='rounded-md border-2 border-gray-400'
            />
            <button className='bg-emerald-400 text-white mt-4 py-1 rounded-md'>Add</button>
            {error && <p className='text-red-500 mt-4'>{error}</p>}
        </form>
    )
}

export default QuoteForm