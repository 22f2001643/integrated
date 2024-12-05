<template>
  <div class="commit-history">
    <h2>Commit History</h2>
    <table class="commit-table">
      <thead>
        <tr>
          <th>Commit Hash</th>
          <th>Author</th>
          <th>Message</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(commit, index) in commitHistory" :key="index">
          <td>{{ commit.hash }}</td>
          <td>{{ commit.author }}</td>
          <td>{{ commit.message }}</td>
          <td>{{ commit.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="back-button" @click="goBack">🔙 Back</div>
</template>

<script>
export default {
  name: "CommitHistory",
  data() {
    return {
      // Updated dummy data for commit history with provided names
      commitHistory: [
        {
          hash: "a1b2c3d4",
          author: "Thendral",
          message: "Initial setup of project structure",
          date: "2024-11-01",
        },
        {
          hash: "e5f6g7h8",
          author: "Saquib",
          message: "Implemented user authentication",
          date: "2024-11-02",
        },
        {
          hash: "i9j0k1l2",
          author: "Aman",
          message: "Added new features for dashboard",
          date: "2024-11-03",
        },
        {
          hash: "m3n4o5p6",
          author: "Shikhar",
          message: "Bug fixes and performance improvements",
          date: "2024-11-04",
        },
        {
          hash: "q7r8s9t0",
          author: "Srijan",
          message: "Updated database schema",
          date: "2024-11-05",
        },
        {
          hash: "u1v2w3x4",
          author: "Saketh",
          message: "Refactored codebase for better readability",
          date: "2024-11-06",
        },
        {
          hash: "y5z6a7b8",
          author: "Sunil",
          message: "Enhanced UI for the landing page",
          date: "2024-11-07",
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router ? this.$router.go(-1) : window.history.back();
    },
  },
};
</script>

<style scoped>
.commit-history {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.commit-table {
  width: 100%;
  border-collapse: collapse;
}

.commit-table th,
.commit-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.commit-table th {
  background-color: #f4f4f4;
}

.commit-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.commit-table tr:hover {
  background-color: #f1f1f1;
}
.back-button {
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 20px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #2980b9;
}
</style>
