// FILE: apiService.js
// Contains all the routes to my api

import API from '../api'

// Auth
export const register       = (userData) => API.post("/users/register", userData)
export const login          = (userData) => API.post("/users/login", userData)

// Users
export const updateProfile  = (updatedData) => API.put("/users/profile", updatedData)
export const deleteProfile  = () => API.delete("/users/profile/delete")
export const getAllUsers    = () => API.get("/users/admin/users")
export const updateRole     = (id, newRole) => API.put(`/users/admin/user/${id}/role`, newRole)
export const deleteUser     = (id) => API.delete(`/users/admin/user/${id}`)

// Orders
export const getAllOrders   = () => API.get("/orders/admin/allOrders")
export const createOrder    = (orderData) => API.post("/orders/newOrder", orderData)
export const getMyOrders    = () => API.get("/orders/my-orders")
export const updateStatus   = (id, updatedStatus) => API.put(`/orders/admin/${id}/status`, updatedStatus)

// Menu
export const getMenu = (params = {}) => API.get('/menu/menu', { params })
export const getMenuItem    = (id) => API.get(`/menu/${id}`)
export const createMenuItem = (menuItemData) => API.post("/menu/admin/newMenuItem", menuItemData)
export const updateMenuItem = (id, updatedMenuItemData) => API.put(`/menu/admin/updateMenuItem/${id}`, updatedMenuItemData)
export const deleteMenuItem = (id) => API.delete(`/menu/admin/deleteMenuItem/${id}`)
export const toggleMenuItem = (id) => API.patch(`/menu/admin/${id}/toggleMenuItem`)