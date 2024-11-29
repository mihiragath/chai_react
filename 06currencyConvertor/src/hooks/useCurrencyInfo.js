import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const date = "latest";
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${fromCurrency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[fromCurrency] || {});
        console.log("Fetched data:", res[fromCurrency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [fromCurrency]);

  return data;
}

export default useCurrencyInfo;
