import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-transparent p-7">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-goldenYellow">DNYX Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="hover:text-gray-400">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
