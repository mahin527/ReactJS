import { useState } from "react"

function App() {
  const [color, setColor] = useState('gray')

  const colors = [
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Yellow', class: 'bg-yellow-500' },
    { name: 'Teal', class: 'bg-teal-400' },
    { name: 'Cyan', class: 'bg-cyan-400' },
    { name: 'Indigo', class: 'bg-indigo-400' },
    { name: 'Fuchsia', class: 'bg-fuchsia-400' },
  ]
  return (
    <div className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-center fixed top-23 inset-x-0">
        <h2 className="text-2xl md:text-4xl xl:text-6xl border-2 px-6 py-8 rounded-full">Background Changer</h2>
        </div>
      <div className="fixed flex flex-wrap justify-center items-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-full">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name.toLowerCase())}
              className={`outline-none px-5 py-2 rounded-full cursor-pointer shadow-lg text-white font-medium ${c.class}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
