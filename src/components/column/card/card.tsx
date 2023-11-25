import { RiMoreFill, RiAttachment2, RiNodeTree, RiChat3Line } from 'react-icons/ri';

const Card = () => (
  <article className="space-y-4 rounded-lg bg-neutral-4 p-4 text-neutral-1">
    <div className="flex justify-between space-x-2">
      <h4 className="text-body-l font-semibold">Slack</h4>
      <RiMoreFill size="24px" className="text-neutral-2" />
    </div>
    <div className="flex justify-between space-x-2">
      <p>4 points</p>
      <span>
        <p>Today</p>
      </span>
    </div>
    <ul className="flex justify-start space-x-2">
      <li>IOS APP</li>
      <li>ANDROID</li>
    </ul>
    <div className="flex justify-between space-x-2">
      <div>image</div>
      <ul className="flex items-center space-x-4 text-body-m">
        <li className="py-1">
          <RiAttachment2 size="16px" />
        </li>
        <li className="flex items-center space-x-1 py-1">
          <p>5</p>
          <RiNodeTree size="16px" />
        </li>
        <li className="flex items-center space-x-1 py-1">
          <p>5</p>
          <RiChat3Line size="16px" />
        </li>
      </ul>
    </div>
  </article>
);

export default Card;