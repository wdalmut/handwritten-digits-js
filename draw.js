const fs = require('fs');

let [node, path, image] = process.argv;

if (!image) {
  process.stdout("You have use node draw.js 9.data\n");
  process.exit(1);
}

let input = [...fs.readFileSync(image)]
      .map((intensity) => (intensity) ? "▒" : " ");

for (let i=0; i<input.length; i++) {
  if (i%28===0 && i !== 0) {
    process.stdout.write("\n");
  }
  process.stdout.write(String(input[i]));
}

process.stdout.write("\n");

