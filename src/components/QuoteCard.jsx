import { useQuoteContext } from "../hooks/useQuoteContext"


const QuoteCard = ({ quote }) => {
    const { dispatch } = useQuoteContext()
    const handleDelete = async () => {
        const resp = await fetch('/api/quotes/' + quote._id, {
            method: 'DELETE'
        })
        const respJson = await resp.json()
        if(resp.ok){
            dispatch({type: 'DELETE_QUOTE', payload: respJson})
        }
    }
    return (
        <div className="bg-white mb-5 p-5 rounded-md shadow-md">
            <p className="italic font-semibold">{quote.quote}</p>
            <p className='text-sm text-gray-400'>- {quote.author}</p>
            <div className="action space-x-2">
                <button onClick={handleDelete} className='bg-red-500 px-3 py-1 mt-3 text-white text-sm rounded-md'>Delete</button>
                <button className='bg-blue-500 px-3 py-1 mt-3 text-white text-sm rounded-md'>Edit</button>
            </div>
        </div>
    )
}

export default QuoteCard