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
          <main className="w-10/12 ml-72 mr-16 my-12">{props.children}</main>
        </div>
        ) : (
        <>
          <MainNavigation />
          <main className='w-10/12 mx-auto my-0'>{props.children}</main>
        </>
      )
      }
    </Fragment>
  );
}

export default Layout;
