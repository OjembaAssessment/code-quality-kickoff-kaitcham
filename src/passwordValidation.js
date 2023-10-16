export const forbiddenPasswords = ['amG84h6yeQ', 'mc9Q20pdjH', 'jnT6Q2f8U5'];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

function increasingOrDecreasingSequence(password) {
  const sequence = '0123456789876543210';
  const matches = password.match(/(\d){4}/g);
  return matches?.some((match) => sequence.includes(match));
}

export default function isValidPassword(password = '') {
  if (typeof password !== 'string') password = String(password);
  if (!/^.{10}$/.test(password)) return false; // Exactly 10 characters
  if (!/[a-z]/.test(password)) return false; // at least one lowercase letter
  if (!/[A-Z]/.test(password)) return false; // at least one uppercase letter
  if (!/[0-9]/.test(password)) return false; // at least one number
  if (/\W/.test(password)) return false; // no special characters
  if (increasingOrDecreasingSequence(password)) return false; // no increasing or decreasing sequence
  if (forbiddenPasswords.includes(password)) return false; // not in forbidden passwords
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
