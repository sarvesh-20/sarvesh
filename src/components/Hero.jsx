import React from 'react'

const Hero = () => {
  return (
    <div className="h-[100vh] bg-black">
      <div className="ml-48 w-[530px] hero-box pt-44">
        <div className="text-[48px] font-extrabold box-header pb-3 text-white">
          The Musician's App
        </div>
        <p className="pb-8 text-lg text-gray-400 box-intro">
          Play with your favorite artists in any key, at any speed. Remove
          vocals and instruments in any song. Discover the ultimate immersive
          practice experience powered by AI.
        </p>
        <span className="px-6 py-4 text-sm font-semibold text-black bg-white rounded-md box-signup">
          Sign up
        </span>
        <div className="mt-12 mb-3 tracking-tighter uppercase box-text">
          Start free
        </div>
        <div className="flex space-x-2">
          <img
            className="box-appleplay"
            src="https://storage.googleapis.com/moises-cms/app_store_3279bb50bd/app_store_3279bb50bd.svg"
            alt="apple play"
          />
          <img
            className="box-googleplay"
            src="https://storage.googleapis.com/moises-cms/app_google_play_1_3cdc01c8aa/app_google_play_1_3cdc01c8aa.svg"
            alt="google play"
          />
        </div>
      </div>
    </div>

  )
}

export default Hero