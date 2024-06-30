const request = require('supertest');
const app = require('../app.js');

describe('User API', () => {
  let userId; 

  it('should create a new user (required fields only)', async () => {
    const res = await request(app).post('/users/').send({
      username: 'testuser',
      email: 'test@email.com',
      passwordHash: 'testpassword',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.username).toEqual('testuser');
    userId = res.body._id; 
  });

  it('should fetch a user (required fields only)', async () => {
    const res = await request(app).get(`/users/${userId}`).send();
    expect(res.statusCode).toEqual(200);  
    expect(res.body._id).toEqual(userId);
    expect(res.body.username).toEqual('testuser');
    expect(res.body.email).toEqual('test@email.com');
  });
});
