const fs = require('fs');
const out = require('./out');
const conv = require('./convert');
const synaptic = require('synaptic'); // this line is not needed in the browser

const network = new synaptic.Architect.Perceptron(784,30,10);

const trainer = new synaptic.Trainer(network);

let trainFolder = __dirname + "/img-train";

fs.readdir(trainFolder, (err, files) => {
  files = files.filter((file) => /\.data$/.test(file));

  let trainSet = [];

  process.stdout.write(`Let me create the training set for ${files.length} pictures\n`);
  for (let i=0; i<files.length; i++) {
    let file = files[i];
    let desiredFile = trainFolder + "/" + file.replace(/\.data$/, ".txt");
    let desired = fs.readFileSync(desiredFile).toString();


    let input = [...fs.readFileSync(trainFolder + "/" + file)]
      .map((intensity) => intensity/255)
      //.map((intensity) => intensity/255);

    trainSet.push({input: input, output: out(desired)});
  }

  process.stdout.write("Now we learn\n");
  trainer.train(trainSet, {
    rate: .2,
    iterations: 2,
    error: .05,
    shuffle: true,
    log: 1,
    cost: synaptic.Trainer.cost.CROSS_ENTROPY
  });

  process.stdout.write("Learning complete...\n");
  fs.writeFileSync("./network.json", JSON.stringify(network.toJSON()));
})

