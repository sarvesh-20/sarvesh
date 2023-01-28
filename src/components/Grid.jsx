import React from "react";

const Grid = () => {
  return (
    <div className="h-[100vh] bg-black">
      <div className="flex items-center justify-center">
        <div className="text-lg text-[40px] text-white font-bold pt-28 grid-header">
          Trusted by pros. Loved by millions.
        </div>
      </div>
      <div className="grid-boxex mt-10 ">
        <div className="space-x-6 flex items-center justify-center mx-32">
          <div className=" h-[500px] w-1/3  box1">
            <div className="flex items-center justify-center w-full">
              <img
                className="w-full rounded-xl"
                src="https://th.bing.com/th/id/R.c51ccc641b3da8965cb48082b6e9867b?rik=yvPCjIQ6jaW7NA&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2016%2f05%2f25%2f464333-416674-sonu-nigam-indian-singer-awesome-images-wallpaper-0d707.jpg&ehk=PahPYeFCQOURwAUbT7FieKHwefdjoHOWmKfdAZkrkhc%3d&risl=&pid=ImgRaw&r=0"
                alt="Singer image"
              />
            </div>
            <div className="">
              <div className=" text-sm font-medium  text-teal-500 my-3">
                Drummer
              </div>
              <div className="text-white font-bold text-[17px] mb-2">
                Eloy Casagrande
              </div>
              <div className="text-gray-400 font-normal">
                Sepultura's drummer; voted best metal drummer in Modern
                Drummer's 2021 Readers Poll
              </div>
            </div>
          </div>
          <div className=" h-[500px] w-1/3  box2">
            <div className="flex items-center justify-center w-full">
              <img
                className="w-full
                 rounded-xl"
                src="https://th.bing.com/th/id/R.c51ccc641b3da8965cb48082b6e9867b?rik=yvPCjIQ6jaW7NA&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2016%2f05%2f25%2f464333-416674-sonu-nigam-indian-singer-awesome-images-wallpaper-0d707.jpg&ehk=PahPYeFCQOURwAUbT7FieKHwefdjoHOWmKfdAZkrkhc%3d&risl=&pid=ImgRaw&r=0"
                alt="Singer image"
              />
            </div>
            <div className="">
              <div className=" text-sm font-medium  text-teal-500 my-3">
                Drummer
              </div>
              <div className="text-white font-bold text-[17px] mb-2">
                Eloy Casagrande
              </div>
              <div className="text-gray-400 font-normal ">
                Sepultura's drummer; voted best metal drummer in Modern
                Drummer's 2021 Readers Poll
              </div>
            </div>
          </div>
          <div className=" h-[500px] w-1/3  box3">
            <div className="flex items-center justify-center">
              <img
                className="w-full rounded-xl"
                src="https://th.bing.com/th/id/R.c51ccc641b3da8965cb48082b6e9867b?rik=yvPCjIQ6jaW7NA&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2016%2f05%2f25%2f464333-416674-sonu-nigam-indian-singer-awesome-images-wallpaper-0d707.jpg&ehk=PahPYeFCQOURwAUbT7FieKHwefdjoHOWmKfdAZkrkhc%3d&risl=&pid=ImgRaw&r=0"
                alt="Singer image"
              />
            </div>
            <div className="">
              <div className=" text-sm font-medium  text-teal-500 my-3">
                Singer
              </div>
              <div className="text-white font-bold text-[17px] mb-2">
                Eloy Casagrande
              </div>
              <div className="text-gray-400 font-normal ">
                Sepultura's drummer; voted best metal drummer in Modern
                Drummer's 2021 Readers Poll
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
