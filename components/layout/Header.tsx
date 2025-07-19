const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">StayFinder</div>
      <input
        type="text"
        placeholder="Search properties..."
        className="border px-4 py-2 rounded-md mt-4 md:mt-0 w-full md:w-1/3"
      />
      <nav className="flex gap-4 mt-4 md:mt-0 text-sm">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
      </nav>
      <div className="flex gap-2 mt-4 md:mt-0">
        <button className="text-gray-600">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
