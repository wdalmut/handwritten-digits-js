# MNIST Handwritten digits

You can generate the MNIST images using [wdalmut/mnist-handwritten-digits](https://github.com/wdalmut/mnist-handwritten-digits)

This project could help you to extract all images from the source files
(included in that repository).

## Test a single letter

```sh
node get.js img-test/13.data img-test/13.txt
```

## Test the network

```sh
node test.js
```

## Train the network

If you want to create a new network configuration, you can update the network
configuration in `train.js` file.

The scheduled training during around around 7 hours

```
node train.js
```

## Draw a digit

To get the digit directly in the CLI

```sh
node draw.js img-test/11.data
      ▒▒▒▒▒▒▒▒▒
     ▒▒▒▒▒▒▒▒▒▒
   ▒▒▒▒▒▒▒▒▒▒▒▒
   ▒▒▒▒▒  ▒▒▒▒▒
  ▒▒▒▒▒   ▒▒▒▒
 ▒▒▒▒▒  ▒▒▒▒▒
▒▒▒▒   ▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒
       ▒▒▒▒
       ▒▒▒▒
        ▒▒▒
       ▒▒▒▒
       ▒▒▒▒
       ▒▒▒▒
        ▒▒▒
        ▒▒▒▒
        ▒▒▒▒▒
         ▒▒▒▒
```

