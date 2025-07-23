// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-12 h-12 border-8 border-t-transparent border-green-500 rounded-full animate-spin" />
    </div>
  )
}
