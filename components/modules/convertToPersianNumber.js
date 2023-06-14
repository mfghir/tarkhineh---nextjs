export default function convertToPersianNumber(number) {
    let formattedNumber = ""


    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    formattedNumber = number?.toLocaleString().replace(/\d/g, digit => persianDigits[digit]);


    return formattedNumber;
}