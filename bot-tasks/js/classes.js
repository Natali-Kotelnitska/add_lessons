class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    let index = this.items.indexOf(itemToRemove);
    this.items.splice(index, 1);
  }
}

// Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//Task 11/20 Module 5
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// console.log(StringBuilder.getValue());
// Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//TASK 12/20 Module 5
//Допустим, почта пользователя должна быть недоступна для
// прямого изменения из вне, то есть приватна.
// Добавляя к имени свойства символ # мы делаем его приватным.
// Объявление приватного свойства до инциализации
//  в конструкторе - обязательно.
class Car {
  // Change code below this line

  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
  // Change code above this line
}

// TASK 13/20 Module 5 (склад)
class Storage {
  // Change code below this line
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// *
// Геттери і сеттери
{
  class User {
    #email;

    constructor({ name, email }) {
      this.name = name;
      this.#email = email;
    }

    // Геттер email
    get email() {
      return this.#email;
    }

    // Сеттер email
    set email(newEmail) {
      if (newEmail === '') {
        console.error('Ошибка! Почта не может быть пустой строкой!');
        return;
      }

      this.#email = newEmail;
    }
  }
}

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

{
  //TASK 15/20 (ГЕТТЕРИ І СЕТТЕРИ)
  class Car {
    // Change code below this line
    #brand;
    #model;
    #price;

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }

    get brand() {
      return this.#brand;
    }

    set brand(newBrand) {
      this.#brand = newBrand;
    }

    get model() {
      return this.#model;
    }

    set model(newModel) {
      this.#model = newModel;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      this.#price = newPrice;
    }
    // Change code above this line
  }
}

{
  // *
  //Кроме публичных и приватных свойств будущего экземпляра,
  // в классе можно объявить его собственные свойства,
  // доступные только классу, но не его экземплярам -
  // статические свойства(static).
  //Статические свойства объявляются в теле класса.
  // Перед именем свойства добавляется ключевое слово static.
  // Статические свойства также могут быть приватные (#)
  class User {
    // Объявление и инициализация статического свойства
    static Roles = {
      ADMIN: 'admin',
      EDITOR: 'editor',
    };

    #email;
    #role;

    constructor({ email, role }) {
      this.#email = email;
      this.#role = role;
    }

    get role() {
      return this.#role;
    }

    set role(newRole) {
      this.#role = newRole;
    }
  }

  const mango = new User({
    email: 'mango@mail.com',
    role: User.Roles.ADMIN,
  });

  console.log(mango.Roles); // undefined
  console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

  console.log(mango.role); // "admin"
  mango.role = User.Roles.EDITOR;
  console.log(mango.role); // "editor"
}

{
  //TASK 16/20 Module 5
  //Выполни рефакторинг класса Car. Добавь публичное статическое
  // свойство MAX_PRICE со значением 50000 - максимально
  // допустимая цена автомобиля.
  // Добавь сеттеру price проверку передаваемого значения
  // параметра newPrice.Если оно больше чем MAX_PRICE,
  // сеттер ничего не делает, а если меньше или равно,
  // то перезаписывает цену автомобиля.

  class Car {
    // Change code below this line
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
      this.#price = price;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      if (newPrice <= Car.MAX_PRICE) {
        this.#price = newPrice;
      }
    }
    // Change code above this line
  }

  // const audi = new Car({ price: 35000 });
  // console.log(audi.price); // 35000

  // audi.price = 49000;
  // console.log(audi.price); // 49000

  // audi.price = 51000;
  // console.log(audi.price); // 49000
}
{
  // * Статичні Методи
  // Особенность статических методов в том, что во время их
  // вызова ключевое слово this ссылается на сам класс.
  // Это значит что статический метод может получить доступ к
  // статическим свойствам класса, но не к свойствам экземпляра.

  //*Конструктор дочернего класса
  //Первым делом в конструкторе дочернего класса необходимо вызвать
  // специальную функцию super(аргументы) - это псевдоним
  // конструктора родительского класса.В противном случае,
  // при попытке обратиться к this в конструкторе дочернего клааса,
  // будет ошибка.

  class User {
    static #takenEmails = [];

    static isEmailTaken(email) {
      return User.#takenEmails.includes(email);
    }

    #email;

    constructor({ email }) {
      this.#email = email;
      User.#takenEmails.push(email);
    }
  }

  const mango = new User({ email: 'mango@mail.com' });

  // console.log(User.isEmailTaken('poly@mail.com'));
  // console.log(User.isEmailTaken('mango@mail.com'));
}

{
  //* НАСЛЕДОВАНИЕ КЛАСОВ
  class Child extends Parent {
    // ...
  }
  class User {
    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class ContentEditor extends User {
    constructor({ email, posts }) {
      // Вызов конструктора родительского класса User
      super(email);
      this.posts = posts;
    }
  }

  // const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
  // console.log(editor); // { email: 'mango@mail.com', posts: [] }
  // console.log(editor.email); // 'mango@mail.com'
}

{
  // * TASK 20/20 Module 5
  //Методы дочернего класса
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line

    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser',
    };
    blacklistedEmails = [];

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    blacklist(email) {
      this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
      if (this.blacklistedEmails.includes(email)) {
        return true;
      }
      return false;
    }

    // Change code above this line
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

  mango.blacklist('poly@mail.com');
  // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  // console.log(mango.isBlacklisted('mango@mail.com')); // false
  // console.log(mango.isBlacklisted('poly@mail.com')); // true
}
