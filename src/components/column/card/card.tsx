import { RiMoreFill } from 'react-icons/ri';

const Card = () => (
  <article className="space-y-4 rounded-lg bg-neutral-4 p-4">
    <div className="flex justify-between space-x-2">
      <h4>Slack</h4>
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
      <ul className="flex space-x-4">
        <li>icon 1</li>
        <li>icon 2</li>
        <li>icon 3</li>
      </ul>
    </div>
  </article>
);

export default Card;
