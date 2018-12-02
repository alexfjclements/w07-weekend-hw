const PubSub = require('../helpers/pub_sub.js');
const PlanetView = require('./planet_view.js');

const ResultView = function (container) {
  this.contentsContainer = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Exoplanet:data-ready', (event) => {
    this.exoplanet = event.detail;
    this.render();
  });
};

ResultView.prototype.render = function () {
  const planets = document.createElement('div');
  planets.setAttribute('class', 'planet-container');

  const planetView = new PlanetView(this.exoplanet, planets);
  planetView.render();
  this.contentsContainer.appendChild(planets);
};

module.exports = ResultView;
