// Напиши скрипт, который, для объекта user, последовательно:

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
}

// добавляет поле mood со значением 'happy'
user.mood = "happy"
// console.log(user)

// заменяет значение hobby на 'skydiving'
user.hobby = "skydiving"
// console.log(user)

// заменяет значение premium на false
user.premium = false
// console.log(user)

// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of

const keys = Object.keys(user)

for (const key of keys) {
  console.log("Value: ", user[key])
}
