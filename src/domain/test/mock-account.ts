import { type AccountModel } from 'domain/models'
import { type AuthenticationParams } from 'domain/usecases'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.datatype.uuid()
  }
}
