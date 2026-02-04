import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="w-full bg-[#efeae2] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden font-gopher">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-20">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[520px] text-[#273919] order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold mb-4 sm:mb-6">
            Hi, I'm Lilac.
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-[19.2784px] font-medium leading-relaxed mb-8 sm:mb-10 md:mb-12">
            I'm committed to providing a safe and supportive environment where
            we can explore thoughts, feelings, and behaviors. With empathy and
            guidance, we'll work together to navigate the challenges life throws
            your way.
          </p>

          <button className="border border-[#273919] px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold hover:opacity-70 transition">
            Get started —
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-0 order-1 md:order-2">
          
          {/* IMAGE STACK WRAPPER */}
          <div className="relative w-full flex justify-center">

            {/* GIRL IMAGE (arched, clipped) */}
            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[420px] md:h-[600px] overflow-hidden rounded-t-full">
              <Image
                src="/girl_new.jpg"
                alt="Girl holding flowers"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* FLOWR IMAGE (overlapping, NOT clipped) */}
            <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-14 -right-12 sm:-right-14 md:-right-20 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden z-10">
              <Image
                src="/flowers_new.jpg"
                alt="Flower close up"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
