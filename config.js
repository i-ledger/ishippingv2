// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxne8HoZVdC-VwB7oE1ksPt8mJcpZ6g5oLm-iDARULJsaRebT8ILp4TJBPUxgHnBXD7/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
