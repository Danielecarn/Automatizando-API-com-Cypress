/// <reference types ="cypress"/>

describe('Cadastrar dispositivos', () => {

    it('Cadastrar um dispositivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Dispositivo da dani",
                "data": {
                   "year": 2024,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        })
            .then((resultado) => {
                expect(resultado.status).to.equal(200)
                expect(resultado.status).to.exist
                expect(resultado.body.name).to.equal("Dispositivo da dani")
            })
    })
})