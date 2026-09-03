/**
 * ZMath 题库数据
 * ===============
 * 题库格式说明 (Question Bank Format):
 * 
 * 每个题库是一个对象:
 * {
 *   id: String,           // 题库唯一标识
 *   name: String,         // 题库显示名称
 *   description: String,  // 题库简短描述
 *   icon: String,         // 图标文字 (1-2个字符)
 *   questions: Array       // 题目数组
 * }
 * 
 * 每道题目格式:
 * {
 *   id: Number,           // 题目唯一编号
 *   question: String,     // 题目文本 (支持 Unicode/数学符号)
 *   answer: String,       // 正确答案
 *   options: Array<String> // 4个选项
 * }
 * 
 * 扩展方式: 在 questionBanks 数组中添加新题库对象即可。
 * 每道题必须有 id, question, answer, options 四个字段。
 */
const questionBanks = [
  {
    id: 'equations',
    name: '解方程',
    description: '一元一次方程求解',
    icon: 'x',
    questions: [
      { id: 1, question: 'x + 5 = 10', answer: '5', options: ['3', '5', '10', '15'] },
      { id: 2, question: 'x - 3 = 7', answer: '10', options: ['4', '7', '10', '21'] },
      { id: 3, question: '2x = 12', answer: '6', options: ['6', '10', '12', '24'] },
      { id: 4, question: 'x / 4 = 3', answer: '12', options: ['7', '4', '12', '1'] },
      { id: 5, question: 'x + 8 = 15', answer: '7', options: ['7', '8', '15', '23'] },
      { id: 6, question: '3x - 6 = 9', answer: '5', options: ['3', '5', '9', '15'] },
      { id: 7, question: 'x/2 + 1 = 5', answer: '8', options: ['2', '4', '8', '10'] },
      { id: 8, question: '2x + 3 = 11', answer: '4', options: ['2', '4', '8', '11'] },
      { id: 9, question: '5x - 5 = 20', answer: '5', options: ['4', '5', '15', '25'] },
      { id: 10, question: 'x + x = 14', answer: '7', options: ['2', '7', '14', '28'] },
      { id: 11, question: '3x + 4 = 19', answer: '5', options: ['3', '5', '15', '19'] },
      { id: 12, question: 'x - 12 = 8', answer: '20', options: ['4', '8', '12', '20'] },
      { id: 13, question: '6x = 42', answer: '7', options: ['6', '7', '36', '48'] },
      { id: 14, question: 'x/3 + 2 = 6', answer: '12', options: ['4', '6', '12', '18'] },
      { id: 15, question: '4x - 8 = 24', answer: '8', options: ['4', '8', '16', '32'] },
      { id: 16, question: 'x + 15 = 30', answer: '15', options: ['5', '15', '30', '45'] },
      { id: 17, question: '2x + 5 = 21', answer: '8', options: ['5', '8', '16', '21'] },
      { id: 18, question: 'x/5 = 4', answer: '20', options: ['5', '4', '20', '25'] },
      { id: 19, question: '7x - 7 = 42', answer: '7', options: ['6', '7', '35', '49'] },
      { id: 20, question: 'x + 25 = 50', answer: '25', options: ['2', '25', '50', '75'] },
    ]
  },
  {
    id: 'arithmetic',
    name: '四则运算',
    description: '加减乘除混合运算',
    icon: '±',
    questions: [
      { id: 1, question: '3 + 5 × 2 = ?', answer: '13', options: ['13', '16', '10', '11'] },
      { id: 2, question: '12 ÷ 4 + 3 = ?', answer: '6', options: ['4', '5', '6', '7'] },
      { id: 3, question: '8 - 2 × 3 = ?', answer: '2', options: ['18', '2', '6', '24'] },
      { id: 4, question: '20 ÷ 5 + 7 = ?', answer: '11', options: ['4', '7', '11', '14'] },
      { id: 5, question: '9 + 6 ÷ 2 = ?', answer: '12', options: ['7', '12', '9', '15'] },
      { id: 6, question: '15 - 3 × 4 = ?', answer: '3', options: ['48', '12', '3', '8'] },
      { id: 7, question: '4 × 5 + 6 = ?', answer: '26', options: ['26', '44', '20', '30'] },
      { id: 8, question: '18 ÷ 3 - 2 = ?', answer: '4', options: ['6', '4', '3', '12'] },
      { id: 9, question: '7 + 8 × 2 = ?', answer: '23', options: ['30', '15', '23', '17'] },
      { id: 10, question: '30 ÷ 6 + 5 = ?', answer: '10', options: ['5', '10', '6', '11'] },
      { id: 11, question: '6 × 7 - 8 = ?', answer: '34', options: ['42', '34', '50', '28'] },
      { id: 12, question: '25 - 5 × 4 = ?', answer: '5', options: ['80', '20', '0', '5'] },
      { id: 13, question: '9 × 3 + 7 = ?', answer: '34', options: ['27', '34', '90', '24'] },
      { id: 14, question: '48 ÷ 8 + 9 = ?', answer: '15', options: ['6', '15', '57', '7'] },
      { id: 15, question: '12 + 8 ÷ 4 = ?', answer: '14', options: ['5', '14', '20', '10'] },
      { id: 16, question: '5 × 6 - 7 = ?', answer: '23', options: ['30', '23', '13', '37'] },
      { id: 17, question: '36 ÷ 9 + 8 = ?', answer: '12', options: ['4', '12', '44', '9'] },
      { id: 18, question: '14 - 2 × 5 = ?', answer: '4', options: ['60', '10', '4', '20'] },
      { id: 19, question: '8 × 8 - 9 = ?', answer: '55', options: ['64', '55', '73', '15'] },
      { id: 20, question: '45 ÷ 5 + 6 = ?', answer: '15', options: ['9', '11', '15', '51'] },
    ]
  }
];

export default questionBanks;
