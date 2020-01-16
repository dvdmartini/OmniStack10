const { Router } = require('express');
const axios = require('axios');
const routes = Router();
const Dev = require('./models/Dev');

//principais metodos HTTP usados para rota : get,post,put, delete;

// Tipos de parametros:

// Query Params: request.query (filtros,ordenação,peginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: Dados:  request.body (Dados para criação ou alteração de um registro)

//MongoDB (não relacionado)
routes.post('/devs', async (request, response) => {
  const { github_username, techs, latitute, longitude } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const location = {
    type: 'Point',
    coordinates: [longitude, latitute],
  };

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    location,
  });

  return response.json(dev);
});

module.exports = routes;
