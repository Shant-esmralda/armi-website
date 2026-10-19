import { homePath, type Locale } from './home';

export const contactPath = (locale: Locale) => homePath(locale) + 'contact/';

// Fill in the phone number (with country code) and full profile URLs here.
// Empty values show translated placeholders without creating inactive links.
// These details are shared by all three languages.
export const contactDetails = {
  phoneNumber: '',
  whatsappUrl: '',
  telegramUrl: '',
  instagramUrl: '',
};

interface ContactCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  note: string;
  phoneLabel: string;
  phoneText: string;
  phonePlaceholder: string;
  socialsLabel: string;
  socialsTitle: string;
  socialsText: string;
  profilePlaceholder: string;
  whatsapp: string;
  whatsappText: string;
  whatsappAction: string;
  telegram: string;
  telegramText: string;
  telegramAction: string;
  instagram: string;
  instagramText: string;
  instagramAction: string;
}

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    title: 'Contact | Armine Shahnazarian',
    description: 'Get in touch with Armine Shahnazarian for singing lessons, performances, and musical collaborations. Find phone and social contact details here.',
    eyebrow: 'LET’S CONNECT',
    heading: 'Let’s make',
    headingAccent: 'music together.',
    intro: 'A question about singing lessons, an idea for a performance, or the beginning of a collaboration. Every musical conversation starts with a hello.',
    note: 'For lessons, performances & collaborations',
    phoneLabel: 'Phone number',
    phoneText: 'A direct way to get in touch about your next musical step.',
    phonePlaceholder: 'Phone number coming soon',
    socialsLabel: 'STAY IN TOUCH',
    socialsTitle: 'A little closer to the music.',
    socialsText: 'Connect on WhatsApp, Telegram, or Instagram.',
    profilePlaceholder: 'Profile link coming soon',
    whatsapp: 'WhatsApp',
    whatsappText: 'Start a conversation about lessons or a musical idea.',
    whatsappAction: 'Message on WhatsApp',
    telegram: 'Telegram',
    telegramText: 'Get in touch with questions and collaboration enquiries.',
    telegramAction: 'Message on Telegram',
    instagram: 'Instagram',
    instagramText: 'Stay connected with the music and get in touch.',
    instagramAction: 'Visit Instagram',
  },
  fa: {
    title: 'تماس | آرمینه شاه‌نظریان',
    description: 'برای کلاس‌های آواز، اجرا و همکاری‌های موسیقی با آرمینه شاه‌نظریان در ارتباط باشید. شماره تلفن و راه‌های ارتباط در شبکه‌های اجتماعی را اینجا ببینید.',
    eyebrow: 'در ارتباط باشیم',
    heading: 'با هم',
    headingAccent: 'موسیقی بسازیم.',
    intro: 'پرسشی دربارهٔ کلاس‌های آواز، ایده‌ای برای اجرا یا آغاز یک همکاری دارید؟ هر گفت‌وگوی موسیقایی با یک سلام آغاز می‌شود.',
    note: 'برای کلاس‌های آواز، اجرا و همکاری',
    phoneLabel: 'شماره تلفن',
    phoneText: 'راهی مستقیم برای گفت‌وگو دربارهٔ قدم بعدی شما در موسیقی.',
    phonePlaceholder: 'شماره تلفن به‌زودی اضافه می‌شود',
    socialsLabel: 'در تماس بمانیم',
    socialsTitle: 'کمی نزدیک‌تر به موسیقی.',
    socialsText: 'از طریق واتس‌اپ، تلگرام یا اینستاگرام در ارتباط باشید.',
    profilePlaceholder: 'پیوند صفحه به‌زودی اضافه می‌شود',
    whatsapp: 'واتس‌اپ',
    whatsappText: 'گفت‌وگویی دربارهٔ کلاس‌ها یا یک ایدهٔ موسیقایی آغاز کنید.',
    whatsappAction: 'پیام در واتس‌اپ',
    telegram: 'تلگرام',
    telegramText: 'برای پرسش‌ها و پیشنهادهای همکاری در تماس باشید.',
    telegramAction: 'پیام در تلگرام',
    instagram: 'اینستاگرام',
    instagramText: 'با موسیقی همراه بمانید و در ارتباط باشید.',
    instagramAction: 'دیدن اینستاگرام',
  },
  hy: {
    title: 'Կապ | Արմինե Շահնազարյան',
    description: 'Կապ հաստատեք Արմինե Շահնազարյանի հետ երգեցողության դասերի, ելույթների և երաժշտական համագործակցության համար։ Այստեղ կգտնեք հեռախոսահամարը և սոցիալական էջերը։',
    eyebrow: 'ԿԱՊ ՀԱՍՏԱՏԵՆՔ',
    heading: 'Եկեք միասին',
    headingAccent: 'երաժշտություն ստեղծենք։',
    intro: 'Հարց ունե՞ք երգեցողության դասերի մասին, ելույթի գաղափա՞ր, թե՞ համագործակցության առաջարկ։ Յուրաքանչյուր երաժշտական զրույց սկսվում է ողջույնից։',
    note: 'Դասերի, ելույթների և համագործակցության համար',
    phoneLabel: 'Հեռախոսահամար',
    phoneText: 'Ձեր հաջորդ երաժշտական քայլը քննարկելու ուղիղ ճանապարհ։',
    phonePlaceholder: 'Հեռախոսահամարը՝ շուտով',
    socialsLabel: 'ՄՆԱՆՔ ԿԱՊԻ ՄԵՋ',
    socialsTitle: 'Մի փոքր ավելի մոտ երաժշտությանը։',
    socialsText: 'Կապ հաստատեք WhatsApp-ի, Telegram-ի կամ Instagram-ի միջոցով։',
    profilePlaceholder: 'Էջի հղումը՝ շուտով',
    whatsapp: 'WhatsApp',
    whatsappText: 'Սկսեք զրույց դասերի կամ երաժշտական գաղափարի մասին։',
    whatsappAction: 'Գրել WhatsApp-ով',
    telegram: 'Telegram',
    telegramText: 'Գրեք ձեր հարցերի և համագործակցության առաջարկների մասին։',
    telegramAction: 'Գրել Telegram-ով',
    instagram: 'Instagram',
    instagramText: 'Հետևեք երաժշտությանը և մնացեք կապի մեջ։',
    instagramAction: 'Այցելել Instagram',
  },
};
