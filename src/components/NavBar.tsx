function Navbar(){
    return(
        <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
            <div className="text-lg font-bold">MyLogo</div>
            <ul className="flex space-x-4">
                <li className="hover:text-gray-200 cursor-pointer">HOME</li>
                <li className="hover:text-gray-200 cursor-pointer">About</li>
                <li className="hover:text-gray-200 cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
    
}

export default Navbar;