const dragForm = () => import('@/views/dragForm')
const preview = () => import('@/views/preview')

export default [
  {
    path: '/',
    redirect: {
      path: '/dragForm'
    }
  },
  {
    path: '/dragForm',
    name: 'dragForm',
    component: dragForm
  },
  {
    path: '/preview',
    name: 'preview',
    component: preview
  }
]
