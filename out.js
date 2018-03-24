
module.exports = (number) => {
  switch (number) {
    case '0':
      return [1,0,0,0,0,0,0,0,0,0];
    case '1':
      return [0,1,0,0,0,0,0,0,0,0];
    case '2':
      return [0,0,1,0,0,0,0,0,0,0];
    case '3':
      return [0,0,0,1,0,0,0,0,0,0];
    case '4':
      return [0,0,0,0,1,0,0,0,0,0];
    case '5':
      return [0,0,0,0,0,1,0,0,0,0];
    case '6':
      return [0,0,0,0,0,0,1,0,0,0];
    case '7':
      return [0,0,0,0,0,0,0,1,0,0];
    case '8':
      return [0,0,0,0,0,0,0,0,1,0];
    case '9':
      return [0,0,0,0,0,0,0,0,0,1];
  };
};
