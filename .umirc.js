export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        locale: {
          default: 'zh-CN', //默认语言 zh-CN
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true // 是否启用antd的<LocaleProvider />
        }
      }
    ]
  ]
};