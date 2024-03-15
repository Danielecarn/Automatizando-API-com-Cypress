/// <reference types ="cypress"/>

describe('Buscar dispositivos', () => {

    it('Buscar um dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6'
        })
            .then((resultado) => {
                expect(resultado.status).to.equal(200)
                expect(resultado.status).to.exist
                expect(resultado.body.name).to.equal("Apple AirPods")
            })
    })

    it('Buscar todos os dispositivos', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        })
            .then((resultado) => {
                resultado.body.forEach(element => {
                    expect(element).to.have.property('id')
                    expect(element).to.have.property('name')
                    expect(element).to.have.property('data')
                });
            })
    })
})