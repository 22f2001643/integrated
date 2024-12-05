<template>
  <div class="container mx-auto p-4 max-w-3xl">
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-4">
        <div class="flex-grow mr-4">
          <!-- Project Name Dropdown -->
          <select v-model="selectedProject" @change="updateDescription" class="w-full p-2 border rounded">
            <option v-for="(project, index) in projects" :key="index" :value="project.name">{{ project.name }}</option>
          </select>
          
          <!-- Problem Statement (Description) -->
          <textarea v-model="problemStatement" class="w-full mt-2 p-2 border rounded resize-none" placeholder="Problem statement" rows="2" readonly></textarea>
        </div>
        <button @click="addResource" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Resource</button>
      </div>

      <div class="space-y-4 mb-4">
        <div v-for="(milestone, index) in milestones" :key="index" class="flex items-center space-x-2">
          <input v-model="milestone.name" class="flex-grow p-2 border rounded" placeholder="Milestone">
          <input v-model="milestone.deadline" type="date" class="p-2 border rounded">
          <button @click="deleteMilestone(index)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
        </div>
      </div>

      <button @click="addMilestone" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4">Add Milestone</button>

      <div class="flex justify-end">
        <button @click="saveProject" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Save</button>
      </div>
      
      <!-- View Teams Button -->
      <button @click="toggleViewTeams" class="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
        View Teams
      </button>
    </div>

    <!-- Teams Container (Initially hidden) -->
    <div v-if="showTeams" class="bg-white mt-4 rounded-lg shadow-md p-6">
      <h3 class="text-lg font-semibold mb-4">Teams</h3>
      <div v-for="(team, index) in teams" :key="index" class="flex justify-between items-center mb-4">
        <div class="flex-grow">
          <h4 class="text-md font-semibold">{{ team.name }}</h4>
          <p class="text-sm text-gray-500">{{ team.members.join(', ') }}</p>
        </div>
        <button @click="viewTeamDetails(team)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Team
        </button>
      </div>
    </div>
  </div>
  <p class="text-center">
      <a href="/instructor-dashboard" class="button">Back</a>
    </p>
</template>

<script>
export default {
  name: "ProjectManagement",
  data() {
    return {
      projects: [
        { name: 'Tracking Student Progress in Software Project', description: 'Tracking Student Progress in Software Projects In course projects such as the ones you have already done in Application Development I and II, it can be challenging for instructors to effectively track the progress of student projects, particularly in larger classes where multiple teams are working on different tasks. To address this issue, you are required to develop a web application that allows instructors to manage and monitor student projects throughout the semester. The system should enable the instructor to break down projects into well-defined milestones, allowing for clearer tracking of progress and deadlines. Key features include integrating with GitHub or similar version control systems to automatically pull and visualize commit histories, ensuring students are on track with their coding progress.Additionally, the application can leverage Generative AI (GenAI) tools to assist instructors by analyzing student-submitted documents, such as project proposals, progress reports, and technical documentation.You can also think of additional features such as providing a centralized dashboard where instructors can see an overview of all students or teams, customizable milestones and task management, using AI to predict if students are on track, etc. These are just a few examples of features; please feel free to add others.' },
        { name: 'Project B', description: 'Description for Project B' },
        { name: 'Project C', description: 'Description for Project C' }
      ],
      selectedProject: 'Tracking Student Progress in Software Project',
      problemStatement: 'Tracking Student Progress in Software Projects In course projects such as the ones you have already done in Application Development I and II, it can be challenging for instructors to effectively track the progress of student projects, particularly in larger classes where multiple teams are working on different tasks. To address this issue, you are required to develop a web application that allows instructors to manage and monitor student projects throughout the semester. The system should enable the instructor to break down projects into well-defined milestones, allowing for clearer tracking of progress and deadlines. Key features include integrating with GitHub or similar version control systems to automatically pull and visualize commit histories, ensuring students are on track with their coding progress.Additionally, the application can leverage Generative AI (GenAI) tools to assist instructors by analyzing student-submitted documents, such as project proposals, progress reports, and technical documentation.You can also think of additional features such as providing a centralized dashboard where instructors can see an overview of all students or teams, customizable milestones and task management, using AI to predict if students are on track, etc. These are just a few examples of features; please feel free to add others.',
      milestones: [{ name: 'Milestone 1', deadline: '2024-12-31' }],
      showTeams: false,
      teams: [
        { name: 'Team 22', members: ["Thendral", "Saquib", "Aman", "Shikhar", "Srijan", "Saketh", "Sunil"]},
        { name: 'Team Beta', members: ['David', 'Eve', 'Frank'] },
        { name: 'Team Gamma', members: ['Grace', 'Heidi', 'Ivan'] }
      ]
    };
  },
  methods: {
    updateDescription() {
      const selected = this.projects.find(project => project.name === this.selectedProject);
      if (selected) {
        this.problemStatement = selected.description;
      }
    },
    addResource() {
      alert('Resource added or edited!');
    },
    addMilestone() {
      this.milestones.push({ name: '', deadline: '' });
    },
    deleteMilestone(index) {
      this.milestones.splice(index, 1);
    },
    saveProject() {
      alert(`Project saved! \nName: ${this.selectedProject} \nDescription: ${this.problemStatement}`);
    },
    toggleViewTeams() {
      this.showTeams = !this.showTeams;
    },
    viewTeamDetails(team) {
      this.$router.push({ name: 'viewTeam', params: { teamName: team.name } });
    }
  },
  mounted() {
    this.updateDescription();
  }
};
</script>

<style scoped>
/* Add any custom styles if necessary */

.button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.button:hover {
  background-color: #45a049;
}
</style>
