import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true      // animation सिर्फ एक बार चले scroll पर
    });
  }, []);

  return (
    <div>
      {/* Your component */}
    </div>
  );
}

export default App;
