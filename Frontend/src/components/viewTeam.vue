<template>
  <div class="container">
    <h2>Team 22 - Project Tracker 22.0</h2>

    <table>
      <tr>
        <th>Team Name</th>
        <th>Team Member</th>
      </tr>
      <tr>
        <td>Team 22</td>
        <td>Thendral, Saquib, Aman, Shikhar, Srijan, Saketh, Sunil</td>
      </tr>
    </table>

    <h3>Milestones</h3>
    <div class="table-container">
      <table>
        <tr>
          <th>Milestone</th>
          <th>Deadline</th>
          <th>Feedback (GenAI)</th>
          <th>Give Feedback</th>
          <th>Assign Grade</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="(milestone, index) in milestones" :key="index">
          <td>{{ milestone.name }}</td>
          <td>{{ milestone.deadline }}</td>
          <td>
            <input v-model="milestone.feedback" type="text" placeholder="AI feedback here">
          </td>
          <td>
            <input v-model="milestone.userFeedback" type="text" placeholder="Your feedback here">
          </td>
          <td>
            <select v-model="milestone.grade">
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="U">U</option>
            </select>
          </td>
          <td>{{ milestone.status }}</td>
          <td><button class="button save" @click="saveMilestone(index)">Save</button></td>
        </tr>
      </table>
    </div>

    <div class="buttons">
      <button class="button" @click="toggleCommitHistory">Commit History</button>
      <a class="button" href="https://github.com/your-repository-link" target="_blank">GitHub Repository</a>
    </div>

    <div v-if="showCommitHistory" id="commitHistory">
      <h3>Commit History</h3>
      <ul>
        <li>Commit 1: Fixed bug in milestone tracking (2024-10-15)</li>
        <li>Commit 2: Added new feature for grading system (2024-10-10)</li>
        <li>Commit 3: Initial project setup and configuration (2024-10-01)</li>
      </ul>
    </div><br>

    <p class="text-center">
      <a href="/viewproject" class="button">Back</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      milestones: [
        { name: "Milestone 1", deadline: "2024-10-20", feedback: "", userFeedback: "", grade: "S", status: "Submitted" },
        { name: "Milestone 2", deadline: "2024-10-25", feedback: "", userFeedback: "", grade: "S", status: "Pending" },
        { name: "Milestone 3", deadline: "2024-10-29", feedback: "", userFeedback: "", grade: "S", status: "Not Submitted" }
      ],
      showCommitHistory: false
    };
  },
  methods: {
    saveMilestone(index) {
      console.log("Saving milestone", this.milestones[index]);
      // Add save logic here (e.g., sending data to a backend or local storage)
    },
    toggleCommitHistory() {
      this.showCommitHistory = !this.showCommitHistory;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px; /* Increased the maximum width */
  margin: 50px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  white-space: nowrap; /* Prevent text from wrapping to ensure the table stays neat */
}

th {
  background-color: #f2f2f2;
}

.buttons {
  text-align: center;
  margin-top: 20px;
}

.button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.button:hover {
  background-color: #45a049;
}

#commitHistory {
  margin-top: 20px;
}

.text-center {
  text-align: center;
}
</style>
