import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="flex w-full justify-around bg-crust p-5 text-sm text-subtext1 md:text-xs">
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
        Made with{" "}
        <Icon
          icon="mdi:heart"
          className="inline relative -top-[0.08rem] text-red"
        />{" "}
        using{" "}
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
