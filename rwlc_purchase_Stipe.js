describe('Verify Home Page', () => {

    it('Visit the site', () => {
        cy.viewport(1366, 768)
        cy.visit('https://rugbyleagueworldcup2021.nuarcalabsnft.com/#/') // rlwc dev site
        .wait(2000)
    })



    it('Click "login/Sign Up"', () => {
    cy.viewport(1366, 768)
    cy.get('li > #btn-login').click()
    })



    it('Give crediential', () => {
    cy.viewport(1366, 768)
    .wait(3000)
    cy.get('#signInName').type('nashrif@nuarca.com')
    cy.get('#password').type('Test@1234')
    cy.get('#next').click() 

    })

    it('Click on store', () => {
        cy.viewport(1366, 768)
        .wait(20000) 
        cy.get(':nth-child(4) > .nav-link').click()
        .wait(5000)
        cy.get(':nth-child(1) > .pack-item-container > a > .pack-item-image > img').click() // click on 1st pack
        .wait(4000)
        cy.get('.btn-primary').click() // click on purchase
        .wait(5000)

        // Start to get the iframe for stripe payment
        cy.get('body > app-root > div > app-pack-details > app-modal > div > div > div > app-purchase-pack-modal > div > div.dialog-body > app-stripe-checkout > div.grid-1 > div:nth-child(1) > div > div.form-input > ngx-stripe-card-number > div > div > iframe').then(function($iFrameCardNumber){
           const iFramContent_cardnNumber = $iFrameCardNumber.contents().find('#root > form > span:nth-child(4) > div > div.CardNumberField-input-wrapper > span > input')
           cy.wrap(iFramContent_cardnNumber)
           .clear()
           .type('4000056655665556') //insert the card number here

        })
        // get the expiry under iframe
        cy.get('body > app-root > div > app-pack-details > app-modal > div > div > div > app-purchase-pack-modal > div > div.dialog-body > app-stripe-checkout > div.grid-1 > div:nth-child(2) > div > div.col-6 > div > div.form-input > ngx-stripe-card-expiry > div > div > iframe').then(function($iFrameExpiry){
            const iFramContent_Expiry = $iFrameExpiry.contents().find('#root > form > span:nth-child(4) > span > input')
            cy.wrap(iFramContent_Expiry)
            .clear()
            .type('0327') // insert expirey date here
        })
        // get the CVC under iframe
        cy.get('body > app-root > div > app-pack-details > app-modal > div > div > div > app-purchase-pack-modal > div > div.dialog-body > app-stripe-checkout > div.grid-1 > div:nth-child(2) > div > div.col-3 > div > div.form-input > ngx-stripe-card-cvc > div > div > iframe').then(function($iFrameCVC){
            const iFrameContent_CVC = $iFrameCVC.contents().find('#root > form > span:nth-child(4) > span > input')
            cy.wrap(iFrameContent_CVC)
            .clear()
            .type('123') // insert CVC here
        })


        cy.get('#use-method-btn').click() // click on the PAY NOW Button
        .wait(5000)
        cy.contains("Purchase Complete").should("exist")// Compare the message
        .wait(5000)
        cy.get('.grid-center > .col-auto > .btn-default > .btn-text').click()
        .wait(5000)
    
    })

    it('Click Open Your Pack', () => {
        cy.viewport(1366, 768)
        cy.get('.tooltip-holder > .btn-default').click() //click open your pack
        .wait(10000)
        cy.get('#btn-reveal-all').click() // click reveal all
        .wait(5000)
        cy.get('#btn-view-my-cards').click() // click view my cards 
    }) 

})
