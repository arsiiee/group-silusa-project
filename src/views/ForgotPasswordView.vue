<template>
  <div class="login-wrapper">
    <!-- Main Outer Container -->
    <div class="login-container">
      <!-- Dark Maroon Card Container -->
      <div class="login-card">
        <!-- White Form Card -->
        <div class="login-box">
          <!-- Logo & Header -->
          <div class="header-section">
            <h1 class="brand-title">
              Liceo <span class="brand-highlight">Creatives</span>
            </h1>
            <p class="subtitle">
              {{ currentStep === 1 ? 'Password Recovery' : 'Reset Your Password' }}
            </p>
          </div>

          <!-- Alert Messages -->
          <div v-if="statusMessage" class="alert alert-success">
            {{ statusMessage }}
          </div>
          <div v-if="errorMessage" class="alert alert-error">
            {{ errorMessage }}
          </div>

          <!-- STEP 1: REQUEST RESET LINK / CODE -->
          <form v-if="currentStep === 1" @submit.prevent="handleSendCode" class="form-container">
            <div class="input-group">
              <div class="label-row">
                <label for="email" class="input-label">EMAIL</label>
                <span class="label-hint">liceo domain</span>
              </div>
              <div class="input-wrapper">
                <span class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="you@liceo.edu.ph"
                  class="form-input"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isLoading" class="submit-btn">
              <span v-if="!isLoading">Send Reset Link &rarr;</span>
              <span v-else>Processing...</span>
            </button>
          </form>

          <!-- STEP 2: VERIFICATION CODE & NEW PASSWORD -->
          <form v-else-if="currentStep === 2" @submit.prevent="handleResetPassword" class="form-container">
            <!-- Verification Code Input -->
            <div class="input-group">
              <div class="label-row">
                <label for="code" class="input-label">VERIFICATION CODE</label>
                <span class="label-hint">check inbox</span>
              </div>
              <div class="input-wrapper">
                <span class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <input
                  id="code"
                  v-model="verificationCode"
                  type="text"
                  required
                  placeholder="Enter 6-digit code"
                  class="form-input"
                />
              </div>
            </div>

            <!-- New Password Input -->
            <div class="input-group">
              <div class="label-row">
                <label for="newPassword" class="input-label">NEW PASSWORD</label>
              </div>
              <div class="input-wrapper">
                <span class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  id="newPassword"
                  v-model="newPassword"
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  class="form-input"
                />
              </div>
            </div>

            <!-- Confirm New Password Input -->
            <div class="input-group">
              <div class="label-row">
                <label for="confirmPassword" class="input-label">CONFIRM NEW PASSWORD</label>
              </div>
              <div class="input-wrapper">
                <span class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  class="form-input"
                />
              </div>
            </div>

            <!-- Update Password Button -->
            <button type="submit" :disabled="isLoading" class="submit-btn">
              <span v-if="!isLoading">Update Password &rarr;</span>
              <span v-else>Updating...</span>
            </button>
          </form>

          <!-- Back to Login Link -->
          <div class="footer-section">
            <p class="footer-text">
              Remember your password?
              <router-link to="/login" class="footer-link">Back to Log In</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Rodelsa Hall Background Cutout -->
    <div class="rodelsa-bg"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentStep = ref(1)
const email = ref('')
const verificationCode = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const isLoading = ref(false)
const statusMessage = ref('')
const errorMessage = ref('')

// Step 1: Simulated Code Dispatch
const handleSendCode = () => {
  isLoading.value = true
  statusMessage.value = ''
  errorMessage.value = ''

  setTimeout(() => {
    isLoading.value = false
    statusMessage.value = 'Verification code sent! Enter code and new password below.'
    currentStep.value = 2
  }, 600)
}

// Step 2: Simulated Password Reset Update
const handleResetPassword = () => {
  statusMessage.value = ''
  errorMessage.value = ''

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match. Please check again.'
    return
  }

  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    statusMessage.value = 'Password reset successful! Redirecting to login...'
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  }, 800)
}
</script>

<style scoped>
.login-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #4a0000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.login-card {
  background-color: #2b0000;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 420px;
}

.login-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 28px 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.header-section {
  text-align: center;
  margin-bottom: 20px;
}

.brand-title {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
}

.brand-highlight {
  color: #b8860b;
}

.subtitle {
  font-size: 11px;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
}

.alert {
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 16px;
}

.alert-success {
  background-color: #f0fff4;
  border: 1px solid #c6f6d5;
  color: #2f855a;
}

.alert-error {
  background-color: #fff5f5;
  border: 1px solid #fed7d7;
  color: #c53030;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-label {
  font-size: 10px;
  font-weight: 700;
  color: #2d3748;
  letter-spacing: 0.5px;
}

.label-hint {
  font-size: 10px;
  color: #a0aec0;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: #a0aec0;
  display: flex;
  align-items: center;
}

.form-input {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #7a121d;
}

.submit-btn {
  width: 100%;
  background-color: #6b0d18;
  color: #ffffff;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 6px;
}

.submit-btn:hover {
  background-color: #520912;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.footer-section {
  text-align: center;
  margin-top: 20px;
}

.footer-text {
  font-size: 11px;
  color: #718096;
  margin: 0;
}

.footer-link {
  color: #6b0d18;
  font-weight: 700;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

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
  z-index: 1;
}
</style>
