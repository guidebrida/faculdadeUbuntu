module.exports = (app) => {
  const controller = require('../controller/pessoaController')();

  app.route('/api/pessoa').get(controller.findAll);
  app.route('/api/pessoa/:id').get(controller.findById);
  app.route('/api/pessoa').post(controller.create);
  app.route('/api/pessoa/:id').put(controller.update);
  app.route('/api/pessoa/:id').delete(controller.delete);
};
