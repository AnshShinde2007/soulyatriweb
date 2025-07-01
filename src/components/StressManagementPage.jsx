const StressManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚡</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent mb-4">
            Stress Less, Live More
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover personalized techniques to manage stress and find your inner calm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Breathing Techniques</h3>
            <p className="text-gray-600 mb-6">Learn ancient breathing methods to instantly reduce stress and anxiety</p>
            <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Start Breathing Exercise
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mindfulness Practice</h3>
            <p className="text-gray-600 mb-6">Guided mindfulness sessions to help you stay present and reduce stress</p>
            <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Begin Mindfulness
            </button>
          </div>
        </div>

        <button className="bg-white text-[#FF7B00] border-2 border-[#FF7B00] px-8 py-3 rounded-lg font-medium hover:bg-[#FF7B00] hover:text-white transition-all">
          Back to Options
        </button>
      </div>
    </div>
  )
}

export default StressManagementPage
