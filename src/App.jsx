
//Note:
//const cachedFn = useCallback(fn, deps aka dependencies) is used to memoize a function so that it can be reused instead of being recreated on every render.
//dependencies is denoted by an array of values'[]'.
//dependencies are the values that the function depends on. If the dependencies change, the function will be recreated. 
//dependencies are optional, but if they are not provided, the function will be recreated on every render.
//useState hook is used to manage the STATE of a functional component.
//useCallback hook is used to MEMOIZE a FUNCTION so that it can be reused instead of being recreated on every render.
//useRef hook is used to create a REFERENCE to a DOM element so that it can be accessed later
//useEffect hook is used to perform side effects in a functional component such as data fetching, subscriptions, or manual DOM manipulation



//importing react hooks
import { useState, useCallback, useEffect, useRef } from 'react'


//main function
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
//setting the password
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  //copying the password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
//main div
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-emerald-800 text-orange-500">
      <h1 className='text-orange-500 font-bold text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="EnterPassword"
            readOnly
            ref={passwordRef}
        />
        {/*copy button*/}
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        {/*password length and character type selection*/}
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}
//exporting the main function
export default App


