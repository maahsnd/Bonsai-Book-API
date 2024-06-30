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
  it('should edit a user (required fields only)', async () => {
    const res = await request(app).put(`/users/${userId}`).send({
      username : 'bestuser',
      email : 'best@email.com'
    });
    expect(res.statusCode).toEqual(200);  
    expect(res.body._id).toEqual(userId);
    expect(res.body.username).toEqual('bestuser');
    expect(res.body.email).toEqual('best@email.com');
  });
  it('should delete a user ', async () => {
    const res = await request(app).delete(`/users/${userId}`).send();
    expect(res.statusCode).toEqual(200);  
    expect(res.body._id).toEqual(userId);
    const res1 = await request(app).get(`/users/${userId}`).send();
    expect(res1.statusCode).toEqual(404);
  });
});
