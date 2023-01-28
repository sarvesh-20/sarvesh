import React from "react";

const Heropg2 = () => {
  return (
    <div className="h-[80vh] bg-black">
      <div className="flex justify-center heading">
        <div className="text-[40px] font-semibold text-white">
          {" "}
          Chosen by the best.
        </div>
      </div>
      <div className="grid mt-10">
        <div className="space-x-4 flex items-center justify-center mx-32">
          <div className="w-[380px] box1">
            <img
              className="rounded-xl"
              src="https://storage.googleapis.com/moises-cms/App_of_The_Day_f24991d95e/App_of_The_Day_f24991d95e.png"
              alt="grid1-img"
            />
            <div className="text-xs font-bold  text-teal-500 my-3">2022</div>
            <div className="text-white font-semibold  text-lg mb-2">App of the day: Featured by Apple</div>
            <div className="text-gray-400 font-normal">Featured on the US App Store</div>
          </div>
          <div className="w-[380px] box-2">
            <img
              className="rounded-xl"
              src="https://storage.googleapis.com/moises-cms/Best_Personal_Growth_e50f3dab3f/Best_Personal_Growth_e50f3dab3f.png"
              alt="gird2-img"
            />
            <div className="text-xs font-bold  text-teal-500 my-3">2022</div>
            <div className="text-white font-semibold  text-lg mb-2">The Best Personal Growth App</div>
            <div className="text-gray-400 font-normal">Elected by Google Play</div>
          </div>
          <div className="w-[380px] box-3">
            <img
              className="rounded-xl"
              src="https://storage.googleapis.com/moises-cms/News_Apps_We_Love_238815f061/News_Apps_We_Love_238815f061.png"
              alt="grfd3-img"
            />
            <div className="text-xs font-bold  text-teal-500 my-3">2022</div>
            <div className="text-white font-semibold  text-lg mb-2">Editors’ Choice</div>
            <div className="text-gray-400 font-normal">New Apps We Love by Google Play</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropg2;
