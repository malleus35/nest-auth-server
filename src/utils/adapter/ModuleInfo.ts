import {
  Abstract,
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common';

//TODO Make ModuleInfo to have fields selective
class ModuleInfo implements ModuleMetadata {
  public readonly providers?: Array<Provider<any>>;
  public readonly imports?: Array<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  >;
  public readonly controllers?: Array<Type<any>>;
  public readonly exports?: Array<
    | DynamicModule
    | Promise<DynamicModule>
    | string
    | symbol
    | Provider
    | ForwardReference
    | Abstract<any>
    | Function
  >;

  constructor() {
    this.providers = [];
    this.controllers = [];
    this.imports = [];
    this.exports = [];
  }

  public pushToProviders(provider: Provider<any>): void {
    this.providers?.push(provider);
  }

  public pushToControllers(controller: Type<any>): void {
    this.controllers?.push(controller);
  }

  public pushToImports(
    importItem:
      | Type<any>
      | DynamicModule
      | Promise<DynamicModule>
      | ForwardReference,
  ): void {
    this.imports?.push(importItem);
  }

  public pushToExports(
    exportItem:
      | DynamicModule
      | Promise<DynamicModule>
      | string
      | symbol
      | Provider
      | ForwardReference
      | Abstract<any>
      | Function,
  ): void {
    this.exports?.push(exportItem);
  }
}

export default ModuleInfo;
