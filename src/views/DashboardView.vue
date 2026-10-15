<template>
  <div class="dashboard-root">
    <!-- TOP NAVIGATION BAR -->
    <header class="top-navbar">
      <div class="navbar-brand">
        <div class="logo-box">
          <svg viewBox="0 0 24 24" class="camera-icon">
            <path fill="currentColor" d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
            <path fill="currentColor" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
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
            <span>AR</span>
            <span class="online-indicator"></span>
          </div>
          <div class="user-info">
            <div class="user-name">
              Alex Rivera
              <svg viewBox="0 0 24 24" class="chevron-icon">
                <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>
            <div class="user-role">COIT Student Officer</div>
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
            <router-link to="/dashboard" class="nav-item active">
              <svg viewBox="0 0 24 24" class="nav-icon"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              <span>Dashboard</span>
              <span class="active-badge">Active</span>
            </router-link>
            <router-link to="/my-requests" class="nav-item">
              <svg viewBox="0 0 24 24" class="nav-icon"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              <span>My Requests</span>
              <span class="count-badge">4</span>
            </router-link>
            <router-link to="/request-service" class="nav-item">
              <svg viewBox="0 0 24 24" class="nav-icon"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              <span>Request Service</span>
            </router-link>
          </nav>
        </div>

        <div class="sidebar-footer">
          <router-link to="/settings" class="nav-item">
            <svg viewBox="0 0 24 24" class="nav-icon"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <span>Settings</span>
          </router-link>
        </div>
      </aside>

      <!-- MAIN WORKSPACE CONTENT -->
      <main class="main-workspace">
        <!-- HEADER ROW -->
        <div class="workspace-header">
          <div>
            <h1>Requestor Workspace</h1>
            <p>Manage, track, and collaborate on your university media coverage requests.</p>
          </div>
        </div>

        <!-- STAT CARDS ROW -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-top">
              <span class="stat-label">TOTAL BOOKINGS</span>
              <div class="stat-icon-box">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>
              </div>
            </div>
            <div class="stat-number-row">
              <span class="stat-number">14</span>
              <span class="stat-badge green">+3 this month</span>
            </div>
            <div class="stat-subtext">College of Information Tech quota</div>
          </div>

          <div class="stat-card">
            <div class="stat-top">
              <span class="stat-label">APPROVED COVERAGE</span>
              <div class="stat-icon-box gold">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
              </div>
            </div>
            <div class="stat-number-row">
              <span class="stat-number">08</span>
              <span class="stat-badge gold">&bull; 2 shoots this week</span>
            </div>
            <div class="stat-subtext">Crew slate &amp; equipment locked</div>
          </div>

          <div class="stat-card">
            <div class="stat-top">
              <span class="stat-label">COMPLETED SHOOTS</span>
              <div class="stat-icon-box green">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
            </div>
            <div class="stat-number-row">
              <span class="stat-number">06</span>
              <span class="stat-badge text-sub">100% Media Delivered</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: 100%;"></div>
            </div>
          </div>
        </div>

        <!-- MY REQUESTS OVERVIEW SECTION -->
        <div class="overview-container">
          <div class="overview-header">
            <div>
              <h2>My Requests Overview</h2>
              <p>Real-time university production queue</p>
            </div>
            <div class="overview-filter-tabs">
              <button
                v-for="filter in filters"
                :key="filter.key"
                class="overview-chip"
                :class="{ active: activeFilter === filter.key }"
                @click="activeFilter = filter.key"
              >
                {{ filter.label }} ({{ filterCounts[filter.key] }})
              </button>
            </div>
          </div>

          <div class="requests-list">
            <!-- REQUEST ITEMS (filtered) -->
            <div
              v-for="request in filteredRequests"
              :key="request.id"
              class="request-item"
            >
              <div class="item-left">
                <div class="item-title-row">
                  <span class="status-dot" :class="request.dot"></span>
                  <span class="item-title">{{ request.title }}</span>
                  <span class="req-id-tag">{{ request.id }}</span>
                  <span class="status-pill" :class="request.pillClass">{{ request.pillText }}</span>
                </div>
                <div class="item-details-row">
                  <span class="detail-part">
                    <svg viewBox="0 0 24 24" class="sm-icon"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    {{ request.location }}
                  </span>
                  <span class="detail-part">
                    <svg viewBox="0 0 24 24" class="sm-icon"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    {{ request.datetime }}
                  </span>
                </div>
                <div class="item-tags-row">
                  <span
                    v-for="(tag, index) in request.tags"
                    :key="index"
                    :class="tag.lead ? 'lead-badge' : 'type-badge'"
                  >
                    {{ tag.label }}
                  </span>
                </div>
              </div>
              <div class="item-actions">
                <button class="edit-btn" @click="goToEditRequest">Edit Request</button>
                <button class="details-btn" @click="openDetails(request)">View Details</button>
              </div>
            </div>

            <!-- EMPTY STATE -->
            <div v-if="filteredRequests.length === 0" class="empty-state">
              <svg viewBox="0 0 24 24" class="empty-icon">
                <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <p>No {{ activeFilter }} requests found.</p>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- VIEW DETAILS MODAL -->
    <Teleport to="body">
      <div
        v-if="showDetails && selectedRequest"
        class="modal-overlay"
        @click.self="closeDetails"
      >
        <div class="details-modal">
          <div class="modal-header">
            <div>
              <div class="modal-title-row">
                <span class="status-dot" :class="selectedRequest.dot"></span>
                <h3 class="modal-title">{{ selectedRequest.title }}</h3>
              </div>
              <div class="modal-id-row">
                <span class="req-id-tag">{{ selectedRequest.id }}</span>
                <span class="status-pill" :class="selectedRequest.pillClass">
                  {{ selectedRequest.pillText }}
                </span>
              </div>
            </div>
            <button class="modal-close" @click="closeDetails">&times;</button>
          </div>

          <div class="modal-body">
            <div class="modal-field">
              <span class="modal-field-label">Venue</span>
              <span class="modal-field-value">{{ selectedRequest.location }}</span>
            </div>
            <div class="modal-field">
              <span class="modal-field-label">Schedule</span>
              <span class="modal-field-value">{{ selectedRequest.datetime }}</span>
            </div>
            <div class="modal-field">
              <span class="modal-field-label">Coverage</span>
              <div class="modal-tag-row">
                <span
                  v-for="(tag, index) in selectedRequest.tags"
                  :key="index"
                  :class="tag.lead ? 'lead-badge' : 'type-badge'"
                >
                  {{ tag.label }}
                </span>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="edit-btn" @click="closeDetails">Close</button>
            <button class="details-btn" @click="goToEditRequest">Edit Request</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

/* ---------- FILTER TABS ---------- */
const filters = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'approved', label: 'Approved' },
  { key: 'denied', label: 'Denied' },
  { key: 'completed', label: 'Completed' }
]

const activeFilter = ref('all')

/* ---------- REQUEST DATA ---------- */
const requests = ref([
  {
    id: 'REQ-2026-101',
    title: 'CIT Days Opening Ceremony',
    status: 'approved',
    dot: 'red',
    pillClass: 'maroon',
    pillText: '\u2022 Approved & Scheduled',
    location: 'Paseo del Rio Campus Grand Atrium',
    datetime: 'Oct 22, 2026 \u2022 08:30 AM',
    tags: [
      { label: 'Photo + Video', lead: false },
      { label: 'Lead: Crew Alpha', lead: true }
    ]
  },
  {
    id: 'REQ-2026-092',
    title: 'Liceo Hackathon 2026: Pitch Night',
    status: 'pending',
    dot: 'yellow',
    pillClass: 'gold',
    pillText: '\u2022 Pending Approval',
    location: 'Engineering Complex Hall B',
    datetime: 'Nov 04, 2026 \u2022 05:00 PM',
    tags: [
      { label: 'Multicam Live Stream', lead: false },
      { label: 'Highlight Reel', lead: false }
    ]
  },
  {
    id: 'REQ-2026-085',
    title: 'COIT Leadership Investiture',
    status: 'pending',
    dot: 'yellow',
    pillClass: 'gold',
    pillText: '\u2022 Pending Dean Endorsement',
    location: 'University Amphitheater',
    datetime: 'Nov 12, 2026 \u2022 01:00 PM',
    tags: [
      { label: 'Portrait Headshots', lead: false },
      { label: 'Recap Reel', lead: false }
    ]
  },
  {
    id: 'REQ-2026-074',
    title: 'General Assembly 2026',
    status: 'completed',
    dot: 'green',
    pillClass: 'green',
    pillText: '\u2713 Delivered & Archived',
    location: 'Liceo Civic Gym',
    datetime: 'Sep 28, 2026 \u2022 09:00 AM',
    tags: [
      { label: '184 High-Res Stills + 1 Highlight 4K Cut', lead: false }
    ]
  }
])

/* ---------- FILTERED LIST & COUNTS ---------- */
const filteredRequests = computed(() => {
  if (activeFilter.value === 'all') return requests.value
  return requests.value.filter((request) => request.status === activeFilter.value)
})

const filterCounts = computed(() => {
  const counts = { all: requests.value.length, pending: 0, approved: 0, denied: 0, completed: 0 }
  requests.value.forEach((request) => {
    counts[request.status] = (counts[request.status] || 0) + 1
  })
  return counts
})

/* ---------- VIEW DETAILS MODAL ---------- */
const showDetails = ref(false)
const selectedRequest = ref(null)

const openDetails = (request) => {
  selectedRequest.value = request
  showDetails.value = true
}

const closeDetails = () => {
  showDetails.value = false
  selectedRequest.value = null
}

/* ---------- EDIT REQUEST ---------- */
const goToEditRequest = () => {
  router.push('/request-service')
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
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
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

.active-badge {
  font-size: 0.6rem;
  background: rgba(200, 131, 31, 0.2);
  color: #eab308;
  padding: 1px 6px;
  border-radius: 8px;
  margin-left: auto;
  font-weight: 700;
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
  justify-content: space-between;
  align-items: center;
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

/* STATS GRID */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  background: rgba(28, 32, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: #8392a5;
  letter-spacing: 0.6px;
}

.stat-icon-box {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(122, 12, 27, 0.4);
  color: #f87171;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon-box svg {
  width: 15px;
  height: 15px;
}

.stat-icon-box.gold {
  background: rgba(200, 131, 31, 0.2);
  color: #eab308;
}

.stat-icon-box.green {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.stat-number-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
}

.stat-badge {
  font-size: 0.65rem;
  font-weight: 700;
}

.stat-badge.green {
  color: #34d399;
}

.stat-badge.gold {
  color: #eab308;
}

.stat-badge.text-sub {
  color: #94a3b8;
}

.stat-subtext {
  font-size: 0.65rem;
  color: #64748b;
}

.progress-bar-container {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 4px;
}

.progress-bar-fill {
  height: 100%;
  background: #10b981;
}

/* OVERVIEW SECTION */
.overview-container {
  background: rgba(28, 32, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overview-header h2 {
  font-size: 1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.overview-header p {
  font-size: 0.68rem;
  color: #8292a4;
  margin: 0;
}

.overview-filter-tabs {
  display: flex;
  gap: 6px;
}

.overview-chip {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-size: 0.65rem;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.overview-chip.active {
  background: #7a0c1b;
  border-color: #9f1227;
  color: #ffffff;
  font-weight: 700;
}

/* REQUESTS LIST ITEMS */
.requests-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.request-item {
  background: rgba(18, 20, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-dot.red { background-color: #f87171; }
.status-dot.yellow { background-color: #eab308; }
.status-dot.green { background-color: #10b981; }

.item-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
}

.req-id-tag {
  font-size: 0.6rem;
  color: #64748b;
  background: rgba(255, 255, 255, 0.05);
  padding: 1px 6px;
  border-radius: 4px;
}

.status-pill {
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}

.status-pill.maroon {
  background: rgba(122, 12, 27, 0.4);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.status-pill.gold {
  background: rgba(200, 131, 31, 0.2);
  color: #eab308;
  border: 1px solid rgba(234, 179, 8, 0.3);
}

.status-pill.green {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.3);
}

.item-details-row {
  display: flex;
  gap: 16px;
  font-size: 0.68rem;
  color: #8292a4;
}

.detail-part {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sm-icon {
  width: 12px;
  height: 12px;
  color: #64748b;
}

.item-tags-row {
  display: flex;
  gap: 8px;
}

.type-badge {
  font-size: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  padding: 2px 8px;
  border-radius: 4px;
}

.lead-badge {
  font-size: 0.6rem;
  background: rgba(122, 12, 27, 0.3);
  color: #fca5a5;
  padding: 2px 8px;
  border-radius: 4px;
}

/* EMPTY STATE */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 34px 0;
  color: #64748b;
}

.empty-icon {
  width: 28px;
  height: 28px;
  color: #475569;
}

.empty-state p {
  font-size: 0.72rem;
  margin: 0;
}

/* UNIFORM ACTION BUTTONS */
.item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.edit-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.details-btn {
  background: #7a0c1b;
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: #ffffff;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.details-btn:hover {
  background: #610814;
}

/* VIEW DETAILS MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 8, 12, 0.72);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 200;
  animation: modal-fade 0.18s ease;
}

@keyframes modal-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.details-modal {
  width: 100%;
  max-width: 460px;
  background: #16181e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  animation: modal-pop 0.18s ease;
}

@keyframes modal-pop {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.modal-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal-title {
  font-size: 1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.modal-id-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.modal-close {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px 0;
}

.modal-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.modal-field-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #8392a5;
}

.modal-field-value {
  font-size: 0.78rem;
  color: #e2e8f0;
}

.modal-tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
</style>
