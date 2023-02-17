module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '✨ feat:     新功能' },
    { value: 'fix', name: '🐛 fix:      修复bug' },
    { value: 'docs', name: '✏️  docs:     文档变更' },
    { value: 'style', name: '💄 style:    代码的样式美化' },
    {
      value: 'refactor',
      name: '♻️  refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: '⚡️ perf:     性能优化' },
    { value: 'test', name: '✅ test:     增加测试' },
    { value: 'chore', name: '🚀 chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: '⏪️ revert:   回退' },
    { value: 'build', name: '📦️ build:    打包' },
    { value: 'ci', name: '👷 ci:    更改为我们的CI配置文件和脚本' }
  ],

  // scopes: [
  //   { name: '' },
  //   { name: 'lang' },
  //   { name: 'merge' },
  //   { name: 'changeMe' }
  // ],
  // 消息步骤
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // 跳过问题
  // skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}
