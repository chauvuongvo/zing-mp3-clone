import { publicRoutes } from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, idx) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
