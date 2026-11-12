function ProfileCard() {
  return (
    <div className="bg-[#f3f4f6] p-6 rounded-lg max-width-xs">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ryan Woods</h2>
      <p className="text-sm text-[#6b7280] mb-4">Full-stack developer based in Grapevine, TX.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md font-semi-bold border-none cursor-pointer hover:bg-blue-700 transition-colors duration-200">Contact Me</button>
    </div>
  )
}

export default ProfileCard