import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeatureCard from "./components/FeatureCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-center py-8">
          <ProfileCard />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard
            title="HTML & CSS"
            description="building structured, styled web pages"
            level="Advanced"
          />
          <FeatureCard
            title="JavaScript"
            description="creating interactive web experiences"
            level="Intermediate"
          />
          <FeatureCard
            title="React"
            description="building modern user interfaces"
            level="Beginner"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
