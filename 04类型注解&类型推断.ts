let count: number // 类型注解
count = 123

function getTotal(one: number, two: number) {
  return one + two
}
const total = getTotal(1, 2)

const xiaoJieJie = { // 类型推断: 自动推断出 xiaoJieJie 对象里的 name 和 age 的类型
  name: '刘英',
  age: 18
}