import DB from './db';

async function main(): Promise<void> {
  await DB.initialize();


}

main();
