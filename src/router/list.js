const dragForm = () => import('@/views/dragForm/dragForm')
const preview = () => import('@/views/dragForm/preview')

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
