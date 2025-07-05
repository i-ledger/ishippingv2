// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxW0AxiaZnuM7JS2jBxRY2xuRdLOj_91fyjz6ZMMCDVeb1APKWw8l-nEUT4HK_MDGSd/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
