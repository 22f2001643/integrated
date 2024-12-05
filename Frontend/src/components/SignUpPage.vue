<template>
  <div class="design">
    <div class="register-container">
      <nav class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </nav>
      <h1>Register</h1>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
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
        <button type="submit">Register</button>
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
      username: "",
      email: "",
      password: "",
      role: "",
      message: "",
      isError: false,
    };
  },
  methods: {
    async registerUser() {
      try {
        const payload = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: this.role,
        };

        const response = await fetch("http://localhost:7979/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok) {
          this.message = result.message;
          this.isError = false;
          this.$router.push("/login");
        } else {
          this.message = result.error;
          this.isError = true;
        }
      } catch (error) {
        this.message = "An error occurred during registration.";
        this.isError = true;
      }
    },
  },
};
 /* export default {
    data() {
      return {
        username: '',
        password: '',
        role: '',
        platform: '',
        industry: '',
        message: '',
        isError: false
      };
    },
    methods: {
      async registerUser() {
        try {
          // Prepare the data to be sent
          const payload = {
            username: this.username,
            password: this.password,
            role: this.role,
            
          };
  
          // Make the API call to register
          const response = await fetch('http://localhost:7979/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
  
          const result = await response.json();
          if (response.ok) {
            this.message = result.message;
            this.isError = false;
            this.$router.push('/login');
          } else {
            this.message = result.error;
            this.isError = true;
            this.$router.push('/login');
          }
        } catch (error) {
          this.message = 'An error occurred during registration.';
          this.isError = true;
          this.$router.push('/login');
        }
      }
    }
  };*/
  </script>
  
  <style scoped>
  .register-container {
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
  }
  .form-group input,
  .form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #9900ff23;
    color: rgb(0, 0, 0);
    font-size: 16px;
    cursor: pointer;
    width:100px;
  }
  button:hover {
    background-color: #8b00e7;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  .navbar {
      background-color: #000;
      border-radius: 25px;
      padding: 1rem;
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
    /* Main content styling */
    .container {
      padding: 2rem;
    }

    .design {
      background: linear-gradient(to right, #f0f2f0, #9ec7da);
            padding-bottom: 100px;
            padding-top:30px;
        }

    h1{
      font-size:30px;
    }
  </style>
  