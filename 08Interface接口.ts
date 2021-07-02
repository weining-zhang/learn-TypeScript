const screenResume = (name: string, age: number, bust: number) => {
  age < 24 && bust >= 90 && console.log(name + '进入面试');
  (age >= 24 || bust < 90) && console.log(name + '你被淘汰');
}

const getResume = (name: string, age: number, bust: number) => {
  console.log(name + '年龄是' + age);
  console.log(name + '胸围是' + bust);
}

screenResume('Jessica', 28, 99)
getResume('Jessica', 28, 99)  