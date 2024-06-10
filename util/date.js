export function getFormattedDate(date) {
    if (!date) { // Check if date is undefined
      return ""; // Or return a default value like an empty string
    }
    return date.toISOString().slice(0, 10);
  }