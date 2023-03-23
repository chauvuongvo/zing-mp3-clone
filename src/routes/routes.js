import config from '~/configs';
// Layouts
import Home from '~/pages/Home';
import Radio from '~/pages/Radio';
import Following from '~/pages/Following';
import ZingChat from '~/pages/ZingChat';
import Personal from '~/pages/Personal';

// Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.zingChat, component: ZingChat },
  { path: config.routes.personal, component: Personal },
  { path: config.routes.following, component: Following },
  { path: config.routes.radio, component: Radio },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
