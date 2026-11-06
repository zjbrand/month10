let password = "  ab dcdf "
console.log(password.length)
//ユーザーが間違えてスペースを入力する事があります
//文字の前後の空白だけを削除します
password = password.trim()
console.log(password)
console.log(password.length)

// 要件：
// もし8文字以上、メッセージで表示：使用できます。
// 8文字未満：8文字以上入力してください。
// ※コンソールの中に表示すればいいです

if (password.length >= 8) {
  console.log("使用できます。")
} else {
  console.log("8文字以上入力してください")
}

//includes(),文字が含まれているか調べる
let email = "test@gmail.com"

let result = email.includes("@")
let resGmail = email.includes("gmail")
console.log(resGmail)

//startsWith(),endsWith(),文字列の最初や最後をチェックする
let filename = "report.pdf"

let resFile = filename.endsWith(".jpg")
let resFileStart = filename.startsWith("report")
console.log(resFile)
console.log(resFileStart)

//replace(),文字を置換する
let message = "Hello python"
//Hello JavaScript
let resReplace = message.replace("python", "JavaScript")
console.log(resReplace)

let comment = "この商品は最悪です"
let resComment = comment.replace("最悪", "******")
console.log(resComment)

//split(),文字列を分割する
let fruits = "apple,banana,orange"
let resSplit = fruits.split(",")
console.log(resSplit)

//.csv形式　001 Tanaka tannaka@gmail.com
let data = "001 Tanaka tannaka@gmail.com"
let resDate = data.split(" ")
console.log(resDate)

//toUpperCase(),toLowerCase(),大文字又は小文字を変換する
let text = "JavaScript"
let restextUp = text.toUpperCase()
let restextLow = text.toLowerCase()
console.log(restextUp)
console.log(restextLow)

//条件：3文字以上、10文字以下、前後の空白は無視する
//条件を満たした場合、メッセージ：使用可能なユーザー名です
//条件が未満たした場合：ユーザー名は３～１０文字で入力してください
let username = "  Tannka    "
username = username.trim()

if (username.length >= 3 && username.length <= 10) {
  console.log("使用可能なユーザー名です")
} else {
  console.log("ユーザー名は３～１０文字で入力してください")
}

//正規表現、記法：
// [0-9] 0~9のどれか１文字
//[a-z] 英字小文字
//[a-zA-Z]　英字
//^先頭 $最後
//+ 文字１以上　*文字０以上　? 0回又は１回
//{3} 3文字　[0-9]{3}  ^[0-9]{3}$
let pattern = /^[0-9]+$/
let inputtext = "12345"

let matchPtt1 = pattern.test(inputtext)
let matchPtt2 = inputtext.match(pattern)
console.log(matchPtt1)//true
console.log(matchPtt2)

//日本の郵便番号の検査
let postaCode = "1232-457"
let postPattern = /^\d{3}-[0-9]{4}$/
let phonePattern = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/
let phoneNumb = "090-8765-4321"

if (postPattern.test(postaCode)) {
  console.log("これは日本の郵便番号です")
} else {
  console.log("日本の郵便番号ではない。")
}

if (phonePattern.test(phoneNumb)) {
  console.log("これは日本の電話番号です")
} else {
  console.log("日本の電話番号ではない。")
}