import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaUser, FaCog, FaMoon, FaBell, FaLanguage, FaSignOutAlt 
} from 'react-icons/fa';
import './App.css'; // agar css bo'lsa saqlang

// Bosh sahifa
function BoshSahifa() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-10 text-center">
        <img 
          src="https://reactnative.dev/img/tiny_logo.png" // o'zingiz logo qo'ying
          alt="Logo" 
          className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-3">Xush kelibsiz!</h1>
        <p className="text-lg opacity-90">
          Bu oddiy React (web) da yaratilgan chiroyli mobil ko'rinishdagi ilova
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bugun nima qilamiz?</h2>
          <p className="text-gray-700 leading-relaxed">
            • Yangi loyihalar boshlash<br />
            • Do'stlar bilan suhbatlashish<br />
            • O'zbek tilida dasturlashni rivojlantirish
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Batafsil ma'lumot
        </button>
      </div>
    </div>
  );
}

// Profil sahifasi
function Profil() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white py-12 text-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profil rasmi"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold">Sodiqjon</h1>
        <p className="text-lg opacity-90 mt-2">React dasturchisi • Toshkent</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Ma'lumotlar</h2>
          <p className="text-gray-800 mb-3"><strong>Yosh:</strong> 25</p>
          <p className="text-gray-800 mb-3"><strong>Shahar:</strong> Toshkent</p>
          <p className="text-gray-800"><strong>Tillar:</strong> O'zbek, Rus, Ingliz</p>
        </div>
      </div>
    </div>
  );
}

// Sozlamalar sahifasi
function Sozlamalar() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Sozlamalar</h1>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <button className="w-full flex items-center px-6 py-5 hover:bg-gray-50 transition">
            <FaMoon className="text-2xl text-gray-700 mr-4" />
            <span className="text-lg">Tungi rejim</span>
          </button>
        </div>
        <div className="border-b border-gray-200">
          <button className="w-full flex items-center px-6 py-5 hover:bg-gray-50 transition">
            <FaBell className="text-2xl text-gray-700 mr-4" />
            <span className="text-lg">Bildirishnomalar</span>
          </button>
        </div>
        <div className="border-b border-gray-200">
          <button className="w-full flex items-center px-6 py-5 hover:bg-gray-50 transition">
            <FaLanguage className="text-2xl text-gray-700 mr-4" />
            <span className="text-lg">Tilni tanlash</span>
          </button>
        </div>
        <div>
          <button className="w-full flex items-center px-6 py-5 hover:bg-red-50 transition text-red-600">
            <FaSignOutAlt className="text-2xl mr-4" />
            <span className="text-lg font-medium">Chiqish</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Bottom Navbar komponenti
function BottomNavbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-3xl mx-auto flex justify-around items-center py-3">
        
        <Link 
          to="/" 
          className={`flex flex-col items-center p-2 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaHome size={26} />
          <span className="text-xs mt-1">Bosh</span>
        </Link>

        <Link 
          to="/profil" 
          className={`flex flex-col items-center p-2 ${location.pathname === '/profil' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaUser size={26} />
          <span className="text-xs mt-1">Profil</span>
        </Link>

        <Link 
          to="/sozlamalar" 
          className={`flex flex-col items-center p-2 ${location.pathname === '/sozlamalar' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaCog size={26} />
          <span className="text-xs mt-1">Sozlamalar</span>
        </Link>

      </div>
    </nav>
  );
}

// Asosiy App
function App() {
  return (
    <Router>
      <div className="pb-20"> {/* bottom navbar uchun joy qoldiramiz */}
        <Routes>
          <Route path="/" element={<BoshSahifa />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/sozlamalar" element={<Sozlamalar />} />
        </Routes>
      </div>
      
      <BottomNavbar />
    </Router>
  );
}

export default App;