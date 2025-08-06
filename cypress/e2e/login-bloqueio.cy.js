describe('Página de login - Teste de Bloqueio', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
        it('Deve preencher os campos do login com senha incorreta e se errar 3 vezes deve bloquear usuário', () => {
          cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
          cy.get('[data-test="input-loginPassword"]').type('Senha456');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
          cy.get('[data-test="input-loginPassword"]').type('Senha789');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
          cy.get('[data-test="input-loginPassword"]').type('Senha012');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Usuário bloqueado por 3 tentativas erradas').should('be.visible');
        })
})