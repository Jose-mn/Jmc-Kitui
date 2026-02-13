// API utility for making requests to the backend
// Centralized configuration to avoid hardcoding URLs

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = {
  // Contact endpoints
  contact: {
    submit: (data) =>
      fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => fetch(`${API_URL}/api/contact`),
    updateStatus: (id, status) =>
      fetch(`${API_URL}/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }),
    delete: (id) =>
      fetch(`${API_URL}/api/contact/${id}`, { method: "DELETE" }),
  },

  // Events endpoints
  events: {
    create: (data) =>
      fetch(`${API_URL}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => fetch(`${API_URL}/api/events`),
    delete: (id) =>
      fetch(`${API_URL}/api/events/${id}`, { method: "DELETE" }),
  },

  // Devotions endpoints
  devotions: {
    create: (data) =>
      fetch(`${API_URL}/api/devotions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => fetch(`${API_URL}/api/devotions`),
    delete: (id) =>
      fetch(`${API_URL}/api/devotions/${id}`, { method: "DELETE" }),
  },

  // Sermons endpoints
  sermons: {
    create: (data) =>
      fetch(`${API_URL}/api/sermons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => fetch(`${API_URL}/api/sermons`),
    delete: (id) =>
      fetch(`${API_URL}/api/sermons/${id}`, { method: "DELETE" }),
  },

  // Leadership endpoints
  leadership: {
    create: (data) =>
      fetch(`${API_URL}/api/leadership`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    getAll: () => fetch(`${API_URL}/api/leadership`),
    delete: (id) =>
      fetch(`${API_URL}/api/leadership/${id}`, { method: "DELETE" }),
  },
};
