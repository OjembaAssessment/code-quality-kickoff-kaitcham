/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = '') {
  if (password) password = String(password);

  return (
    password
      ?.match(/(\w)\1+/g)
      ?.reduce((acc, curr) => (curr.length > 2 ? (acc += 2) : (acc += 1)), 0) ||
    0
  );
}
