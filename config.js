// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbyidMHhPtY8xSF0RS6JJKZPtMHSHJh-f5isFLUEBD42H4aYyUtX_sLOja0QAEjcGJy_/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
