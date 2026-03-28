// import { faker } from '@faker-js/faker'

describe('POST /api/users/register', () => {
  it('Deve cadastrar um novo usuário', () => {

    const user = {
      // name: faker.person.fullName(),
      // email: faker.internet.email(),
      name: 'Pedro Cadastro',
      email: 'pedro@cadastro.com.br',
      password: '123456'
    }

    // const randomName = faker.person.fullName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('User successfully registered!')
      expect(response.body.user.id).to.match(/^[-]?\d+$/)
      expect(response.body.user.name).to.eq(user.name)
      expect(response.body.user.email).to.eq(user.email)
    })
  })

  it('Não deve cadastrar com email duplicado', () => {

    const user = {
      // name: faker.person.fullName(),
      // email: faker.internet.email(),
      name: 'Pedro cadastro 2',
      email: 'pedro2@cadastro.com.br',      
      password: '123456'
    }

    // const randomName = faker.person.fullName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz 

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409)
      expect(response.body.error).to.eq('Email already exists!')
    })    
  })

  it('O campo name deve ser obrigatório', () => {

    const user = {
      email: 'pedro3@cadastro.com.br',
      password: 'pwd123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect(response.body.error).to.eq('Name is required!')
    })
  })

  it('O campo email deve ser obrigatório', () => {

    const user = {
      name: 'Paulo Cadastro',
      password: 'pwd123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect(response.body.error).to.eq('Email is required!')
    })
  })

  it('O campo password deve ser obrigatório', () => {

    const user = {
      name: 'Paulo cadastro 2',
      email: 'pedro3@cadastro.com.br'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect(response.body.error).to.eq('Password is required!')
    })
  })

  it('Não deve passar quando o JSON está mal formatado', () => {

    const user = `{
      name: 'Pedro Cadastro 4',
      email: "pedro4@cadastro.com.br"
      password: 'erro'
    }`

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect(response.body.error).to.eq('Invalid JSON format!')
    })
  })

})
