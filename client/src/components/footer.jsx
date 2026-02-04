import {
  DribbbleIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 pt-30 text-gray-600 md:px-16 lg:px-24">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16">
        <div className="flex-1">
          <a href="/">
            <img
              src="https://www.shutterstock.com/image-vector/cartoon-colour-open-book-pages-260nw-2630626197.jpg"
              alt="Library Logo"
              className="h-7.5 w-auto"
              width={205}
              height={48}
            />
          </a>
          <p className="mt-6 max-w-sm text-sm/6">
            Access a rich collection of books, digital resources, and study
            materials. Our Library Management System makes borrowing, tracking,
            and managing resources easy for students, faculty, and institutions.
          </p>
          <div className="mt-2 flex items-center gap-3 text-gray-400">
            <a
              href="https://www.youtube.com/library"
              aria-label="YouTube"
              title="YouTube"
            >
              <YoutubeIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.instagram.com/library"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://x.com/library"
              aria-label="Twitter"
              title="Twitter"
            >
              <TwitterIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/library"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://dribbble.com/library"
              aria-label="Dribbble"
              title="Dribbble"
            >
              <DribbbleIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20">
          <div className="flex flex-col">
            <h2 className="mb-5 font-semibold text-gray-800">Library Links</h2>
            <a
              href="/"
              className="py-1.5 transition duration-200 hover:text-black"
            >
              Home
            </a>
            <a
              href="/catalog"
              className="py-1.5 transition duration-200 hover:text-black"
            >
              Catalog
            </a>
            <a
              href="/membership"
              className="py-1.5 transition duration-200 hover:text-black"
            >
              Membership
            </a>
            <a
              href="/contact"
              className="py-1.5 transition duration-200 hover:text-black"
            >
              Contact
            </a>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-gray-800">
              Subscribe to Newsletter
            </h2>
            <div className="max-w-xs space-y-6 text-sm">
              <p>
                Get updates about new books, events, and library news delivered
                to your inbox weekly.
              </p>
              <form className="flex items-center justify-center gap-2 rounded-md bg-gray-100 p-1.5">
                <input
                  className="w-full max-w-64 rounded px-2 py-2 outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button className="rounded bg-gray-800 px-4 py-2 text-white transition hover:opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-4 md:flex-row">
        <p className="text-center">
          Copyright 2026 © <a href="/">Library Management System</a> All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy-policy"
            className="transition duration-200 hover:text-black"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="transition duration-200 hover:text-black"
          >
            Terms of Service
          </a>
          <a
            href="/cookie-policy"
            className="transition duration-200 hover:text-black"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
