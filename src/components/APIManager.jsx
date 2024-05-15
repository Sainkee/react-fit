import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "6465dd854fmsh045123ea0fe383cp171999jsn5385b234c4a0",
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

export const getBodyPartList = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/exercises`,
    params: {limit: '20'},
    headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};

export const getExerciseById = async (id) => {
  console.log(id,".....");
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercise with ID ${id}:`, error);
    throw error;
  }
};