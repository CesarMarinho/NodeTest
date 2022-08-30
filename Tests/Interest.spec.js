const test = require('tape')
const supertest = require('supertest')
const app = require('../server')

describe('Calculate Interest', () => {
    it('apply interest...', async () => {        
        const k = await supertest(app).get('/calculateInterest?capital=10&period=5&rate=2')
        expect(k.body).toEqual('11.041')
    })
})
