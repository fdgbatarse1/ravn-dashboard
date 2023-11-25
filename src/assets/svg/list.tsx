import { Icon } from '@/types';

const List = ({ fill = 'white', size = 24 }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill={fill} />
  </svg>
);

export default List;
