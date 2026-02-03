import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="w-full bg-[#efeae2] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-20">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[520px] text-[#273919]">
          <h2 className="text-[36px] font-semibold mb-6">
            Hi, I’m Lilac.
          </h2>

          <p className="text-[19.2784px] font-medium leading-relaxed mb-12">
            I’m committed to providing a safe and supportive environment where
            we can explore thoughts, feelings, and behaviors. With empathy and
            guidance, we’ll work together to navigate the challenges life throws
            your way.
          </p>

          <button className="border border-[#273919] px-7 py-2.5 text-[10px] tracking-[0.25em] uppercase font-bold hover:opacity-70 transition">
            Get started —
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center mt-20 md:mt-0">
          
          {/* IMAGE STACK WRAPPER */}
          <div className="relative">

            {/* GIRL IMAGE (arched, clipped) */}
            <div className="relative w-[420px] h-[600px] overflow-hidden rounded-t-full">
              <Image
                src="/girl.jpg"
                alt="Girl holding flowers"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* FLOWR IMAGE (overlapping, NOT clipped) */}
            <div className="absolute -bottom-14 -right-20 w-[260px] h-[260px] rounded-full overflow-hidden z-10">
              <Image
                src="/flowrs.jpg"
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
