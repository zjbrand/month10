//object オブジェクト　["abc","bdc,"ghj"] [1,2,3,4]
let user = {
  name: "田中一郎",
  age: 25,
  email: "tanaka@gmail.com"
}
// console.log(user.name)
// console.log(user.age)
// console.log(user.email)

user.address = "千葉県"
user.age = 26

//console.log(user)

let users = [
  {
    id: 1,
    name: "田中一郎",
    age: 25,
    email: "tanaka@gmail.com",
    address: "千葉県"
  },
  {
    id: 2,
    name: "鈴木花子",
    age: 35,
    email: "suzuki@gmail.com",
    address: "群馬県"
  },
  {
    id: 3,
    name: "横山大郎",
    age: 77,
    email: "yokoyama@gmail.com",
    address: "埼玉県"
  },
  {
    id: 4,
    name: "松本三郎",
    age: 62,
    email: "matumoto@gmail.com",
    address: "神奈川県"
  }
]

//オブジェクトのイテレート,一覧表示
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

// for (let user of users) {
//   console.log(user)
// }

users.forEach((user, index) => {
  console.log(index, user)
})
// users.forEach((aaa, vvv) => {
//   console.log(aaa, vvv)
// })

let result1 = users.find(function (aaa) {
  return aaa.name == "横山大郎"
})

let result2 = users.find(user => {
  return user.name == "横山大郎"
})
//console.log(result)

let result = users.filter(user => {
  return user.id !== 3
})
console.log(result)

let user5 = {
  id: 5,
  name: "山田結衣",
  age: 42,
  email: "yamada@gmail.com",
  address: "静岡県"
}

users.push("ewjqhiheu１２３２")
users.pop()
console.log(users)