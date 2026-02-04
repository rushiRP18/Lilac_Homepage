import Link from "next/link";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[520px] font-gopher">
      
      {/* LEFT SIDE */}
      <div className="bg-[#e9e5dd] text-[#263419] px-6 sm:px-8 md:px-12 lg:px-16 font-gopher">
        
        {/* Content wrapper for vertical centering */}
        <div className="flex flex-col pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
            Live a fulfilling life.
          </h2>

          <div className="text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-md space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <p>
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>
            <p>
              It's easy to feel like you're alone in facing these challenges, but
              I want you to know that I'm here to help.
            </p>
          </div>

        </div>

        {/* FULL-WIDTH LINE + LINK */}
        <div className="-mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 border-t border-[#263419] pt-4">
          <Link
            href="#"
            className="px-6 sm:px-8 md:px-12 lg:px-16 text-xs tracking-[0.25em] uppercase font-semibold inline-flex items-center gap-2 hover:opacity-70 transition"
          >
            Get in touch →
          </Link>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-full min-h-[500px]">
        <img
          src="/About.png"
          alt="Lifestyle flatlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
