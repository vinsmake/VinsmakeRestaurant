// import icons
import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chefVinsmake.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '#home', name: 'home' },
  { href: '#about', name: 'about' },
  { href: '#menu', name: 'menu' },
  { href: '#team', name: 'team' },
  { href: '#testimonials', name: 'testimonials' },
  { href: '#reservation', name: 'book a table' },
  { href: '#contact', name: 'contact' },
];

export const heroData = {
  pretitle: `Your favorite Coffee House`,
  title: `Vinsmake's Cafe`,
  subtitle:
    'Sharing a coffee cup is one of the purest ways of loving',
  btnText: 'See menu',
};

export const socialData = [
  { href: 'www.youtube.com/vinsmake', icon: <FaYoutube /> },
  { href: 'www.github.com/vinsmake', icon: <FaGithub /> },
  { href: 'www.instagram.com/vinsmake', icon: <FaInstagram /> },
  { href: 'www.linkedin.com/user/vinsmake', icon: <FaLinkedin /> },
  { href: 'www.discord.com/vinsmake', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'Our Story',
  title: `Vinsmake's Coffee`,
  subtitle:
    `Vinsmake's Coffee was born from a dream about a Coffee House with beans from all the world, with a lot of peaople drinking his favorite coffee with Lo-Fi music, in his favorite coffee house.`,
  btnText: 'Find us',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Cake',
      price: '$7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Veggie Burger',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'King Burger',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Mexican Burger',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Not only our chef have a lot of experience in many coffee house arrount Mexico, all of our team have been arround Mexico and the world, trying to fin the best of the best coffee beans',
  sub2: 'Gastronomic Business Manager ',
  name: 'Enrique Vinsmake',
  occupation: 'Compulsive Coffee Drinker',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: 'www.youtube.com/vinsmake', icon: <FaYoutube /> },
      { href: 'www.github.com/vinsmake', icon: <FaGithub /> },
      { href: 'www.instagram.com/vinsmake', icon: <FaInstagram /> },
      { href: 'www.linkedin.com/user/vinsmake', icon: <FaLinkedin /> },
      { href: 'www.discord.com/vinsmake', icon: <FaDiscord /> },
    ],
  },
};
