const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function (planet, container) {
  this.container = container;
  this.planet = planet;
};

PlanetView.prototype.render = function () {
  const planetName = document.createElement('h2');
  planetName.textContent = `Your exoplanet is ${this.planet[0].name}!`;
  this.container.appendChild(planetName);

  const planetStatsTitle = document.createElement('h3');
  planetStatsTitle.textContent = `The exoplanet's stats are:`;
  this.container.appendChild(planetStatsTitle);

  const planetStatsList = document.createElement('ul');
  planetStatsList.setAttribute('class', 'planet-stats');


  if (this.planet[0].mass != null) {
    const planetMass = document.createElement('li');
    planetMass.textContent = `Planet mass is ${this.planet[0].mass.value}
    ${this.planet[0].mass.unit}`;
    planetStatsList.appendChild(planetMass);
  };

  if (this.planet[0].semi_major_axis != null) {
    const planetSMAxis = document.createElement('li');
    planetSMAxis.textContent = `Semi major axis of orbit is ${this.planet[0].semi_major_axis.value}
    ${this.planet[0].semi_major_axis.unit}`;
    planetStatsList.appendChild(planetSMAxis);
  }

  if (this.planet[0].orbital_period != null) {
    const orbitalPeriod = document.createElement('li');
    orbitalPeriod.textContent = `Orbital period is ${this.planet[0].orbital_period.value}
    ${this.planet[0].orbital_period.unit}`;
    planetStatsList.appendChild(orbitalPeriod);
  }

  if (this.planet[0].eccentricity != null) {
    const eccentricity = document.createElement('li');
    eccentricity.textContent = `Eccentricity of the orbit is ${this.planet[0].eccentricity.value}`;
    planetStatsList.appendChild(eccentricity);
  }

  const detectionMethod = document.createElement('li');
  detectionMethod.textContent = `This planet was detected by ${this.planet[0].detection_method}`;
  planetStatsList.appendChild(detectionMethod);

  const parentStar = document.createElement('li');
  parentStar.textContent = `The parent star is ${this.planet[0].parent_star.name}`;
  planetStatsList.appendChild(parentStar);

  this.container.appendChild(planetStatsList);

};

module.exports = PlanetView;
