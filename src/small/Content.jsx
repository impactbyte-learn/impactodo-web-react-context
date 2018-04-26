// @flow

export type Color = {
  a: number,
  b: number,
  g: number,
  r: number
};

function foo(x: ?number): string {
  if (x) return x.toString();

  return "default string";
}
