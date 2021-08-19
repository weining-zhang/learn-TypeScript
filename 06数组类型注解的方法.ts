const numberArr: number[] = [1, 2, 3] // 数字类型数组
const stringArr: string[] = ['1', '2', '3'] // 字符串类型数组
const undefinedArr: undefined[] = [undefined, undefined]
const arr: (number | string)[] = [1, 'string', 3] // 数字和字符串类型数组

// type alias 类型别名
type Lady = { name: string, age: number } // 用 type 关键字
class Madam { // 用对象形式
  name: string
  age: number
}

const Ladys: Lady[] = [
  {name: '刘英', age: 18},
  {name: '谢大脚', age: 28},
]