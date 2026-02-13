// API utility for making requests to the backend
// Centralized configuration to avoid hardcoding URLs

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Helper to handle 403 errors by clearing invalid token
const handleAuthError = (response) => {
  if (response.status === 403) {
    console.log("🔓 Invalid token detected - clearing auth");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  return response;
};

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

export const api = {
  // Auth endpoints
  auth: {
    login: (email, password) =>
      fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }),
    logout: () =>
      fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        headers: getAuthHeaders(),
      }),
    verify: (token) =>
      fetch(`${API_URL}/api/auth/verify`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }),
  },

  // Contact endpoints
  contact: {
    submit: (data) =>
      fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => 
      fetch(`${API_URL}/api/contact`, {
        headers: getAuthHeaders(),
      }).then(handleAuthError),
    updateStatus: (id, status) =>
      fetch(`${API_URL}/api/contact/${id}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status }),
      }).then(handleAuthError),
    delete: (id) =>
      fetch(`${API_URL}/api/contact/${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders(),
      }).then(handleAuthError),
  },

  // Events endpoints
  events: {
    create: (data) =>
      fetch(`${API_URL}/api/events`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      }).then(handleAuthError),
    getAll: () => 
      fetch(`${API_URL}/api/events`, {
        headers: getAuthHeaders(),
      }).then(handleAuthError),
    delete: (id) =>
      fetch(`${API_URL}/api/events/${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders(),
      }).then(handleAuthError),
  },

  // Devotions endpoints
  devotions: {
    create: (data) =>
      fetch(`${API_URL}/api/devotions`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      }).then(handleAuthError),
    getAll: () => 
      fetch(`${API_URL}/api/devotions`, {
        headers: getAuthHeaders(),
      }).then(handleAuthError),
    delete: (id) =>
      fetch(`${API_URL}/api/devotions/${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders(),
      }).then(handleAuthError),
  },

  // Sermons endpoints
  sermons: {
    create: (data) =>
      fetch(`${API_URL}/api/sermons`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      }).then(handleAuthError),
    getAll: () => 
      fetch(`${API_URL}/api/sermons`, {
        headers: getAuthHeaders(),
      }).then(handleAuthError),
    delete: (id) =>
      fetch(`${API_URL}/api/sermons/${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders(),
      }).then(handleAuthError),
  },

  // Leadership endpoints
  leadership: {
    create: (data) =>
      fetch(`${API_URL}/api/leadership`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      }).then(handleAuthError),
    getAll: () => 
      fetch(`${API_URL}/api/leadership`, {
        headers: getAuthHeaders(),
      }).then(handleAuthError),
    delete: (id) =>
      fetch(`${API_URL}/api/leadership/${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders(),
      }).then(handleAuthError),
  },
};
