# react + graphql + antd + next

配置特别烦人，特别是 ssr 要用到图表
转了一圈就只有 chart.js 配合 red-agate-svg-canvas 包
然后发现 next 中 webpack.externals 做了特殊处理，不支持 import/export

### 坑1：
babel.config.js 不起作用，虽然 babel-loader 为8

### 坑2
import React from 'react'
不能 import * as React 因为 next-babel-loader 会重复添加前者

### 坑3
不能设置 webpack.target 为 node 否则 exports 未定义

### 坑4
不能设置 cssModule 为 true

### 坑5
修改 index.ts 需要重启

### 坑6
需要添加以下两个到 .babelrc 而且 env.module 不能为 false
"next/babel",
"@zeit/next-typescript/babel"

### 坑7
webpack 配置头疼