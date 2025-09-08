function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 flex flex-col items-center justify-center text-center space-y-2">
      <p className="text-sm text-gray-300">
        Built and designed by <span className="font-semibold">Tahira Inam</span>
      </p>
      <p className="text-sm text-gray-400">
        &copy; 2023-{new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
