// src/pages/Orders.jsx
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaSearch, FaEye } from "react-icons/fa";

// Data JSON Orders
export const ordersData = [
  { id: "#ORD001", customer: "Budi Santoso", service: "Cuci Kering", total: "Rp 25.000", status: "Selesai", date: "01 Apr 2026" },
  { id: "#ORD002", customer: "Siti Aisyah", service: "Cuci + Setrika", total: "Rp 40.000", status: "Proses", date: "02 Apr 2026" },
  { id: "#ORD003", customer: "Andi Pratama", service: "Setrika", total: "Rp 15.000", status: "Batal", date: "03 Apr 2026" },
  { id: "#ORD004", customer: "Dewi Lestari", service: "Express", total: "Rp 60.000", status: "Selesai", date: "04 Apr 2026" },
  { id: "#ORD005", customer: "Rian Saputra", service: "Cuci Boneka", total: "Rp 50.000", status: "Proses", date: "05 Apr 2026" },
  { id: "#ORD006", customer: "Maya Putri", service: "Cuci Sepatu", total: "Rp 35.000", status: "Selesai", date: "06 Apr 2026" },
  { id: "#ORD007", customer: "Fajar Nugroho", service: "Setrika", total: "Rp 20.000", status: "Batal", date: "07 Apr 2026" },
  { id: "#ORD008", customer: "Lina Marlina", service: "Cuci + Setrika", total: "Rp 45.000", status: "Selesai", date: "08 Apr 2026" },
  { id: "#ORD009", customer: "Doni Wijaya", service: "Express", total: "Rp 70.000", status: "Proses", date: "09 Apr 2026" },
  { id: "#ORD010", customer: "Nabila Zahra", service: "Cuci Karpet", total: "Rp 90.000", status: "Selesai", date: "10 Apr 2026" },
  { id: "#ORD011", customer: "Aldi Ramadhan", service: "Cuci Kering", total: "Rp 28.000", status: "Selesai", date: "11 Apr 2026" },
  { id: "#ORD012", customer: "Putri Ananda", service: "Setrika", total: "Rp 18.000", status: "Proses", date: "12 Apr 2026" },
  { id: "#ORD013", customer: "Yoga Prasetyo", service: "Cuci Sepatu", total: "Rp 33.000", status: "Batal", date: "13 Apr 2026" },
  { id: "#ORD014", customer: "Salsaabila", service: "Cuci Boneka", total: "Rp 55.000", status: "Selesai", date: "14 Apr 2026" },
  { id: "#ORD015", customer: "Rika Amelia", service: "Express", total: "Rp 75.000", status: "Proses", date: "15 Apr 2026" },
];

export default function Orders() {
  const [search, setSearch] = useState("");

  const filteredOrders = ordersData.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status) => {
    if (status === "Selesai") return "bg-green-100 text-green-600";
    if (status === "Proses") return "bg-blue-100 text-blue-600";
    return "bg-red-100 text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader />
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
            <h1 className="text-2xl font-bold text-gray-800">Orders Management</h1>

            <div className="flex items-center mt-3 md:mt-0 border rounded-lg px-3 py-2 bg-gray-50">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Cari order..."
                className="bg-transparent outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{order.id}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.service}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">{order.total}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}