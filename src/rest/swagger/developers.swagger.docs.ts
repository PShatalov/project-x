import { IApiOperationGetArgs, IApiPathArgs } from 'swagger-express-ts'

export const path: IApiPathArgs = {
	path: "/api/developers",
	name: "Developers",
}

export const getDevelopers: IApiOperationGetArgs = {
	summary: "Get full list of developers (used by developers management dashboard and contracts management dashboard)",
	path: '/',
	parameters: {
	},
	responses: {
		200: {
			description: 'Success',
			type: 'array', model: 'DeveloperDto'
		},
	},
}

export const getDeveloperById: IApiOperationGetArgs = {
	summary: "Get developer by id (used by contracts management dashboard)",
	path: '/{id}',
	parameters: {
		path: { id: { required: true, description: 'Developer id' } },
	},
	responses: {
		200: {
			description: 'Success',
			model: 'DeveloperDto',
		},
	},
}
