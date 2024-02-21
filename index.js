// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  const locationOFhq = 42;
  const distance = Math.abs(pickupLocation - locationOFhq);
  return distance;
}

distanceFromHqInBlocks(50);

console.log(distanceFromHqInBlocks(50) + ` blocks away from the HQ !`);

// second function
function distanceFromHqInFeet(pickupLocation) {
  const blockFeet = 264;
  const distanceinFeet = Math.abs(
    blockFeet * distanceFromHqInBlocks(pickupLocation)
  );
  return distanceinFeet;
}

distanceFromHqInFeet(50);
console.log(distanceFromHqInFeet(50), ` feet away!`);

// Third Function

function distanceTravelledInFeet(start, destination) {
  const feet = 264;
  return Math.abs(start - destination) * feet;
}
distanceTravelledInFeet(34, 38);
console.log(distanceTravelledInFeet(34, 38), ` Distance traveled in feet`);

// Fourth function

function calculatesFarePrice(start, destination) {
  const distanceFeet = distanceTravelledInFeet(start, destination);

  if (distanceFeet <= 400) {
    return 0;
  } else if (distanceFeet > 400 && distanceFeet <= 2000) {
    return (distanceFeet - 400) * 0.02;
  } else if (distanceFeet > 2000 && distanceFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
