const Footer = () => {
  return (
    <footer className="border-t bg-black rounded-xl font-bold">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg text-white">
            © {new Date().getFullYear()} Kushagra Verma. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" className="text-white hover:text-blue-500">
              GitHub.
            </a>
            <a href="https://www.linkedin.com/in/kushagra-verma-tech" className="text-white hover:text-blue-500 ">
              LinkedIn.
            </a>
            <a href="https://www.nexuzforge.com/" className="text-white hover:text-blue-500 ">
              Nexuzforge.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 