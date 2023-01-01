import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const obj = {};

  data.asteroids.map((year) => {
    obj[year.discoveryYear] = obj[year.discoveryYear] + 1 || 1;
  });

  let keys = Object.keys(obj);
  let value = Object.values(obj);
  let max = Math.max(...value)
  let index = value.findIndex((num) => { return num == max });

  return Number(keys[index]);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
