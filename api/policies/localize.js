module.exports = function(req, res, next) {
  setLocale('es');
  next();
};
