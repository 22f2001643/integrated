<template>
  <div class="design">
    <div class="login-container">
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">SignUp</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </nav>
      
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="usernameOrEmail">Username or Email</label>
          <input v-model="usernameOrEmail" type="text" id="usernameOrEmail" required />
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <select v-model="role" id="role" required>
            <option value="" disabled>Select a role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" required />
        </div>
        
        <button type="submit">Login</button>
  
        <div v-if="message" :class="{'error': isError, 'success': !isError}">
          {{ message }}
        </div>
      </form>
    </div>
  </div>
  </template>
  
  
  <script>
export default {
  data() {
    return {
      usernameOrEmail: "", // For username or email input
      password: "",
      role: "",
      message: "",
      isError: false
    };
  },
  methods: {
    async loginUser() {
      try {
        // Prepare the payload for API
        const payload = {
          username: this.usernameOrEmail,
          password: this.password,
        };

        // Make API call using fetch
        const response = await fetch("http://localhost:7979/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        // Check if response is OK
        if (response.ok) {
          const data = await response.json();
          const { token, user } = data;

          // Store the JWT token in localStorage
          localStorage.setItem("token", token);

          // Redirect based on role
          if (user.role === "instructor") {
            this.$router.push("/instructor-dashboard");
          } else if (user.role === "student") {
            this.$router.push("/student-dashboard");
          } else {
            this.$router.push("/");
          }

          this.message = "Login successful!";
          this.isError = false;
        } else {
          // Handle error responses
          const errorData = await response.json();
          this.message = errorData.error || "An error occurred during login.";
          this.isError = true;
        }
      } catch (error) {
        // Handle network errors or unexpected issues
        this.message = "An unexpected error occurred. Please try again.";
        this.isError = true;
      }
    },
  },
};
</script>

  
  <style scoped>
  .login-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    border: 3px solid #000000;
    border-radius: 25px;
    background: #f9f9f9;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-group input,
  .form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff52;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    width: 100px;
  }
  button:hover {
    background-color: #0056b3;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  .success {
    color: green;
    margin-top: 10px;
  }
  .navbar {
    background-color: #000000a9;
    padding: 1rem;
    border-radius: 1px;
  }
  .navbar-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  .nav-item {
    margin: 0;
  }
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
  }
  .nav-link:hover {
    background-color: #555;
    border-radius: 5px;
  }
  .design {
    background: linear-gradient(to right, #f0f2f0, #9ec7da);
            padding-bottom: 100px;
            padding-top:30px;
        }

    h1{
      font-size: 30px;
    }
  </style>
  
