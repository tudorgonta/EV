import Form from '../components/form/Form'

function AuthForm({dat}) {
  return (
    <section className="flex flex-col text-center mt-10">
      <Form dat={dat} />
    </section>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch('http://localhost:3000/api/user/cars',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const data = await res.json()
  const dat = data.data
  return {
    props: { dat },
  };
}

export default AuthForm;
