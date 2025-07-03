const leakedPasswords = [
  '123456', 'password', '123456789', 'qwerty', 'abc123', '123123'
];

const translations = {
  bg: {
    title: "Провери Паролата Си",
    header: "🔐 Провери своята парола",
    placeholder: "Въведи паролата си...",
    checkBtn: "Провери",
    empty: "Моля, въведи парола.",
    weak: "🔒 Паролата е слаба – използвай поне 8 символа.",
    strong: "✅ Паролата изглежда силна.",
    compromised: "⚠️ Паролата е компрометирана!"
  },
  en: {
    title: "Check Your Password",
    header: "🔐 Check Your Password",
    placeholder: "Enter your password...",
    checkBtn: "Check",
    empty: "Please enter a password.",
    weak: "🔒 Weak password – use at least 8 characters.",
    strong: "✅ Password seems strong.",
    compromised: "⚠️ This password has been compromised!"
  },
  fr: {
    title: "Vérifie Ton Mot de Passe",
    header: "🔐 Vérifie Ton Mot de Passe",
    placeholder: "Entrez votre mot de passe...",
    checkBtn: "Vérifier",
    empty: "Veuillez entrer un mot de passe.",
    weak: "🔒 Mot de passe faible – utilisez au moins 8 caractères.",
    strong: "✅ Mot de passe sécurisé.",
    compromised: "⚠️ Ce mot de passe a été compromis !"
  },
  ar: {
    title: "تحقق من كلمة المرور",
    header: "🔐 تحقق من كلمة المرور",
    placeholder: "أدخل كلمة المرور...",
    checkBtn: "تحقق",
    empty: "يرجى إدخال كلمة المرور.",
    weak: "🔒 كلمة المرور ضعيفة – استخدم 8 أحرف على الأقل.",
    strong: "✅ كلمة المرور قوية.",
    compromised: "⚠️ تم تسريب كلمة المرور هذه!"
  },
  zh: {
    title: "检查你的密码",
    header: "🔐 检查你的密码",
    placeholder: "输入你的密码...",
    checkBtn: "检查",
    empty: "请输入密码。",
    weak: "🔒 密码太弱 – 至少使用8个字符。",
    strong: "✅ 密码看起来很强。",
    compromised: "⚠️ 此密码已被泄露！"
  },
  ja: {
    title: "パスワードをチェックする",
    header: "🔐 パスワードをチェックする",
    placeholder: "パスワードを入力してください...",
    checkBtn: "チェック",
    empty: "パスワードを入力してください。",
    weak: "🔒 パスワードが弱いです – 8文字以上を使用してください。",
    strong: "✅ パスワードは強力です。",
    compromised: "⚠️ このパスワードは漏洩しています！"
  }
};

let currentLang = 'bg';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.getElementById("title").innerText = t.title;
  document.getElementById("header").innerText = t.header;
  document.getElementById("password").placeholder = t.placeholder;
  document.getElementById("checkBtn").innerText = t.checkBtn;
  document.getElementById("result").innerText = "";
}

function checkPassword() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  const t = translations[currentLang];

  if (!password) {
    result.innerText = t.empty;
    result.style.color = "orange";
    return;
  }

  if (leakedPasswords.includes(password)) {
    result.innerText = t.compromised;
    result.style.color = "red";
  } else if (password.length < 8) {
    result.innerText = t.weak;
    result.style.color = "yellow";
  } else {
    result.innerText = t.strong;
    result.style.color = "lightgreen";
  }
}
