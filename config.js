// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxe7sNGnUwvWc1KhapjWxnIgKpReEATWSgbnloMyv0_Nxj8_8-zM5P1WC95ToCRknoT/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
