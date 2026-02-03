const FooterSection = () => {
  return (
    <footer className="w-full min-h-[90vh] bg-[#fbf7f2] flex flex-col justify-between">
      
      {/* TOP CONTENT */}
      <div className="w-full px-20 pt-24 text-[#273919]">
        <div className="flex justify-between items-start">
          
          {/* LEFT: BRAND */}
          <div>
            <h3 className="text-[36px] font-semibold mb-8">
              Lilac Template
            </h3>

            <p className="text-[18px] font-medium leading-relaxed mb-6">
              123 Example Road<br />
              Minneapolis, MN
            </p>

            <p className="text-[18px] font-medium leading-relaxed space-y-2">
              <a href="mailto:email@example.com" className="underline block">
                email@example.com
              </a>
              <a href="tel:5555555555" className="underline block">
                (555) 555-5555
              </a>
            </p>
          </div>

          {/* RIGHT: HOURS + FIND */}
          <div className="flex gap-24">
            
            {/* HOURS */}
            <div>
              <h4 className="text-[28px] font-semibold mb-6">
                Hours
              </h4>

              <p className="text-[18px] font-medium leading-relaxed">
                Monday – Friday<br />
                10am – 6pm
              </p>
            </div>

            {/* FIND */}
            <div>
              <h4 className="text-[28px] font-semibold mb-6">
                Find
              </h4>

              <ul className="space-y-3 text-[18px] font-medium">
                <li><a href="#" className="underline">Home</a></li>
                <li><a href="#" className="underline">Contact</a></li>
                <li><a href="#" className="underline">Blog</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-[#e7e3dd] py-12">
        <div className="max-w-6xl mx-auto px-10 text-center text-[#273919] text-[16px] font-medium space-y-5">
          
          <div className="flex flex-wrap justify-center gap-8 underline">
            <a href="#">Privacy & Cookies Policy</a>
            <a href="#">Good Faith Estimate</a>
            <a href="#">Website Terms & Conditions</a>
            <a href="#">Disclaimer</a>
          </div>

          <p>
            Website Template Credits:{" "}
            <a href="#" className="underline">
              Go Bloom Creative
            </a>
          </p>

          <p>
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default FooterSection;
