// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance = 42 - location;
  return Math.abs(distance);
}
function distanceFromHqInFeet(blocks) {
  let result = 264 * distanceFromHqInBlocks(blocks);
  return result;
}
function distanceTravelledInFeet(destination1, destination2) {
  let finalResult = Math.abs(destination1 - destination2) * 264;
  return finalResult;
}
function calculatesFarePrice(destination3, detination4) {
  let feet = distanceTravelledInFeet(destination3, detination4);
  let price;
  if (feet <= 400) {
    price = 0;
    return price;
  } else if (feet > 400 && feet <= 2000) {
    price = (feet - 400) * 0.02;
    return price;
  } else if (feet > 2000 && feet <= 2500) {
    price = 25;
    return price;
  } else if (feet > 2500) {
    price = 'cannot travel that far'
    return price
  }
}
