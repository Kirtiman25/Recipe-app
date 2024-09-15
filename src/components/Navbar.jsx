function Navbar() {
  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between">
        <button className="bg-pink-600 rounded-full">Logo</button>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

