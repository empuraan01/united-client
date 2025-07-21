import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-black flex flex-col">


      {/* Profile Content */}
      <div className="flex-1 flex flex-col items-center px-6 py-8">
        {/* Profile Picture */}
        <div className="w-36 h-36 bg-white rounded-full mb-6" />

        {/* User Info */}
        <div className="text-center mb-8">
          <h1 className="text-white text-xl font-bold mb-1">Sreehari</h1>
          <p className="text-white text-xs font-normal mb-1">2023</p>
          <p className="text-white text-xs font-normal">f20231068@goa.bits-pilani.ac.in</p>
        </div>

        {/* Social Icons/Tags */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
        </div>

        {/* Loves Section */}
        <div className="w-full max-w-sm">
          <h2 className="text-white text-xs font-bold text-center mb-4">Loves</h2>
          
          {/* Interest Cards */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            <div className="h-12 bg-gray-600 rounded" />
            <div className="h-12 bg-gray-600 rounded" />
            <div className="h-12 bg-gray-600 rounded" />
            <div className="h-12 bg-gray-600 rounded" />
          </div>

          {/* Large Content Area */}
          <div className="w-full h-56 border border-red-800 rounded-md" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-red-950 h-20 flex items-center justify-center px-4">
        <nav className="flex items-center justify-center gap-8 md:gap-12 w-full max-w-md">
          <Link
            href="/people"
            className="text-white text-xs font-normal hover:text-gray-300 transition-colors"
          >
            People
          </Link>
          <Link
            href="/"
            className="text-white text-xs font-normal hover:text-gray-300 transition-colors"
          >
            Gallery
          </Link>
          <div className="bg-white text-black px-5 py-2 rounded text-xs font-normal">
            My Profile
          </div>
        </nav>
      </div>
    </div>
  );
}
