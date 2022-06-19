import Header from "./Header";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <>
    <Header />
    <section className="relative text-3xl font-bold underline">
      <h1>Welcome on Board!</h1>
    </section>
    </>
  );
}

export default StartingPageContent;
