<template>
  <div class="design">
    <div class="dashboard-container">
      <h2>Student Dashboard - Current Projects</h2>
      <button class="px-6 py-3 bg-primary rounded-lg shadow-md hover:bg-primary-dark transition-all" @click="goToViewStudent">
        Go to My Project
      </button>
      
      <!-- Project Table -->
      <table class="project-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Registration Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.name">
            <td>{{ project.name }}</td>
            <td>{{ project.status }}</td>
            <td>
              <button class="view-btn" @click="showModal(project.name)">View</button>
              <button 
                v-if="project.status === 'Not Registered Yet'" 
                class="register-btn" 
                @click="showRegisterForm(project)"
              >
                Register Team
              </button>
              <span v-else>Team Registered</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal for Project Description -->
      <div v-if="showProjectModal" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h3>{{ currentProjectTitle }} Details</h3>
          <p>{{ currentProjectDescription }}</p>
        </div>
      </div>

      <!-- Registration Form Modal -->
      <div v-if="showRegisterModal" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h3>Register Team</h3>
          <form class="registration-form" @submit.prevent="submitForm">
            <!-- Added Project Details -->
            <input type="text" v-model="selectedProject.name" readonly placeholder="Project Name" required>
            <input type="hidden" v-model="selectedProject.id">
            
            <input type="url" name="github_repo" placeholder="Enter your GitHub repository link" required>
            <input type="text" name="github_token" placeholder="Enter your GitHub token" required>
            <div v-for="(user, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="user-section">
              <h4>Member {{ index + 1 }}</h4>
              <input v-model="form[`username${index}`]" type="text" placeholder="Username" required />
              <input v-model="form[`gitHubName${index}`]" type="text" placeholder="GitHub Name" required />
              <input v-model="form[`emailId${index}`]" type="email" placeholder="Email ID" required />
              <select v-model="form[`role${index}`]" placeholder="Role" required>
                <option disabled value="">Select Role</option>
                <option value="projectmanager">Project Architect/Manager</option>
                <option value="scrum">Scrum Master</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="testing">System Testing</option>
              </select>
            </div>

            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>

    <button @click="logout" class="logout-btn">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: "Tracking Student Progress in Software Project", status: "Registered" },
        { id: 2, name: "Electronics", status: "Not Registered Yet" },
        { id: 3, name: "Generative AI Integration", status: "Completed" },
      ],
      projectDescriptions: {
        "Tracking Student Progress in Software Project": "Tracking Student Progress in Software Projects",
      },
      showProjectModal: false,
      showRegisterModal: false,
      currentProjectTitle: "",
      currentProjectDescription: "",
      selectedProject: { id: null, name: "" },
      form: {
        username1: "", gitHubName1: "", emailId1: "", role1: "",
        username2: "", gitHubName2: "", emailId2: "", role2: "",
        username3: "", gitHubName3: "", emailId3: "", role3: "",
      },
    };
  },
  methods: {
    showModal(projectName) {
      this.currentProjectTitle = projectName;
      this.currentProjectDescription = this.projectDescriptions[projectName];
      this.showProjectModal = true;
    },
    showRegisterForm(project) {
      this.selectedProject = {
        id: project.id,
        name: project.name
      };
      this.showRegisterModal = true;
    },
    closeModal() {
      this.showProjectModal = false;
      this.showRegisterModal = false;
      this.selectedProject = { id: null, name: "" };
    },
    submitForm() {
      const formData = {
        ...this.form,
        projectId: this.selectedProject.id,
        projectName: this.selectedProject.name
      };
      console.log("Form submitted:", formData);
      this.closeModal();
    },
    goToViewStudent() {
      this.$router.push({ name: 'viewStudent' });
    },
    logout() {
      console.log('Logging out...');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Keeping all original styles exactly as provided */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* Dashboard Container */
.dashboard-container {
  width: 85%;
  max-width: 1100px;
  margin: 50px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Header */
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bolder;
  color: #333;
}

/* Table Styles */
table.project-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f7f7f7;
  font-weight: 600;
  color: #333;
}

/* Buttons */
button {
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.view-btn {
  background-color: #007bff;
  color: #fff;
}

.register-btn {
  background-color: #28a745;
  color: #fff;
  margin-left: 10px;
}

.view-btn:hover {
  background-color: #0056b3;
}

.register-btn:hover {
  background-color: #218838;
}

/* Modals */
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  max-width: 900px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* Registration Form */
.registration-form input,
.registration-form select {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.registration-form button {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #0056b3;
}

/* Logout Button */
.logout-btn {
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 12px;
  background-color: #dc3545;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #c82333;
}

/* User Section Styling */
.user-section {
  margin-bottom: 20px;
}

.user-section input,
.user-section select {
  width: 100%;
  margin-bottom: 10px;
}

/* Modals */
.modal {
  display: flex;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

/* Modal Content */
.modal-content {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  max-width: 900px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow-y: auto;
  max-height: 80vh;
}

/* Registration Form */
.registration-form {
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: auto;
}

.registration-form input,
.registration-form select {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.registration-form button {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #0056b3;
}

/* User Section Styling */
.user-section {
  margin-bottom: 20px;
}

.user-section input,
.user-section select {
  width: 100%;
  margin-bottom: 10px;
}
</style>