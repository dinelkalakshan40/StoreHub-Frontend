export default function CustomerTable({ customers, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-200 text-left text-gray-700">
        <th className="border-b px-4 py-3 font-medium">ID</th>
        <th className="border-b px-4 py-3 font-medium">Name</th>
        <th className="border-b px-4 py-3 font-medium">Email</th>
        <th className="border-b px-4 py-3 font-medium">Phone</th>
        <th className="border-b px-4 py-3 font-medium">Address</th>
        <th className="border-b px-4 py-3 font-medium text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {customers?.length ? (
        customers.map((c) => (
          <tr
            key={c.id}
            className="hover:bg-gray-50 transition-colors"
          >
            <td className="border-b px-4 py-2">{c.id}</td>
            <td className="border-b px-4 py-2">{c.name}</td>
            <td className="border-b px-4 py-2">{c.email}</td>
            <td className="border-b px-4 py-2">{c.phone}</td>
            <td className="border-b px-4 py-2">{c.address}</td>
            <td className="border-b px-4 py-2">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => onEdit(c)}
                  className="rounded-md bg-yellow-500 px-3 py-1.5 text-white text-xs font-medium hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c.id)}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-white text-xs font-medium hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            className="px-4 py-6 text-center text-gray-500"
            colSpan={6}
          >
            No customers found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
}