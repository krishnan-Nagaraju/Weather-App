import React from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'

const Home = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-sky-200 to-gray-200" />
      {/* Optional overlay for depth */}
      <div className="absolute inset-0 z-10 bg-white bg-opacity-30 backdrop-blur-sm" />
      <div className="relative z-20 flex flex-col min-h-screen">
        <div className="pt-10 pb-4">
          <Heading />
        </div>
        <div className="flex justify-center w-full">
          <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-10 w-full max-w-md flex flex-col items-center">
            <Input />
          </div>
        </div>
        <div className="flex-1" />
      </div>
    </div>
  )
}

export default Home
