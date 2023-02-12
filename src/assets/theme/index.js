const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848A'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  // 混入  将 阴影的字符串 抽出称为字符串 合并到mixin  供全局使用
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    `
  }
}

export default theme