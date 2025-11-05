import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Input = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = inputRef.current.value;
    console.log(enteredValue);
    navigate(`/display/${enteredValue}`);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <input
        type="text"
        placeholder="Enter city name"
        ref={inputRef}
        className="flex-1 px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow"
      />
      <button
        type='submit'
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  )
}

export default Input