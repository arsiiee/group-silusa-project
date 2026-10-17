<template>
    <div class="dashboard-root">
        <!-- TOP NAVBAR -->
        <header class="top-navbar">
            <div class="navbar-brand">
                <div class="logo-box">
                    <svg viewBox="0 0 24 24" class="camera-icon">
                        <path
                            fill="currentColor"
                            d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"
                        />
                        <path
                            fill="currentColor"
                            d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                        />
                    </svg>
                </div>
                <div class="brand-text">
                    <div class="brand-title">
                        LICEO <span class="accent-gold">CREATIVES</span>
                        <span class="portal-badge">PORTAL</span>
                    </div>
                    <div class="brand-subtitle">University Media Production Network</div>
                </div>
            </div>

            <div class="navbar-actions">
                <!-- User Profile Dropdown -->
                <div class="user-profile">
                    <div class="avatar-circle">
                        <img v-if="avatarUrl" :src="avatarUrl" alt="Avatar" class="avatar-img" />
                        <span v-else>AR</span>
                        <span class="online-indicator"></span>
                    </div>
                    <div class="user-info">
                        <div class="user-name">
                            {{ fullName }}
                            <svg viewBox="0 0 24 24" class="chevron-icon">
                                <path
                                    fill="currentColor"
                                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                />
                            </svg>
                        </div>
                        <div class="user-role">{{ roleLabel }}</div>
                    </div>
                </div>

                <!-- Log Out Button -->
                <button class="logout-btn" @click="handleLogout">
                    <svg viewBox="0 0 24 24" class="logout-icon">
                        <path
                            fill="currentColor"
                            d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                        />
                    </svg>
                    <span>Log Out</span>
                </button>
            </div>
        </header>

        <!-- MAIN BODY -->
        <div class="dashboard-body">
            <!-- SIDEBAR -->
            <aside class="sidebar">
                <div class="sidebar-section">
                    <div class="sidebar-label">MAIN MENU</div>
                    <nav class="sidebar-nav">
                        <router-link to="/dashboard" class="nav-item">
                            <svg viewBox="0 0 24 24" class="nav-icon">
                                <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            <span>Dashboard</span>
                        </router-link>

                        <router-link to="/my-requests" class="nav-item">
                            <svg viewBox="0 0 24 24" class="nav-icon">
                                <path
                                    fill="currentColor"
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                />
                            </svg>
                            <span>My Requests</span>
                        </router-link>

                        <router-link to="/request-service" class="nav-item">
                            <svg viewBox="0 0 24 24" class="nav-icon">
                                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                            <span>Request Service</span>
                        </router-link>
                    </nav>
                </div>

                <div class="sidebar-footer">
                    <router-link to="/settings" class="nav-item active">
                        <svg viewBox="0 0 24 24" class="nav-icon">
                            <path
                                fill="currentColor"
                                d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                            />
                        </svg>
                        <span>Settings</span>
                    </router-link>
                </div>
            </aside>

            <!-- MAIN WORKSPACE CONTENT -->
            <main class="main-workspace">
                <div class="workspace-header">
                    <span class="system-tag">&bull; CONTROL NODE // SETTINGS</span>
                    <h1>Account Settings</h1>
                    <p>Update your personal information and account security credentials.</p>
                </div>

                <div class="settings-grid">
                    <!-- PROFILE DETAILS SECTION -->
                    <div class="settings-card">
                        <div class="card-title-row">
                            <div class="title-icon-box">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2>Profile Details</h2>
                                <p>Manage your public credentials and contact info</p>
                            </div>
                        </div>

                        <div class="avatar-banner">
                            <div class="avatar-large">
                                <img
                                    v-if="avatarUrl"
                                    :src="avatarUrl"
                                    alt="Avatar"
                                    class="avatar-img"
                                />
                                <span v-else>{{ initials }}</span>
                            </div>
                            <div class="banner-info">
                                <div class="name-badge-row">
                                    <span class="user-fullname">Alex Rivera</span>
                                    <span class="verified-icon">&check;</span>
                                </div>
                                <div class="user-subtext">{{ profile.department }}</div>
                            </div>

                            <!-- Hidden file input that opens the file manager -->
                            <input
                                ref="avatarInput"
                                type="file"
                                accept="image/*"
                                class="hidden-file-input"
                                @change="handleAvatarChange"
                            />
                            <button
                                type="button"
                                class="change-avatar-btn"
                                @click="triggerAvatarUpload"
                            >
                                <span class="camera-sm">&bull;</span> Change Avatar
                            </button>
                        </div>

                        <form @submit.prevent="handleSaveProfile" class="profile-form">
                            <!-- FULL NAME -->
                            <div class="form-group">
                                <label>FULL NAME <span class="required">*</span></label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                        />
                                    </svg>
                                    <input type="text" v-model="profile.fullName" required />
                                </div>
                            </div>

                            <!-- INSTITUTIONAL EMAIL -->
                            <div class="form-group">
                                <div class="label-row">
                                    <label>INSTITUTIONAL EMAIL</label>
                                    <span class="locked-badge">LOCKED</span>
                                </div>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                                        />
                                    </svg>
                                    <input type="email" v-model="profile.email" disabled />
                                </div>
                            </div>

                            <!-- PHONE NUMBER -->
                            <div class="form-group">
                                <label>PHONE NUMBER</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                        />
                                    </svg>
                                    <input type="text" v-model="profile.phone" />
                                </div>
                            </div>

                            <!-- DEPARTMENT / ORGANIZATION -->
                            <div class="form-group">
                                <label>DEPARTMENT / ORGANIZATION</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
                                        />
                                    </svg>
                                    <select v-model="profile.department">
                                        <option
                                            v-for="organization in organizations"
                                            :key="organization"
                                            :value="organization"
                                        >
                                            {{ organization }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" class="save-profile-btn">
                                &check; Save Profile Changes
                            </button>
                        </form>
                    </div>

                    <!-- SECURITY & PASSWORD SECTION -->
                    <div class="settings-card">
                        <div class="card-title-row">
                            <div class="title-icon-box gold">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2>Security &amp; Password</h2>
                                <p>Update authentication passkey credentials</p>
                            </div>
                            <span class="lock-icon-corner">&#128274;</span>
                        </div>

                        <form @submit.prevent="handleUpdatePassword" class="security-form">
                            <!-- CURRENT PASSWORD -->
                            <div class="form-group">
                                <label>CURRENT PASSWORD</label>
                                <div class="input-wrapper">
                                    <input
                                        :type="showCurr ? 'text' : 'password'"
                                        v-model="security.currentPassword"
                                        placeholder="••••••••••••"
                                    />
                                    <button
                                        type="button"
                                        class="eye-btn"
                                        :aria-label="showCurr ? 'Hide password' : 'Show password'"
                                        @click="showCurr = !showCurr"
                                    >
                                        <svg v-if="showCurr" viewBox="0 0 24 24" class="eye-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2z"
                                            />
                                        </svg>
                                        <svg v-else viewBox="0 0 24 24" class="eye-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- NEW PASSWORD -->
                            <div class="form-group">
                                <label>NEW PASSWORD</label>
                                <div class="input-wrapper">
                                    <input
                                        :type="showNew ? 'text' : 'password'"
                                        v-model="security.newPassword"
                                        placeholder="••••••••••••"
                                    />
                                    <button
                                        type="button"
                                        class="eye-btn"
                                        :aria-label="showNew ? 'Hide password' : 'Show password'"
                                        @click="showNew = !showNew"
                                    >
                                        <svg v-if="showNew" viewBox="0 0 24 24" class="eye-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2z"
                                            />
                                        </svg>
                                        <svg v-else viewBox="0 0 24 24" class="eye-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- CONFIRM NEW PASSWORD -->
                            <div class="form-group">
                                <label>CONFIRM NEW PASSWORD</label>
                                <div class="input-wrapper">
                                    <input
                                        :type="showConfirm ? 'text' : 'password'"
                                        v-model="security.confirmPassword"
                                        placeholder="••••••••••••"
                                    />
                                    <button
                                        type="button"
                                        class="eye-btn"
                                        :aria-label="
                                            showConfirm ? 'Hide password' : 'Show password'
                                        "
                                        @click="showConfirm = !showConfirm"
                                    >
                                        <svg
                                            v-if="showConfirm"
                                            viewBox="0 0 24 24"
                                            class="eye-icon"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2z"
                                            />
                                        </svg>
                                        <svg v-else viewBox="0 0 24 24" class="eye-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="info-box">
                                <span class="info-icon">i</span>
                                <span>Passwords must be at least 8 characters.</span>
                            </div>

                            <button type="submit" class="update-pwd-btn">
                                &#8634; Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, getToken, setUser, clearSession, errorMessage, useCurrentUser } from '../lib/api.js'

const router = useRouter()
const { fullName, initials, roleLabel } = useCurrentUser()

const profile = reactive({
    fullName: '',
    email: '',
    phone: '',
    department: '',
})

/* ---------- ORGANIZATION DROPDOWN OPTIONS (same list as Register) ---------- */
const organizations = [
    'University Executive Board & Administrative Leadership',
    'College of Law',
    'College of Medicine',
    'College of Medical Laboratory Science',
    'College of Teacher Education',
    'College of Information Technology',
    'College of Engineering',
    'College of Nursing',
    'College of Business and Accountancy',
    'College of Arts and Sciences',
    'Senior High School Department',
    'Office of Student Affairs (OSA)',
    'University Guidance & Testing Center',
    'Central Student Council (CSC)',
    'Liceo Media Production Group',
]

const security = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
})

const showCurr = ref(false)
const showNew = ref(false)
const showConfirm = ref(false)

/* ---------- AVATAR UPLOAD (stays in this browser only) ---------- */
const avatarInput = ref(null)
const avatarUrl = ref('')

const triggerAvatarUpload = () => {
    avatarInput.value?.click()
}

const handleAvatarChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (loadEvent) => {
        avatarUrl.value = loadEvent.target.result
        try {
            localStorage.setItem('liceo-avatar', avatarUrl.value)
        } catch (error) {
            console.warn('Could not persist avatar:', error)
        }
    }
    reader.readAsDataURL(file)
    event.target.value = ''
}

const fillProfile = (user) => {
    profile.fullName = `${user.first_name} ${user.last_name}`.trim()
    profile.email = user.email
    profile.phone = user.phone || ''
    profile.department = user.department
}

onMounted(async () => {
    try {
        const savedAvatar = localStorage.getItem('liceo-avatar')
        if (savedAvatar) avatarUrl.value = savedAvatar
    } catch {
        /* ignore */
    }

    if (!getToken()) {
        router.replace('/login')
        return
    }

    try {
        const { data } = await api.get('/user')
        setUser(data.user)
        fillProfile(data.user)
    } catch (error) {
        alert(errorMessage(error))
    }
})

/* ---------- SAVE PROFILE ---------- */
const handleSaveProfile = async () => {
    try {
        const { data } = await api.put('/user', {
            full_name: profile.fullName,
            phone: profile.phone || null,
            department: profile.department,
        })
        setUser(data.user)
        fillProfile(data.user)
        alert(data.message)
    } catch (error) {
        alert(errorMessage(error))
    }
}

/* ---------- CHANGE PASSWORD ---------- */
const handleUpdatePassword = async () => {
    if (security.newPassword !== security.confirmPassword) {
        alert('New password and confirmation do not match.')
        return
    }
    try {
        const { data } = await api.put('/user/password', {
            current_password: security.currentPassword,
            password: security.newPassword,
            password_confirmation: security.confirmPassword,
        })
        security.currentPassword = ''
        security.newPassword = ''
        security.confirmPassword = ''
        alert(data.message)
    } catch (error) {
        alert(errorMessage(error))
    }
}

/* ---------- LOG OUT ---------- */
const handleLogout = async () => {
    try {
        await api.post('/logout')
    } catch {
        /* token already invalid, that is fine */
    }
    clearSession()
    router.push('/login')
}
</script>

<style scoped>
/* MAIN LAYOUT & BACKGROUND */
.dashboard-root {
    min-height: 100vh;
    background-color: #1a1c23;
    background-image:
        radial-gradient(circle at 10% 20%, rgba(120, 15, 30, 0.25) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(200, 131, 31, 0.1) 0%, transparent 40%);
    color: #e2e8f0;
    font-family:
        'Inter',
        system-ui,
        -apple-system,
        sans-serif;
    display: flex;
    flex-direction: column;
}

/* TOP NAVBAR */
.top-navbar {
    height: 64px;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(22, 24, 30, 0.85);
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 50;
}

.navbar-brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-box {
    width: 38px;
    height: 38px;
    background: linear-gradient(135deg, #c8831f, #e0a33b);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121318;
    box-shadow: 0 2px 8px rgba(200, 131, 31, 0.3);
}

.camera-icon {
    width: 22px;
    height: 22px;
}

.brand-title {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 6px;
}

.accent-gold {
    color: #c8831f;
}

.portal-badge {
    font-size: 0.6rem;
    background: rgba(122, 12, 27, 0.6);
    color: #f87171;
    padding: 2px 6px;
    border-radius: 12px;
    border: 1px solid rgba(248, 113, 113, 0.3);
    font-weight: 600;
    margin-left: 4px;
}

.brand-subtitle {
    font-size: 0.65rem;
    color: #94a3b8;
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.avatar-circle {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7a0c1b, #4a0710);
    border: 1px solid rgba(200, 131, 31, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: #ffd700;
    position: relative;
    overflow: hidden;
}

.avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.online-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background-color: #10b981;
    border-radius: 50%;
    border: 1.5px solid #1a1c23;
    z-index: 1;
}

.user-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: #f1f5f9;
    display: flex;
    align-items: center;
    gap: 4px;
}

.chevron-icon {
    width: 14px;
    height: 14px;
    color: #64748b;
}

.user-role {
    font-size: 0.65rem;
    color: #c8831f;
}

.logout-btn {
    background: rgba(122, 12, 27, 0.4);
    border: 1px solid rgba(248, 113, 113, 0.3);
    color: #ffffff;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.logout-btn:hover {
    background: rgba(122, 12, 27, 0.7);
}

.logout-icon {
    width: 14px;
    height: 14px;
}

/* BODY CONTENT & SIDEBAR */
.dashboard-body {
    display: flex;
    flex: 1;
    padding: 24px 28px;
    gap: 24px;
}

.sidebar {
    width: 220px;
    background: rgba(26, 29, 36, 0.6);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 20px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar-label {
    font-size: 0.65rem;
    font-weight: 700;
    color: #64748b;
    letter-spacing: 0.5px;
    padding-left: 12px;
    margin-bottom: 12px;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 10px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.2s;
}

.nav-item:hover {
    background: rgba(255, 255, 255, 0.04);
    color: #f1f5f9;
}

.nav-item.active {
    background: linear-gradient(90deg, #7a0c1b, #560813);
    border-left: 3px solid #c8831f;
    color: #ffffff;
    font-weight: 600;
}

.nav-icon {
    width: 18px;
    height: 18px;
}

.count-badge {
    font-size: 0.65rem;
    background: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    padding: 1px 6px;
    border-radius: 10px;
    margin-left: auto;
}

.main-workspace {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.workspace-header {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.system-tag {
    font-size: 0.6rem;
    font-weight: 700;
    color: #c8831f;
    letter-spacing: 0.5px;
}

.workspace-header h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #ffffff;
    margin: 2px 0;
}

.workspace-header p {
    font-size: 0.75rem;
    color: #94a3b8;
    margin: 0;
}

/* SETTINGS GRID */
.settings-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.settings-card {
    background: rgba(28, 32, 42, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
}

.card-title-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.card-title-row h2 {
    font-size: 0.95rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
}

.card-title-row p {
    font-size: 0.65rem;
    color: #8292a4;
    margin: 2px 0 0 0;
}

.title-icon-box {
    width: 32px;
    height: 32px;
    background: rgba(122, 12, 27, 0.4);
    color: #f87171;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-icon-box.gold {
    background: rgba(200, 131, 31, 0.2);
    color: #eab308;
}

.title-icon-box svg {
    width: 18px;
    height: 18px;
}

.lock-icon-corner {
    margin-left: auto;
    font-size: 0.8rem;
    opacity: 0.5;
}

/* AVATAR BANNER */
.avatar-banner {
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar-large {
    width: 42px;
    height: 42px;
    background: linear-gradient(135deg, #c8831f, #8e4202);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 800;
    color: #ffffff;
    overflow: hidden;
    flex-shrink: 0;
}

.banner-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.name-badge-row {
    display: flex;
    align-items: center;
    gap: 6px;
}

.user-fullname {
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
}

.verified-icon {
    font-size: 0.6rem;
    background: #c8831f;
    color: #121318;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
}

.user-subtext {
    font-size: 0.65rem;
    color: #8292a4;
}

.change-avatar-btn {
    margin-left: auto;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    font-size: 0.65rem;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
}

.change-avatar-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.hidden-file-input {
    display: none;
}

/* FORM FIELDS */
.profile-form,
.security-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.form-group label {
    display: block;
    font-size: 0.6rem;
    font-weight: 700;
    color: #94a3b8;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
}

.required {
    color: #f87171;
}

.label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.locked-badge {
    font-size: 0.55rem;
    background: rgba(200, 131, 31, 0.2);
    color: #eab308;
    padding: 1px 6px;
    border-radius: 4px;
    font-weight: 700;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.field-icon {
    position: absolute;
    left: 12px;
    width: 14px;
    height: 14px;
    color: #64748b;
    pointer-events: none;
}

.input-wrapper input,
.input-wrapper select {
    width: 100%;
    padding: 8px 12px 8px 34px;
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    color: #ffffff;
    font-size: 0.78rem;
    outline: none;
    box-sizing: border-box;
    color-scheme: dark;
}

.input-wrapper select {
    padding-right: 34px;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 14px;
}

.input-wrapper select option {
    background: #16181e;
    color: #ffffff;
}

.input-wrapper input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.input-wrapper input:focus:not(:disabled),
.input-wrapper select:focus {
    border-color: #7a0c1b;
}

.eye-btn {
    position: absolute;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 4px;
}

.eye-btn:hover {
    color: #cbd5e1;
}

.eye-icon {
    width: 15px;
    height: 15px;
}

.info-box {
    background: rgba(200, 131, 31, 0.1);
    border: 1px solid rgba(200, 131, 31, 0.2);
    border-radius: 6px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.65rem;
    color: #eab308;
}

.info-icon {
    width: 14px;
    height: 14px;
    background: #c8831f;
    color: #121318;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.6rem;
    flex-shrink: 0;
}

.save-profile-btn {
    width: 100%;
    padding: 10px;
    background: #7a0c1b;
    border: 1px solid rgba(248, 113, 113, 0.3);
    color: #ffffff;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 4px;
}

.save-profile-btn:hover {
    background: #610814;
}

.update-pwd-btn {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: 1px solid #c8831f;
    color: #eab308;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 4px;
}

.update-pwd-btn:hover {
    background: rgba(200, 131, 31, 0.15);
}
</style>
