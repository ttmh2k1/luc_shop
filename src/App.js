// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes } from './routes';
//import cookies from 'react-cookies';

function App() {
  // const token = localStorage.getItem('token');
  const token = useSelector((state) => state.user.token);

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {token &&
          privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  token ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            );
          })}
      </Routes>
    </Router>
  );
}

export default App;
