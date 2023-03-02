import { type AuthenticationParams } from 'domain/usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}
