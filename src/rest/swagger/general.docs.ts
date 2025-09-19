import { ISwaggerExpressOptions } from 'swagger-express-ts';

export const generalDoc: ISwaggerExpressOptions = {
	definition: {
		info: {
			title: "Lemon API",
			version: `1.0.0`,
		},
		securityDefinitions: {
		},
		schemes: ['http']
	}
}
