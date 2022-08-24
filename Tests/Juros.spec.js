const test = require('tape')
const supertest = require('supertest')
const app = require('../server')
//const { request } = require('express')

// describe('Sample Test', () => {
//     it('should test cesar...', () => {
//         const x = true
//         expect(x).toBe(true)
//     })
// })

// test('Calcular Juro', (t) => {
//     t.assert(JurosController.aplicarJuros(10,5,2) === 11.041, "Testou corretamente")
//     t.end()
// })

describe('Calcular Juros', () => {
    it('aplicar juros...', async () => {
        //JurosController.aplicarJuros(10,5,2)
        const k = await supertest(app).get('/calculaJuros?capital=10&periodo=5&taxa=2')
        expect(k.body).toEqual('11.041')
    })
})
