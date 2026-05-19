import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { FaFacebookSquare, FaTwitch, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const contactInfo = [
  {
    id: 1,
    icon: IoMailOutline,
    label: 'Mail:',
    value: 'paolagasa.93@gmail.com',
  },
  {
    id: 2,
    icon: BsTelephone,
    label: 'Teléfono:',
    value: '+52 123 456 7890',
  },
  {
    id: 3,
    icon: IoLocationOutline,
    label: 'Ubicación:',
    value: 'México, CDMX',
  },
];

export const socialLinks = [
  {
    id: 1,
    name: 'Instagram',
    icon: BsInstagram,
    url: 'https://www.instagram.com/kami_owo',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: FaFacebookSquare,
    url: 'https://www.facebook.com/ookami.disorder',
  },
  {
    id: 3,
    name: 'X',
    icon: FaXTwitter,
    url: 'https://www.x.com/OokamiDisorder',
  },
  {
    id: 4,
    name: 'Twitch',
    icon: FaTwitch,
    url: 'https://www.twitch.tv/nosoykami_uwu',
  },
  {
    id: 5,
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/@nosoykami_uwu',
  },
];
