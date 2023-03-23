import Levels from './Levels';

function Header() {
  return (
    <header className="bg-header-bg-color h-header px-padding-header flex items-center justify-center fixed z-50 left-60 right-0 lg:left-[70px]">
      <Levels />
    </header>
  );
}

export default Header;
