function Footer() {
  return (
    <footer>
      {/* Footer Content */}
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="
            bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 rounded-3xl shadow-lg/20
            px-6 py-5
            flex flex-col sm:flex-row items-center justify-between gap-6
          "
        >
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-[#0084ff] dark:text-[#0084ff]">
              Charles Luo
            </p>
            <p className="text-gray-600 dark:text-slate-300 text-sm mt-2">
              Aspiring Frontend Developer building user-focused & <br />responsive web applications.
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-col items-center sm:items-end gap-2">

            <div className="flex flex-wrap justify-center inset-shadow-sm/25 ring ring-[#0084ff] rounded-2xl bg-gray-50 dark:bg-slate-800 py-4 px-3 sm:justify-end gap-2 text-[13px]">
              {[
                { label: "Home", href: "#intro" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    px-3 py-1.5 rounded-full
                    text-[#0084ff] dark:text-[#0084ff] font-semibold
                    transition-all duration-150 ease-out
                    bg-white dark:bg-slate-700 hover:-translate-y-0.5
                    hover:shadow-md/20 border-2 border-gray-200 dark:border-slate-600
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Charles Luo</p>
          <p>Made with React + Typescript + TailwindCSS</p>
          <a
            href="#"
            className="font-semibold text-[#0084ff] dark:text-[#0084ff] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;