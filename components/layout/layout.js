import { Fragment } from 'react';
import { useRouter } from 'next/router';

import MainNavigation from './main-navigation';
import AdminNavigation from './AdminNavigation';
import Footer from '../starting-page/Footer';

function Layout(props) {
  const router = useRouter();
  return (
    <Fragment>
      {router.pathname.includes('/admin') ? (
       <div className="flex">
          <AdminNavigation />
          <main className="w-10/12 ml-56 font-Roboto">{props.children}</main>
        </div>
        ) : (
        <>
          <MainNavigation />
          <main className={`font-Roboto ${router.pathname == '/' ? 'mt-0' : 'mt-24'}`}>{props.children}</main>
          <Footer />
        </>
      )
      }
    </Fragment>
  );
}

export default Layout;
