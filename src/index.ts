export function helloWorld(): string {
  const message = "Hello World from my example modern npm package!";
  return message;
}

export function goodBye(): string {
  const message = "Goodbye from my example modern npm package!";
  return message;
}

console.log(goodBye());
console.log(helloWorld());

export default { goodBye, helloWorld };
