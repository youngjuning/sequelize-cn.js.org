---
title: 核心概念
description: 在本教程中，您将学习如何设置 Sequelize 的简单设置。
keywords: [紫竹翻译计划, Sequelize]
nav:
  title: 核心概念
  order: 3
---

# 核心概念

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Card, Col, Row } from 'antd';
import { history } from 'dumi';

export default () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={24}>
        <Card title="📄️ 模型基础" hoverable onClick={() => history.push("/core-concepts/model-basics")}>
          在本教程中，你将了解 Sequelize 中有哪些模型以及如何使用它们。
        </Card>
      </Col>
    </Row>
  );
}
```
