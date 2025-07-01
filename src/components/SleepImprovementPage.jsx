const SleepImprovementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🌙</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent mb-4">
            Sleep Soundly Tonight
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Improve your sleep quality with personalized sleep hygiene and relaxation techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sleep Stories</h3>
            <p className="text-gray-600 mb-6">Calming bedtime stories designed to help you drift off peacefully</p>
            <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Listen to Stories
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sleep Meditation</h3>
            <p className="text-gray-600 mb-6">Guided meditations specifically designed for better sleep</p>
            <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Start Meditation
            </button>
          </div>
        </div>

        <button className="bg-white text-[#18A2B8] border-2 border-[#18A2B8] px-8 py-3 rounded-lg font-medium hover:bg-[#18A2B8] hover:text-white transition-all">
          Back to Options
        </button>
      </div>
    </div>
  )
}

export default SleepImprovementPage
