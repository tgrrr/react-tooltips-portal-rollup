if (process.env.NODE_ENV === 'production') {
// eslint-disable-next-line global-require
    module.exports = require('./dist/prod.bundle.js');
} else {
// eslint-disable-next-line global-require
    module.exports = require('./dist/dev.bundle.js');
}
