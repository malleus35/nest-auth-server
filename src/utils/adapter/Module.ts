class Module {
  protected readonly providers: Array<unknown>;
  protected readonly controllers: Array<unknown>;
  protected readonly imports: Array<unknown>;
  protected readonly exports: Array<unknown>;

  constructor() {
    this.providers = [];
    this.controllers = [];
    this.imports = [];
    this.exports = [];
  }

  public pushToProviders(provider: unknown): void {
    this.providers.push(provider);
  }

  public pushToControllers(controller: unknown): void {
    this.controllers.push(controller);
  }

  public pushToImports(importItem: unknown): void {
    this.imports.push(importItem);
  }

  public pushToExports(exportItem: unknown): void {
    this.exports.push(exportItem);
  }
}

export default Module;
