const Footer = () => {
  return (
    <footer className="border-t-2 bg-[#ff4d00]/60 border-[#ff4d00] rounded-xl font-light">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg text-white">
            © {new Date().getFullYear()} Kushagra Verma. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" className="text-white hover:font-bold">
              GitHub.
            </a>
            <a href="https://www.linkedin.com/in/kushagra-verma-tech" className="text-white hover:font-bold ">
              LinkedIn.
            </a>
            <a href="https://www.nexuzforge.com/" className="text-white hover:font-bold ">
              Nexuzforge.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 