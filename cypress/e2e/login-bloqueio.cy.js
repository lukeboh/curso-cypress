describe('Página de login - Teste de Bloqueio', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
        it('Deve preencher os campos do login com senha incorreta e se errar 3 vezes deve bloquear usuário', () => {
          cy.login('ana@email.com', 'Senha111');
          cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
          cy.login('ana@email.com', 'Senha222');
          cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
          cy.login('ana@email.com', 'Senha333');
          cy.contains('Usuário bloqueado por 3 tentativas erradas').should('be.visible');
        })
})