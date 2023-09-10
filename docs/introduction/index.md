---
title: 介绍
description: Sequelize 是一个基于 Promise 的 Node.js ORM 工具，适用于 Postgres、MySQL、MariaDB、SQLite、Microsoft SQL Server、Oracle 数据库、Amazon Redshift 和 Snowflake 的数据云。它具有可靠的事务支持、关系、急切和延迟加载、读取复制等功能。
keywords: [紫竹翻译计划, Sequelize]
nav:
  title: 介绍
  order: 1
---

Sequelize 是一个基于 Promise 的 Node.js ORM 工具，适用于 Postgres、MySQL、MariaDB、SQLite、Microsoft SQL Server、Oracle 数据库、Amazon Redshift 和 Snowflake 的数据云。它具有可靠的事务支持、关系、急切和延迟加载、读取复制等功能。

Sequelize 遵循语义版本控制并支持 Node v10 及更高版本。

你当前正在查看 Sequelize 的教程和指南。你可能还对 [API 参考](https://sequelize.org/api/v6/identifiers.html)感兴趣。

## 示例​

```ts
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
```

要了解有关如何使用 Sequelize 的更多信息，请阅读左侧菜单中的教程。从[入门](/getting-started)开始。
