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
                        <span>{{ initials }}</span>
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

                        <router-link to="/request-service" class="nav-item active">
                            <svg viewBox="0 0 24 24" class="nav-icon">
                                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                            <span>Request Service</span>
                        </router-link>
                    </nav>
                </div>

                <div class="sidebar-footer">
                    <router-link to="/settings" class="nav-item">
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
                    <h1>{{ editingId ? 'Edit Request' : 'Request Coverage' }}</h1>
                    <p>
                        Fill in the event details to submit your media request to the atelier crew.
                    </p>
                </div>

                <!-- FORM CONTAINER -->
                <div class="form-container">
                    <form @submit.prevent="handleSubmit" class="service-form">
                        <!-- EVENT TITLE -->
                        <div class="form-group full-width">
                            <label>EVENT TITLE / ACTIVITY NAME</label>
                            <div class="input-wrapper">
                                <svg viewBox="0 0 24 24" class="field-icon">
                                    <path
                                        fill="currentColor"
                                        d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    v-model="form.eventTitle"
                                    placeholder="Describe your event"
                                    required
                                />
                            </div>
                        </div>

                        <!-- REQUESTED CREATIVE SERVICES -->
                        <div class="form-group full-width">
                            <label>REQUESTED CREATIVE SERVICES</label>
                            <div class="services-toggle-group">
                                <button
                                    type="button"
                                    class="service-chip"
                                    :class="{ active: form.services.includes('photo') }"
                                    @click="toggleService('photo')"
                                >
                                    <span class="chip-check" v-if="form.services.includes('photo')"
                                        >&check;</span
                                    >
                                    <svg viewBox="0 0 24 24" class="chip-icon">
                                        <path
                                            fill="currentColor"
                                            d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
                                        />
                                    </svg>
                                    Photo Coverage
                                </button>

                                <button
                                    type="button"
                                    class="service-chip"
                                    :class="{ active: form.services.includes('video') }"
                                    @click="toggleService('video')"
                                >
                                    <span class="chip-check" v-if="form.services.includes('video')"
                                        >&check;</span
                                    >
                                    <svg viewBox="0 0 24 24" class="chip-icon">
                                        <path
                                            fill="currentColor"
                                            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                                        />
                                    </svg>
                                    Video Highlights
                                </button>

                                <button
                                    type="button"
                                    class="service-chip"
                                    :class="{ active: form.services.includes('livestream') }"
                                    @click="toggleService('livestream')"
                                >
                                    <span
                                        class="chip-check"
                                        v-if="form.services.includes('livestream')"
                                        >&check;</span
                                    >
                                    <svg viewBox="0 0 24 24" class="chip-icon">
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                                        />
                                    </svg>
                                    Livestream Relay
                                </button>
                            </div>
                        </div>

                        <!-- EVENT DATE & CALL TIME ROW -->
                        <div class="form-row">
                            <div class="form-group half-width">
                                <label>EVENT DATE</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
                                        />
                                    </svg>
                                    <input type="date" v-model="form.eventDate" required />
                                </div>
                            </div>

                            <div class="form-group half-width">
                                <label>CALL TIME / SCHEDULE</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        v-model="form.callTime"
                                        placeholder="08:00 AM - 05:00 PM"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- VENUE / LOCATION -->
                        <div class="form-group full-width">
                            <label>VENUE / LOCATION</label>
                            <div class="input-wrapper">
                                <svg viewBox="0 0 24 24" class="field-icon">
                                    <path
                                        fill="currentColor"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    v-model="form.venue"
                                    placeholder="Main Campus - Civic Center Gym / Paseo del Rio"
                                    required
                                />
                            </div>
                        </div>

                        <!-- TARGET DELIVERY DATE ROW -->
                        <div class="form-row">
                            <div class="form-group half-width">
                                <label>TARGET DELIVERY DATE</label>
                                <div class="input-wrapper">
                                    <svg viewBox="0 0 24 24" class="field-icon">
                                        <path
                                            fill="currentColor"
                                            d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
                                        />
                                    </svg>
                                    <input type="date" v-model="form.targetDelivery" required />
                                </div>
                            </div>
                        </div>

                        <!-- COVERAGE DESCRIPTION & SHOT DIRECTIVES -->
                        <div class="form-group full-width">
                            <div class="label-with-meta">
                                <label>COVERAGE DESCRIPTION &amp; SHOT DIRECTIVES</label>
                                <span class="char-count">Max 500 chars</span>
                            </div>
                            <textarea
                                v-model="form.directives"
                                rows="4"
                                placeholder="Key sequence begins with College Deans entrance procession, followed by technical robotics demonstration floor run at 10:15 AM. Need close-ups of project hardware exhibits and wide crowd panning for year-end documentary sizzle reel."
                            ></textarea>
                        </div>

                        <!-- FORM FOOTER ACTIONS -->
                        <div class="form-footer">
                            <div class="sync-status">
                                <span class="sync-dot"></span>
                                <span>Cloud sync active</span>
                            </div>
                            <div class="button-group">
                                <button type="submit" class="submit-btn">
                                    {{ editingId ? 'Save Changes' : 'Submit Request' }}
                                    <span class="arrow">&rarr;</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, getToken, errorMessage, useCurrentUser } from '../lib/api.js'

const route = useRoute()
const router = useRouter()
const { fullName, initials, roleLabel } = useCurrentUser()

const editingId = computed(() => (route.query.edit ? Number(route.query.edit) : null))

const form = reactive({
    eventTitle: '',
    services: [],
    eventDate: '',
    callTime: '',
    venue: '',
    targetDelivery: '',
    directives: '',
})

const toggleService = (serviceKey) => {
    const index = form.services.indexOf(serviceKey)
    if (index > -1) {
        form.services.splice(index, 1)
    } else {
        form.services.push(serviceKey)
    }
}

onMounted(async () => {
    if (!getToken()) {
        router.replace('/login')
        return
    }
    if (!editingId.value) return

    try {
        const { data } = await api.get(`/requests/${editingId.value}`)
        const r = data.data
        form.eventTitle = r.event_title
        form.services = [...r.requested_services]
        form.eventDate = r.event_date
        form.callTime = r.call_time
        form.venue = r.venue
        form.targetDelivery = r.target_delivery_date
        form.directives = r.coverage_directives || ''
    } catch (error) {
        alert(errorMessage(error))
        router.replace('/my-requests')
    }
})

const handleSubmit = async () => {
    if (form.services.length === 0) {
        alert('Please pick at least one creative service.')
        return
    }

    const payload = {
        event_title: form.eventTitle,
        requested_services: form.services,
        event_date: form.eventDate,
        call_time: form.callTime,
        venue: form.venue,
        target_delivery_date: form.targetDelivery,
        coverage_directives: form.directives || null,
    }

    try {
        if (editingId.value) {
            await api.put(`/requests/${editingId.value}`, payload)
            alert('Request updated successfully!')
        } else {
            await api.post('/requests', payload)
            alert('Media request submitted successfully!')
        }
        router.push('/my-requests')
    } catch (error) {
        alert(errorMessage(error))
    }
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

.workspace-header h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 4px 0;
}

.workspace-header p {
    font-size: 0.75rem;
    color: #94a3b8;
    margin: 0;
}

/* FORM STYLING */
.form-container {
    background: rgba(28, 32, 42, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    padding: 24px;
}

.service-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form-row {
    display: flex;
    gap: 16px;
}

.full-width {
    width: 100%;
}

.half-width {
    flex: 1;
}

.form-group label {
    display: block;
    font-size: 0.62rem;
    font-weight: 700;
    color: #94a3b8;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
}

.label-with-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.char-count {
    font-size: 0.6rem;
    color: #64748b;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.field-icon {
    position: absolute;
    left: 12px;
    width: 16px;
    height: 16px;
    color: #64748b;
}

.input-wrapper input {
    width: 100%;
    padding: 10px 14px 10px 38px;
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #ffffff;
    font-size: 0.8rem;
    outline: none;
    transition: all 0.2s;
    box-sizing: border-box;
    color-scheme: dark;
}

.input-wrapper input:focus,
textarea:focus {
    border-color: #7a0c1b;
    box-shadow: 0 0 0 2px rgba(122, 12, 27, 0.2);
}

textarea {
    width: 100%;
    padding: 12px;
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #ffffff;
    font-size: 0.8rem;
    font-family: inherit;
    outline: none;
    resize: vertical;
    box-sizing: border-box;
}

/* TOGGLE CHIPS */
.services-toggle-group {
    display: flex;
    gap: 10px;
}

.service-chip {
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 8px 16px;
    color: #94a3b8;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}

.service-chip.active {
    background: #7a0c1b;
    border-color: #9f1227;
    color: #ffffff;
}

.chip-icon {
    width: 14px;
    height: 14px;
}

.chip-check {
    font-size: 0.75rem;
    color: #ffffff;
}

/* FORM FOOTER */
.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.sync-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.68rem;
    color: #64748b;
}

.sync-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #10b981;
}

.button-group {
    display: flex;
    gap: 10px;
}

.submit-btn {
    background: #7a0c1b;
    border: 1px solid rgba(248, 113, 113, 0.3);
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
}

.submit-btn:hover {
    background: #610814;
}

.arrow {
    font-size: 0.85rem;
}
</style>
