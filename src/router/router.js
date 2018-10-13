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
    path: '/cold/statistics',
    name: 'statistics',
    title: '感冒记录',
    icon: 'navicon',
    component: Frame,
    children: [
      {path: 'statistics', title: '感冒记录', name: 'cold-statistics', component: () =>  import('@/views/home/mystatistics')},
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
