import React, { FC } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const Home: FC = () => {

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  return (
    <div className="min-h-screen bg-[#9FE2BF]">
      <div className="bg-white h-24 shadow-md flex flex-col justify-center px-10">
        <div className="flex flex-row justify-between items-center text-sm font-semibold">
          <div className="flex flex-row items-center gap-10">
            <p className="text-xl font-bold">Cryptopinas</p>
            <div className="flex flex-row items-center gap-6">
              <p>Cryptocurrencies</p>
              <p>Exchanges</p>
              <p>Community</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div
              className="bg-gray-200 py-2.5 pl-1.5 rounded-l-lg cursor-pointer"
              onClick={() => console.log("Pressed")}
            >
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </div>
            <button
              className="bg-gray-200 py-2.5 rounded-r-lg cursor-pointer pr-32 pl-2 text-gray-400 text-xs text-left"
              onClick={() => console.log("Pressed")}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 mt-36 ml-20 text-white">
          <p className="text-6xl font-bold">Cryptopinas</p>
          <p className="text-lg">Today's Cryptocurrency Prices by Market Cap</p>
        </div>
        <div className="flex flex-row items-center gap-10 pl-20 mt-10">
          <div className="z-40 bg-white rounded-lg drop-shadow-xl flex flex-col w-[24rem] h-60">
            <div className="text-[#1B1212] text-base font-semibold mt-4 pl-4">
              Trending
            </div>
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={3000}
              autoPlay
              infiniteLoop
            >
              <div className="flex flex-col gap-4 text-[#1B1212] text-sm font-semibold text-left mt-4 pl-4">
                <div className="flex flex-row items-center gap-2">
                  1. Bitcon{" "}
                  <p className="text-gray-400 font-normal text-sm">BTC</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  2. Etherium{" "}
                  <p className="text-gray-400 font-normal text-sm">ETH</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  3. Tether{" "}
                  <p className="text-gray-400 font-normal text-sm">USDT</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-[#1B1212] text-sm font-semibold text-left mt-4 pl-4">
                <div>1. Shiba Inu</div>
                <div>2. Shiba Inu</div>
                <div>3. Shiba Inu</div>
              </div>
              <div className="flex flex-col gap-4 text-[#1B1212] text-sm font-semibold text-left mt-4 pl-4">
                <div>1. BTC</div>
                <div>2. BTC</div>
                <div>3. BTC</div>
              </div>
            </Carousel>
          </div>
          <div className="z-40 bg-white rounded-lg drop-shadow-xl flex flex-col w-[24rem] h-60">
            <div className="text-[#1B1212] text-base font-semibold mt-4 pl-4">
              Recently Added
            </div>
            <div className="flex flex-col gap-4 text-[#1B1212] text-sm font-semibold text-left mt-4 pl-4">
              <div className="flex flex-row items-center gap-2">
                1. Bitcon{" "}
                <p className="text-gray-400 font-normal text-sm">BTC</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                2. Etherium{" "}
                <p className="text-gray-400 font-normal text-sm">ETH</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                3. Tether{" "}
                <p className="text-gray-400 font-normal text-sm">USDT</p>
              </div>
            </div>
          </div>
          <div className="z-40 bg-white rounded-lg drop-shadow-xl flex flex-col w-[24rem] h-60">
            <div className="text-[#1B1212] text-base font-semibold mt-4 pl-4">
              Chart
            </div>
            <LineChart
              width={400}
              height={200}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1672985419">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
