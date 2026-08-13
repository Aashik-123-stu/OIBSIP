// ==========================================================
// TEMPERATURE CONVERTER — Vanilla JS
// Handles: input validation, unit conversion, absolute zero
// edge case, and rendering results.
// ==========================================================

// ---- Absolute zero reference points (used for edge-case checks) ----
const ABSOLUTE_ZERO = {
  C: -273.15,
  F: -459.67,
  K: 0,
};

// ---- Grab DOM elements once ----
const form = document.getElementById('converter-form');
const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const errorMessage = document.getElementById('error-message');
const resultsSection = document.getElementById('results');

const resultEls = {
  C: document.getElementById('result-c'),
  F: document.getElementById('result-f'),
  K: document.getElementById('result-k'),
};

const resultRows = {
  C: document.querySelector('.result-row[data-unit="C"]'),
  F: document.querySelector('.result-row[data-unit="F"]'),
  K: document.querySelector('.result-row[data-unit="K"]'),
};

// ---- Conversion formulas (all routed through Celsius as a base) ----
function toCelsius(value, fromUnit) {
  switch (fromUnit) {
    case 'C': return value;
    case 'F': return (value - 32) * (5 / 9);
    case 'K': return value - 273.15;
  }
}

function fromCelsius(celsius, toUnit) {
  switch (toUnit) {
    case 'C': return celsius;
    case 'F': return celsius * (9 / 5) + 32;
    case 'K': return celsius + 273.15;
  }
}

// ---- Validation ----
// Returns true if the raw string is a valid finite number.
function isValidNumber(raw) {
  if (raw.trim() === '') return false;
  const num = Number(raw);
  return !Number.isNaN(num) && Number.isFinite(num);
}

function showError(message) {
  errorMessage.textContent = message;
  tempInput.classList.add('input-error');
  clearResults();
}

function clearError() {
  errorMessage.textContent = '';
  tempInput.classList.remove('input-error');
}

function clearResults() {
  resultEls.C.textContent = '—';
  resultEls.F.textContent = '—';
  resultEls.K.textContent = '—';
  resultsSection.classList.remove('absolute-zero-warning');
  Object.values(resultRows).forEach((row) => row.classList.remove('highlight'));
}

// ---- Main convert handler ----
function handleConvert(event) {
  event.preventDefault();

  const rawValue = tempInput.value;
  const inputUnit = unitSelect.value;

  // 1. Reject non-numeric input
  if (!isValidNumber(rawValue)) {
    showError('Please enter a valid number (e.g. 25 or -10.5).');
    return;
  }

  const value = Number(rawValue);

  // 2. Edge case: value below absolute zero for the chosen unit
  if (value < ABSOLUTE_ZERO[inputUnit]) {
    clearError();
    clearResults();
    resultsSection.classList.add('absolute-zero-warning');
    errorMessage.textContent =
      `That's below absolute zero for °${inputUnit} (minimum is ${ABSOLUTE_ZERO[inputUnit]}${inputUnit === 'K' ? '' : '°'}${inputUnit}). Nothing can be colder than that.`;
    tempInput.classList.add('input-error');
    return;
  }

  // 3. Valid input — clear any previous error state
  clearError();
  resultsSection.classList.remove('absolute-zero-warning');

  // 4. Convert to all three units simultaneously
  const celsius = toCelsius(value, inputUnit);
  const results = {
    C: fromCelsius(celsius, 'C'),
    F: fromCelsius(celsius, 'F'),
    K: fromCelsius(celsius, 'K'),
  };

  // 5. Render results, rounded to 2 decimal places, with unit labels
  resultEls.C.textContent = `${results.C.toFixed(2)} °C`;
  resultEls.F.textContent = `${results.F.toFixed(2)} °F`;
  resultEls.K.textContent = `${results.K.toFixed(2)} K`;

  // Highlight the unit the user typed in, so it's clear which was the source
  Object.values(resultRows).forEach((row) => row.classList.remove('highlight'));
  resultRows[inputUnit].classList.add('highlight');
}

// ---- Live validation feedback as the user types ----
tempInput.addEventListener('input', () => {
  if (tempInput.value.trim() === '' || isValidNumber(tempInput.value)) {
    clearError();
  }
});

form.addEventListener('submit', handleConvert);
