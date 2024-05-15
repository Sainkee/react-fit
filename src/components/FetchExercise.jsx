import { useState, useEffect } from "react";
import Loder from "./Loder";
import { getBodyPartList } from "./APIManager";
import Card from "./Card";

export default function FetchExercise() {
  const bodyParts = [
    "BACK",
    "CARDIO",
    "CHEST",
    "LOWER ARMS",
    "LOWER LEGS",
    "NECK",
    "SHOULDERS",
    "UPPER ARMS",
    "UPPER LEGS",
    "WAIST",
  ];

  const [exercisedb, setExercisedb] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [inputValues, setInputValues] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); 

  useEffect(() => {
    if (!exercisedb) {
      const fetchExercises = async () => {
        try {
          const data = await getBodyPartList();
          setExercisedb(data);
          setFilteredExercises(data);
        } catch (error) {
          console.error("Error fetching exercise data:", error);
        }
      };

      fetchExercises();
    }
  }, [exercisedb]);

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    filterExercises(bodyPart);
  };

  const filterExercises = (bodyPart) => {
    if (bodyPart === null) {
      setFilteredExercises(exercisedb);
    } else {
      const filtered = exercisedb.filter((exercise) =>
        exercise.bodyPart.toLowerCase().includes(bodyPart.toLowerCase())
      );
      setFilteredExercises(filtered);
    }
    setCurrentPage(1); 
  };

  const handleInputChange = (e) => {
    setInputValues(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    const filtered = exercisedb.filter((exercise) =>
      exercise.bodyPart.toLowerCase().includes(inputValue)
    );
    setFilteredExercises(filtered);
    setCurrentPage(1); // Reset current page to 1 when searching
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExercises.slice(indexOfFirstItem, indexOfLastItem);

  if (!exercisedb) {
    return <Loder />;
  }

  return (
    <div className="text-center my-10">
      <p className="text-3xl font-semibold capitalize my-10">
        Awesome Exercises You Should Know
      </p>

      <div className="flex justify-center w-[50%] items-center flex-col md:flex-row   gap-3 mx-auto">
        <input
          type="text"
          name=""
          id=""
          value={inputValues}
          className="py-3 px-7 border flex-1 w-full  bg-slate-200"
          placeholder="Search by body part..."
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="bg-red-600 py-[0.65rem]    w-full  md:w-fit  lg:px-6 text-white text-xl"
          onClick={() => {
            setSelectedBodyPart(null);
            filterExercises(null);
            setInputValues("");
          }}
        >
          Clear Filter
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-[90%] md:w-[80%] py-10 mx-auto items-center flex-wrap gap-5">
        {bodyParts.map((body, index) => (
          <span
            className={`cursor-pointer shadow-md px-6 py-4 ${
              selectedBodyPart === body
                ? "bg-blue-500 text-white"
                : "bg-slate-200"
            }`}
            key={index}
            onClick={() => handleBodyPartClick(body)}
          >
            <h1>{body}</h1>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto py-10">
        {currentItems.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <ul className="flex space-x-2">
          {Array.from({ length: Math.ceil(filteredExercises.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`px-3 py-1 rounded-md ${
                  pageNumber === currentPage ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
