import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white">
        <div className="flex flex-col h-screen p-6">
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>
            <p className="text-gray-500 mt-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="space-y-3">
            <Link
              href="/register"
              className="block w-full py-3 bg-purple-600 text-white text-center font-medium rounded-md"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="block w-full py-3 bg-purple-200 text-gray-700 text-center font-medium rounded-md"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
