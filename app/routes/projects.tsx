import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import CircuitBackground from "../components/CircuitBackground";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen relative">
            <CircuitBackground />
            <Navbar />
            <main>
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
