function Footer() {
  return (
    <div className="text-sm text-subtext1 bg-crust w-[99.4vw] p-5 flex justify-around">
      <span className="">
        Colorscheme:{" "}
        <a
          href="https://catppuccin.com"
          target="_blank"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          Catppuccin{" "}
        </a>
        <img
          src="https://avatars.githubusercontent.com/u/93489351?s=200&v=4"
          alt="CatppuccinImg"
          className="inline size-4 rounded-full"
        />
      </span>
      <span className="">
        Made with <span className="nf nf-fa-heart text-red"></span> using{" "}
        <a
          href="https://react.dev"
          target="_blank"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          Tailwind
        </a>
      </span>
      {/* email */}
      <span className="">
        Email:{" "}
        <a
          href="mailto:sahajb0606@gmail.com"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          sahajb0606@gmail.com
        </a>
      </span>
    </div>
  );
}
export default Footer;
