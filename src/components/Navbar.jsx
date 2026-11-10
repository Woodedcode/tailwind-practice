function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-800 px-6 py-4">
            <span className="text-xl font-bold text-white">DevProfile</span>
            <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">About</a>
                <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar