describe('Verify Home Page', () => {
    it('Visit the site', () => {
        cy.viewport(1366, 768)
        cy.visit('https://nwldigitaldugout-qa.nuarcalabsnft.com/#/')
        .wait(5000) 
    })
    
    it('Click MarketPlace', () => {
        cy.get('#btn-explore-marketplace').click()
        .wait(5000)         
         })
    
    it('Click pack store', () => {
        cy.viewport(1366, 768)
        cy.get('img').click()
        .wait(2000) 
        cy.get('#btn-visit-pack-store').click()
        .wait(5000)
        cy.get('#header-logo > a > img').click()
        .wait(2000) 
        })
     })

     describe('Verify Header Menu', () => {  
    it('Click My Cards', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(2) > .nav-link').click()
        .wait(5000)
        cy.get('img').click()

        })
    it('Click Store', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(3) > .nav-link').click()
        .wait(2000)
        cy.get('.featured-item-button > .btn-default').click()
        .wait(2000)
        cy.get('.grid-noGutter > :nth-child(1) > .btn-default > .btn-text').click()
        .wait(2000)
        cy.get('img').click()
        .wait(2000)
        })
    it('click Marketplace', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(4) > .nav-link').click()
        .wait(2000)
        cy.get('p > a').click()
        .wait(2000)
        })
    it('click FAQs', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(5) > .nav-link').click()
        .wait(2000)
        })
    }) 

describe('Verify Footers', () => {  
    it('click PRODUCT', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(1) > .footer-links > :nth-child(1) > a').click()
        .wait(2000)
        cy.get(':nth-child(1) > .footer-links > :nth-child(2) > a').click()
        .wait(2000)
    })
    it('click COMPANY', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(2) > .footer-links > :nth-child(3) > a').click()
        .wait(2000)
        cy.get(':nth-child(2) > .footer-links > :nth-child(4) > a').click()
        .wait(2000)
    })
    it('click HELP', () => {
        cy.viewport(1366, 768)
        cy.get(':nth-child(3) > .footer-links > li > a').click()
        .wait(2000)
    })
})