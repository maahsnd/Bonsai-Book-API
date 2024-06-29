const request = require('supertest');
const app = require('../app.js'); // Adjust the path as necessary to import your Express app

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/users/').send({
      username: 'testuser'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.username).toEqual('testuser');
  });
});
