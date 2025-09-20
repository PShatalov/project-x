import { Container } from 'inversify'
import { SuperAgent } from 'superagent'
import supertest from 'supertest'

import { Application } from '@app/Application'
import { createContainer, IContainerOverrides } from '@app/container/container'

import type {Express as ExpressApp} from 'express';

export const createRequest = async (options: ICreateRequestOptions = {}): Promise<SuperAgent<any>> => {

	const container =
		options?.container || createContainer({
			overrides: options.containerOverrides,
		})

	const application = new Application({ container })
	await application.init()

	// @ts-expect-error instance type incompatibility
	return getSupertestInstance(application.getExpressApp())

}

export const createRequestWithContainerOverrides = async (containerOverrides: IContainerOverrides) => {
	return createRequest({ containerOverrides })
}

export interface ICreateRequestOptions {
	containerOverrides?: IContainerOverrides,
	containerApplicableMiddleware?: { apply: any }
	container?: Container,
}

export const getSupertestInstance = (app: ExpressApp) => {
	return supertest.agent(app)
}

