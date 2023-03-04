import { type AccountModel } from 'domain/models/account-model'
import { type AuthenticationParams } from 'domain/usecases/authentication'
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
