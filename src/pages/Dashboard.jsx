
const Dashboard=()=>{

    return (
    <div className="p-6">
      

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm font-medium">Customers</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm font-medium">Products</h2>
          {/* <p className="text-3xl font-bold mt-2">{products.length}</p> */}
        </div>

        <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm font-medium">Suppliers</h2>
          {/* <p className="text-3xl font-bold mt-2">{suppliers.length}</p> */}
        </div>

        <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm font-medium">Orders</h2>
          {/* <p className="text-3xl font-bold mt-2">{orders.length}</p> */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;