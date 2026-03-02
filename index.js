#!/usr/bin/env node

function main() {
  console.log('Hello from test-please-ignore');
}

if (require.main === module) {
  main();
}

module.exports = { main };
