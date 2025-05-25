const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="w-full px-4">
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © {new Date().getFullYear()} EduKodan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
