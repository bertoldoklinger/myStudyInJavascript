class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.points = 0;
  }

  login() {
    console.log(`${this.name} logou na aplicação`);
    return this;
  }

  logout() {
    return `${this.name} deslogou da aplicação`;
  }

  addPoint() {
    this.points++;
    return `${this.name} agora tem ${this.points > 1 ? "pontos" : "ponto"}`;
  }
}

const user = new User("Bertoldo", 23);
const user2 = new User("Marcos", 53);

user.login().addPoint();

console.log(user);
