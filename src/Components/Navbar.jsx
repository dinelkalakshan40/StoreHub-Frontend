


export default function Navbar() {

  return (
    <header className="bg-blue-400 border-b border-blue-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Inventory Management
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications Icon */}
          <button className="relative text-gray-700 hover:text-blue-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6" 
              fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                   6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 
                   6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 
                   1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 text-gray-700" 
                viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a5 5 0 100 10A5 5 0 0012 2zM4 22a8 
                         8 0 1116 0H4z"/>
              </svg>
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-800">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}