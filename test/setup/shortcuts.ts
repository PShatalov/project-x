import type supertest from 'supertest';

declare global {
  var request: supertest.SuperTest<supertest.Test>;
}

export const request = globalThis.request

