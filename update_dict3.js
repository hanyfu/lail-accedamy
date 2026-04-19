const fs = require('fs');

const en = JSON.parse(fs.readFileSync('apps/web/messages/en.json', 'utf8'));
const dv = JSON.parse(fs.readFileSync('apps/web/messages/dv.json', 'utf8'));

en.ForgotPassword = {
  title: "Forgot Password",
  subtitleSent: "Check your email for reset instructions",
  subtitleDefault: "Enter your email to receive a reset link",
  sentMessage: "We've sent password reset instructions to",
  backToLogin: "Back to Login",
  emailLabel: "Email Address",
  sending: "Sending...",
  sendLink: "Send Reset Link",
  toastSuccess: "If the email exists, a reset link has been sent",
  toastError: "Something went wrong. Please try again."
};

dv.ForgotPassword = {
  title: "ޕާސްވޯޑް ހަނދާންނެތުނީ",
  subtitleSent: "ޕާސްވޯޑް ބަދަލުކުރާނެ ގޮތް އީމެއިލް އަށް ފޮނުވިއްޖެ",
  subtitleDefault: "ޕާސްވޯޑް ރީސެޓް ލިންކެއް ހޯދުމަށް އީމެއިލް ޖައްސަވާބައްލަވާ",
  sentMessage: "ޕާސްވޯޑް ބަދަލުކުރާނެ ގޮތް މިއީމެއިލްއަށް ފޮނުވިއްޖެ:",
  backToLogin: "އަނބުރާ ލޮގިންއަށް",
  emailLabel: "އީމެއިލް އެޑްރެސް",
  sending: "ފޮނުވެނީ...",
  sendLink: "ރީސެޓް ލިންކު ފޮނުއްވާ",
  toastSuccess: "މި އީމެއިލްއެއްވާނަމަ ރީސެޓް ލިންކެއް ފޮނުވިއްޖެ",
  toastError: "މައްސަލައެއް ދިމާވެއްޖެ. އަލުން މަސައްކަތްކުރައްވާ."
};

fs.writeFileSync('apps/web/messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('apps/web/messages/dv.json', JSON.stringify(dv, null, 2));
console.log('Forgot Password Dictionaries updated successfully.');
