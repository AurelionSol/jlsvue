import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/welcome'
import Learn from '../components/learn/learn'
import Blog from '../components/blog/blog'
import Practice from '../components/question/practice'
import Code from '../components/code/code'
import learnContent from '../components/learn/learnContent'
import Chapter from '../components/learn/chapter'
import Article from '../components/blog/article'
import Login from '../components/login'
import Register from '../components/register'
import Info from '../components/userinfo/info'
import UserRate from '../components/userinfo/userrate'
import UserArticle from '../components/userinfo/userarticle'
import UserComment from '../components/userinfo/usercomment'
import UserWrong from '../components/userinfo/userwrong'
import AddArticle from '../components/blog/addArticle'
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },

    {
      path: '/learn',
      component: Learn,
      children: [
        {
          path: '',
          component: learnContent
        },
        {
          path: 'basic',
          component: learnContent
        },
        {
          path: 'junior',
          component: learnContent
        },
        {
          path: 'middle',
          component: learnContent
        },
        {
          path: 'senior',
          component: learnContent
        },
        {
          path: 'apply',
          component: learnContent
        },
        {
          path: 'fore',
          component: learnContent
        },
        {
          path: 'j2ee',
          component: learnContent
        },
        {
          path: 'frame',
          component: learnContent
        },
        {
          path: 'tool',
          component: learnContent
        },
        {
          path: 'database',
          component: learnContent
        },
      ]
    },

    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/addArticle',
      component: AddArticle
    },

    {
      path: '/practice',
      component: Practice,
    },

    {
      path: '/code',
      component: Code
    },
    {
      path: '/chapter/*',
      component: Chapter
    },
    {
      path: '/article/*',
      component: Article
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/info',
      component: Info,
      children: [
        {
          path: '',
          component: UserRate
        },
        {
          path: 'userrate',
          component: UserRate
        },
        {
          path: 'userarticle',
          component: UserArticle
        },
        {
          path: 'usercomment',
          component: UserComment
        },
        {
          path: 'userwrong',
          component: UserWrong
        }
      ]
    }

  ],
  mode: "history"


})
