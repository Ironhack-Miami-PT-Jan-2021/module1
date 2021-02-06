function sum(args) {
  if (args === undefined) {
    throw new Error("No parameter passed");
  }
  return args.reduce((a, v) => a + v, 0);
}
