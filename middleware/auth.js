module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/dashboard');
      }
    },
  }

// this is to ensure that you can't access the website beyond the home page without signing in 