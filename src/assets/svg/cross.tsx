import { Icon } from '@/types';

const Cross = ({ fill = 'white', size = 24 }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={fill} />
  </svg>
);

export default Cross;
