import { useState, useEffect } from 'react';

export default function useFarsiNumber(number) {
  const [formattedNumber, setFormattedNumber] = useState('');

  useEffect(() => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const formatted = number?.toLocaleString("fa").replace(/\d/g, digit => persianDigits[digit]);
    setFormattedNumber(formatted);
  }, [number]);

  return formattedNumber;
}