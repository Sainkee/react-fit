import React, { useState, useEffect } from "react";

import Loder from "./Loder";
import { useParams } from "react-router-dom";
import { getExerciseById } from "./APIManager";

export default function ExePage() {
  const { ID } = useParams();
  const [exercise, setExercise] = useState();

  useEffect(() => {
    if (!exercise) {
      getExerciseById(ID)
        .then((data) => {
          setExercise(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ID]);

  if (!exercise || Object.keys(exercise).length === 0) {
    return <Loder />;
  }

  return (
    <>
     <div className="mx-auto py-10 bg-gray-100">
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
    <div className="flex flex-wrap items-center gap-10 justify-center">

      <div className="rounded-md overflow-hidden ">
      <h1 className="text-3xl text-center uppercase font-bold mb-4">{exercise.name}</h1>

        <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto" />
        <div className="flex justify-center mt-4 space-x-2">
          <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">{exercise.bodyPart}</span>
          <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">{exercise.target}</span>
          <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">{exercise.equipment}</span>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3">
       
        <ol className="list-decimal list-inside">
          {exercise.instructions.map((item, index) => (
            <li key={index} className="mb-2 text-gray-700">{item}</li>
          ))}
        </ol>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
