import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const planetsTemp = data.planets.map(planets => planets.avgTemp);
  const temp = planetsTemp.reduce((acc, temp) => {
    return acc + temp;
  }, 0)
  const avg = temp / planetsTemp.length;

  return avg;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
