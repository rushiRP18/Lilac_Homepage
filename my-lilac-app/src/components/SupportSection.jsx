import Image from "next/image";

const SupportSection = () => {
  const painPoints = [
    "Persistent feelings of sadness or hopelessness",
    "Trouble focusing or making decisions",
    "Difficulty maintaining relationships",
    "Feeling constantly exhausted or unmotivated",
    "A pervasive sense of being overwhelmed",
  ];

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[760px] overflow-hidden">
      
      {/* LEFT IMAGE */}
      <div className="relative w-full md:w-1/2 min-h-[650px]">
        <Image
          src="/ss_new.jpg"
          alt="Supportive background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 bg-[#C9C8D4] text-[#273919] px-16 flex items-center">
        
        <div className="max-w-[460px] w-full pt-12">
          
          {/* Heading (unchanged logic) */}
          <h2 className="text-[48px] leading-[1.1] font-semibold mt-5 mb-8">
            <span className="whitespace-nowrap">
              You don&apos;t have to do this
            </span>
            <br />
            <span className="italic">all alone.</span>
          </h2>

          {/* EXACT FONT SIZE + COLOR */}
          <p className="text-[19.2784px] font-medium mb-5">
            If you are facing any of these, there&apos;s hope:
          </p>

          {/* List — exact size */}
          <ul className="list-disc pl-5 space-y-3 mb-10">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className="text-[19.2784px] font-medium leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Closing paragraph — exact size */}
          <p className="text-[19.2784px] font-medium leading-relaxed max-w-[420px] mb-16">
            With empathy and guidance, we&apos;ll work together to navigate the
            challenges life throws your way.
          </p>

          {/* FULL-WIDTH DIVIDER (edge to edge) */}
          <div className="-mx-16 border-t border-[#273919]/40 pt-4">
            <div className="px-16 flex justify-center">
              <button className="text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-60 transition-opacity">
                Work with me —
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;
