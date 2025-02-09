import SalesChart from "@/components/grafic";
import { Indicator } from "@/components/Indicator";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="mx-3 mt-4 flex">
      <div className="w-[60%] flex-1">
        <header>
          <h2>Bom dia, Gabriel 👋</h2>
          <p className="text-xs text-gray-700">
            você pode acompanhar todos os novos dados aqui!
          </p>
        </header>

        <section className="flex gap-4 mt-4">
          <Indicator
            indicator={true}
            title="Total Shipping"
            type="Delivery"
            value={368}
            valueIndicator={18.71}
          />
          <Indicator
            indicator={false}
            title="Peding Packege"
            type="Box"
            value={68}
            valueIndicator={12.4}
          />
          <Indicator
            indicator={true}
            title="Delivery Shipments"
            type="Location"
            value={32}
            valueIndicator={18.61}
          />
        </section>
        {/* GRafico Init */}
        <section className="bg-white rounded-lg w-full h-[32rem] mt-1 px-2 py-1">
          <h2>Shipment Statistcs</h2>

          <SalesChart />
        </section>
        {/* Table init */}
        <section className="bg-white rounded-lg w-full h-[28rem] mt-4 px-2 py-1">
          <div className="flex items-center justify-between mb-3 mt-2">
            <h2>Shipping list</h2>
            <div className="flex items-center">
              <button className="bg-gray-200 px-2 py-1 text-xl rounded-md rounded-r-none">
                <IoSearchOutline />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 px-2 py-1 w-80 rounded-md rounded-l-none outline-none text-sm text-gray-800"
              />
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center">Tracking ID</th>
                <th className="px-4 py-2 text-center">Deliver</th>
                <th className="px-4 py-2 text-center">Shipped Date</th>
                <th className="px-4 py-2 text-center">Country</th>
                <th className="px-4 py-2 text-center">Price</th>
                <th className="px-4 py-2 text-center">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center align-middle">
                  01
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  Camisa M
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  24/08/25
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  25
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  29.90$
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  22
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2 text-center align-middle">
                  09
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  Short Mascu M
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  14/08/25
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  25
                </td>
                <td className="border px-4 py-2 text-center align-middle">
                  299.90$
                </td>
                <td className="border px-4 py-2 text-center align-middle">2</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <aside className="bg-black w-[40%]"></aside>
    </main>
  );
}
