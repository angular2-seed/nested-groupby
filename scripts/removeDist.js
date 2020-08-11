const rimraf = require('rimraf');

rimraf('dist/', {}, function (error) {
  if (error) {
    console.log('error: ', error);
  }
});

