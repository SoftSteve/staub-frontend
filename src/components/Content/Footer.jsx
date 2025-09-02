export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 py-6 text-white flex flex-col items-center">
        <nav className="grid grid-cols-3 gap-6 md:gap-8 text-center text-black md:text-lg mb-4">
            <a href="#" className="cursor-pointer hover:text-blue-500 hover:scale-110 transition-all">
            Twitter
            </a>
            <a href="#" className="cursor-pointer hover:text-blue-500 hover:scale-110 transition-all">
            Instagram
            </a>
            <a href="http://10.0.0.135:8000/admin/" className="cursor-pointer hover:text-blue-500 hover:scale-110 duration-300 transition-all">
            Admin
            </a>
        </nav>

        <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Staub General Contracting. Privacy.
        </p>
    </footer>
  );
}