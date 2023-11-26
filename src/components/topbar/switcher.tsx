import { RiFunctionLine, RiMenuLine } from 'react-icons/ri';

const switcher = [
  {
    key: 'List',
    Icon: <RiMenuLine size="24px" />,
    path: '/list',
  },
  {
    key: 'Dashboard',
    Icon: <RiFunctionLine size="24px" />,
    path: '/',
  },
];

export default switcher;
