import fetch from 'helper/fetch';

export const fetchFilms= options => {
  let requestURL = 'https://swapi.co/api/films/';
  return fetch(requestURL).then(data => {
    return ['films', data.results];
  });
};

export const fetchPeople= options => {
  let requestURL = 'https://swapi.co/api/people/';
  return fetch(requestURL).then(data => {
    return ['people', data.results];
  });
};

export const fetchPlanets = options => {
  let requestURL = 'https://swapi.co/api/planets/';
  return fetch(requestURL).then(data => {
    return ['planets', data.results];
  });
};

export const fetchSpecies = options => {
  let requestURL = 'https://swapi.co/api/species/';
  return fetch(requestURL).then(data => {
    return ['species', data.results];
  });
};

export const fetchStarships = options => {
  let requestURL = 'https://swapi.co/api/starships/';
  return fetch(requestURL).then(data => {
    return ['starships', data.results];
  });
};

export const fetchVehicles = options => {
  let requestURL = 'https://swapi.co/api/vehicles/';
  return fetch(requestURL).then(data => {
    return ['vehicles', data.results];
  });
};
