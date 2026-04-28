import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { FaFacebookSquare } from 'react-icons/fa';
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
    url: 'https://www.instagram.com/yourusername',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: FaFacebookSquare,
    url: 'https://www.facebook.com/yourusername',
  },
  {
    id: 3,
    name: 'X',
    icon: FaXTwitter,
    url: 'https://www.twitter.com/yourusername',
  },
];
