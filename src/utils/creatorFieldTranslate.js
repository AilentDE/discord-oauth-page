const creatorField = (fromStr) => {
  switch (fromStr) {
    case 'illustration':
      return '插畫'
    case 'comic':
      return '漫畫'
    case 'cosplay':
      return 'Cosplay'
    case 'sound':
      return '聲音創作'
    case 'model':
      return '數位建模'
    case 'game':
      return '獨立遊戲'
    case 'other':
      return '其它'
    default:
      return '創作領域'
  }
}

export default creatorField
