# react + graphql + antd + next

配置特别烦人，特别是 ssr 要用到图表
转了一圈就只有 chart.js 配合 red-agate-svg-canvas 包
然后发现 next 中 webpack.externals 做了特殊处理，不支持 import/export