const request = require('supertest');
const server = require ('./server.js');

describe('server.js', () => {
    it('should set the testing enviroment', () => {
            expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        //return code
        //return type
        //body shape/structure


        it("it should return 200", () => {
            return request(server).get('/')
                .then( res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return {api:up}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({api: 'up'});

        });


    });
});