import Image from "next/image"

export default function Account() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white">
        <div className="p-6">
          <h1 className="text-xl font-medium text-gray-800 mb-4">Account Settings</h1>

          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Profile"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  +
                </div>
              </div>

              <div className="ml-4">
                <h2 className="font-medium">Marry Doe</h2>
                <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 text-sm">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
              Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300 mt-6 pt-6">
            {/* Additional account content could go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
