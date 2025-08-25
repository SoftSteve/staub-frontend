export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 py-6 text-white flex flex-col items-center">
        <nav className="grid grid-cols-3 gap-6 md:gap-8 text-center text-black md:text-lg mb-4">
            <a href="#" className="cursor-pointer hover:text-green-500 transition-colors">
            Twitter
            </a>
            <a href="#" className="cursor-pointer hover:text-green-500 transition-colors">
            Instagram
            </a>
            <a href="/admin" className="cursor-pointer hover:text-green-500 transition-colors">
            Admin
            </a>
        </nav>

        <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Staub General Contracting. Privacy.
        </p>
    </footer>
  );
}