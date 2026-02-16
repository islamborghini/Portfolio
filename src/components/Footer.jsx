const Footer = () => {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-3xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Islam Assanov. All rights reserved.
        </span>
        <span className="text-sm text-neutral-600">
          Built with React & Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
