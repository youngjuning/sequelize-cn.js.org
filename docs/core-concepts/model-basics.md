---
title: 模型基础
description: 在本教程中，您将了解 Sequelize 中有哪些模型以及如何使用它们。
keywords: [紫竹翻译计划, Sequelize]
nav:
  title: 核心概念
  order: 3
---

# 模型基础

在本教程中，您将了解 Sequelize 中有哪些模型以及如何使用它们。

## 概念

模型是 Sequelize 的本质。模型是表示数据库中的表的抽象。在 Sequelize 中，它是继承 [Model](https://sequelize.org/api/v6/class/src/model.js~Model.html) 的类。

模型告诉 Sequelize 关于它所代表的实体的一些信息，例如数据库中表的名称以及它具有哪些列（及其数据类型）。

Sequelize 中的模型有一个名称。该名称不必与其在数据库中表示的表的名称相同。通常，模型具有单数名称（例如 `User`），而表具有复数名称（例如 `Users`），尽管这是完全可配置的。

## 模型的定义

在 Sequelize 中可以用两种等效的方式定义模型：

- 调用 [`sequelize.define(modelName, attributes, options)`](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-define)
- 继承 [`Model`](https://sequelize.org/api/v6/class/src/model.js~model) 并调用 [`init(attributes, options)`](https://sequelize.org/api/v6/class/src/model.js~model#static-method-init)

定义模型后，可以通过其模型名称在 `sequelize.models` 中使用。

举个例子，我们将考虑创建一个模型来表示用户，其具有 `firstName` 和 `lastName`。我们希望模型名是 `User`，并且它所代表的表在数据库中的名字是 `Users`。

以下展示了定义此模型的两种方式。在定义后，我们可以通过 `sequelize.models.User` 访问我们的模型。

### 使用 [sequelize.define](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-define)

```ts
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

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
}, {
  // 其他模型配置
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```

### 继承 [Model](https://sequelize.org/api/v6/class/src/model.js~model)

```ts
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
  // 定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认是 true
  }
}, {
  // 其他模型配置
  sequelize, // 我们需要传递 sequelize 实例
  modelName: 'User' // 我们需要选择模型名
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
```

在内部，`sequelize.define` 调用 `Model.init`，因此两种方法本质上是等价的。

**公共类字段的警告**

在公共类字段中添加与模型属性名称相同的字段会导致问题。Sequelize 通过 `Model.init` 为每个定义的属性添加 `getter` 和 `setter`。添加公共类字段将遮盖这些 `getter` 和 `setter`，阻止访问模型的实际数据。

```ts
// Invalid
class User extends Model {
  id; // 这个字段会覆盖 Sequelize 的 getter 和 setter。它应该被移除。
  otherPublicField; // 这个字段没有覆盖任何东西。很好。
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new User({ id: 1 });
user.id; // undefined
```

```ts
// Valid
class User extends Model {
  otherPublicField;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new User({ id: 1 });
user.id; // 1
```

在 TypeScript 中，你可以使用 declare 关键字添加类型信息，而无需添加实际的公共类字段：

```ts
// Valid
class User extends Model {
  declare id: number; // 这很好！declare 关键字确保此字段不会被 TypeScript 弹出。
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new User({ id: 1 });
user.id; // 1
```
