const fs = require('fs');

const en = JSON.parse(fs.readFileSync('apps/web/messages/en.json', 'utf8'));
const dv = JSON.parse(fs.readFileSync('apps/web/messages/dv.json', 'utf8'));

en.Payment = {
  title: "Submit Fee Payment",
  subtitle: "Select your class and name, then upload your payment slip.",
  bankDetails: "BANK TRANSFER DETAILS",
  accountNo: "Account Number",
  copy: "Copy",
  copied: "Copied",
  fields: {
    classes: "Classes",
    selectClass: "Select your class",
    loadingClasses: "Loading classes...",
    studentName: "Student Name",
    enterName: "Enter student name",
    selectClassFirst: "Select class first",
    idCard: "ID CARD NO",
    amount: "Amount (MVR)",
    reference: "Reference (optional)",
    refPlaceholder: "Receipt number / note",
    slip: "Payment Slip",
    acceptedFiles: "Accepted: PDF, JPG, PNG, WEBP (max 5MB)",
    submit: "Submit Payment",
    submitting: "Submitting...",
    unavailable: "Unavailable"
  }
};

dv.Payment = {
  title: "ފައިސާ ދެއްކެވުމަށް",
  subtitle: "ކްލާހާއި ނަން ޚިޔާރުކުރެއްވުމަށްފަހު ފައިސާ ދެއްކިކަމުގެ ރަސީދު އަޕްލޯޑްކުރައްވާ.",
  bankDetails: "ބޭންކް ޓްރާންސްފަރ މައުލޫމާތު",
  accountNo: "އެކައުންޓް ނަންބަރު",
  copy: "ކޮޕީ",
  copied: "ކޮޕީކުރެވިއްޖެ",
  fields: {
    classes: "ކްލާސްތައް",
    selectClass: "ކްލާސް ޚިޔާރުކުރައްވާ",
    loadingClasses: "ކްލާސްތައް ގެނެވެނީ...",
    studentName: "ދަރިވަރުގެ ނަން",
    enterName: "ދަރިވަރުގެ ނަން ޖައްސަވާ",
    selectClassFirst: "ފުރަތަމަ ކްލާހެއް ޚިޔާރުކުރައްވާ",
    idCard: "އައިޑީ ކާޑު ނަންބަރު",
    amount: "އަދަދު (ރުފިޔާ)",
    reference: "ރެފަރެންސް (ބޭނުންނަމަ)",
    refPlaceholder: "ރަސީދު ނަންބަރު / ނޯޓު",
    slip: "ފައިސާ ދެއްކިކަމުގެ ރަސީދު",
    acceptedFiles: "ބަލައިގަންނަނީ: PDF, JPG, PNG, WEBP (ގިނަވެގެން 5MB)",
    submit: "ފައިސާ ދައްކަވާ",
    submitting: "ފޮނުވެނީ...",
    unavailable: "ފުރުސަތު ބަންދުވެފައި"
  }
};

fs.writeFileSync('apps/web/messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('apps/web/messages/dv.json', JSON.stringify(dv, null, 2));
console.log('Payment Dictionaries updated successfully.');
