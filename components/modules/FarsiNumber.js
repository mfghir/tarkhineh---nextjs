export function convertToFaNumber(enNumber) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const faNumber = enNumber.toString().replace(/\d/g, digit => persianDigits[digit]);
  return faNumber;
}