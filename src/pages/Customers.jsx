// src/pages/Customers.jsx
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaSearch, FaUserCircle } from "react-icons/fa";

// Data JSON Customers
export const customersData = [
  { id: "CUST001", name: "Budi Santoso", phone: "081234567001", address: "Pekanbaru", orders: 12 },
  { id: "CUST002", name: "Siti Aisyah", phone: "081234567002", address: "Bangkinang", orders: 8 },
  { id: "CUST003", name: "Andi Pratama", phone: "081234567003", address: "Dumai", orders: 5 },
  { id: "CUST004", name: "Dewi Lestari", phone: "081234567004", address: "Siak", orders: 15 },
  { id: "CUST005", name: "Rian Saputra", phone: "081234567005", address: "Kampar", orders: 7 },
  { id: "CUST006", name: "Maya Putri", phone: "081234567006", address: "Pelalawan", orders: 11 },
  { id: "CUST007", name: "Fajar Nugroho", phone: "081234567007", address: "Rengat", orders: 4 },
  { id: "CUST008", name: "Lina Marlina", phone: "081234567008", address: "Duri", orders: 9 },
  { id: "CUST009", name: "Doni Wijaya", phone: "081234567009", address: "Ujung Batu", orders: 6 },
  { id: "CUST010", name: "Nabila Zahra", phone: "081234567010", address: "Bagan Batu", orders: 13 },
  { id: "CUST011", name: "Aldi Ramadhan", phone: "081234567011", address: "Tapung", orders: 10 },
  { id: "CUST012", name: "Putri Ananda", phone: "081234567012", address: "Perawang", orders: 3 },
  { id: "CUST013", name: "Yoga Prasetyo", phone: "081234567013", address: "Minas", orders: 14 },
  { id: "CUST014", name: "Salsaabila", phone: "081234567014", address: "Air Molek", orders: 2 },
  { id: "CUST015", name: "Rika Amelia", phone: "081234567015", address: "Teluk Kuantan", orders: 16 },
];


export default function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader />
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
            <h1 className="text-2xl font-bold text-gray-800">Customers Management</h1>

            <div className="flex items-center mt-3 md:mt-0 border rounded-lg px-3 py-2 bg-gray-50">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Cari customer..."
                className="bg-transparent outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                className="bg-gray-50 rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <FaUserCircle className="text-5xl text-blue-500" />
                  <div>
                    <h2 className="font-bold text-lg">{customer.name}</h2>
                    <p className="text-gray-500 text-sm">{customer.id}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold">Phone:</span> {customer.phone}</p>
                  <p><span className="font-semibold">Address:</span> {customer.address}</p>
                  <p><span className="font-semibold">Total Orders:</span> {customer.orders}</p>
                </div>

                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}