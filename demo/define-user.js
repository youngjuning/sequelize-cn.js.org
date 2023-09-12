import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // 定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认是 true
  }
});

const user = new User({ firstName: "竹", lastName: "紫" });
console.log(user.lastName + user.firstName) // 1
