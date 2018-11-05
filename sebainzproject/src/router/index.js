import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewGame from '@/components/NewGame'
import ViewGame from '@/components/ViewGame'
import EditGame from '@/components/EditGame'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-game',
      component: NewGame
    },
    {
      path: '/edit-game/:game_slug',
      name: 'edit-game',
      component: EditGame
    },
    {
      path: '/:game_id',
      name: 'view-game',
      component: ViewGame
    }
  ]
})
