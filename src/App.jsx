import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
function App() {
  const { t, i18n } = useTranslation();

  console.log("Current language:", i18n.language);
  console.log("Translation for 'greeting':", t("greeting"));

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
    </div>
  );
}

export default App;
