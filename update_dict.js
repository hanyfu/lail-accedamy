const fs = require('fs');

const en = JSON.parse(fs.readFileSync('apps/web/messages/en.json', 'utf8'));
const dv = JSON.parse(fs.readFileSync('apps/web/messages/dv.json', 'utf8'));

const pages = {
  Programs: {
    title: ["Our Classes", "އަޅުގަނޑުމެންގެ ކްލާސްތައް"],
    subtitle: ["Explore all available classes and choose the right one for your child.", "ލިބެންހުރި ހުރިހާ ކްލާސްތަކެއް ބައްލަވާލައްވައި އެންމެ އެކަށީގެންވާ ކްލާސް ޚިޔާރުކުރައްވާށެވެ."],
    searchPlaceholder: ["Search classes by title or code...", "ކްލާހުގެ ނަން ނުވަތަ ކޯޑުން ހޯދާ..."],
    flexible: ["Flexible", "ފްލެކްސިބަލް"],
    noDesc: ["No description available.", "މައުލޫމާތު ލިބޭކަށްނެތް."],
    monthlyFee: ["Monthly Fee:", "މަހުފީ:"],
    slots: ["Slots:", "ޖާގަ:"],
    availability: ["Availability:", "ލިބެންހުރި މިންވަރު:"],
    noClasses: ["No classes found matching your search.", "މި ނަމާ ގުޅޭ ކްލާހެއް ނުފެނުނު."]
  },
  Apply: {
    title: ["Student Registration", "ދަރިވަރުންގެ ރަޖިސްޓްރީ"],
    subtitle: ["Fill in the details below to apply for a class.", "ކްލާހަކަށް އެޕްލައިކުރުމަށް ތިރީގައިވާ މައުލޫމާތު ފުރިހަމަކުރައްވާށެވެ."],
    warning: ["Before you register, please keep your contact details active so we can confirm your class and issue your ID card number.", "ރަޖިސްޓްރީ ކުރެއްވުމުގެ ކުރިން، ކްލާސް ކަށަވަރުކުރުމަށާއި އައިޑީ ކާޑު ނަންބަރު ދޫކުރުމަށް ގުޅޭނެ ނަންބަރެއް ދެއްވުން އެދެމެވެ."],
    fields: {
      classes: ["Classes", "ކްލާސްތައް"],
      selectClass: ["Select your class", "ކްލާސް ޚިޔާރުކުރައްވާ"],
      loadingClasses: ["Loading classes...", "ކްލާސްތައް ގެނެވެނީ..."],
      unavailable: ["Unavailable", "ފުރުސަތު ބަންދުވެފައި"],
      classUnavailable: ["Class Unavailable", "ކްލާހުން ފުރުސަތު ބަންދުވެފައި"],
      parentName: ["Parent Name", "ބެލެނިވެރިޔާގެ ނަން"],
      parentNamePlaceholder: ["Parent full name", "ބެލެނިވެރިޔާގެ ފުރިހަމަ ނަން"],
      studentName: ["Student Name", "ދަރިވަރުގެ ނަން"],
      studentNamePlaceholder: ["Full name", "ފުރިހަމަ ނަން"],
      idCardNo: ["Student ID Card No", "ދަރިވަރުގެ އައިޑީ ކާޑު ނަންބަރު"],
      idCardNoPlaceholder: ["e.g. A123456", "މިސާލު: A123456"],
      sex: ["Sex", "ޖިންސް"],
      selectSex: ["Select sex", "ޖިންސް ޚިޔާރުކުރައްވާ"],
      male: ["Male", "ފިރިހެން"],
      female: ["Female", "އަންހެން"],
      other: ["Other", "އެހެނިހެން"],
      birthDate: ["BirthDate", "އުފަން ތާރީޚު"],
      email: ["Email", "އީމެއިލް"],
      phone: ["Phone", "ފޯނު ނަންބަރު"],
      viber: ["Viber Phone Number", "ވައިބަރ ނަންބަރު"],
      address: ["Address with Island Name", "ގޭގެ ނަމާއި ރަށް"],
      addressPlaceholder: ["House, Island name", "ގެ، ރަށް"],
      submit: ["Submit Registration", "ރަޖިސްޓްރީ ކުރައްވާ"],
      submitting: ["Submitting...", "ފޮނުވެނީ..."]
    }
  },
  Notices: {
    title: ["Notice Board", "ނޯޓިސް ބޯޑު"],
    subtitle: ["Important announcements and updates for students and parents.", "ދަރިވަރުންނާއި ބެލެނިވެރިންނަށް މުހިންމު އިއުލާނުތަކާއި އެންގުންތައް."],
    noNotices: ["No notices at the moment.", "މިވަގުތު އެއްވެސް ނޯޓިހެއް ނެތް."]
  },
  Payment: {
    title: ["Pay Fees", "ފައިސާ ދެއްކެވުމަށް"],
    subtitle: ["Enter your student ID to view pending invoices and make payments.", "ފައިސާ ދެއްކެވުމަށާއި ބިލްތައް ބައްލަވާލެއްވުމަށް ދަރިވަރުގެ އައިޑީ ކާޑު ނަންބަރު ޖައްސަވާށެވެ."],
    searchLabel: ["Search by Student Name or ID", "ދަރިވަރުގެ ނަން ނުވަތަ އައިޑީން ހޯދާ"],
    searchPlaceholder: ["Enter ID/Name and press Enter...", "އައިޑީ ނުވަތަ ނަން ޖެއްސެވުމަށްފަހު އެންޓަރ ފިތާލައްވާ..."],
    pendingInvoices: ["Pending Invoices", "ނުދައްކާ ހުރި ބިލްތައް"],
    noPending: ["No pending invoices found for this student.", "މި ދަރިވަރަކަށް ފައިސާ ދައްކަންޖެހޭ އެއްވެސް ބިލެއް ނެތް."],
    payNow: ["Pay Now", "މިހާރު ދައްކަވާ"],
    paySelected: ["Pay Selected", "ޚިޔާރުކުރެވިފައިވާ ބިލްތަކަށް ފައިސާ ދައްކަވާ"]
  },
  Login: {
    title: ["Sign in to your account", "އެކައުންޓަށް ލޮގިން ކުރައްވާ"],
    welcome: ["Welcome back", "މަރުޙަބާ"],
    email: ["Email address", "އީމެއިލް އެޑްރެސް"],
    password: ["Password", "ޕާސްވޯޑް"],
    forgotPassword: ["Forgot your password?", "ޕާސްވޯޑް ހަނދާންނެތުނީތޯ؟"],
    signIn: ["Sign in", "ލޮގިން"],
    signingIn: ["Signing in...", "ލޮގިން ކުރެވެނީ..."]
  }
};

for (const [pageKey, pageData] of Object.entries(pages)) {
  en[pageKey] = {};
  dv[pageKey] = {};
  
  for (const [key, value] of Object.entries(pageData)) {
    if (Array.isArray(value)) {
      en[pageKey][key] = value[0];
      dv[pageKey][key] = value[1];
    } else {
      en[pageKey][key] = {};
      dv[pageKey][key] = {};
      for (const [subKey, subValue] of Object.entries(value)) {
        en[pageKey][key][subKey] = subValue[0];
        dv[pageKey][key][subKey] = subValue[1];
      }
    }
  }
}

fs.writeFileSync('apps/web/messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('apps/web/messages/dv.json', JSON.stringify(dv, null, 2));
console.log('Dictionaries updated successfully.');
