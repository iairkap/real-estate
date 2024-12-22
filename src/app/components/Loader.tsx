export default function LoadingContent() {
  return (
    <div className="min-h-screen bg-[#141414] p-4 md:p-8">
      <div className="mx-auto  space-y-6">
        <div className="flex items-center justify-center py-4">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full border-2 border-[#703BF7]/30" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#703BF7]" />
          </div>
          <span className="ml-3 text-sm text-white">Loading...</span>
        </div>
      </div>

      {/* Cards Grid */}

    </div>
  )
}