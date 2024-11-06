import "./App.css";

function App() {
  return (
    <>
      <div className="p-3">
        <h1 className="text-center font-semibold text-4xl mb-4 text-[#ffa400]">
          Live anywhere
        </h1>
        <h2 className="text-center font-normal text-[#07a787] text-lg mb-3 ">
          keep call & travel on
        </h2>
        <div className="grid grid-cols-3 gap-x-[37px] max-w-7xl mx-auto">
          <div>
            <div className="h-96 mb-5">
              <img
                src="https://images.unsplash.com/photo-1674231386741-211eec6d6173?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <h3 className="text-center font-medium text-lg mb-3">
              enjoy beautifull the night
            </h3>
            <span className="block text-center text-lg text-gray-500">
              6,789 properties
            </span>
          </div>
          <div>
            <div className="h-96 mb-5">
              <img
                src="https://images.unsplash.com/photo-1674231386741-211eec6d6173?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <h3 className="text-center font-medium text-lg mb-3">
              enjoy the beautifull night
            </h3>
            <span className="block text-center text-lg text-gray-500">
              6,789 properties
            </span>
          </div>
          <div>
            <div className="h-96 mb-5">
              <img
                src="https://images.unsplash.com/photo-1674231386741-211eec6d6173?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <h3 className="text-center font-medium text-lg mb-3">
              enjoy the night beautifull
            </h3>
            <span className="block text-center text-lg text-gray-500">
              6,789 properties
            </span>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <button className="p-3 mx-40 flex border border-orange-500 rounded-lg transform motion-safe:hover:scale-110 hover:bg-blue-600 hover:text-white">
            Hover me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
