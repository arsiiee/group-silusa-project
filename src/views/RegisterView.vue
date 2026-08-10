<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  console.log('Registering with:', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <div class="register-wrapper">
    <!-- Top Left Header Branding -->
    <header class="top-header">
      <div class="header-logo">LC</div>
      <span class="header-title">Liceo Creatives</span>
    </header>

    <!-- Main Centered Container -->
    <main class="register-container">
      <!-- Team Badge Pill -->
      <div class="team-badge">
        <svg
          class="badge-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
          />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
        <span class="badge-text">The School creatives team</span>
      </div>

      <!-- Main Glassmorphic Card -->
      <div class="register-card">
        <!-- Logo Circle -->
        <div class="logo-circle">
          <span>LC</span>
        </div>

        <h1 class="main-title">Liceo Creatives</h1>
        <p class="subtitle">School Media Production Booking System</p>

        <div class="divider-text">
          <span>CREATE ACCOUNT</span>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="register-form">
          <!-- First Name & Last Name Side-by-Side -->
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">FIRST NAME</label>
              <div class="input-wrapper">
                <svg
                  class="input-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input id="firstName" v-model="firstName" type="text" placeholder="Juan" required />
              </div>
            </div>

            <div class="form-group">
              <label for="lastName">LAST NAME</label>
              <div class="input-wrapper">
                <svg
                  class="input-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  placeholder="Dela Cruz"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Email Address -->
          <div class="form-group">
            <label for="email">EMAIL ADDRESS</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="you@liceo.edu.ph"
                required
              />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password">PASSWORD</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••••••"
                required
              />
              <button
                type="button"
                class="toggle-password"
                @click="showPassword = !showPassword"
                :title="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg
                  v-if="!showPassword"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword">CONFIRM PASSWORD</label>
            <div class="input-wrapper">
              <svg
                class="input-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="••••••••••••"
                required
              />
              <button
                type="button"
                class="toggle-password"
                @click="showConfirmPassword = !showConfirmPassword"
                :title="showConfirmPassword ? 'Hide password' : 'Show password'"
              >
                <svg
                  v-if="!showConfirmPassword"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              </button>
            </div>
          </div>

          <button type="submit" class="submit-btn">Create Account</button>
        </form>

        <div class="divider-or">
          <span>or</span>
        </div>

        <p class="login-text">
          Already have an account? <router-link to="/login" class="login-link">Log In</router-link>
        </p>
      </div>

      <footer class="footer-text">© 2025 Liceo Creatives · School Media Production</footer>
    </main>
  </div>
</template>

<style scoped>
/* Fullscreen Desktop View with Full-Bleed Maroon & Gold Ambient Gradient */
.register-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #120406;
  background-image:
    radial-gradient(ellipse 90% 55% at 50% -10%, rgba(224, 202, 101, 0.28) 0%, transparent 60%),
    radial-gradient(
      ellipse 100% 80% at 50% 50%,
      rgba(189, 30, 36, 0.35) 0%,
      rgba(110, 16, 22, 0.25) 50%,
      rgba(18, 4, 6, 0.9) 100%
    ),
    radial-gradient(circle at 10% 90%, rgba(224, 202, 101, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 90% 90%, rgba(189, 30, 36, 0.2) 0%, transparent 40%),
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    38px 38px,
    38px 38px;
  background-position: center center;
  position: relative;
  padding: 2.5rem 1rem;
  box-sizing: border-box;
  color: #fff;
  overflow-x: hidden;
}

/* Header positioning top-left */
.top-header {
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
}

.header-logo {
  background: linear-gradient(135deg, #bd1e24 0%, #7e1216 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(189, 30, 36, 0.4);
}

.header-title {
  color: #e2e2e2;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* Main Container centered */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 460px;
  z-index: 1;
}

/* Team Badge Pill */
.team-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(224, 202, 101, 0.1);
  border: 1px solid rgba(224, 202, 101, 0.35);
  padding: 0.4rem 1.1rem;
  border-radius: 50px;
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: #f5dc78;
  backdrop-filter: blur(12px);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(224, 202, 101, 0.15);
}

.badge-icon {
  color: #f5dc78;
}

/* Glassmorphism Register Card */
.register-card {
  width: 100%;
  background: rgba(20, 14, 18, 0.72);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(224, 202, 101, 0.35);
  border-radius: 24px;
  padding: 2.25rem 2rem;
  box-sizing: border-box;
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.7),
    0 0 40px rgba(189, 30, 36, 0.22);
  text-align: center;
}

/* Logo Circle */
.logo-circle {
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, #e52d35 0%, #8c1318 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem auto;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  box-shadow: 0 8px 24px rgba(189, 30, 36, 0.5);
}

.main-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
}

.subtitle {
  color: #a8a8a8;
  font-size: 0.8rem;
  margin: 0 0 1.25rem 0;
}

/* Dividers */
.divider-text,
.divider-or {
  display: flex;
  align-items: center;
  text-align: center;
  color: #777;
  font-size: 0.72rem;
  margin: 1.1rem 0;
  letter-spacing: 0.05em;
}

.divider-text::before,
.divider-text::after,
.divider-or::before,
.divider-or::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.divider-text span,
.divider-or span {
  padding: 0 0.85rem;
  color: #999;
}

/* Form Styles */
.register-form {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  text-align: left;
}

.form-row {
  display: flex;
  gap: 0.85rem;
}

.form-row .form-group {
  flex: 1;
}

.form-group label {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: #b0b0b0;
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 0.85rem;
  color: #888;
  pointer-events: none;
  transition: color 0.25s ease;
}

.input-wrapper:focus-within .input-icon {
  color: #f5dc78;
}

input {
  width: 100%;
  padding: 0.78rem 2.4rem 0.78rem 2.4rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(12, 10, 12, 0.75);
  color: #fff;
  box-sizing: border-box;
  font-size: 0.85rem;
  outline: none;
  transition: all 0.25s ease;
}

input:focus {
  border-color: rgba(224, 202, 101, 0.7);
  box-shadow: 0 0 16px rgba(224, 202, 101, 0.2);
  background: rgba(16, 12, 15, 0.9);
}

.toggle-password {
  position: absolute;
  right: 0.8rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.toggle-password:hover {
  color: #f5dc78;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 0.82rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #d32f2f 0%, #8c1318 100%);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.35rem;
  box-shadow: 0 4px 20px rgba(189, 30, 36, 0.45);
  transition: all 0.25s ease;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #e53935 0%, #a0161b 100%);
  box-shadow: 0 6px 24px rgba(189, 30, 36, 0.65);
  transform: translateY(-1px);
}

.login-text {
  font-size: 0.82rem;
  color: #999;
  margin: 0;
}

.login-link {
  color: #e0ca65;
  text-decoration: none;
  font-weight: 600;
}

.login-link:hover {
  color: #f5dc78;
  text-decoration: underline;
}

.footer-text {
  margin-top: 1.75rem;
  color: #666;
  font-size: 0.72rem;
}
</style>
