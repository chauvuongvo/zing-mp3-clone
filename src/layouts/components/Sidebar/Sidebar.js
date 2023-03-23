import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to={'/canhan'}> Ca nhan </Link>
        </li>
        <li>
          <Link to={'/'}> Kham pha </Link>
        </li>
        <li>
          <Link to={'/radio'}> Radio </Link>
        </li>
        <li>
          <Link to={'/zing-chat'}>Zing chat</Link>
        </li>
        <li>
          <Link to={'/following'}> Following </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
