import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  searchCustomer,
} from "../slices/customerSlice";
import CustomerTable from "../Components/CustomerTable";
import CustomerModal from "../Components/CustomerModal";

export default function CustomersPage() {
  const dispatch = useDispatch();
  const { data: customers, status, error } = useSelector(
    (state) => state.customers
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const[resetTable,setResetTable]=useState("")

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const handleEdit = (customer) => {
    setEditing(customer);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const handleSubmitModal = (formValues) => {
    if (editing) {
      dispatch(updateCustomer({ id: editing.id, customer: formValues }));
    } else {
      dispatch(addCustomer(formValues));
    }
    setModalOpen(false);
    setEditing(null);
  };

  const handleSearch = () => {
    const trimmed = search.trim();
    if (trimmed.length === 0) {
      dispatch(fetchCustomers());
    } else {
      dispatch(searchCustomer(trimmed));
    }
  };

  const handleCancel=()=>{
      setResetTable("");
      dispatch(fetchCustomers());
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 items-center">
          <input
                type="text"
                placeholder="Search customer by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 rounded-xl border border-gray-300 px-4 py-1.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <button
                onClick={handleSearch}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-1.5 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4"
           >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
             />
              </svg>
                  Search
          </button>
          <button
                onClick={handleCancel}
                className="flex items-center gap-2 rounded-xl bg-gray-500 px-3 py-1.5 text-white shadow-md hover:bg-gray-600 hover:shadow-lg transition"
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <            path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Cancel
          </button>
        </div>

        <button
            onClick={handleAdd}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-2.5 py-1.5 text-white shadow-md hover:bg-green-700 hover:shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Customer
        </button>
      </div>

      {status === "loading" && (
        <div className="text-sm text-gray-600">Loading customers...</div>
      )}
      {status === "failed" && (
        <div className="text-sm text-red-600">Error: {error}</div>
      )}

      <CustomerTable
        customers={customers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditing(null);
        }}
        onSubmit={handleSubmitModal}
        initialData={editing}
      />
    </div>
  );
}