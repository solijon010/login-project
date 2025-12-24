import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Sign Up": "Sign Up",
      "Can't be empty": "Can't be empty",
      "Create an account": "Create an account",
      "Already have an account?": "Already have an account?",
      "Email address": "Email address",
      Password: "Password",
      "Repeat password": "Repeat password",
      Login: "Login",
      "Don't have an account?": "Don't have an account?",
    },
  },
  uz: {
    translation: {
      "Sign Up": "Ro'yxatdan o'tish",
      "Can't be empty": "Bo'sh bo'lishi mumkin emas",
      "Create an account": "Hisob yaratish",
      "Already have an account?": "Akkountingiz bormi?",
      "Email address": "Elektron pochta",
      Password: "Parol",
      "Repeat password": "Parolni qayta kiriting",
      Login: "Tizimga kirish",
      "Don't have an account?": "Hisobingiz yo'qmi?",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
