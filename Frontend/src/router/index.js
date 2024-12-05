import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue' 
import SignUpPage from '../components/SignUpPage.vue'
import LoginPage from '../components/LoginPage.vue'
import InstructorDashboard from '../components/InstructorDashboard.vue';
import StudentDashboard from '../components/StudentDashboard.vue';
import viewStudent from '../components/viewStudent.vue';
import viewProject from '../components/viewProject.vue';
import viewProjects from '@/components/viewProjects.vue';
import viewTeam from '../components/viewTeam.vue';
import commitHistory from '../components/commitHistory.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
    path: '/instructor-dashboard',
    name: 'InstructorDashboard',
    component: InstructorDashboard
  },
  {
    path: '/student-dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard
  },
  {
    path: '/viewstudent',
    name: 'viewStudent',
    component: viewStudent
  },
  {
    path: '/viewproject',
    name: 'viewProject',
    component: viewProject,
    
  },
  {
    path: '/viewprojects',
    name: 'viewProjects',
    component: viewProjects
  },
  {
    path: '/viewteam',
    name: 'viewTeam',
    component: viewTeam
  },
  {
    path: '/commitHistory',
    name: 'commitHistory',
    component: commitHistory
  }
  ],
})

export default router
