const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Exoplanet = function () {
  this.exoplanetData = null;
};

Exoplanet.prototype.getData = function () {
  const pageNumber = this.pageNumber();
  const requestHelper = new
  Request(`https://api.arcsecond.io/exoplanets/?page=${pageNumber}&page_size=1`);
  requestHelper.get()
  .then((exoplanets) => {
    this.exoplanetData = exoplanets.results;
    PubSub.publish('Exoplanet:data-ready', this.exoplanetData);
  });
};

Exoplanet.prototype.pageNumber = function () {
  let minimum = Math.ceil(1);
  let maximum = Math.floor(3000);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

module.exports = Exoplanet;
