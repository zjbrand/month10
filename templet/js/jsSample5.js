let age = 15;
let price = 99.9;
//number
console.log(typeof age);
console.log(typeof price);

//string
//let name = '田中一郎';
let name = '内山大郎';
let city = "tokyo";
let num = "100";

console.log(typeof name);
console.log(typeof city);
console.log(typeof num);

let introSelf = `私は${name}申します。今年${age}になりました。`
console.log(introSelf)

//boolean
let isIntro = false
let notIntro = false
console.log(typeof isIntro)
console.log(typeof notIntro)

if (isIntro) {
  console.log(introSelf)
} else {
  console.log("自己紹介しない。")
}

//undefined
let x
console.log(x)

//null
let y = null
console.log(y)
console.log(typeof y)

//object
let user = { name: "鈴木花子", age: 20, city: "千葉県", student: false }
console.log(user.name)
console.log(user.age)

//list リスト
let users = ["Tom", "Jack", "Lucy", "Pujin", "Trump", "zhangsan"]
console.log(typeof users)

//CRUD create reseach update delete  增删改查
users.push("Mike")
users.unshift("Alice")
console.log(users)

//users.pop()
//users.shift()
users.splice(0, 1)
console.log(users)

users[0] = "Alix"
console.log(users)

console.log(users[3])
let index = users.indexOf("Lucy")
console.log(index)
console.log(users.includes("Luke"))
console.log(users.includes("Lucy"))

//遍历 iterate イテレート
console.log(users)
//Alix=>Jack=>Lucy=>Mike=>
let elm = ""
for (let i = 0; i < users.length; i++) {
  //1 aaa = Alix=>
  //2 aaa = Tom=>
  if (i == users.length - 1) {
    elm = elm + users[i]
  } else {
    elm = elm + users[i] + '=>'
  }
}

//Lucy=>

console.log(elm)

//('Alix', 'Jack', 'Lucy', 'Pujin', 'Trump', 'zhangsan', 'Mike')
let spell = "('"
for (let user of users) {
  //console.log(user)
  //user 1 Alix
  //user 2 Jack
  //...
  if (users[users.length - 1] == user) {
    spell = spell + user
  } else {
    spell = spell + user + "','"
  }

}

spell = spell + "')"
//('Alix','Jack','Lucy','Pujin','Trump','zhangsan','Mike','')
console.log(spell)

// users.forEach(function itarateUser(user) {
//   console.log(user)
// })

// users.forEach(function (user) {
//   console.log(user)
// })
// users.forEach(user=> {
//   console.log(user)
// })
users.forEach((user, index) => {
  console.log(index, user)
})


