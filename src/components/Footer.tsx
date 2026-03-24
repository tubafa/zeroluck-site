import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo_glow.svg"
          alt="ZeroLuck"
          width={100}
          height={35}
        />

        <p className="text-text-secondary text-sm font-console">
          ZeroLuck &copy; 2026
        </p>

        <div className="flex gap-6">
          <a
            href="https://t.me/zeroluck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-sm font-console"
          >
            Telegram
          </a>
          <a
            href="#"
            className="text-text-secondary hover:text-accent transition-colors text-sm font-console"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-text-secondary hover:text-accent transition-colors text-sm font-console"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
