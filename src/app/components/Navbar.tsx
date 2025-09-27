import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-2xl py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/app-logo.png"
              alt="Culinary Japan Map Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>
          <span className="text-xl font-bold text-gray-700">
            Culinary Japan Map
          </span>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/dishes" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
            Dishes
          </Link>
          <span className="h-6 w-px bg-gray-400"></span>
          <Link href="/wishlist" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
            Wishlist
          </Link>
          <span className="h-6 w-px bg-gray-400"></span>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
            About
          </a>
          <span className="h-6 w-px bg-gray-400"></span>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;