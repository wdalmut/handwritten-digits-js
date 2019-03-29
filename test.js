const fs = require('fs');
const out = require('./out');
const conv = require('./convert');
const synaptic = require('synaptic');


const data = require('./network.json');
const network = synaptic.Network.fromJSON(data);
const trainer = new synaptic.Trainer(network);

let testFolder = __dirname + "/img-test";

fs.readdir(testFolder, (err, files) => {
  files = files.filter((file) => /\.data$/.test(file));

  let trainSet = [];

  process.stdout.write("Let me create the test set\n");
  for (let i=0; i<files.length; i++) {
    let file = files[i];
    let desired = fs.readFileSync(testFolder + "/" + file.replace(/\.data$/, ".txt")).toString();

    let input = [...fs.readFileSync(testFolder + "/" + file)]
      .map((intensity) => parseInt(intensity))
      .map((intensity) => intensity/255);

    trainSet.push({input, output: out(desired)});
  }

  process.stdout.write("Now we test\n");
  let test = trainer.test(trainSet, {
    iterations: 1,
    log: 1000,
  });

  process.stdout.write(JSON.stringify(test)+"\n");
  process.stdout.write("Test complete...\n");
})

//fs.writeFileSync("./network.json", JSON.stringify(network.toJSON()));


