import { inject } from 'inversify'
import {
	interfaces,
	controller,
	BaseHttpController,
	httpGet, requestParam
} from 'inversify-express-utils';
import { ApiOperationGet, ApiPath } from 'swagger-express-ts';

import { DevelopersService } from '@domain/developers/services/developers.service'

import { DeveloperDto } from '@rest/dto/developers.responses.dto'
import {
	path, getDevelopers, getDeveloperById
} from '@rest/swagger/developers.swagger.docs';

@controller('/api/developers')
@ApiPath(path)
export class DevelopersController extends BaseHttpController implements interfaces.Controller {

	constructor(
		@inject('DevelopersService') private developersService: DevelopersService,
	){ super() }

	@httpGet('/')
	@ApiOperationGet(getDevelopers)
	public async getDevelopers(): Promise<DeveloperDto[]> {
		return this.developersService.getDevelopers()
	}

	@httpGet('/:id')
	@ApiOperationGet(getDeveloperById)
	public async getDeveloperById(@requestParam('id') id: string): Promise<DeveloperDto | undefined> {
		return this.developersService.getDeveloperById(id)
	}

}
