// This file contains the logic for validating the scanned QR codes against the predefined list. 
// It includes functions to check if a code is valid, mark it as used, and display the appropriate feedback message.

// We'll use the validCodes array that is loaded from valid-codes.js
// Don't redeclare it here
const usedCodes = new Set();

function isCodeValid(code) {
    return validCodes.includes(code) && !usedCodes.has(code);
}

function markAsUsed(code) {
    usedCodes.add(code);
}

function showResult(message, valid) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.className = valid ? "valid" : "invalid";
}