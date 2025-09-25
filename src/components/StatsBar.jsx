export default function StatsBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
      <div className="flex items-center">
        <span className="text-yellow-400 font-bold mr-1">★</span>
        <span className="text-gray-100">50K+ Stars</span>
      </div>
      <div className="text-gray-100">100M+ Active Users</div>
      <div className="text-gray-100">30+ Years Strong</div>
    </div>
  )
}
