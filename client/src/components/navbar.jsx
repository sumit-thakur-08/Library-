import {
  MenuIcon,
  XIcon,
  ChevronDown,
  BookOpenIcon,
  ClipboardListIcon,
  FileTextIcon,
  LibraryIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", to: "/" },
    {
      name: "Library",
      subLinks: [
        {
          name: "All Books",
          to: "/books",
          icon: BookOpenIcon,
          description: "Browse all available books",
        },
        {
          name: "Issued Books",
          to: "/issued-books",
          icon: ClipboardListIcon,
          description: "View books issued to members",
        },
        {
          name: "E-Books",
          to: "/ebooks",
          icon: LibraryIcon,
          description: "Access digital books",
        },
        {
          name: "Study Materials",
          to: "/materials",
          icon: FileTextIcon,
          description: "Notes, PDFs & references",
        },
        {
          name: "Issue Requests",
          to: "/requests",
          icon: ClipboardListIcon,
          description: "Approve or reject book requests",
        },
      ],
    },
    { name: "Members", to: "/members" },
    { name: "Librarians", to: "/librarians" },
    { name: "Reports", to: "/reports" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200/70 bg-white/70 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-24">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <LibraryIcon className="size-6 text-indigo-600" />
          Turtle Library
        </Link>

        {/* LINKS */}
        <div className="hidden items-center space-x-6 text-gray-700 md:flex">
          {links.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex cursor-pointer items-center gap-1 hover:text-black">
                  {link.name}
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* DROPDOWN */}
                <div
                  className={`absolute left-0 top-7 w-[420px] rounded-md border border-gray-100 bg-white p-4 shadow-lg transition-all ${
                    openDropdown === link.name
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                  }`}
                >
                  <p className="text-sm font-medium text-gray-500">
                    Library Resources
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.to}
                        className="flex gap-3 rounded-md p-2 transition hover:bg-gray-100"
                      >
                        <div className="rounded-md bg-indigo-600 p-2">
                          <sub.icon className="size-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{sub.name}</p>
                          <p className="text-xs text-gray-400">
                            {sub.description}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-black ${
                    isActive ? "text-indigo-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ),
          )}
        </div>

        {/* LOGIN BUTTON */}
        <Link
          to="/login"
          className="hidden rounded-full bg-indigo-600 px-8 py-2.5 font-medium text-white transition hover:opacity-90 md:inline-block"
        >
          Login
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden active:scale-90"
        >
          <MenuIcon className="size-6" />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/40 text-lg font-medium backdrop-blur-2xl transition md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <div key={link.name} className="text-center">
            {link.subLinks ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name,
                    )
                  }
                  className="flex items-center gap-1 text-gray-800"
                >
                  {link.name}
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === link.name && (
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.to}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-black"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-black"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}

        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="rounded-full bg-indigo-600 px-8 py-2.5 text-white"
        >
          Login
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-indigo-600 p-2 text-white"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
