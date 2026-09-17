const request = async (path, options = {}) => {
  const response = await fetch(`/api${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const error = new Error(data.message || 'Something went wrong.')
    error.status = response.status
    error.errors = data.errors || {}
    throw error
  }

  return data
}

export const register = (payload) => request('/register', {
  method: 'POST',
  body: JSON.stringify(payload),
})

export const login = (payload) => request('/login', {
  method: 'POST',
  body: JSON.stringify(payload),
})

export const getCurrentUser = () => request('/me')

export const logout = () => request('/logout', { method: 'POST' })