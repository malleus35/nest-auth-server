import { AppService } from '../../src/app.service';
import { AppController } from '../../src/app.controller';
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

  it('test to be in module parameter is equal Object', () => {
    const originModuleInfo = {
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    };

    expect(appModuleInfo).toHaveProperty('controllers', [AppController]);
    expect(appModuleInfo).toHaveProperty('providers', [AppService]);

    expect(originModuleInfo).toHaveProperty('controllers', [AppController]);
    expect(originModuleInfo).toHaveProperty('providers', [AppService]);
  });
});
