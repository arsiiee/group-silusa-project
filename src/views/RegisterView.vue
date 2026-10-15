<template>
  <div class="register-wrapper">
    <!-- Soft Blurred Rodelsa Building Background PNG -->
    <div class="rodelsa-bg"></div>

    <!-- Gold Bottom Strip/Floor Accent -->
    <div class="gold-floor-accent"></div>

    <!-- Main Container for Card & Backdrop (Kept 100% sharp and unblurred) -->
    <div class="register-container">
      <!-- Dark Maroon Backing Box -->
      <div class="maroon-backdrop"></div>

      <!-- Main White Registration Form Card -->
      <div class="register-card">
        <!-- Header Section -->
        <div class="card-header">
          <h1 class="brand-title">Liceo <span class="highlight">Creatives</span></h1>
          <p class="brand-subtitle">
            Create Your Account &bull; Join the student media production team.
          </p>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="handleRegister" class="register-form">
          <!-- First Name & Last Name Row -->
          <div class="form-row">
            <div class="form-group col">
              <label for="firstName">FIRST NAME</label>
              <div class="input-container">
                <span class="icon left-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input
                  id="firstName"
                  type="text"
                  v-model="firstName"
                  placeholder="Juan"
                  required
                />
              </div>
            </div>

            <div class="form-group col">
              <label for="lastName">LAST NAME</label>
              <div class="input-container">
                <span class="icon left-icon">
                  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input
                  id="lastName"
                  type="text"
                  v-model="lastName"
                  placeholder="Dela Cruz"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Department / Organization Field -->
          <div class="form-group">
            <div class="label-row">
              <label for="department">DEPARTMENT / ORGANIZATION</label>
              <span class="sub-label">ACADEMIC / ADMIN / ORG</span>
            </div>
            <div class="input-container">
              <span class="icon left-icon">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                </svg>
              </span>
              <select id="department" v-model="department" required class="select-input">
                <option value="" disabled>Select Department or Organization</option>

                <!-- Executive Leadership -->
                <option value="University Executive Board & Administrative Leadership">University Executive Board &amp; Administrative Leadership (President / VPAA)</option>

                <!-- Professional Schools & Colleges -->
                <option value="College of Law">College of Law</option>
                <option value="College of Medicine">College of Medicine</option>
                <option value="College of Medical Laboratory Science">College of Medical Laboratory Science</option>
                <option value="College of Teacher Education">College of Teacher Education</option>
                <option value="College of Information Technology">College of Information Technology</option>
                <option value="College of Engineering">College of Engineering</option>
                <option value="College of Nursing">College of Nursing</option>
                <option value="College of Business and Accountancy">College of Business and Accountancy</option>
                <option value="College of Arts and Sciences">College of Arts and Sciences</option>
                <option value="Senior High School Department">Senior High School Department</option>

                <!-- Offices & Student Organizations -->
                <option value="Office of Student Affairs (OSA)">Office of Student Affairs (OSA)</option>
                <option value="University Guidance & Testing Center">University Guidance &amp; Testing Center</option>
                <option value="Central Student Council (CSC)">Central Student Council (CSC)</option>
                <option value="Liceo Media Production Group">Liceo Media Production Group</option>
              </select>
            </div>
          </div>

          <!-- Email Field -->
          <div class="form-group">
            <div class="label-row">
              <label for="email">EMAIL</label>
              <span class="sub-label">LICEO DOMAIN</span>
            </div>
            <div class="input-container">
              <span class="icon left-icon">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="you@liceo.edu.ph"
                required
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <div class="label-row">
              <label for="password">PASSWORD</label>
              <span class="sub-label">STANDARD CREDENTIALS</span>
            </div>
            <div class="input-container">
              <span class="icon left-icon">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="••••••••••••"
                required
              />
              <button type="button" class="icon right-icon toggle-pwd" @click="showPassword = !showPassword">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="form-group">
            <label for="confirmPassword">CONFIRM PASSWORD</label>
            <div class="input-container">
              <span class="icon left-icon">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M21 2v6h-6"></path>
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                </svg>
              </span>
              <input
                id="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="••••••••••••"
                required
              />
              <button type="button" class="icon right-icon toggle-pwd" @click="showConfirmPassword = !showConfirmPassword">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-btn">
            Create Account <span class="arrow">&rarr;</span>
          </button>
        </form>

        <!-- Footer / Login Link Box -->
        <div class="card-footer-box">
          <span>Already have an account? </span>
          <router-link to="/login" class="login-link">Log in here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const firstName = ref('Juan')
const lastName = ref('Dela Cruz')
const department = ref('College of Information Technology')
const email = ref('you@liceo.edu.ph')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  router.push('/dashboard')
}
</script>

<style scoped>
/* Page Layout & Dark Maroon Background */
.register-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #5b0606;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Soft Blurred Rodelsa Background */
.rodelsa-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 98%;
  max-width: 1250px;
  height: 92%;
  transform: translate(-50%, -52%);
  background-image: url('@/assets/rodelsa.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  filter: blur(2px) sepia(0.2) contrast(1.02) brightness(0.98);
  image-rendering: -webkit-optimize-contrast;
  z-index: 1;
}

/* Gold Bottom Strip/Floor Accent */
.gold-floor-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12%;
  background: linear-gradient(180deg, #b85f06 0%, #8e4202 100%);
  opacity: 0.37;
  filter: blur(8px);
  z-index: 2;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3);
}

/* Center card container layout */
.register-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
}

/* Dark Maroon Background Block Behind Card */
.maroon-backdrop {
  position: absolute;
  width: 410px;
  height: 440px;
  background-color: #4a0307;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  transform: translateY(12px);
  z-index: 3;
}

/* White Main Card */
.register-card {
  position: relative;
  z-index: 4;
  width: 360px;
  background: #ffffff;
  border-radius: 12px;
  padding: 22px 24px 18px 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

/* Title & Branding */
.card-header {
  text-align: center;
  margin-bottom: 14px;
}

.brand-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 2px 0;
  letter-spacing: -0.3px;
}

.brand-title .highlight {
  color: #c8831f;
}

.brand-subtitle {
  font-size: 0.6rem;
  color: #616161;
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
}

/* Form layout */
.form-row {
  display: flex;
  gap: 10px;
}

.col {
  flex: 1;
}

.form-group {
  margin-bottom: 9px;
}

.form-group label {
  font-size: 0.58rem;
  font-weight: 700;
  color: #27272a;
  letter-spacing: 0.5px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.sub-label {
  font-size: 0.52rem;
  color: #888888;
  font-weight: 600;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.input-container input,
.select-input {
  width: 100%;
  padding: 6px 28px 6px 30px;
  border: 1px solid #71717a;
  border-radius: 6px;
  font-size: 0.72rem;
  color: #27272a;
  outline: none;
  background-color: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.select-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%2371717a' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  cursor: pointer;
}

.input-container input:focus,
.select-input:focus {
  border-color: #7a0c1b;
  box-shadow: 0 0 0 2px rgba(122, 12, 27, 0.15);
}

.icon {
  position: absolute;
  display: flex;
  align-items: center;
  color: #71717a;
  pointer-events: none;
}

.left-icon {
  left: 9px;
}

.right-icon {
  right: 9px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  pointer-events: auto;
}

.right-icon:hover {
  color: #18181b;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 8px;
  margin-top: 6px;
  background-color: #7a0c1b;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s, transform 0.1s;
}

.submit-btn:hover {
  background-color: #610814;
}

.submit-btn:active {
  transform: translateY(1px);
}

.arrow {
  font-size: 0.85rem;
}

/* Footer Container Box */
.card-footer-box {
  background-color: #f8fafc;
  border-radius: 6px;
  padding: 8px;
  text-align: center;
  margin-top: 10px;
  font-size: 0.62rem;
  color: #64748b;
}

.login-link {
  color: #800a1d;
  font-weight: 700;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
