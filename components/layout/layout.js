import { Fragment } from 'react';
import { useRouter } from 'next/router';

import MainNavigation from './main-navigation';
import AdminNavigation from './AdminNavigation';

function Layout(props) {
  const router = useRouter();
  return (
    <Fragment>
      {router.pathname.includes('/admin') ? (
       <div className="flex">
          <AdminNavigation />
          <main className="flex-1 ml-56 p-10">{props.children}</main>
        </div>
        ) : (
        <>
          <MainNavigation />
          <main>{props.children}</main>
        </>
      )
      }
    </Fragment>
  );
}

export default Layout;
