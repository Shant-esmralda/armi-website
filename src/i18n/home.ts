import { withBase } from '../utils/paths';

export const locales = ['en', 'fa', 'hy'] as const;
export type Locale = (typeof locales)[number];

export const artist = { name: 'Armine Shahnazarian' };
export const languageNames: Record<Locale, string> = {
  en: 'English', fa: 'فارسی', hy: 'Հայերեն',
};
export const homePath = (locale: Locale) => withBase(locale === 'en' ? '/' : '/' + locale + '/');

interface Lesson {
  number: string;
  title: string;
  description: string;
  detail: string;
}

const english = {
  title: 'Armine Shahnazarian | Singer & Music Teacher',
  description: 'Explore classical and pop music with Armine Shahnazarian. Discover her musical approach, singing lessons, and upcoming performances and student resources.',
  home: 'Home', portfolio: 'Portfolio', resources: 'Resources', contact: 'Contact',
  skip: 'Skip to content', navigation: 'Main navigation', languages: 'Choose language', menu: 'Open navigation',
  profession: 'Singer & music teacher',
  eyebrow: 'A LIFE IN MUSIC',
  heroStart: 'Where music', heroEnd: 'finds its voice.',
  intro: 'Classical roots. Contemporary expression. A space to discover music, nurture your voice, and find your own way to be heard.',
  primaryCta: 'Explore the lessons', secondaryCta: 'Discover my music',
  heroNote: 'A little technique. A lot of heart.',
  imageAlt: 'An intimate view of a grand piano keyboard and open sheet music in warm afternoon light',
  imageCaption: 'THE ART OF EXPRESSION', imageCardTitle: 'Classical & pop', imageCardText: 'One voice. Many possibilities.',
  stripOne: 'Classical artistry', stripTwo: 'Contemporary expression', stripThree: 'Learning with purpose',
  aboutLabel: 'THE PERSON BEHIND THE MUSIC', aboutTitle: 'Hello, I’m Armine.',
  aboutText: 'Music brings together the things I love most: storytelling, expression, and the joy of learning. As a singer and music teacher, I work across classical and pop music, connecting the care of technique with the freedom of interpretation.',
  aboutSecond: 'Whether you’re discovering your voice for the first time or exploring a new musical direction, there is a place for you here.',
  signature: 'Armine Shahnazarian',
  quote: 'Every voice has a story. Let’s find yours.',
  quoteLabel: 'A NOTE ON MY APPROACH',
  teachingLabel: 'LEARN WITH ME', teachingTitle: 'Your voice. Your own rhythm.',
  teachingText: 'A thoughtful approach to learning, with room for curiosity, confidence, and the music you love.',
  lessonDetail: 'What we can explore',
  lessons: [
    { number: '01', title: 'Classical singing', description: 'Build a grounded vocal technique and bring timeless repertoire to life.', detail: 'Breath awareness, vocal resonance, clear diction, phrasing, and expressive interpretation of classical repertoire.' },
    { number: '02', title: 'Pop vocals', description: 'Explore your sound, connect with a song, and sing with expression.', detail: 'Vocal expression, rhythm, phrasing, song interpretation, and finding a comfortable, individual sound.' },
    { number: '03', title: 'Musical foundations', description: 'Make sense of the notes and develop the ear behind the voice.', detail: 'Reading sheet music, ear training, rhythm, music theory, and building a purposeful practice routine.' },
  ],
  portfolioLabel: 'THE MUSIC', portfolioTitle: 'Two worlds. One musical voice.',
  portfolioText: 'From the detail of a classical phrase to the immediacy of a pop melody, explore the music that shapes my work.',
  classical: 'Classical', classicalText: 'Timeless repertoire, thoughtful interpretation.',
  pop: 'Pop', popText: 'Honest stories, contemporary sounds.',
  mediaSoon: 'Performance videos & audio — coming soon',
  resourcesLabel: 'FOR MY STUDENTS', resourcesTitle: 'Keep the music going.',
  resourcesText: 'A place for the small things that make a difference between lessons: sheet music, practice guidance, and musical inspiration.',
  sheetMusic: 'Sheet music', practice: 'Practice guides', theory: 'Music essentials',
  resourcesSoon: 'Student downloads — coming soon',
  contactLabel: 'LET’S CONNECT', contactTitle: 'A new chapter starts with a song.',
  contactText: 'Interested in learning together or collaborating on a musical project? This space is for lesson, performance, and collaboration enquiries.',
  contactSoon: 'Contact details — coming soon',
  backTop: 'Back to top', footerNote: 'Music, with feeling.', footerRights: 'All rights reserved.',
};

export type HomeCopy = { [Key in keyof typeof english]: Key extends 'lessons' ? Lesson[] : string };

export const homeCopy: Record<Locale, HomeCopy> = {
  en: english,
  fa: {
    title: 'Armine Shahnazarian | خواننده و مدرس موسیقی',
    description: 'با آرمینه شاه‌نظریان دنیای موسیقی کلاسیک و پاپ را کشف کنید. با رویکرد موسیقایی، آموزش آواز و منابع آموزشی او آشنا شوید.',
    home: 'خانه', portfolio: 'آثار', resources: 'منابع آموزشی', contact: 'تماس',
    skip: 'رفتن به محتوای اصلی', navigation: 'منوی اصلی', languages: 'انتخاب زبان', menu: 'باز کردن منو',
    profession: 'خواننده و مدرس موسیقی', eyebrow: 'زندگی با موسیقی',
    heroStart: 'اینجا موسیقی', heroEnd: 'صدای خود را می‌یابد.',
    intro: 'ریشه‌های کلاسیک، بیان امروزی. فضایی برای کشف موسیقی، پرورش صدا و پیدا کردن شیوهٔ شخصی شما برای شنیده شدن.',
    primaryCta: 'آشنایی با آموزش‌ها', secondaryCta: 'دنیای موسیقی من', heroNote: 'کمی تکنیک، بسیار احساس.',
    imageAlt: 'نمایی نزدیک از کلیدهای پیانوی گرند و نت‌های موسیقی در نور گرم عصر',
    imageCaption: 'هنر بیان', imageCardTitle: 'کلاسیک و پاپ', imageCardText: 'یک صدا، امکان‌های بسیار.',
    stripOne: 'هنر موسیقی کلاسیک', stripTwo: 'بیان معاصر', stripThree: 'یادگیری هدفمند',
    aboutLabel: 'آشنایی با هنرمند', aboutTitle: 'سلام، من آرمینه هستم.',
    aboutText: 'موسیقی چیزهایی را که دوست دارم به هم پیوند می‌دهد: روایت، بیان احساس و لذت یادگیری. به‌عنوان خواننده و مدرس موسیقی، در سبک‌های کلاسیک و پاپ فعالیت می‌کنم و دقت در تکنیک را با آزادی در تفسیر همراه می‌سازم.',
    aboutSecond: 'چه برای نخستین بار صدای خود را کشف کنید و چه به‌دنبال مسیری تازه در موسیقی باشید، اینجا جایی برای شماست.',
    signature: 'Armine Shahnazarian', quote: 'هر صدا داستانی دارد. بیایید داستان شما را پیدا کنیم.', quoteLabel: 'نگاهی به رویکرد من',
    teachingLabel: 'با من بیاموزید', teachingTitle: 'صدای شما، ریتم شما.',
    teachingText: 'رویکردی سنجیده به یادگیری، با فضایی برای کنجکاوی، اعتمادبه‌نفس و موسیقی‌ای که دوست دارید.', lessonDetail: 'آنچه می‌توانیم بیاموزیم',
    lessons: [
      { number: '۰۱', title: 'آواز کلاسیک', description: 'تکنیک آواز را پایه‌ریزی کنید و به آثار ماندگار جان ببخشید.', detail: 'آگاهی از تنفس، طنین صدا، بیان روشن واژه‌ها، جمله‌بندی و تفسیر هنری آثار کلاسیک.' },
      { number: '۰۲', title: 'آواز پاپ', description: 'صدای خود را کشف کنید، با ترانه ارتباط بگیرید و با احساس بخوانید.', detail: 'بیان آوازی، ریتم، جمله‌بندی، تفسیر ترانه و یافتن صدایی راحت و شخصی.' },
      { number: '۰۳', title: 'مبانی موسیقی', description: 'نت‌ها را بشناسید و گوش موسیقایی خود را پرورش دهید.', detail: 'نت‌خوانی، تربیت شنوایی، ریتم، تئوری موسیقی و ساختن برنامه‌ای هدفمند برای تمرین.' },
    ],
    portfolioLabel: 'موسیقی من', portfolioTitle: 'دو جهان، یک صدای موسیقایی.',
    portfolioText: 'از ظرافت یک جملهٔ کلاسیک تا صمیمیت یک ملودی پاپ، با موسیقی‌ای آشنا شوید که به کار من شکل می‌دهد.',
    classical: 'کلاسیک', classicalText: 'آثار ماندگار، تفسیری سنجیده.', pop: 'پاپ', popText: 'روایت‌های صمیمی، صداهای امروزی.',
    mediaSoon: 'ویدیوها و فایل‌های صوتی اجراها — به‌زودی',
    resourcesLabel: 'برای هنرجویان من', resourcesTitle: 'موسیقی را ادامه دهید.',
    resourcesText: 'جایی برای چیزهای کوچکی که بین جلسه‌های آموزش تفاوت ایجاد می‌کنند: نت موسیقی، راهنمای تمرین و الهام‌های موسیقایی.',
    sheetMusic: 'نت موسیقی', practice: 'راهنمای تمرین', theory: 'مبانی موسیقی', resourcesSoon: 'دانلود منابع آموزشی — به‌زودی',
    contactLabel: 'در ارتباط باشیم', contactTitle: 'فصل تازه با یک ترانه آغاز می‌شود.',
    contactText: 'به یادگیری یا همکاری در یک پروژهٔ موسیقایی علاقه‌مندید؟ این فضا برای پرسش‌های مربوط به آموزش، اجرا و همکاری است.',
    contactSoon: 'اطلاعات تماس — به‌زودی', backTop: 'بازگشت به بالا', footerNote: 'موسیقی، با احساس.', footerRights: 'تمام حقوق محفوظ است.',
  },
  hy: {
    title: 'Armine Shahnazarian | Երգչուհի և երաժշտության ուսուցիչ',
    description: 'Բացահայտեք դասական և փոփ երաժշտությունը Արմինե Շահնազարյանի հետ։ Ծանոթացեք նրա երաժշտական մոտեցմանը, երգեցողության դասերին և ուսումնական նյութերին։',
    home: 'Գլխավոր', portfolio: 'Կատարումներ', resources: 'Նյութեր', contact: 'Կապ',
    skip: 'Անցնել հիմնական բովանդակությանը', navigation: 'Հիմնական ընտրացանկ', languages: 'Ընտրել լեզուն', menu: 'Բացել ընտրացանկը',
    profession: 'Երգչուհի և երաժշտության ուսուցիչ', eyebrow: 'ԿՅԱՆՔԸ՝ ԵՐԱԺՇՏՈՒԹՅԱՄԲ',
    heroStart: 'Այստեղ երաժշտությունը', heroEnd: 'գտնում է իր ձայնը։',
    intro: 'Դասական արմատներ։ Ժամանակակից արտահայտչություն։ Մի տարածք՝ երաժշտությունը բացահայտելու, ձեր ձայնը զարգացնելու և լսելի լինելու ձեր ձևը գտնելու համար։',
    primaryCta: 'Ծանոթանալ դասերին', secondaryCta: 'Բացահայտել իմ երաժշտությունը', heroNote: 'Մի քիչ տեխնիկա։ Շատ զգացմունք։',
    imageAlt: 'Ռոյալի ստեղների և բաց նոտաների մոտիկ տեսարան՝ կեսօրվա ջերմ լույսի ներքո',
    imageCaption: 'ԱՐՏԱՀԱՅՏՄԱՆ ԱՐՎԵՍՏԸ', imageCardTitle: 'Դասական և փոփ', imageCardText: 'Մեկ ձայն։ Բազում հնարավորություններ։',
    stripOne: 'Դասական արվեստ', stripTwo: 'Ժամանակակից արտահայտչություն', stripThree: 'Նպատակային ուսուցում',
    aboutLabel: 'ԵՐԱԺՇՏՈՒԹՅԱՆ ՀԵՏԵՎՈՒՄ', aboutTitle: 'Բարև, ես Արմինեն եմ։',
    aboutText: 'Երաժշտությունը միավորում է այն, ինչ ամենաշատն եմ սիրում՝ պատմություններ, արտահայտչություն և սովորելու ուրախություն։ Որպես երգչուհի և երաժշտության ուսուցիչ՝ աշխատում եմ դասական և փոփ ոճերում՝ տեխնիկայի ճշգրտությունը համադրելով մեկնաբանության ազատության հետ։',
    aboutSecond: 'Անկախ նրանից՝ առաջին անգամ եք բացահայտում ձեր ձայնը, թե նոր երաժշտական ուղղություն եք փնտրում, այստեղ ձեզ համար տեղ կա։',
    signature: 'Armine Shahnazarian', quote: 'Ամեն ձայն իր պատմությունն ունի։ Եկեք գտնենք ձերը։', quoteLabel: 'ԻՄ ՄՈՏԵՑՄԱՆ ՄԱՍԻՆ',
    teachingLabel: 'ՍՈՎՈՐԵՔ ԻՆՁ ՀԵՏ', teachingTitle: 'Ձեր ձայնը։ Ձեր ռիթմը։',
    teachingText: 'Ուսուցման մտածված մոտեցում՝ հետաքրքրասիրության, վստահության և ձեր սիրելի երաժշտության համար։', lessonDetail: 'Ինչ կարող ենք ուսումնասիրել',
    lessons: [
      { number: '01', title: 'Դասական երգեցողություն', description: 'Ձևավորեք ամուր վոկալ տեխնիկա և կյանք հաղորդեք դասական ստեղծագործություններին։', detail: 'Շնչառություն, ձայնի ռեզոնանս, հստակ արտասանություն, երաժշտական ֆրազավորում և դասական ստեղծագործությունների արտահայտիչ մեկնաբանություն։' },
      { number: '02', title: 'Փոփ վոկալ', description: 'Բացահայտեք ձեր հնչողությունը, զգացեք երգը և երգեք արտահայտիչ։', detail: 'Վոկալ արտահայտչություն, ռիթմ, ֆրազավորում, երգի մեկնաբանություն և ձեր անհատական, հարմարավետ հնչողության որոնում։' },
      { number: '03', title: 'Երաժշտական հիմունքներ', description: 'Հասկացեք նոտաները և զարգացրեք ձեր երաժշտական լսողությունը։', detail: 'Նոտաների ընթերցում, լսողության զարգացում, ռիթմ, երաժշտության տեսություն և նպատակային պարապմունքների կազմակերպում։' },
    ],
    portfolioLabel: 'ԻՄ ԵՐԱԺՇՏՈՒԹՅՈՒՆԸ', portfolioTitle: 'Երկու աշխարհ։ Մեկ երաժշտական ձայն։',
    portfolioText: 'Դասական ֆրազի նրբությունից մինչև փոփ մեղեդու անմիջականությունը՝ բացահայտեք իմ աշխատանքը ձևավորող երաժշտությունը։',
    classical: 'Դասական', classicalText: 'Մնայուն ստեղծագործություններ, մտածված մեկնաբանություն։', pop: 'Փոփ', popText: 'Անկեղծ պատմություններ, ժամանակակից հնչյուններ։',
    mediaSoon: 'Կատարումների տեսանյութեր և աուդիո — շուտով',
    resourcesLabel: 'ԻՄ ՈՒՍԱՆՈՂՆԵՐԻ ՀԱՄԱՐ', resourcesTitle: 'Թող երաժշտությունը շարունակվի։',
    resourcesText: 'Մի տարածք դասերի միջև կարևոր փոքր բաների համար՝ նոտաներ, պարապմունքների ուղեցույցներ և երաժշտական ոգեշնչում։',
    sheetMusic: 'Նոտաներ', practice: 'Պարապմունքների ուղեցույցներ', theory: 'Երաժշտական հիմունքներ', resourcesSoon: 'Ուսումնական նյութերի ներբեռնում — շուտով',
    contactLabel: 'ԿԱՊ ՀԱՍՏԱՏԵՆՔ', contactTitle: 'Նոր գլուխը սկսվում է երգից։',
    contactText: 'Ցանկանո՞ւմ եք միասին սովորել կամ համագործակցել երաժշտական նախագծում։ Այս տարածքը դասերի, ելույթների և համագործակցության հարցումների համար է։',
    contactSoon: 'Կոնտակտային տվյալներ — շուտով', backTop: 'Վերադառնալ վերև', footerNote: 'Երաժշտություն՝ զգացմունքով։', footerRights: 'Բոլոր իրավունքները պաշտպանված են։',
  },
};
