function getTotal(one: number, two: number) : number { // 函数返回类型注解
  return one + two
}
const total = getTotal(1, 2)

function sayHello() : void { // 函数返回类型注解为空, 即不能有返回值
  console.log('hello world');
}

function forNever() : never {
  while(true) {}
  console.log('从不会被执行');
}

function getNumber({one} : {one: number}) { // 函数参数注解
  return one
}
const one = getNumber({one: 1})