---
title: 现代功能丰富的 TypeScript 和 JavaScript ORM。
description: Sequelize 是一个现代的 TypeScript 和 Node.js ORM，适用于 Oracle、Postgres、MySQL、MariaDB、SQLite和SQL Server 等多种数据库。它提供了可靠的事务支持、关系映射、快速和延迟加载、读取复制等功能。
keywords: [
  紫竹翻译计划,
  数据库,
  事务支持,
  关系映射,
  Sequelize,
  ORM,
  Oracle,
  Postgres,
  MySQL,
  MariaDB,
  SQLite,
  SQL Server
]
hero:
  title: Sequelize
  description: 现代功能丰富的 TypeScript 和 JavaScript ORM。
  actions:
    - text: 介绍
      link: /introduction
    - text: 入门
      link: /getting-started
features:
  - title: 数据建模
    emoji: 💎
    description: 轻松定义你的模型，并可选择使用自动数据库同步。
  - title: 关联
    emoji: 🌈
    description: 定义模型之间的关联并让 Sequelize 处理繁重的工作。
  - title: 软删除
    emoji: 🚀
    description: 将数据标记为已删除，而不是将其从数据库中一劳永逸地删除。
---

## 安装依赖项

```sh
$ npm install sequelize sqlite3
# or
$ yarn add sequelize sqlite3
```

## 定义模型

```ts
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
```

## 持久化和查询

```ts
const jane await User.create({
  username: 'janedoe',
  birthday: new Date('1980, 6, 20'),
});

const users = await User.findAll();
```
