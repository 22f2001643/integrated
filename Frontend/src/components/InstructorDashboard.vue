<template>
  <div class="container mx-auto p-6 max-w-6xl bg-gray-100">
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Instructor Dashboard</h2>
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
        Logout
      </button>
    </header>

    <!-- Main Content -->
    <main class="bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="flex space-x-4">
          <button @click="openModal" class="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            Create Project
          </button>
          <button @click="goToViewProjects" class="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            View Projects
          </button>
          <input
            type="search"
            placeholder="Search"
            class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <h1 class="text-2xl font-bold mb-6">Instructor Dashboard</h1>

      <!-- Project and Milestone Selection -->
      <div class="flex space-x-4 mb-6">
        <div class="flex items-center">
          <label for="project" class="mr-2 font-medium">Project:</label>
          <select id="project" class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Project 2</option>
            <option>Project 1</option>
            <option>Project 3</option>
          </select>
        </div>
        <div class="flex items-center">
          <label for="milestone" class="mr-2 font-medium">Milestone:</label>
          <select id="milestone" class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Milestone 2</option>
            <option>Milestone 1</option>
            <option>Milestone 3</option>
          </select>
        </div>
      </div>

      <!-- Table Content -->
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-green-500 text-white">
            <th class="py-3 px-4 text-left">Team</th>
            <th class="py-3 px-4 text-left">Status</th>
            <th class="py-3 px-4 text-left">Feedback</th>
            <th class="py-3 px-4 text-left">Repo link</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="py-3 px-4">Team 22</td>
            <td class="py-3 px-4 text-green-600 font-medium">Accepted</td>
            <td class="py-3 px-4">Good progress, minor revisions needed.</td>
            <td class="py-3 px-4"><a href="#" class="text-blue-500 hover:underline">View Repo</a></td>
          </tr>
          <tr>
            <td class="py-3 px-4">Team 1</td>
            <td class="py-3 px-4 text-red-600 font-medium">Rejected</td>
            <td class="py-3 px-4">Revise and resubmit due to missing criteria.</td>
            <td class="py-3 px-4"><a href="#" class="text-blue-500 hover:underline">View Repo</a></td>
          </tr>
        </tbody>
      </table>

      <!-- Create Project Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h2 class="text-xl font-semibold mb-4">Create a New Project</h2>
          <form @submit.prevent="createProject">
            <div class="mb-4">
              <label for="projectName" class="block font-medium">Project Name:</label>
              <input
                type="text"
                v-model="projectName"
                id="projectName"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="description" class="block font-medium">Description:</label>
              <textarea v-model="description" id="description" rows="3" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div class="mb-4">
              <label for="startDate" class="block font-medium">Start Date:</label>
              <input
                type="date"
                v-model="startDate"
                id="startDate"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="endDate" class="block font-medium">End Date:</label>
              <input
                type="date"
                v-model="endDate"
                id="endDate"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="flex justify-end space-x-4">
              <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                Cancel
              </button>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'InstructorDashboard',
  data() {
    return {
      showModal: false,
      projectName: '',
      startDate: '',
      endDate: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    createProject() {
      console.log("Project Created:", this.projectName, this.startDate, this.endDate);
      this.closeModal();
    },
    logout() {
      // Implement the logic for logging out (e.g., clearing session or token)
      console.log('Logging out...');
      // After logout, redirect to home page or login page
      this.$router.push('/');
    },
    goToViewProjects() {
      this.$router.push({ name: 'viewProjects' });
    },
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
