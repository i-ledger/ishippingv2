// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwUGRL302V__L8zLruRFTPHgKXpP66LVJhpNwUOlymGJrPTEw8WbrqADqzpZSjoOXOq/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
