<template>
    <div class="container mx-auto p-6 bg-gray-100">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">All Projects</h2>
        <div class="space-y-4">
          <div class="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow" v-for="project in projects" :key="project.id">
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-semibold text-gray-700">{{ project.title }}</h3>
              <router-link :to="{ name: 'viewProject' }" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">View Project</router-link>
            </div>
            <p class="mt-2 text-gray-600">{{ project.problemStatement }}</p>
            <div class="mt-2 space-y-2">
              <div v-for="milestone in project.milestones" :key="milestone.id" class="pl-4 border-l-2 border-blue-500">
                <p class="text-gray-700">Milestone: {{ milestone.name }}</p>
                <p class="text-gray-500">Deadline: {{ milestone.deadline }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ViewProjects',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Tracking Student Progress in Software Project',
            problemStatement: 'Problem statement for Tracking Student Progress in Software Project',
            milestones: [
              { id: 1, name: 'Milestone 1', deadline: '2024-10-20' },
              { id: 2, name: 'Milestone 2', deadline: '2024-10-20' }
            ]
          },
          {
            id: 2,
            title: 'Project XYZ',
            problemStatement: 'Problem statement for Project XYZ',
            milestones: [
              { id: 1, name: 'Milestone 1', deadline: '2023-06-30' },
              { id: 2, name: 'Milestone 2', deadline: '2023-09-30' }
            ]
          }
        ]
      }
    },
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  .text-gray-800 {
    color: #2d3748;
  }
  
  .text-gray-700 {
    color: #4a5568;
  }
  
  .text-gray-600 {
    color: #718096;
  }
  
  .text-gray-500 {
    color: #a0aec0;
  }
  
  .border-gray-300 {
    border-color: #e2e8f0;
  }
  
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .transition-shadow {
    transition: box-shadow 0.3s;
  }
  
  .hover\:bg-blue-600:hover {
    background-color: #2b6cb0;
  }
  
  .transition-colors {
    transition: background-color 0.3s;
  }
  </style>
  