import React from "react";

const Blogs = () => {
  return (
    <div className="h-[100vh] bg-black">
      <div className="flex justify-center ">
        <h1 className="text-4xl font-bold text-white my-14">
          Rockstars and Top Creators use the Moises App
        </h1>
      </div>
      <div className=" space-x-14 mx-36 flex mt-10">
        <div className="blog-1 ">
          <p className="text-white font-semibold  pr-10   ">
            It is a product that I have waited for my whole life. It would have
            made my life a lot easier if Moises had been around for 15, 10
            years.”
          </p>
          <div className="flex text-white mt-6">
            <img
              className="w-[50px] h-12 bg-white"
              src=" https://cdn.onlinewebfonts.com/svg/img_415639.png"
              alt=""
            />
            <div className="ml-3">
              <h1>Eloy Casagrande</h1>{" "}
              <span className="text-gray-400 font-normal">
                {" "}
                Sepultura's drummer; voted best metal drummer in Modern
                Drummer's 2021 Readers Poll
              </span>
            </div>
          </div>
        </div>
        <div className="blog-2 ">
          <p className="text-white font-semibold  pr-10 ">
            Being able to do it on my phone and remove the drums this
            effectively without destroying the rest of the song blows my mind!”
          </p>
          <div className="flex text-white  mt-6">
            <img
              className="w-[50px] h-12  bg-white"
              src=" https://cdn.onlinewebfonts.com/svg/img_415639.png"
              alt=""
            />
            <div className="ml-3">
              <h1>Cobus</h1>{" "}
              <span className="text-gray-400 font-normal">
                {" "}
                One of the most-subscribed drummers on YouTube, with over 280
                million views
              </span>
            </div>
          </div>
        </div>
        <div className="blog-3  ">
          <p className="text-white font-semibold  pr-10  ">
            This app is a beast! Is the perfect tool to use if you trying to
            practice, learn music and produce, especially remixes and live
            arrangements."
          </p>
          <div className="flex text-white  mt-6">
            <img
              className="w-[50px] h-12  bg-white"
              src=" https://cdn.onlinewebfonts.com/svg/img_415639.png"
              alt=""
            />
            <div className="ml-3">
              {" "}
              <h1>Jerrod “J-Rod” Sullivan</h1>
              <span className="text-gray-400 font-normal">
                Drummer and producer
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;


// const students = "sarvesh"
const [students1, setStudents1] = useState("sarvesh");
const [students, setStudents] = useState({});
