const fs = require('fs');
const conv = require('./convert');
const synaptic = require('synaptic');

const data = require('./network.json');
const network = synaptic.Network.fromJSON(data);

console.log("network loaded");

let [node, path, image, label] = process.argv;

if (!image || !label) {
  process.stdout.write("You have use node get.js 9.data 9.txt\n");
  process.exit(1);
}

let input = [...fs.readFileSync(image)]
      .map((intensity) => (intensity) ? 1 : 0)
      //.map((intensity) => intensity/255);

let desired = fs.readFileSync(label);

let result = network.activate(input);
let converted = conv(result);

process.stdout.write(`You get ${converted} and the real value is: ${desired}\n`);
process.stdout.write(JSON.stringify(result) + "\n");

