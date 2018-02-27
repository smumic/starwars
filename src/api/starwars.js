export const fetchApiData = options => {
  let requestURL = 'https://swapi.co/api/';
  return fetch(requestURL).then(data => {
    return data;
  });
};
