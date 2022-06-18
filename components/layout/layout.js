import { Fragment } from 'react';
import { useRouter } from 'next/router';

import MainNavigation from './main-navigation';

function Layout(props) {
  const router = useRouter();
  return (
    <Fragment>
      {router.pathname.includes('/admin') ?
       <></>
      : <MainNavigation />
      }
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
