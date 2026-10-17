import axios from 'axios'
import { ref, computed } from 'vue'

const TOKEN_KEY = 'liceo-token'
const USER_KEY = 'liceo-user'

/* ---------- storage (localStorage = keep signed in, sessionStorage = this tab only) ---------- */
const read = (key) => {
  try {
    return localStorage.getItem(key) ?? sessionStorage.getItem(key)
  } catch {
    return null
  }
}

const isRemembered = () => {
  try {
    return localStorage.getItem(TOKEN_KEY) !== null
  } catch {
    return false
  }
}

const write = (key, value, remember) => {
  try {
    const keep = remember ? localStorage : sessionStorage
    const drop = remember ? sessionStorage : localStorage
    keep.setItem(key, value)
    drop.removeItem(key)
  } catch {
    /* storage blocked, ignore */
  }
}

const remove = (key) => {
  try {
    localStorage.removeItem(key)
    sessionStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

const parseUser = () => {
  try {
    return JSON.parse(read(USER_KEY))
  } catch {
    return null
  }
}

const currentUser = ref(parseUser())

export const getToken = () => read(TOKEN_KEY)

export function saveSession(token, user, remember = true) {
  write(TOKEN_KEY, token, remember)
  write(USER_KEY, JSON.stringify(user), remember)
  currentUser.value = user
}

export function setUser(user) {
  write(USER_KEY, JSON.stringify(user), isRemembered())
  currentUser.value = user
}

export function clearSession() {
  remove(TOKEN_KEY)
  remove(USER_KEY)
  currentUser.value = null
}

/* ---------- axios ---------- */
export const api = axios.create({
  baseURL: '/api',
  headers: { Accept: 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLogin = error.config?.url === '/login'
    if (error.response?.status === 401 && getToken() && !isLogin) {
      clearSession()
      window.location.assign('/login')
    }
    return Promise.reject(error)
  },
)

export function errorMessage(error) {
  const data = error?.response?.data
  if (data?.errors) {
    const first = Object.values(data.errors)[0]
    if (first?.length) return first[0]
  }
  if (data?.message) return data.message
  if (error?.response) return `Server error (${error.response.status}). Check the Laravel terminal.`
  return 'Cannot reach the server. Make sure php artisan serve is running.'
}

/* ---------- current user for the navbar ---------- */
export function useCurrentUser() {
  const user = currentUser
  const fullName = computed(() =>
    user.value ? `${user.value.first_name} ${user.value.last_name}`.trim() : 'Guest',
  )
  const initials = computed(() => {
    const u = user.value
    if (!u) return '?'
    const letters = `${(u.first_name || '')[0] || ''}${(u.last_name || '')[0] || ''}`
    return letters.toUpperCase() || '?'
  })
  const roleLabel = computed(() => user.value?.department || 'Liceo Creatives')
  return { user, fullName, initials, roleLabel }
}

/* ---------- request display helpers ---------- */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const SERVICE_LABELS = {
  photo: 'Photo Coverage',
  video: 'Video Coverage',
  livestream: 'Live Stream',
}

const STATUS_TEXT = {
  pending: 'Pending Approval',
  approved: 'Approved & Scheduled',
  denied: 'Denied',
  completed: 'Delivered & Archived',
}

const STATUS_STYLE = {
  pending: { dot: 'yellow', pill: 'gold' },
  approved: { dot: 'red', pill: 'maroon' },
  denied: { dot: 'red', pill: 'maroon' },
  completed: { dot: 'green', pill: 'green' },
}

export function formatDate(value) {
  const [year, month, day] = String(value).slice(0, 10).split('-')
  return `${MONTHS[Number(month) - 1] ?? ''} ${day}, ${year}`
}

const startTime = (callTime) => String(callTime || '').split('-')[0].trim()

export const requestCode = (id) => `RG-${String(id).padStart(4, '0')}`

export function normalizeRequest(r) {
  const status = STATUS_TEXT[r.status] ? r.status : 'pending'
  const style = STATUS_STYLE[status]
  const services = (r.requested_services || []).map((s) => SERVICE_LABELS[s] || s)
  const date = formatDate(r.event_date)
  const time = startTime(r.call_time)

  return {
    dbId: r.id,
    id: requestCode(r.id),
    title: r.event_title,
    name: r.event_title,
    status,
    dot: style.dot,
    pillClass: style.pill,
    pillText: `${status === 'completed' ? '\u2713' : '\u2022'} ${STATUS_TEXT[status]}`,
    location: r.venue,
    date,
    time,
    datetime: `${date} \u2022 ${time}`,
    services,
    tags: services.map((label) => ({ label, lead: false })),
  }
}