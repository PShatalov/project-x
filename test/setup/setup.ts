import 'reflect-metadata'
import { Application } from '../../src/Application'
import { createContainer } from '../../src/container/container'
import supertest from 'supertest'

require('dotenv').config()

export const setup = async () => {

	const app = new Application({
		container: createContainer()
	})

	await app.init()
	// @ts-expect-error instance type incompatibility
	globalThis.request = supertest.agent(app.getExpressApp())

}
export default setup
