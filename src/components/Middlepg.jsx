import React from "react";

const Middlepg = () => {
  return (
    <div className="h-[45vh] bg-gray-800">
      <div className="py-16">
        <div className="flex justify-center">
          <div className="text-3xl font-bold text-white">
            Ready to take your skills to the next level?{" "}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-3xl font-bold text-white">Start Free!</div>
        </div>
      </div>

      <div className="space-x-2 flex items-center justify-center ">
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
  );
};

export default Middlepg;
