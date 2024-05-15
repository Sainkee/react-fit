import React from "react";
import { getBodyPartList } from "./APIManager";
import { useState, useEffect } from "react";
import Card from "./Card";
import Loder from "./Loder";
import ExePage from "./ExePage";
import { useNavigate } from "react-router-dom";
export default function Allexe() {
  const [exercisedb, setExercisedb] = useState(null);

const Navigate = useNavigate()
  useEffect(() => {
    if (!exercisedb) {
      const fetchExercises = async () => {
        try {
          const data = await getBodyPartList();
          setExercisedb(data);
        } catch (error) {
          console.error("Error fetching exercise data:", error);
        }
      };

      fetchExercises();
    }
  }, [exercisedb]);

  if (!exercisedb) {
    return <Loder />;
  }

  const handleCardClick = (exerciseId) => {
    console.log(exerciseId);
   
    Navigate(`/exePage/${exerciseId}`)
  
  };


  return (
    <>
      <div className="flex justify-center text-center flex-col ">
        <h1 className="text-2xl my-10  font-bold">All Exercises</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto py-10">
          {exercisedb.map((item) => (
            <Card key={item.id} item={item}   ClickHandler={() => handleCardClick(item.id)} />
          ))}
        </div>

       
      </div>
    </>
  );
}
