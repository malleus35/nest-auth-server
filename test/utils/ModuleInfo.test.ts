import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Module } from '@nestjs/common';
import * as request from 'supertest';

import { AppService } from '../../src/app.service';
import { AppController } from '../../src/app.controller';
import { AppModule } from '../../src/app.module';
import ModuleInfo from '../../src/utils/adapter/ModuleInfo';

describe('Test Module Class', () => {
  let appModuleInfo: ModuleInfo;
  beforeEach(() => {
    appModuleInfo = new ModuleInfo();
    appModuleInfo.pushToControllers(AppController);
    appModuleInfo.pushToProviders(AppService);
  });

  it('test to insert right controllers', () => {
    expect(appModuleInfo.controllers).toEqual([AppController]);
  });

  it('test to insert right providers', () => {
    expect(appModuleInfo.providers).toEqual([AppService]);
  });

  it.skip('test to be in module parameter is equal Object', () => {
    expect(appModuleInfo).toEqual({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    });
  });

  it.skip('test to right Module definition', () => {
    const mockModuleDefinition = jest.fn(Module);

    @mockModuleDefinition(appModuleInfo)
    class MockAppModule {}
  });
});
