import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
