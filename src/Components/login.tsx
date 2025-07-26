export default function Login() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Admin connexion 
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="*******"
            required
          />
        </div>

        {/*
         ERROR
        )*/}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
