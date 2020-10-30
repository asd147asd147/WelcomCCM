const logger = require('./src/utils/logger');
const db = require('./src/models');

require('dotenv').config();

process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  process.exit(1);
});

const server = require('./src/server');

db.sequelize
  .sync({ force: false })
  .then(() => {
    logger.info('database connected');
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      logger.info(`App listening on PORT ${process.env.PORT}`);
  })
});


process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  logger.error('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    logger.error('💥 Process terminated!');
  });
});

// const React = require('react');
// const ReactDOM = require('react-dom');

// class HelloMessage extends React.Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello ",
//       this.props.name
//     );
//   }
// }

// ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementsByTagName('head'));