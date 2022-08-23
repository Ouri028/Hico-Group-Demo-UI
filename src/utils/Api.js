import { fireError } from "../components/Alerts";
import { token } from "./Auth";

const API_URL = "http://localhost:5000/api";

/**
 * General helper functions
 *
 */

function headers() {
  return {
    "Content-Type": "application/json",
    "x-access-token": getToken(),
  };
}

function handleError(error) {
  return fireError(error.message);
}

async function Get(url) {
  return await fetch(`${API_URL}/${url}`, {
    method: "GET",
    headers: headers(),
  })
    .then((response) => response.json())
    .catch((err) => handleError(err));
}

async function Post(url, data) {
  return await fetch(`${API_URL}/${url}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => handleError(err));
}

async function Patch(url, data) {
  return await fetch(`${API_URL}/${url}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => handleError(err));
}

async function Delete(url) {
  return await fetch(`${API_URL}/${url}`, {
    method: "DELETE",
    headers: headers(),
  })
    .then((response) => response.json())
    .catch((err) => handleError(err));
}

/**
 * User auth:
 *
 */

export function getToken() {
  return token();
}

export async function verifyToken(token) {
  if (!token) {
    token = getToken();
  }
  return await Post("verifyToken", { token: token });
}

export async function authenticate({ username, password }) {
  return await Post("authenticate", {
    username: username,
    password: password,
  });
}

/**
 * User management:
 */

export async function getAllUsers() {
  return await Get("users");
}

export async function getUserById(id) {
  return await Get(`users/${id}`);
}

export async function createUser(data) {
  return await Post("users", data);
}

export async function updateUserById(id, data) {
  return await Patch(`user/${id}`, data);
}

export async function resetUserPassword(id, password) {
  return await Patch(`user/${id}/password_reset`, { password: password });
}

export async function deleteUserById(id) {
  return await Delete(`user/${id}`);
}

/**
 * Employee Management:
 */

export async function getAllEmployees() {
  return await Get("employees");
}

export async function getEmployeeById(id) {
  return await Get(`employee/${id}`);
}

export async function createEmployee(data) {
  return await Post("employees", data);
}

export async function updateEmployeeById(id, data) {
  return await Patch(`employee/${id}`, data);
}

export async function deleteEmployeeById(id) {
  return await Delete(`employee/${id}`);
}
