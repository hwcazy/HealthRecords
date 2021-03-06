import Frame from '@/views/frame'
export const loginRouter = {
  path: '/',
  name: 'login',
  component: () => import('@/views/login')
}


export const appRouter = [
  {
    path: '/home',
    name: 'home',
    title: '主页',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'list', title: '主页', name: 'home-list', component: () => import('@/views/home/list')},
    ]
  },
  {
    path: '/home/cold',
    name: 'cold',
    title: '感冒',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'cold', title: '感冒', name: 'home-cold', component: () => import('@/views/home/cold')},
    ]
  },
  {
    path: '/home/sleep',
    name: 'sleep',
    title: '睡眠',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'sleep', title: '睡眠', name: 'home-sleep', component: () => import('@/views/home/sleep')},
    ]
  },
  {
    path: '/home/diarrhea',
    name: 'diarrhea',
    title: '腹泻',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'diarrhea', title: '腹泻', name: 'home-diarrhea', component: () => import('@/views/home/diarrhea')},
    ]
  },
  {
    path: '/home/constipation',
    name: 'constipation',
    title: '便秘',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'constipation', title: '便秘', name: 'home-constipation', component: () => import('@/views/home/constipation')},
    ]
  },
  {
    path: '/home/constipationshow',
    name: 'constipationshow',
    title: '便秘统计',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'constipationshow', title: '便秘统计', name: 'home-constipationshow', component: () => import('@/views/home/constipationshow')},
    ]
  },
  {
    path: '/home/wine',
    name: 'wine',
    title: '饮酒',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'wine', title: '饮酒', name: 'home-wine', component: () => import('@/views/home/wine')},
    ]
  },
  {
    path: '/home/wineshow',
    name: 'wineshow',
    title: '饮酒情况',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'wineshow', title: '饮酒情况', name: 'home-wineshow', component: () => import('@/views/home/wineshow')},
    ]
  },
  {
    path: '/home/diet',
    name: 'diet',
    title: '饮食',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'diet', title: '饮食', name: 'home-diet', component: () => import('@/views/home/diet')},
    ]
  },
  {
    path: '/home/dietshow',
    name: 'dietshow',
    title: '饮食情况',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'dietshow', title: '饮食情况', name: 'home-dietshow', component: () => import('@/views/home/dietshow')},
    ]
  },
  {
    path: '/home/emotional',
    name: 'emotional',
    title: '情绪化',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'emotional', title: '情绪化', name: 'home-emotional', component: () => import('@/views/home/emotional')},
    ]
  },
  {
    path: '/home/emotionalshow',
    name: 'emotionalshow',
    title: '情绪状况',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'emotionalshow', title: '情绪状况', name: 'home-emotionalshow', component: () => import('@/views/home/emotionalshow')},
    ]
  },
  {
    path: '/home/exercise',
    name: 'exercise',
    title: '锻炼',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'exercise', title: '锻炼', name: 'home-exercise', component: () => import('@/views/home/exercise')},
    ]
  },
  {
    path: '/home/exerciseshow',
    name: 'exerciseshow',
    title: '运动情况',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'exerciseshow', title: '运动情况', name: 'home-exerciseshow', component: () => import('@/views/home/exerciseshow')},
    ]
  },
  {
    path: '/home/statistics',
    name: 'statistics',
    title: '感冒记录',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'statistics', title: '感冒记录', name: 'home-statistics', component: () =>  import('@/views/home/statistics')},
    ]
  },
  {
    path: '/home/sleepshow',
    name: 'sleepshow',
    title: '感冒记录',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'sleepshow', title: '感冒记录', name: 'home-sleepshow', component: () =>  import('@/views/home/sleepshow')},
    ]
  },
  {
    path: '/home/diarrheashow',
    name: 'diarrheashow',
    title: '腹泻记录',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'diarrheashow', title: '腹泻记录', name: 'home-diarrheashow', component: () =>  import('@/views/home/diarrheashow')},
    ]
  },
  {
    path: '/experience',
    name: 'experience',
    title: '体检系统',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'list', title: '体检系统', name: 'experience-list', component: () => import('@/views/experience/list')},
    ]
  },
  {
    path: '/personal',
    name: 'personal',
    title: '个人中心',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'list', title: '个人中心', name: 'personal-list', component: () => import('@/views/personal/list')},
      {path: 'input', title: '健康档案', name: 'personal-input', component: () =>  import('@/views/personal/input')}
    ],

  },

]

export const routers = [
  loginRouter,
  ...appRouter,
]
