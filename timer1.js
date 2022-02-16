//Simple timer in Javascript
const args = process.argv.slice(2);
let sorted = args.sort((a, b) => a - b);
let filtered = sorted.filter(number => (number > 0))
  for (const n of filtered) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, n * 1000);
}
