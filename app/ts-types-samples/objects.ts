let userData: {age: number, name: string} = {
  age: 28,
  name: 'Jakub Zurek',
};
// userData = {
//   address: 'krakow',
//   height: 185,
// };

userData = {
  age: 27,
  name: 'Phillipe Moreira',
};

// Complex object
const complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 200, 300],

  output(all: boolean): number[] {
    return all ? this.data : [];
  },
};

// Type aliases

/* tslint:disable */
type Complex = {data: number[], output: (all: boolean) => number[]};
/* tslint:enable */

const complex2: Complex = {
  data: [100, 200, 300],

  output(all: boolean): number[] {
    return all ? this.data : [];
  },
};
