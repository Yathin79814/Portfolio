"use client";

import { Mail, Folder } from "lucide-react";

const Linkedin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const SocialDock = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/damallayathin",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/designpreneurss/",
    },
    {
      name: "Google Drive",
      icon: Folder,
      href: "https://drive.google.com/drive/folders/1m1OGsswlkE54gx3TcWf-ljyZfFW1wu0q?usp=drive_link",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:damallayathin030@gmail.com",
    },
  ];

  return (
    <>
      {/* Desktop Version (Bottom Left Vertical Stack) */}
      <div className="fixed bottom-0 left-0 z-50 p-8 hidden md:flex flex-col items-center gap-6">
        <div className="flex flex-col gap-6 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-6 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.name}
                className="text-white/60 hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300"
              >
                <Icon size={22} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
        {/* Aesthetic vertical line anchoring it to the bottom */}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/20" />
      </div>

      {/* Mobile Version (Floating Bottom Horizontal Bar) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[85%] max-w-sm pointer-events-none">
        <div className="flex justify-around items-center bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] pointer-events-auto">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={social.name}
                className="text-white/60 hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
