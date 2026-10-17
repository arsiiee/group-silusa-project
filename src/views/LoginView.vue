<template>
    <div class="login-wrapper">
        <!-- Blurred Rodelsa Building Background PNG -->
        <div class="rodelsa-bg"></div>

        <!-- Gold Bottom Strip/Floor Accent -->
        <div class="gold-floor-accent"></div>

        <!-- Main Container for Card & Backdrop -->
        <div class="login-container">
            <!-- Dark Maroon Backing Box -->
            <div class="maroon-backdrop"></div>

            <!-- Main White Login Form Card -->
            <div class="login-card">
                <!-- Header Section -->
                <div class="card-header">
                    <h1 class="brand-title">Liceo <span class="highlight">Creatives</span></h1>
                </div>

                <!-- Form Section -->
                <form @submit.prevent="handleLogin" class="login-form">
                    <!-- Email Field -->
                    <div class="form-group">
                        <div class="label-row">
                            <label for="email">EMAIL</label>
                            <span class="sub-label">liceo domain</span>
                        </div>
                        <div class="input-container">
                            <span class="icon left-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                >
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                    ></path>
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
                            <label for="password" class="input-label">PASSWORD</label>

                            <!-- SMALL MAROON FORGOT PASSWORD LINK -->
                            <router-link to="/forgot-password" class="forgot-password-link">
                                Forgot Password?
                            </router-link>
                        </div>
                        <div class="input-container">
                            <span class="icon left-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                >
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </span>
                            <input
                                id="password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model="password"
                                placeholder="••••••••••••••••"
                                required
                            />
                            <button
                                type="button"
                                class="icon right-icon toggle-pwd"
                                @click="showPassword = !showPassword"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Keep Signed In Checkbox -->
                    <div class="checkbox-group">
                        <label class="custom-checkbox">
                            <input type="checkbox" v-model="keepSignedIn" />
                            <span class="checkmark"></span>
                            <span class="checkbox-label">Keep workstation signed in</span>
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="submit-btn">
                        Log In <span class="arrow">&rarr;</span>
                    </button>
                </form>

                <!-- Footer / Register Link -->
                <div class="card-footer">
                    <span>Don't have an account? </span>
                    <router-link to="/register" class="register-link">Register here</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api, getToken, saveSession, errorMessage } from '../lib/api.js'

const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const keepSignedIn = ref(true)
const busy = ref(false)

if (getToken()) router.replace('/dashboard')

const handleLogin = async () => {
    if (busy.value) return
    busy.value = true
    try {
        const { data } = await api.post('/login', {
            email: email.value,
            password: password.value,
        })
        saveSession(data.token, data.user, keepSignedIn.value)
        router.push('/dashboard')
    } catch (error) {
        alert(errorMessage(error))
    } finally {
        busy.value = false
    }
}
</script>

<style scoped>
/* Page Layout & Dark Maroon Background */
.login-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #5b0606;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family:
        'Inter',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
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

/* Blurred Gold Bottom Strip with 37% Opacity */
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
.login-container {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 480px;
}

/* Dark Maroon Background Block Behind Card */
.maroon-backdrop {
    position: absolute;
    width: 380px;
    height: 290px;
    background-color: #4a0307;
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    transform: translateY(15px);
    z-index: 3;
}

/* White Main Card */
.login-card {
    position: relative;
    z-index: 4;
    width: 330px;
    background: #ffffff;
    border-radius: 12px;
    padding: 28px 24px 22px 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
}

/* Title & Branding */
.card-header {
    text-align: center;
    margin-bottom: 20px;
}

.brand-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0;
    letter-spacing: -0.3px;
}

.brand-title .highlight {
    color: #c8831f;
}

/* Input Fields Styling */
.form-group {
    margin-bottom: 12px;
}

.label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
}

.label-row label,
.input-label {
    font-size: 0.6rem;
    font-weight: 700;
    color: #27272a;
    letter-spacing: 0.5px;
}

.sub-label {
    font-size: 0.55rem;
    color: #a1a1aa;
}

.forgot-password-link {
    font-size: 10px;
    font-weight: 600;
    color: #6b0d18;
    text-decoration: none;
    transition:
        color 0.2s,
        text-decoration 0.2s;
}

.forgot-password-link:hover {
    color: #520912;
    text-decoration: underline;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
}

.input-container input {
    width: 100%;
    padding: 8px 30px 8px 32px;
    border: 1px solid #71717a;
    border-radius: 6px;
    font-size: 0.75rem;
    color: #27272a;
    outline: none;
    background-color: #fff;
    transition:
        border-color 0.2s,
        box-shadow 0.2s;
    box-sizing: border-box;
}

.input-container input:focus {
    border-color: #7a0c1b;
    box-shadow: 0 0 0 2px rgba(122, 12, 27, 0.15);
}

.icon {
    position: absolute;
    display: flex;
    align-items: center;
    color: #71717a;
}

.left-icon {
    left: 10px;
}

.right-icon {
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.right-icon:hover {
    color: #18181b;
}

/* Checkbox */
.checkbox-group {
    margin-top: 14px;
    margin-bottom: 14px;
}

.custom-checkbox {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
}

.custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: relative;
    height: 14px;
    width: 14px;
    background-color: #fff;
    border: 1px solid #800a1d;
    border-radius: 3px;
    margin-right: 8px;
    display: inline-block;
    box-sizing: border-box;
    transition:
        background-color 0.2s,
        border-color 0.2s;
}

/* Checkmark background when checked */
.custom-checkbox input:checked ~ .checkmark {
    background-color: #800a1d;
    border-color: #800a1d;
}

/* White checkmark icon created using pseudo-element */
.checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

/* Show checkmark when checked */
.custom-checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkbox-label {
    font-size: 0.65rem;
    color: #3f3f46;
    font-weight: 500;
}

/* Submit Button */
.submit-btn {
    width: 100%;
    padding: 9px;
    background-color: #7a0c1b;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    transition:
        background-color 0.2s,
        transform 0.1s;
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

/* Register Footer */
.card-footer {
    text-align: center;
    margin-top: 16px;
    font-size: 0.65rem;
    color: #52525b;
}

.register-link {
    color: #800a1d;
    font-weight: 700;
    text-decoration: none;
}

.register-link:hover {
    text-decoration: underline;
}
</style>
