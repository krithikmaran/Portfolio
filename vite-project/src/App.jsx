import { motion } from "framer-motion";
import resume from "./assets/KrithikMaranResume.pdf";
import logo from "./assets/large-website-logo.svg"; // Import your logo
import "./App.css";

function App() {
  const sections = [
    {
      title: "Website Under Development",
      content:
        "Thank you for stopping by! This is just a temporary website while my actual one is being created. Please check back soon for updates!",
    },
    {
      title: "Website Infrastructure",
      content: ["Oracle Cloud Compute", "Kubernetes", "Flannel CNI", "Metal Load Balancer", "Lets Encrypt", "Nginx"],
    },
    {
      title: "Website Stack",
      content: ["React", "Vite", "Tailwind CSS"],
    },
  ];

  return (
    <div className="scrollable-container h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-black pt-16">
      {/* Floating Header */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 flex justify-between items-center z-10 pr-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Replace the text with your logo */}
        <img src={logo} alt="Website Logo" className="h-10" />
        <div className="flex space-x-4">
          <a href={resume} download className="text-white hover:underline">
            Resume
          </a>
          <a
            href="https://github.com/krithikmaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/krithikmaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.nav>

      {/* Scrollable Full-Screen Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className="h-[55vh] flex items-center justify-center snap-center bg-black text-white relative mb-20"
        >
          <motion.div
            className="w-[90%] md:w-[60%] lg:w-[50%] bg-neutral-800 text-white p-8 rounded-xl shadow-lg text-center"
          >
            <motion.h2
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {section.title}
            </motion.h2>
            {Array.isArray(section.content) ? (
              <motion.ul
                className="list-disc list-inside text-lg space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {section.content.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {section.content}
              </motion.p>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
}

export default App;
