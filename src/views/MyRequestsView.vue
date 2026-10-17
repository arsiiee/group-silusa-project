<template>
    <div class="my-requests-root">
        <!-- TOP NAVIGATION BAR -->
        <header class="top-navbar">
            <div class="navbar-brand">
                <div class="logo-box">
                    <svg viewBox="0 0 24 24" class="camera-icon">
                        <path
                            fill="currentColor"
                            d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 3.2 0 0 0 0 6.4z"
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

                <!-- Action Button -->
                <router-link to="/request-service" class="new-request-btn">
                    <span class="plus-icon">+</span>
                    <span>New Request</span>
                </router-link>
            </div>
        </header>

        <!-- MAIN LAYOUT -->
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
                        <router-link to="/my-requests" class="nav-item active">
                            <svg viewBox="0 0 24 24" class="nav-icon">
                                <path
                                    fill="currentColor"
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                />
                            </svg>
                            <span>My Requests</span>
                            <span class="count-badge">{{ totalRequests }}</span>
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

            <!-- MAIN CONTENT AREA -->
            <main class="main-workspace">
                <!-- HEADER -->
                <div class="workspace-header">
                    <h1>My Requests</h1>
                    <p>A complete overview of your university media production requests.</p>
                </div>

                <!-- FILTER BAR -->
                <div class="filter-bar">
                    <div class="filter-tabs">
                        <button
                            v-for="filter in filters"
                            :key="filter.key"
                            class="filter-chip"
                            :class="{ active: activeFilter === filter.key }"
                            @click="activeFilter = filter.key"
                        >
                            {{ filter.label }}
                            <span class="chip-count">{{ filterCounts[filter.key] }}</span>
                        </button>
                    </div>

                    <button class="sort-btn">
                        <svg viewBox="0 0 24 24" class="sort-icon">
                            <path
                                fill="currentColor"
                                d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                            />
                        </svg>
                        <span>Sort: Newest First</span>
                        <svg viewBox="0 0 24 24" class="dropdown-arrow">
                            <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>
                </div>

                <!-- TABLE CONTAINER -->
                <div class="table-container">
                    <table class="requests-table">
                        <thead>
                            <tr>
                                <th>REQUEST ID</th>
                                <th>EVENT / REQUEST NAME</th>
                                <th>EVENT DATE</th>
                                <th>SERVICE TYPE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="request in paginatedRequests" :key="request.id">
                                <td>
                                    <div class="id-cell">
                                        <span class="amber-badge">{{ request.id }}</span>
                                        <span class="status-dot" :class="request.status"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="event-name">{{ request.name }}</div>
                                    <div class="sub-location">
                                        <svg viewBox="0 0 24 24" class="pin-icon">
                                            <path
                                                fill="currentColor"
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                            />
                                        </svg>
                                        {{ request.location }}
                                    </div>
                                </td>
                                <td>
                                    <div class="date-text">{{ request.date }}</div>
                                    <div class="time-sub">
                                        <svg viewBox="0 0 24 24" class="clock-icon">
                                            <path
                                                fill="currentColor"
                                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                                            />
                                        </svg>
                                        {{ request.time }}
                                    </div>
                                </td>
                                <td>
                                    <!-- All requested services, stacked one per line -->
                                    <div class="service-cell">
                                        <div
                                            v-for="service in request.services"
                                            :key="service"
                                            class="service-chip dark"
                                        >
                                            <!-- Video Coverage icon -->
                                            <svg
                                                v-if="service === 'Video Coverage'"
                                                viewBox="0 0 24 24"
                                                class="service-icon"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                                                />
                                            </svg>
                                            <!-- Photo Coverage icon -->
                                            <svg
                                                v-else-if="service === 'Photo Coverage'"
                                                viewBox="0 0 24 24"
                                                class="service-icon"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm9-8h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 5H8.88c-.53 0-1.04.21-1.42.59L6.17 7H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"
                                                />
                                            </svg>
                                            <!-- Live Stream icon -->
                                            <svg v-else viewBox="0 0 24 24" class="service-icon">
                                                <path
                                                    fill="currentColor"
                                                    d="M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2zm-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6zm0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C5.07 16.45 4 14.36 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.36-1.07 4.45-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10z"
                                                />
                                            </svg>
                                            {{ service }}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="status-outlined" :class="request.status">
                                        <svg
                                            v-if="request.status === 'completed'"
                                            viewBox="0 0 24 24"
                                            class="check-sm"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                            />
                                        </svg>
                                        <template v-else>&bull;</template>
                                        {{ statusLabels[request.status] }}</span
                                    ><span v-if="request.status === 'pending'" class="row-actions"
                                        ><button
                                            type="button"
                                            class="row-btn"
                                            @click="editRequest(request)"
                                        >
                                            Edit</button
                                        ><button
                                            type="button"
                                            class="row-btn danger"
                                            @click="removeRequest(request)"
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- PAGINATION FOOTER -->
                    <div class="pagination-footer">
                        <div class="showing-info">
                            Total Requests: <span class="highlight-white">{{ totalRequests }}</span>
                        </div>

                        <div class="pagination-controls">
                            <button
                                class="page-btn text-btn"
                                :class="{ disabled: currentPage === 1 }"
                                @click="prevPage"
                            >
                                &lt; Previous
                            </button>
                            <button
                                class="page-btn text-btn"
                                :class="{ disabled: currentPage === totalPages }"
                                @click="nextPage"
                            >
                                Next &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, getToken, errorMessage, normalizeRequest, useCurrentUser } from '../lib/api.js'

const router = useRouter()
const { fullName, initials, roleLabel } = useCurrentUser()

/* ---------- FILTER TABS ---------- */
const filters = [
    { key: 'all', label: 'All' },
    { key: 'pending', label: 'Pending' },
    { key: 'approved', label: 'Approved' },
    { key: 'denied', label: 'Denied' },
    { key: 'completed', label: 'Completed' },
]

const statusLabels = {
    pending: 'Pending',
    approved: 'Approved',
    denied: 'Denied',
    completed: 'Completed',
}

/* ---------- REQUEST DATA (from the database) ---------- */
const requests = ref([])

const loadRequests = async () => {
    try {
        const { data } = await api.get('/requests')
        requests.value = data.requests.map(normalizeRequest)
    } catch (error) {
        alert(errorMessage(error))
    }
}

onMounted(() => {
    if (!getToken()) {
        router.replace('/login')
        return
    }
    loadRequests()
})

/* ---------- EDIT / DELETE ---------- */
const editRequest = (request) => {
    router.push({ path: '/request-service', query: { edit: request.dbId } })
}

const removeRequest = async (request) => {
    if (!confirm(`Delete "${request.name}"? This cannot be undone.`)) return
    try {
        await api.delete(`/requests/${request.dbId}`)
        requests.value = requests.value.filter((item) => item.dbId !== request.dbId)
        if (currentPage.value > totalPages.value) currentPage.value = totalPages.value
    } catch (error) {
        alert(errorMessage(error))
    }
}

/* ---------- FILTERING ---------- */
const activeFilter = ref('all')

const filterCounts = computed(() => {
    const counts = { all: requests.value.length, pending: 0, approved: 0, denied: 0, completed: 0 }
    requests.value.forEach((request) => {
        counts[request.status] += 1
    })
    return counts
})

const filteredRequests = computed(() => {
    if (activeFilter.value === 'all') return requests.value
    return requests.value.filter((request) => request.status === activeFilter.value)
})

/* ---------- PAGINATION ---------- */
const pageSize = 5
const currentPage = ref(1)

const totalRequests = computed(() => requests.value.length)

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(filteredRequests.value.length / pageSize))
})

const paginatedRequests = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return filteredRequests.value.slice(start, start + pageSize)
})

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}

watch(activeFilter, () => {
    currentPage.value = 1
})
</script>

<style scoped>
/* MAIN LAYOUT & BACKGROUND */
.my-requests-root {
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

.new-request-btn {
    background: linear-gradient(135deg, #7a0c1b, #560813);
    color: #ffffff;
    border: 1px solid rgba(248, 113, 113, 0.3);
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(122, 12, 27, 0.4);
}

.plus-icon {
    font-size: 1rem;
    line-height: 1;
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
    background: rgba(122, 12, 27, 0.9);
    color: #ffffff;
    padding: 1px 7px;
    border-radius: 10px;
    margin-left: auto;
    font-weight: 700;
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

/* MAROON FILTER BAR */
.filter-bar {
    background: linear-gradient(90deg, #61121d, #420a13);
    border-radius: 12px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.filter-tabs {
    display: flex;
    align-items: center;
    gap: 8px;
}

.filter-chip {
    background: transparent;
    border: none;
    color: #e2e8f0;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: background 0.2s;
}

.filter-chip.active {
    background: #7a0c1b;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.chip-count {
    font-size: 0.65rem;
    color: #fca5a5;
    background: rgba(0, 0, 0, 0.25);
    padding: 1px 6px;
    border-radius: 10px;
}

.sort-btn {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    font-size: 0.7rem;
    padding: 6px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.sort-icon,
.dropdown-arrow {
    width: 14px;
    height: 14px;
    color: #94a3b8;
}

/* TABLE CONTAINER & STYLES */
.table-container {
    background: rgba(28, 32, 42, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    overflow: hidden;
}

.requests-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.requests-table th {
    background: rgba(20, 22, 28, 0.8);
    font-size: 0.6rem;
    font-weight: 700;
    color: #8392a5;
    letter-spacing: 0.8px;
    padding: 14px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.requests-table td {
    padding: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    vertical-align: middle;
}

.requests-table tbody tr:hover {
    background: rgba(255, 255, 255, 0.02);
}

/* ID CELL */
.id-cell {
    display: flex;
    align-items: center;
    gap: 8px;
}

.amber-badge {
    background: rgba(200, 131, 31, 0.2);
    color: #eab308;
    border: 1px solid rgba(234, 179, 8, 0.4);
    font-size: 0.65rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 6px;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.status-dot.pending {
    background-color: #eab308;
}
.status-dot.approved {
    background-color: #34d399;
}
.status-dot.denied {
    background-color: #f87171;
}
.status-dot.completed {
    background-color: #64748b;
}

/* EVENT & LOCATION CELL */
.event-name {
    font-size: 0.82rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3px;
}

.sub-location {
    font-size: 0.68rem;
    color: #8292a4;
    display: flex;
    align-items: center;
    gap: 4px;
}

.pin-icon,
.clock-icon {
    width: 12px;
    height: 12px;
    color: #64748b;
}

/* DATE CELL */
.date-text {
    font-size: 0.78rem;
    font-weight: 600;
    color: #d1d5db;
    margin-bottom: 3px;
}

.time-sub {
    font-size: 0.68rem;
    color: #8292a4;
    display: flex;
    align-items: center;
    gap: 4px;
}

/* SERVICE TYPE CELL (stacks 1-3 chips) */
.service-cell {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
}

.service-chip.dark {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #e2e8f0;
    font-size: 0.68rem;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.service-icon {
    width: 13px;
    height: 13px;
    color: #c8831f;
}

/* STATUS OUTLINED BADGES */
.status-outlined {
    font-size: 0.68rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.status-outlined.pending {
    border: 1px solid rgba(234, 179, 8, 0.5);
    color: #eab308;
    background: rgba(234, 179, 8, 0.05);
}

.status-outlined.approved {
    border: 1px solid rgba(52, 211, 153, 0.5);
    color: #34d399;
    background: rgba(52, 211, 153, 0.05);
}

.status-outlined.denied {
    border: 1px solid rgba(248, 113, 113, 0.5);
    color: #f87171;
    background: rgba(248, 113, 113, 0.05);
}

.status-outlined.completed {
    border: 1px solid rgba(96, 165, 250, 0.5);
    color: #60a5fa;
    background: rgba(96, 165, 250, 0.05);
}

.check-sm {
    width: 12px;
    height: 12px;
}

/* PAGINATION FOOTER */
.pagination-footer {
    background: rgba(20, 22, 28, 0.9);
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.7rem;
    color: #8292a4;
}

.highlight-white {
    color: #ffffff;
    font-weight: 700;
}

.pagination-controls {
    display: flex;
    align-items: center;
    gap: 6px;
}

.page-btn {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #cbd5e1;
    font-size: 0.68rem;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
}

.page-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
}
</style>

<style scoped>
.row-actions {
    display: inline-flex;
    gap: 6px;
    margin-left: 10px;
    vertical-align: middle;
}
.row-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #cbd5e1;
    font-size: 0.62rem;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 6px;
    cursor: pointer;
}
.row-btn:hover {
    background: rgba(255, 255, 255, 0.12);
}
.row-btn.danger {
    color: #f87171;
    border-color: rgba(248, 113, 113, 0.4);
}
.row-btn.danger:hover {
    background: rgba(122, 12, 27, 0.4);
}
</style>
