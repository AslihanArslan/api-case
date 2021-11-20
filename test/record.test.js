const request = require('supertest')
const app = require('../app');


describe("HTTP POST API endpoint", () => {
    it("should return 500 status because of missing parameters", async done => {
        const result = await request(app)
            .post("/records")
            .send({
                "startDate": "2016-01-26",
                "maxCount": 3000
            })
        expect(result.status).toBe(500)
        expect(result.body.code).toBe(1)
        done()
    })
    it("should return 500 status because of wrong maxCount and minCount params", async done => {
        const result = await request(app)
            .post("/records")
            .send({
                "startDate": "2016-01-26",
                "endDate": "20-02-60",
                "minCount": 5000,
                "maxCount": 3000
            })
        expect(result.status).toBe(500)
        expect(result.body.code).toBe(3)
        done()
    })
    it("should return 500 status because of wrong type of parameters", async done => {
        const result = await request(app)
            .post("/records")
            .send({
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": "2700",
                "maxCount": "3000"
            })
        expect(result.status).toBe(500)
        expect(result.body.code).toBe(2)
        done()
    })
    
    test('Search Records Simple', () => {
        request(app).post('/records').send({
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        }).expect(200);
    });
  })