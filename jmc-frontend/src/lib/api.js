// API utility for making requests to the backend with built‑in auth handling
// Centralized configuration to avoid hardcoding URLs and duplicate logic

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = { ...options.headers };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (
    options.body &&
    !(options.body instanceof FormData) &&
    !headers["Content-Type"]
  ) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    // redirect to login for protected endpoints
    window.location.href = "/admin/login";
    throw new Error("Unauthorized");
  }

  return res;
}

export const api = {
  request,

  // helper for uploading images/files
  upload: (file) => {
    const formData = new FormData();
    formData.append("image", file);
    return request("/api/upload", {
      method: "POST",
      body: formData,
    });
  },

  contact: {
    submit: (data) => request("/api/contact", { method: "POST", body: JSON.stringify(data) }),
    getAll: () => request("/api/contact"),
    updateStatus: (id, status) =>
      request(`/api/contact/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }),
    delete: (id) => request(`/api/contact/${id}`, { method: "DELETE" }),
  },

  events: {
    create: (data) => request("/api/events", { method: "POST", body: JSON.stringify(data) }),
    getAll: () => request("/api/events"),
    delete: (id) => request(`/api/events/${id}`, { method: "DELETE" }),
  },

  devotions: {
    create: (data) => request("/api/devotions", { method: "POST", body: JSON.stringify(data) }),
    getAll: () => request("/api/devotions"),
    delete: (id) => request(`/api/devotions/${id}`, { method: "DELETE" }),
  },

  sermons: {
    create: (data) => request("/api/sermons", { method: "POST", body: JSON.stringify(data) }),
    getAll: () => request("/api/sermons"),
    delete: (id) => request(`/api/sermons/${id}`, { method: "DELETE" }),
  },

  leadership: {
    create: (data) => request("/api/leadership", { method: "POST", body: JSON.stringify(data) }),
    getAll: () => request("/api/leadership"),
    delete: (id) => request(`/api/leadership/${id}`, { method: "DELETE" }),
  },
};
