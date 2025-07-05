// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbw7krS-9ZrMMazSNTobUc0Etq9BboAisd16gTSMb_5ys_0-EJIdRYhyuJ9P9taVzSJh/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
