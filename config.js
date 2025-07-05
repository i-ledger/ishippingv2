// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxdfuHd1rjUmBUCa7B82BhMd2DeP7vlF6JcstDUUDxDL68pUCswjRYyjCjKkBPY0UvA/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
