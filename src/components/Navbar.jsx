import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className="bg-white py-7 px-20">
                <Link to='/'>
                    <h1 className='font-bold text-2xl'>Quotes</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar