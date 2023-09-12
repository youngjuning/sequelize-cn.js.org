---
title: 模型基础
description: 在本教程中，您将了解 Sequelize 中有哪些模型以及如何使用它们。
keywords: [紫竹翻译计划, Sequelize]
nav:
  title: 核心概念
  order: 3
---

在本教程中，您将了解 Sequelize 中有哪些模型以及如何使用它们。

## 概念

模型是 Sequelize 的本质。模型是表示数据库中的表的抽象。在 Sequelize 中，它是一个扩展 [Model](https://sequelize.org/api/v6/class/src/model.js~Model.html) 的类。

模型告诉 Sequelize 关于它所代表的实体的一些信息，例如数据库中表的名称以及它具有哪些列（及其数据类型）。

Sequelize 中的模型有一个名称。该名称不必与其在数据库中表示的表的名称相同。通常，模型具有单数名称（例如 `User`），而表具有复数名称（例如 `Users`），尽管这是完全可配置的。
