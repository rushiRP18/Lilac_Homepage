import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-6 sm:py-6 md:px-12 md:py-8 max-w-7xl mx-auto w-full font-gopher">
      <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
        Lilac Template
      </div>

      <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base font-medium">
        <Link href="#" className="hover:opacity-70 transition-opacity">
          Blog
        </Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </div>
    </nav>
  );
}
