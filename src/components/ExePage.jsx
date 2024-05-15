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
      <div className="container mx-auto bg-slate-300 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{exercise.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <div className="flex justify-between items-center">
              <p>
                <strong>Equipment:</strong> {exercise.equipment}
              </p>
              <p>
                <strong>Body Part:</strong> {exercise.bodyPart}
              </p>
              <p>
                <strong>Target:</strong> {exercise.target}
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              {exercise.instructions.join("\n")}
            </p>
            <h3 className="font-semibold">Secondary Muscles:</h3>
            <p className="text-gray-700 mb-4">
              {exercise.secondaryMuscles.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
