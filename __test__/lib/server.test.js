'use strict';

const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /', () => {

    return mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });
  it('should respond properly on post request to categories', () => {

      return mockRequest
          .post('/api/v1/categories')
          .then(results => {
              expect(results.status).toBe(404);
          }).catch(console.error);

  });
  it('should respond properly on request put request to categories', () => {

      return mockRequest
          .put('/api/v1/categories/11')
          .then(results => {
              expect(results.status).toBe(404);
          }).catch(console.error);

  });
  it('should respond properly on request delete request to categories', () => {

      return mockRequest
          .delete('/categories/12')
          .then(results => {
              expect(results.status).toBe(404);
          }).catch(console.error);

  })

});
