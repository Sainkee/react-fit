import React from "react";
import hero from "../assets/gym2.jpg";
import { Link } from "react-router-dom";
import FetchExercise from "./FetchExercise";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigation = useNavigate();

  return (
    <>
      <div className="  relative h-[70dvh] w-full flex justify-center items-center text-white ">
        <img
          src={hero}
          alt=""
          className="object-cover  absolute h-full w-full -z-10"
        />
        <div className="text-center">
          <h1 className="text-5xl my-10 font-bold ">
            FASTER, STRONGER <br />
            <span className="text-red-600">FIGHT</span> TO THE END
          </h1>
          <Link
            onClick={Navigation(`/all/`)}
            className="py-3 px-6  text-2xl  bg-red-600 rounded-full"
          >
            Get all Exercices
          </Link>
        </div>
      </div>
      <FetchExercise />
    </>
  );
}
