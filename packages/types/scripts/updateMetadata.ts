/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import fs from 'fs';
import { w3cwebsocket as WebSocket } from 'websocket';

const main = (): void => {
  const endpoint = 'ws://localhost:9948';
  console.log('Connecting to ', endpoint);
  const ws = new WebSocket(endpoint);
  ws.onopen = (): void => {
    ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
  };
  ws.onmessage = (msg: any): void => {
    const metadata = JSON.parse(msg.data).result;
    fs.writeFileSync('packages/types/src/metadata/static-latest.ts', `export default '${metadata}'`);
    console.log('Done');
    process.exit(0);
  };
};

main();
