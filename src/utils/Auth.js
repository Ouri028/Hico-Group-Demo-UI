import { authenticate } from "./Api";

export async function login(username, password) {
  let apiResult = await authenticate(username, password);
  if (apiResult && apiResult.token && apiResult.user) {
    setUserData(apiResult);
  } else {
    clearUserData();
  }
  return apiResult;
}

export function logout(history) {
  clearUserData();
  return history.push("/login");
}

export function userData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function setUserData(userData) {
  return localStorage.setItem("user", JSON.stringify(userData));
}

export function updateUserData(updates) {
  let data = userData();
  if (updates) {
    let dataKeys = Object.keys(updates);
    if (dataKeys && dataKeys.length) {
      for (var i = 0; i < dataKeys.length; i++) {
        let dataKey = dataKeys[i];
        let dataVal = updates[dataKey];
        data.user[dataKey] = dataVal;
      }
    }
  }
  return setUserData(userData);
}

export function clearUserData() {
  return localStorage.removeItem("user");
}

export function userId() {
  return userData().user.id || null;
}

export function logged() {
  return token() ? true : false;
}

export function token() {
  let data = userData();
  return data && data.token ? data.token : null;
}
