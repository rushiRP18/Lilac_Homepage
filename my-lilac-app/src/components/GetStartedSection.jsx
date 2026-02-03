const GetStartedSection = () => {
  return (
    <section className="w-full bg-[#7e7b46] min-h-[65vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6 text-center text-white">
        
        {/* Heading – more spacing */}
        <h2 className="text-[36px] font-semibold mt-6 mb-6 tracking-wide">
          Get started today.
        </h2>

        {/* Paragraph – unchanged */}
        <p className="mx-auto max-w-[520px] text-[19.87px] leading-relaxed mb-12">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        {/* CTA Button – taller + hover effect */}
        <button
          className="
            border border-white
            px-10 py-4
            text-[12px] tracking-[0.25em] uppercase font-semibold
            transition-all duration-300
            hover:bg-white hover:text-[#7e7b46]
          "
        >
          Get in touch →
        </button>

      </div>
    </section>
  );
};

export default GetStartedSection;
