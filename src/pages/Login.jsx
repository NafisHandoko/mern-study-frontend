const Login = () => {
    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="bg-white mt-10 shadow-md flex flex-col items-start w-2/5 px-5 py-6">
                <h2 className="text-md font-extrabold">Log In</h2>
                <form className="flex flex-col items-start w-full mt-3">
                    <label htmlFor="" className="mb-1">Email:</label>
                    <input type="email" className="border-gray-300 border rounded w-full mb-4"/>
                    <label htmlFor="" className="mb-1">Password :</label>
                    <input type="password" className="border-gray-300 border rounded w-full mb-4" />
                    <button className="bg-green-600 hover:bg-green-800 text-white rounded px-2 py-1">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login