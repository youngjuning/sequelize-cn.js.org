---
title: 入门
description: 在本教程中，您将学习如何设置 Sequelize 的简单设置。
keywords: [紫竹翻译计划, Sequelize]
nav:
  title: 入门
  order: 2
---

# 入门

在本教程中，您将学习如何设置 Sequelize 的简单设置。

## 安装

Sequelize 可通过 npm（或yarn）获得。

```sh
$ npm install --save sequelize
```

您还必须为你选择的数据库手动安装驱动程序：

```sh
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

## 连接数据库

要连接到数据库，你必须创建一个 Sequelize 实例。这可以通过将连接参数单独传递给 Sequelize 构造函数或传递单个连接 URI 来完成：

```ts
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
```

Sequelize 构造函数接受很多选项。它们记录在 [API 参考中](https://sequelize.org/api/v6/class/src/sequelize.js~Sequelize.html#instance-constructor-constructor)。

## 测试连接​

你可以使用该函数来测试连接是否正常：

```ts
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

## 关闭连接​

Sequelize 默认情况下会保持连接打开，并为所有查询使用相同的连接。如果需要关闭连接，请调用 `sequelize.close()`（这是异步的并返回 Promise）。

> 一旦 `sequelize.close()` 被调用，就不可能打开新的连接。您将需要创建一个新的 Sequelize 实例才能再次访问您的数据库。

## 术语约定​

请注意，在上面的示例中，Sequelize 指的是库本身，而 sequelize 指的是的一个实例，它表示与一个数据库的连接。这是推荐的约定，整个文档都将遵循该约定。

## 阅读文档的提示​

我们鼓励你在阅读 Sequelize 文档时在本地运行代码示例。这将帮助你学得更快。最简单的方法是使用 SQLite 方言：

```ts
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Code here! It works!
```

要试验其他较难在本地设置的方言，您可以使用 [Sequelize SSCCE](https://github.com/papb/sequelize-sscce) GitHub 存储库，它允许你直接从 GitHub 在所有支持的方言上免费运行代码，无需任何设置！

## 新数据库与现有数据库​

如果你从头开始一个项目，并且你的数据库仍然是空的，则可以从头开始使用 Sequelize 来自动创建数据库中的每个表。

另外，如果你想使用 Sequelize 连接到已填充表和数据的数据库，也同样有效！ Sequelize 可以帮助你解决这两种情况。

## 日志

默认情况下，Sequelize 将记录它执行的每个 SQL 查询到控制台。`options.logging` 可用于自定义此行为，方法是定义每次 Sequelize 记录某些内容时执行的函数。默认值是 `console.log`，使用时仅显示日志函数调用的第一个日志参数。例如，对于查询日志记录，第一个参数是原始查询，第二个参数（默认情况下隐藏）是 Sequelize 对象。

`options.logging` 的常用有用值：

```ts
const sequelize = new Sequelize('sqlite::memory:', {
  // Choose one of the logging options
  logging: console.log,                  // Default, displays the first parameter of the log function call
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
  logging: false,                        // Disables logging
  logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
  logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
});
```

## Promise 和 async/await

Sequelize 提供的大多数方法都是异步的，因此返回 Promises。它们都是 Promise ，因此您可以开箱即用地使用 Promise API（例如，使用 `then`、`catch` 和 `finally`）。

当然，使用 `async` 和 `await` 运行也是正常的。
