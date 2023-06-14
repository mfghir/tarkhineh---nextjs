export default function convertToPersianNumber(number) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return  number?.toLocaleString().replace(/\d/g, digit => persianDigits[digit]);;
}