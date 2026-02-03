export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 xl:gap-32 items-center min-h-[80vh]">
        {/* Left: Arch Image */}
        <div className="relative w-full h-[500px] md:h-[700px]">
          <div className="absolute inset-0 bg-[#263419]/5 rounded-t-[1000px] overflow-hidden">
            <img
              src="/home_page.jpg"
              alt="Woman holding lilac flowers"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-lg mx-auto">
          <h1 className="font-sans text-5xl md:text-7xl leading-[1.1] text-[#263419] font-medium">
            Live your life <br /> in full bloom
          </h1>
          <p className="text-[#263419]/90 text-sm md:text-base font-medium tracking-wide">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <div className="pt-4">
            <button className="border border-[#263419] px-8 py-3 text-xs md:text-sm tracking-[0.2em] font-bold uppercase hover:bg-[#263419] hover:text-white transition-colors duration-300 flex items-center gap-2">
              Connect with me
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}