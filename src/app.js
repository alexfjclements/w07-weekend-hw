const Exoplanet = require('./models/exoplanet.js');
const Result = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const newPlanet = document.querySelector('#find-new-planet');
  newPlanet.addEventListener('click', getNewPlanet);
});

const getNewPlanet = function () {
  // document.querySelector('.main-page-contents').innerHTML = "";
  const exoplanets = new Exoplanet();
  exoplanets.getData();

  planetContainer = document.querySelector('.main-page-contents');
  planetView = new Result(planetContainer);
  planetView.bindEvents();
};
