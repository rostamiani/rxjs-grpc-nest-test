import { clientFactory } from 'rxjs-grpc';
import { sample } from './sample';
import * as path from 'path';

const LogServer = clientFactory<sample.ClientFactory>(
  path.join(__dirname, './sample.proto'),
  'sample',
);

export { LogServer };
