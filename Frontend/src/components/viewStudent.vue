<template>
  <div class="project-page">
    <div class="team-info">
      <p><strong>Team Name:</strong> Team 22</p>
      <p><strong>Team Members:</strong> Thendral, Saquib, Aman, Shikhar, Srijan, Saketh, Sunil</p>
    </div>

    <h2>Projects</h2>

    <!-- Project Dropdown -->
    <div class="project-dropdown">
      <label for="projectSelect">Select Project:</label>
      <select id="projectSelect" v-model="selectedProject" @change="fetchProjectDetails">
        <option disabled value="">Choose a Project</option>
        <option v-for="project in projects" :key="project.id" :value="project.id">
          {{ project.title }}
        </option>
      </select>
    </div>

    <!-- Project Details -->
    <div v-if="projectDetails" class="project-details">
      <h3>{{ projectDetails.title }}</h3>
      <p><strong>Problem Statement:</strong> {{ projectDetails.subtitle }}</p>
      <table>
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Grade</th>
            <th>Commit Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="milestone in projectDetails.milestones" :key="milestone.id">
            <td>{{ milestone.name }}</td>
            <td>{{ milestone.date }}</td>
            <td>{{ milestone.status }}</td>
            <td>{{ milestone.feedback }}</td>
            <td>{{ milestone.grade }}</td>
            <td>{{ milestone.commitDate }}</td>
          </tr>
        </tbody>
      </table>
      <div class="buttons">
        <a class="button" href="https://github.com/your-repository-link" target="_blank">GitHub Repository</a>
        <button class="button" @click="viewCommitHistory">View Commit History</button>
        <a class="button" href="https://drive.google.com/your-project-resources" target="_blank">Project Resource</a>
      </div>
    </div>

    <p class="text-center">
      <a href="/student-dashboard" class="button">Back</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProject: "",
      projects: [
        { id: 1, title: "Project Tracking Student Progress in Software Project" },
        { id: 2, title: "Project Beta" },
        { id: 3, title: "Project Gamma" }
      ],
      projectDetails: null
    };
  },
  methods: {
    fetchProjectDetails() {
      // This would typically involve an API call.
      // For demonstration, we're using hardcoded data.

      const projectData = {
        1: {
          title: "Project Tracking Student Progress in Software Project",
          subtitle: "Tracking Student Progress in Software Projects In course projects such as the ones you have already done in Application Development I and II, it can be challenging for instructors to effectively track the progress of student projects, particularly in larger classes where multiple teams are working on different tasks.",
          milestones: [
            { id: 1, name: "Initial Setup", date: "2024-01-15", status: "Completed", feedback: "Well done", grade: "A", commitDate: "2024-01-16" },
            { id: 2, name: "Prototype", date: "2024-02-10", status: "Completed", feedback: "Good job", grade: "A-", commitDate: "2024-02-11" },
            { id: 3, name: "Final Review", date: "2024-03-25", status: "In Progress", feedback: "Pending", grade: "Pending", commitDate: "Pending" }
          ]
        },
        2: {
          title: "Project Beta",
          subtitle: "Blockchain Supply Chain",
          milestones: [
            { id: 1, name: "Research Phase", date: "2024-01-10", status: "Completed", feedback: "Excellent research", grade: "A+", commitDate: "2024-01-11" },
            { id: 2, name: "Design Proposal", date: "2024-02-15", status: "In Progress", feedback: "Good progress", grade: "B+", commitDate: "Pending" }
          ]
        },
        3: {
          title: "Project Gamma",
          subtitle: "Generative AI",
          milestones: [
            { id: 1, name: "Planning", date: "2024-01-20", status: "Completed", feedback: "Thorough plan", grade: "A", commitDate: "2024-01-21" },
            { id: 2, name: "Development Phase", date: "2024-02-28", status: "In Progress", feedback: "On track", grade: "B", commitDate: "Pending" }
          ]
        }
      };

      this.projectDetails = projectData[this.selectedProject] || null;
    },
    viewCommitHistory() {
      // Logic to view commit history
      this.$router.push({ name: 'commitHistory' });
      console.log('View commit history button clicked.');
    }
  }
};
</script>

<style scoped>
.project-page {
  max-width: 900px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.team-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #f1f5f9;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
}

.team-info p {
  margin: 0;
  font-weight: 500;
  color: #34495e;
}

.project-page h2 {
  text-align: center;
  color: #1e88e5;
  font-size: 34px;
  margin-bottom: 20px;
}

.project-dropdown {
  margin-bottom: 20px;
  text-align: center;
}

.project-dropdown label {
  font-weight: bold;
  color: #1e88e5;
}

#projectSelect {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d1d9e6;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

#projectSelect:focus {
  outline: none;
  border-color: #1e88e5;
  box-shadow: 0 0 5px rgba(30, 136, 229, 0.2);
}

.project-details {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: 25px;
}

.project-details h3 {
  color: #1e88e5;
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
}

.project-details p {
  text-align: center;
  font-style: italic;
  color: #607d8b;
}

.project-details table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;
  font-size: 16px;
}

.project-details th {
  background-color: #1e88e5;
  color: #ffffff;
  padding: 14px;
  text-align: center;
  border-bottom: 3px solid #d1d9e6;
}

.project-details td {
  padding: 14px;
  border-bottom: 1px solid #d1d9e6;
  text-align: center;
  color: #455a64;
}

.project-details tr:nth-child(even) {
  background-color: #f9f9f9;
}

.project-details tr:hover {
  background-color: #e3f2fd;
}

.buttons {
  text-align: center;
  margin-top: 25px;
}

.button {
  background-color: #43a047;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  text-decoration: none;
  margin: 8px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #388e3c;
}

.text-center {
  text-align: center;
}

</style>
