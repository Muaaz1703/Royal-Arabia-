import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  Wine, 
  Sparkles, 
  Calendar, 
  Users, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Send,
  Star,
  Award,
  Coffee,
  ArrowRight
} from 'lucide-react';

// --- Shared Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/95 py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-tighter gold-text-gradient">ROYAL ARABIA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`nav-link ${location.pathname === link.href ? 'text-gold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservations" className="btn-gold py-2 px-6">Book Now</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/98 border-t border-gold/10 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`nav-link text-lg ${location.pathname === link.href ? 'text-gold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/reservations" className="btn-gold w-full text-center">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-20 pb-10 border-t border-gold/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold gold-text-gradient mb-6">ROYAL ARABIA</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Experience the pinnacle of multi-cuisine dining where every dish is a masterpiece and every guest is treated like royalty.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/royalarabiamulticuisine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <a 
                href="https://maps.app.goo.gl/i1kb7iv6nM9a3YAKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                1, Be, Crown Dairy SMC, Nanavat Main Rd, Nanavat, Surat, Gujarat 395003
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>097262 94209</span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-gold shrink-0" />
              <span>Open · Closes 11:30 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on special events and new menu items.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-dark border border-gold/20 p-3 text-sm w-full focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-dark px-4 hover:bg-gold-dark transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gold/10 text-center text-gray-500 text-xs uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Royal Arabia Multi Cuisine Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
};

const PageHeader = ({ title, subtitle, image }) => (
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-dark/70"></div>
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif mb-4"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gold italic text-xl"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

// --- Pages ---

const HomePage = () => (
  <>
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Fine Dining" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold italic text-2xl md:text-3xl font-serif mb-4"
        >
          Welcome to
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight"
        >
          Fine Dining Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Savor the flavors of gourmet multi-cuisine in an elegant ambiance designed for royalty.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Link to="/reservations" className="btn-gold">Book a Table</Link>
        </motion.div>
      </div>
    </section>

    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Exquisite Cuisine</h2>
        <span className="section-subtitle">A Culinary Journey of Delight</span>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} className="group relative overflow-hidden rounded-sm">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" alt="Menu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-serif mb-4">Discover Our Menu</h3>
              <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
              <Link to="/menu" className="btn-gold py-2 px-6 inline-block">View Menu</Link>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="group relative overflow-hidden rounded-sm">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Specialties" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-serif mb-4">Chef's Specialties</h3>
              <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
              <Link to="/menu" className="btn-gold py-2 px-6 inline-block">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Atmosphere" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-dark/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-right flex flex-col items-end">
        <h2 className="text-4xl md:text-6xl font-serif mb-4">Sophisticated Atmosphere</h2>
        <p className="text-gold italic text-xl mb-8">Dine in Style & Comfort</p>
        <Link to="/gallery" className="btn-gold">View Gallery</Link>
      </div>
    </section>
  </>
);

const MenuPage = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls with black truffle and mozzarella." },
        { name: "Wagyu Beef Carpaccio", price: "$24", desc: "Thinly sliced wagyu with capers, arugula, and parmesan." },
        { name: "Spicy Tuna Tartare", price: "$22", desc: "Fresh tuna with avocado, soy-ginger dressing, and sesame." },
        { name: "Burrata & Heirloom Tomato", price: "$19", desc: "Creamy burrata with balsamic glaze and fresh basil." }
      ]
    },
    {
      name: "Main Course",
      items: [
        { name: "Pan-Seared Sea Bass", price: "$42", desc: "Wild sea bass with lemon-butter sauce and seasonal greens." },
        { name: "Herb-Crusted Lamb Chops", price: "$48", desc: "Tender lamb chops with mint pesto and roasted potatoes." },
        { name: "Black Truffle Risotto", price: "$36", desc: "Creamy arborio rice with fresh black truffle and parmesan." },
        { name: "Filet Mignon", price: "$55", desc: "8oz prime filet with red wine reduction and asparagus." }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", price: "$14", desc: "Warm chocolate cake with a molten center and vanilla bean ice cream." },
        { name: "Classic Tiramisu", price: "$12", desc: "Espresso-soaked ladyfingers with mascarpone cream." },
        { name: "Saffron Panna Cotta", price: "$13", desc: "Silky panna cotta with honey-saffron glaze and pistachios." }
      ]
    }
  ];

  return (
    <div className="bg-dark">
      <PageHeader 
        title="Our Menu" 
        subtitle="A Symphony of Flavors" 
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <section className="py-24 px-6 max-w-5xl mx-auto">
        {menuCategories.map((category, idx) => (
          <div key={category.name} className={`mb-20 ${idx !== 0 ? 'mt-20' : ''}`}>
            <h2 className="text-3xl font-serif text-gold text-center mb-12 uppercase tracking-widest">{category.name}</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {category.items.map((item) => (
                <div key={item.name} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-dotted border-gold/30 mx-4"></div>
                    <span className="text-gold font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-20">
          <p className="text-gray-400 italic mb-8">Please inform your server of any allergies or dietary requirements.</p>
          <Link to="/reservations" className="btn-gold">Book a Table</Link>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="bg-dark">
    <PageHeader 
      title="About Us" 
      subtitle="The Story of Royal Arabia" 
      image="https://images.unsplash.com/photo-1550966842-2849a220276c?q=80&w=2071&auto=format&fit=crop" 
    />
    
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl font-serif mb-6">Our Philosophy</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Founded in 2010, Royal Arabia was born from a passion for authentic flavors and the art of hospitality. We believe that dining is not just about food; it's an experience that engages all the senses.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our culinary team, led by world-renowned chefs, meticulously sources the finest local and international ingredients to create a menu that celebrates diversity while maintaining the highest standards of gourmet excellence.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" alt="Chef" className="rounded-sm shadow-2xl" referrerPolicy="no-referrer" />
          <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
            <p className="text-gold font-serif text-xl">Chef Marco Rossi</p>
            <p className="text-gray-400 text-sm">Executive Chef</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <Award className="text-gold mx-auto" size={48} />
          <h3 className="text-2xl font-serif">Michelin Star</h3>
          <p className="text-gray-400 text-sm">Awarded for our commitment to exceptional quality and innovation.</p>
        </div>
        <div className="space-y-4">
          <Star className="text-gold mx-auto" size={48} />
          <h3 className="text-2xl font-serif">Best Service</h3>
          <p className="text-gray-400 text-sm">Voted best hospitality experience in the region for three consecutive years.</p>
        </div>
        <div className="space-y-4">
          <Coffee className="text-gold mx-auto" size={48} />
          <h3 className="text-2xl font-serif">Premium Selection</h3>
          <p className="text-gray-400 text-sm">A curated collection of the world's finest wines and spirits.</p>
        </div>
      </div>
    </section>
  </div>
);

const GalleryPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1544025162-d76694265947",
    "https://images.unsplash.com/photo-1550966842-2849a220276c",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2"
  ];

  return (
    <div className="bg-dark">
      <PageHeader 
        title="Gallery" 
        subtitle="Visual Feast" 
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src={`${img}?q=80&w=800&auto=format&fit=crop`} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Sparkles className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => (
  <div className="bg-dark">
    <PageHeader 
      title="Contact Us" 
      subtitle="We'd Love to Hear From You" 
      image="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop" 
    />
    
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold">Name</label>
                <input type="text" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold">Email</label>
                <input type="email" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Subject</label>
              <input type="text" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Message</label>
              <textarea rows={5} className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold"></textarea>
            </div>
            <button className="btn-gold w-full flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
          <div>
            <h2 className="text-3xl font-serif mb-8">Location & Info</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Address</h4>
                  <a 
                    href="https://maps.app.goo.gl/i1kb7iv6nM9a3YAKA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    1, Be, Crown Dairy SMC, Nanavat Main Rd, Nanavat, Surat, Gujarat 395003
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Phone</h4>
                  <p className="text-gray-400 text-sm">097262 94209</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Email</h4>
                  <p className="text-gray-400 text-sm">info@royalarabia.com</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/i1kb7iv6nM9a3YAKA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-64 bg-dark-lighter border border-gold/10 rounded-sm overflow-hidden flex items-center justify-center relative group block"
          >
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <MapPin size={48} className="text-gold mb-4" />
              <p className="text-gold font-serif text-xl">Find Us on the Map</p>
              <p className="text-gray-400 text-sm mt-2">Click to view location in Google Maps</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  </div>
);

const ReservationsPage = () => (
  <div className="bg-dark">
    <PageHeader 
      title="Reservations" 
      subtitle="Secure Your Royal Table" 
      image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
    />
    
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-4">Book Your Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether it's a romantic dinner, a business meeting, or a celebration with friends, we ensure every detail is perfect.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12">
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Full Name</label>
              <input type="text" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Phone Number</label>
              <input type="tel" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Date</label>
              <input type="date" className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Time</label>
              <select className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold appearance-none">
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold">Guests</label>
              <select className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold appearance-none">
                <option>2 Persons</option>
                <option>4 Persons</option>
                <option>6 Persons</option>
                <option>8+ Persons</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gold">Special Requests</label>
            <textarea rows={4} className="w-full bg-dark-lighter border border-gold/20 p-3 text-sm focus:outline-none focus:border-gold" placeholder="Birthdays, Anniversaries, Dietary restrictions..."></textarea>
          </div>

          <button type="submit" className="btn-gold w-full py-4 text-lg">
            Confirm Reservation
          </button>
        </form>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="glass-card p-6 flex gap-4 items-start">
          <Phone className="text-gold shrink-0" size={24} />
          <div>
            <h4 className="font-serif text-lg mb-1">Call for Large Groups</h4>
            <p className="text-gray-400 text-sm">For parties of 10 or more, please call us directly to discuss special arrangements.</p>
          </div>
        </div>
        <div className="glass-card p-6 flex gap-4 items-start">
          <Award className="text-gold shrink-0" size={24} />
          <div>
            <h4 className="font-serif text-lg mb-1">Dress Code</h4>
            <p className="text-gray-400 text-sm">We maintain a smart casual dress code to ensure a refined atmosphere for all guests.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
