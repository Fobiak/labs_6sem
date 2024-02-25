console.log("          Первое задание")
const studentObj = {}
const studentArr = []

console.log(typeof studentObj)
console.log(typeof studentArr)

console.log(studentObj instanceof Object);
console.log(studentArr instanceof Array);


console.log("")
console.log("          Второе задание")
//Мутация в JavaScript.
// Используйте Object.assign() для создания нового объекта,
// объединяя свойства из нескольких исходных объектов.
// Измените значения в новом объекте и проверьте как это влияет
// на исходные объекты (20-21).

//Исходные объекты
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
//объединяем
const copyObj = Object.assign({}, obj1, obj2)

console.log(copyObj)
//Изменяем значения в новои объекте
copyObj.a = 6

console.log("Измененный объект", copyObj)
console.log("Исходный объект", obj1)


console.log("")
console.log("          Третье задание")
//Создайте функцию и присвойте ей пользовательское свойство о
// версии функции или другие метаданные. Получите доступ к этому
// свойству, а также измените его значение. Используйте свойство
// name функции для получения имени функции. Используйте свойство
// length, чтобы узнать количество параметров функции (23-25)

function square(x) {
    console.log(x*x)
}

square.description = "Эта функция возводит число в квадрат"
console.log("Задача функции: ", square.description)

console.log("Имя функции: ", square.name)
console.log("Количество аргументов:", square.length)


console.log("")
console.log("        Четвертое задание")
//Создайте функциональное выражение и стрелочную функцию
// для проверки статуса студента на основе его средней оценки.
// Статус студента определяется следующим образом: если средняя
// оценка студента равна или выше 70, то статус присваивается
// "Студент успешно сдал предмет" (27-33).

const students = [
    {name: 'Иван Черников', id: 1, mark: 20},
    {name: 'Данил Халиков', id: 2, mark: 100},
    {name: 'Дмитрий Сайсанов', id: 3, mark: 70}
]

const checkFunc = (students) => {
    return students.filter(student => student.mark >= 70)
        .map(student => student.name)
}


const foundStudents = checkFunc(students)
console.log("Эти студенты успешно сдали предмет: ", foundStudents.toString())


console.log("")
console.log("        Пятое задание")
//Создайте массив студентов (информация о студентах представлена
// в виде строк, например, "Петр") и
// выполните следующие операции. 1) Добавьте новых студентов
// в конец массива; 2) удалите из массива студентов, чьи имена
// не начинаются с буквы "А" ("а"); 3) измените все имена
// студентов в массиве так, чтобы первая буква каждого имени
// была в верхнем регистре, а все остальные буквы — в нижнем; 4)
// посчитайте общее количество студентов в массиве (34-36).
//1 зад
const studentsArr = ["Петр"]

console.log("Исходный массив", studentsArr)

studentsArr.push("иван", "аркадий", "Ангелина")

console.log("1. Добавили новых", studentsArr)
//2 зад
const newArr = []
for ( let name of studentsArr) {
    if (name.startsWith("А", "а"))
        newArr.push(name)
}
console.log("2. Удалили без А", newArr)

//3 зад
const newArr2 = []
for ( let name of studentsArr) {
    name = name.charAt(0).toUpperCase() + name.slice(1)
    newArr2.push(name)
}
console.log("3. Верхний регистр", newArr2)

//4 зад

console.log("4. Количество студнтов: ", studentsArr.length);

console.log("")
console.log("        Шестое задание")
//Создайте массив объектов, представляющих студентов,
// с различными характеристиками, такими как имя, возраст и
// средний балл студента. Создайте анонимную стрелочную функцию
// обратного вызова, которая будет применяться для фильтрации
// массива объектов (например, возвращать тех студентов, у
// которых средний балл выше определенного значения).
// Используйте метод map() для создания нового массива,
// содержащего только имена студентов (37-39).

const underGraduate = [
    {name: 'Иван Черников', age: 21, mark: 20},
    {name: 'Данил Халиков', age: 20, mark: 100},
    {name: 'Дмитрий Сайсанов', age: 20, mark: 70}
];

const filterByMark = (students, minMark) => {
    return students.filter(student => student.mark > minMark);
};

const filteredUnderGraduate = filterByMark(underGraduate, 50);
const newArrUnderGraduate = filteredUnderGraduate.map(stud => stud.name);

console.log("Студенты, которые преодолели отметку в 50 баллов: ", newArrUnderGraduate);

console.log("")
console.log("        Седьмое задание")
//Используя деструктуризацию объекта, извлеките имя студента
// и его возраст. Затем, используя эту информацию, создайте
// новый массив, который объединяет извлеченные свойства и
// добавляет любое дополнительное свойство (40).

const underGraduates = [
    {name: 'Иван Черников', age: 21, mark: 20},
];

const [{ name, age }] = underGraduates;
const work = "student"
const newArrUnderGraduates = [name, age, work]

console.log(newArrUnderGraduates)