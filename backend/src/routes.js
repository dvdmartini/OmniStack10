const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

//principais metodos HTTP usados para rota : get,post,put, delete;

// Tipos de parametros:

// Query Params: request.query (filtros,ordenação,peginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: Dados:  request.body (Dados para criação ou alteração de um registro)

//MongoDB (não relacionado)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
