import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%&*+=/?|:;.-_<,~`'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToclip = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="bg-neutral-600 container mx-auto px-6 py-6 m-6 rounded-xl shadow-xl">
        <div className="my-6 text-center">
          <h1 className="text-xl md:text-2xl xl:text-3xl border-b-2 border-t-2 py-6 px-26 rounded-xl">Password Generator</h1>
        </div>
        <div className="w-full max-w-md mx-auto shadow-md bg-gray-400 rounded-xl py-4 px-6 text-center text-xl">
          <div className="flex gap-3 overflow-hidden items-center justify-center">
            <input
              type="text"
              value={password}
              className="w-full outline-none py-2 px-3 bg-gray-300 text-black rounded-xl pl-6 font-semibold"
              placeholder="Password"
              ref={passwordRef}
              readOnly
            />
            <button className="text-sm md:text-base bg-gray-700 p-2 rounded-xl cursor-pointer font-bold" onClick={copyPasswordToclip}>Coppy</button>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto shadow-md flex flex-col md:flex-row gap-3 px-5 items-center justify-between bg-neutral-500 py-4 mt-4 rounded-xl">
          <div className="flex flex-col items-center justify-center font-semibold">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
