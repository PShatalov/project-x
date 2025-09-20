import dotenv from 'dotenv'
import 'reflect-metadata'
import supertest from 'supertest'

import { Application } from '@app/Application'
import { createContainer } from '@app/container/container'

dotenv.config({path: '../../.env.test'})

void (async () => {
	const app = new Application({
	  container: createContainer(),
	});
  
	await app.init();
  
	// @ts-expect-error augment global
	globalThis.request = supertest.agent(app.getExpressApp());
  })();
