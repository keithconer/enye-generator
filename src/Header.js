import React from 'react'; 

function Header() {
  return (
    <header className="text-center my-6 px-4"> {/* Adjusted overall spacing */}
      <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-6 max-w-4xl mx-auto"> {/* Title alignment */}
        enye character generator
      </h1> 
      <p className="text-xs md:text-sm mt-6 text-dark leading-relaxed text-center max-w-xl mx-auto">
        Finding it tricky to type the enye character? Struggling to figure out how to type the enye text? 
        With just one click, you'll have your enye.
      </p>
    </header>
  );
}

export default Header;
