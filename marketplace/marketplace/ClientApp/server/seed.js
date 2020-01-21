const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createClient(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const name = faker.name.name();
    const job = faker.name.job();
    const twitter = faker.name.twitter();
    const email = faker.internet.email();

    result.push({
        id: faker.random.uuid(),
        name,
        job,
        twitter,
        email
    });
  }

  return result;
}

function main() {
  const data = {
    clients: createClient(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
