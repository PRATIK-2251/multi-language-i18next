import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
function App() {
  const { t, i18n } = useTranslation();

  console.log("Current language:", i18n.language);
  console.log("Translation for 'greeting':", t("greeting"));

  const { line1, line2 } = t("description", {
    channel: "XYZ",
  });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans i18nKey={line1} values={line1} components={{ 1: <b /> }} />
      </span>
      {/* <p>{line1}</p> */}
      <p>{line2}</p>
    </div>
  );
}

export default App;
