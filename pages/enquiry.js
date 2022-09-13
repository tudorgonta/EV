import Form from '../components/form/Form'

function AuthForm({dat,  chargResDataFilt}) {
  return (
    <section className="flex flex-col text-center my-10 w-10/12 mx-auto">
      <Form dat={dat} chargers={chargResDataFilt} />
    </section>
  );
}

export async function getServerSideProps(context) {

  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/user/cars/`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const data = await res.json()
  const dat = data.data

  const chargRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/user/charg/`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const chargResData = await chargRes.json()
  const chargResDataFilt = chargResData.data
  return {
    props: { dat, chargResDataFilt },
  };
}

export default AuthForm;
