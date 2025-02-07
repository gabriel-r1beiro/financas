import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" w-screen mt-3">
      <header className="w-full max-w-screen-xl flex items-center justify-between">
        <div className="flex items-center gap-2 ml-4 bg-gray-200 px-3 py-1 rounded-full shadow">
          <img className="w-8" src="/dinheiro.png" alt="Money Deshboard" />
          <span>Ribeiro</span>
        </div>

        <nav>
          <ul className="bg-gray-200 px-3 py-2 rounded-full shadow flex items-center gap-5">
            <li className="bg-blue-700 text-white w-32 flex justify-center py-2 rounded-full">
              <Link href="/">Dashboard</Link>
            </li>
            <li className="hover:bg-blue-700 hover:text-white  w-32 flex justify-center py-2 rounded-full">
              <Link href="/shopping">Shopping</Link>
            </li>
            <li className="hover:bg-blue-700 hover:text-white  w-32 flex justify-center py-2 rounded-full">
              <Link href="/clients">Clientes</Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="flex gap-2 text-2xl">
            <li>
              <span className="bg-gray-200 rounded-full p-2 flex justify-center items-center shadow">
                <IoSearch />
              </span>
            </li>
            <li>
              <span className="bg-gray-200 rounded-full p-2 flex justify-center items-center shadow">
                <IoMdNotifications />
              </span>
            </li>
            <li>
              <span className="bg-gray-200 rounded-full p-2 flex justify-center items-center shadow">
                <FaUser />
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
