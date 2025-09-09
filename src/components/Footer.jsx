function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center text-center space-y-2 border-t border-gray-200">
      <p className="text-sm">
        Built and designed by <span className="font-semibold">Tahira Inam</span>
      </p>
      <p className="text-sm">
        © 2023 - {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
