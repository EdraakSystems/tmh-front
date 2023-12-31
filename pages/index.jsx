import React, { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import English from "../intl/en.json";
import Italian from "../intl/it.json";
import { useRouter } from "next/router";

export default function App() {
  const [locale, setLocale] = useState("en");
  const messages = { English, Italian };
  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  const router = useRouter()

  useEffect(()=>{
    router.push('/booking')
  },[])

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <select onChange={handleChange}>
        <option value="en">en</option>
        <option value="it">it</option>
      </select> */}
        <div className="App">
          <FormattedMessage id="welcome" />
        </div>
    </IntlProvider>
  );
}
