import { app } from "./app";

interface Global {
  app: typeof app;
}
declare const global: Global;
// entryPoints
global.app = app;
