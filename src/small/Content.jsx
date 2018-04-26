function foo(x: ?number): string {
  if (x) return x;
  x.toString();

  return "default string";
}
