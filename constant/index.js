/**
 * @description 全局常量
 * @author Feng.xiuting
 * @date 2020/2/24
 */

// 面包屑
export const BREADCRUMBNAMEMAP = {
  '/': '首页',

  '/baseInfo': '基本信息',
  '/baseInfo/entering/detail': '详情',
  '/baseInfo/entering': '录入',
  '/baseInfo/search': '查询',
  '/baseInfo/search/detail': '详情',

  '/monitoringIndex': '监测指标',
  '/monitoringIndex/entering': '录入',
  '/monitoringIndex/search': '查询',
  '/monitoringIndex/statistics': '统计',
  '/monitoringIndex/entering/normal': '列表',
  '/monitoringIndex/entering/detail': '详情',
  '/evaluationAnalysis': '评价分析',
  '/evaluationAnalysis/search': '查询',
  '/evaluationAnalysis/search/review': '详情',
  '/evaluationAnalysis/search/tendency': '趋势图',

  '/system':'系统设置',
  '/system/dept':'部门管理',
  '/system/dept/detail':'详情',
  '/system/role':'角色管理',
  '/system/role/detail':'详情',
  '/system/user':'用户信息',
  '/system/user/detail':'详情',
  '/system/indexInfo':'指标信息',
  '/system/indexInfo/detail':'详情',
  '/system/indexPublish':'指标发布',
  '/system/indexPublish/detail':'详情',
  '/system/indexDistribution':'指标分配',
  '/system/indexDistribution/detail':'详情',
  '/system/indexDistribution/add':'详情',
  '/system/targetUpdate':'目标值更新',
  '/system/targetUpdate/detail':'详情',
  '/system/indexConfig':'指数配置',
  '/system/indexConfig/detail':'详情',
  '/system/formulaConfig':'得分公式配置',
  '/system/formulaConfig/detail':'详情',
  '/system/timeConfig':'时间配置',
  '/system/timeConfig/detail':'详情',

  '/notice':'公告管理',
  '/notice/entering':'公告信息',
  '/notice/entering/detail':'详情',
};

export const BREAD_DOM = {
  // bread 右侧空 dom id
  BREAD_RIGHT_ID: 'BREAD_RIGHT_ID',
  // bread 左侧的 tag id
  BREAD_TAG_NAME_ID: 'BREAD_TAG_NAME_ID',
};

// 操作类型
export const ACTION = {
  ADD: '1',
  EDIT: '2',
  REVIEW: '3',
};

// 表单布局
export const formItemLayout = {
  labelCol: {
    xxl: { span: 8 },
    xl: { span: 8 },
    lg: { span: 8 },
    md: { span: 8 },
    sm: { span: 8 },
    xs: { span: 8 },
  },
  wrapperCol: {
    xxl: { span: 16 },
    xl: { span: 16 },
    lg: { span: 16 },
    md: { span: 16 },
    sm: { span: 16 },
    xs: { span: 16 },
  },
};

export const colLayout = {
  xxl: { span: 6 },
  xl: { span: 8 },
  lg: { span: 8 },
  md: { span: 12 },
  sm: { span: 24 },
  xs: { span: 24 },
};

//详情页列表 - 用于内容较少，一行显示一项
export const formItemLayoutDetail = {
  labelCol: {
    xxl: { span: 6 },
    xl: { span: 6 },
    lg: { span: 6 },
    md: { span: 6 },
    sm: { span: 6 },
    xs: { span: 6 },
  },
  wrapperCol: {
    xxl: { span: 13 },
    xl: { span: 13 },
    lg: { span: 13 },
    md: { span: 13 },
    sm: { span: 13 },
    xs: { span: 13 },
  },
};

export const tailFormItemLayoutDetail = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};



//详情页列表 - 用于内容较多，一行显示3项
export const formItemLayoutDetail1 = {
  labelCol: {
    xxl: { span: 6 },
    xl: { span: 6 },
    lg: { span: 6 },
    md: { span: 6 },
    sm: { span: 6 },
    xs: { span: 6 },
  },
  wrapperCol: {
    xxl: { span: 16 },
    xl: { span: 16 },
    lg: { span: 16 },
    md: { span: 16 },
    sm: { span: 16 },
    xs: { span: 16 },
  },
};

export const exhangeFrequency =[
  {
    label: '实时',
    value: '1',
  },
  {
    label: '每天',
    value: '2',
  },
  {
    label: '每周',
    value: '3',
  },
  {
    label: '每月',
    value: '4',
  },
];

export const tailFormItemLayoutDetail1 = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

//是否选项
export const normalOption = [
  {
    label: '是',
    value: 1,
  },
  {
    label: '否',
    value: 0,
  },
];

export const gender =[
  {
    label: '男',
    value: '1',
  },
  {
    label: '女',
    value: '2',
  },
];


export const statisticsType =[
  {
    label: '行政区划',
    value: '1',
  },
  {
    label: '体检机构',
    value: '2',
  },
];

export const certificateType =[
  {
    label: '居民身份证',
    value: '01',
  },
  {
    label: '护照',
    value: '02',
  },
  {
    label: '港澳台居民通行证',
    value: '03',
  },
  {
    label: '回乡证',
    value: '04',
  },
  {
    label: '军官证',
    value: '05',
  }
];


export const category=[
  {
    label: '食品卫生',
    value: '1',
  },
  {
    label: '公共场所卫生',
    value: '2',
  },
  {
    label: '生活碳酸',
    value: '3',
  },
  {
    label: '家证服务人员',
    value: '4',
  },
  {
    label: '其他',
    value: '5',
  }
];

export const exchangeInterfaceType =[
  {
    label: '从业人员基本信息接收',
    value: 'JBXXJK',
  },
  {
    label: '体检信息接收',
    value: 'TJJK',
  },
];

export const interfaceType =[
  {
    label: '从业人员基本信息接收',
    value: '1',
  },
  {
    label: '体检信息接收',
    value: '2',
  },
  {
    label: '电子证信息接收',
    value: '3',
  },
  {
    label: '电子证推送',
    value: '4',
  },
  {
    label: '电子证查询',
    value: '5',
  }
];

export const checkResult =[
  {
    label: '合格',
    value: '1',
  },
  {
    label: '不合格',
    value: '0',
  },
];

export const resultType=[
  {
    label: '时间段',
    value: '1',
  },
  {
    label: '选项：合格/不合格',
    value: '2',
  },
];

export const printStatus =[
  {
    label: '已打印',
    value: '1',
  },
  {
    label: '未打印',
    value: '0',
  },
];

// 用户类型
export const userType=[
  {
    label: '省级管理员',
    value: 0,
  },
  {
    label: '区域管理员',
    value: 1,
  },
  {
    label: '录入用户',
    value: 2,
  },
];

// 检测对象
export const monitoringObj=[
  {
    label: '省级管理员',
    value: 0,
  },
  {
    label: '区域管理员',
    value: 1,
  },
  {
    label: '录入用户',
    value: 2,
  },
];

// 文化程度
export const degree=[
  {
    label: '博士',
    value: '0',
  },
  {
    label: '硕士',
    value: '1',
  },
  {
    label: '本科',
    value: '2',
  },
  {
    label: '专科',
    value: '3',
  },
  {
    label: '高中',
    value: '4',
  },
  {
    label: '初中',
    value: '5',
  },
  {
    label: '小学',
    value: '6',
  },
  {
    label: '其他',
    value: '7',
  },
];

export const formulaType =[
  {
    label: '定性',
    value: 0,
  },
  {
    label: '正向',
    value: 1,
  },
  {
    label: '负向',
    value: 2,
  },
  {
    label: '区间',
    value: 3,
  },
];

export const analyticTarget =[
  {
    label: '市级指标',
    value: 0,
  },
  {
    label: '县级指标',
    value: 1,
  },
];

export const exchangeResult =[
  {
    label: '成功',
    value: '1',
  },
  {
    label: '失败',
    value: '0',
  },
];

export const dataSource=[
  {
    label: '杭州市健康证系统',
    value: 'hz999',
  },
  {
    label: '宁波市健康证系统',
    value: 'nb999',
  },
  {
    label: '衢州市健康证系统',
    value: 'qz999',
  },
];

// export const interfaceType=[
//   {
//     label: '杭州市健康证系统',
//     value: '1',
//   },
//   {
//     label: '宁波市健康证系统',
//     value: '2',
//   },
//   {
//     label: '衢州市健康证系统',
//     value: '3',
//   },
// ];

export const checkTypeCategory =[
  {
    label: '既往病史',
    value: '1',
  },
  {
    label: '体征项目',
    value: '2',
  },
  {
    label: '实验室检查项目',
    value: '3',
  },
];

export const EMOJI = [
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😎',
  '😍',
  '😘',
  '😗',
  '😙',
  '😚',
  '😇',
  '😐',
  '😑',
  '😶',
  '😏',
  '😣',
  '😥',
  '😮',
  '😯',
  '😪',
  '😫',
  '😴',
  '😌',
  '😛',
  '😜',
  '😝',
  '😒',
  '😓',
  '😔',
  '😕',
  '😲',
  '😷',
  '😖',
  '😞',
  '😢',
  '😭',
  '😦',
  '😧',
  '😨',
  '😬',
  '😰',
  '😱',
  '😳',
  '😵',
  '😡',
  '😠',
  '👈',
  '👉',
  '👆',
  '👇',
  '✌',
  '👌',
  '👍',
  '✊',
  '👊',
  '👋',
  '👏',
  '👣',
  '👀',
  '👄',
  '💋',
  '💔',
  '💕',
  '🏡',
  '🏤',
  '🏩',
  '✈',
  '🚗',
  '🚲',
  '🌜',
  '☀',
  '🍸',
  '🍹',
  '🌸',
  '🌼',
  '🌹',
  '🌷',
  '🍊',
  '🍓',
  '🍌',
  '🍍',
  '🍎',
  '🍒',
  '🌽',
];
