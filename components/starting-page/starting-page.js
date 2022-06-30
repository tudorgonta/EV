import Cars from "./Cars";
import Faq from "./Faq";
import Grid from "./Grid";
import Header from "./Header";
import Roadmap from "./Roadmap";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <>
    <Header />
    <section className="text-gray-700">
      <Roadmap />
      <Grid />
      <Faq />
      <Cars/>
    </section>
    </>
  );
}

export default StartingPageContent;
