import { mocks, mockImages } from "./mock"
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise ((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  })
};

export const restaurantsTransform = ({ results = [] }) => {
  // const newResult = camelize(results.length);
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random()* (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  
  // console.log(mappedResults);

  return camelize(mappedResults);
};

// restaurantsRequest()
// .then(restaurantsTransform)
// .then((transformedResponse) => {
//   // console.log(transformedResponse);
// })
// .catch((err) => {
//   console.log(err);
// });