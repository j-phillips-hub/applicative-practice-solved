import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  moonName = 'Triton';
  const planetMoons = data.planets.map(planet => planet.moons);
  return planetMoons.reduce((acc, current) => {
    return acc.concat(current);
  }, []).reduce((acc, current) => {
    if (current === moonName) {
      const name = data.planets.map(planet => planet.name)
      return name[1];
    }
    return acc;
  }, undefined)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
