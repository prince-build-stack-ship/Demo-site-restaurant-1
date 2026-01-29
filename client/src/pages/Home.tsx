import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

/**
 * Luna Bistro Homepage
 * Design: Sophisticated Minimalism with Warm Accents
 * - Dark charcoal background with warm beige typography
 * - Muted gold accents for CTAs and highlights
 * - Elegant serif headings (Playfair Display)
 * - Asymmetric layout with generous whitespace
 * - Smooth scroll-triggered animations
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"starters" | "mains" | "desserts" | "drinks">("starters");

  // Menu items organized by category
  const menuItems = {
    starters: [
      { name: "Pan-Seared Scallops", description: "With citrus beurre blanc and microgreens", price: "$18" },
      { name: "Burrata & Heirloom Tomato", description: "Aged balsamic reduction, basil oil", price: "$16" },
      { name: "Foie Gras Terrine", description: "Brioche toast, fig compote, sea salt", price: "$22" },
      { name: "Cured Salmon Carpaccio", description: "Dill cream, capers, rye crisps", price: "$17" },
    ],
    mains: [
      { name: "Dry-Aged Ribeye", description: "Truffle mashed potatoes, roasted asparagus, red wine jus", price: "$48" },
      { name: "Pan-Roasted Branzino", description: "Seasonal vegetables, lemon beurre blanc, crispy skin", price: "$38" },
      { name: "Herb-Crusted Lamb Chops", description: "Rosemary jus, creamed peas, pommes Anna", price: "$44" },
      { name: "Saffron Risotto", description: "Wild mushrooms, Parmigiano-Reggiano, truffle oil", price: "$32" },
    ],
    desserts: [
      { name: "Dark Chocolate Soufflé", description: "Raspberry coulis, crème fraîche, gold leaf", price: "$14" },
      { name: "Lemon Tart", description: "Candied zest, vanilla bean cream, meringue", price: "$12" },
      { name: "Panna Cotta", description: "Passion fruit gel, edible flowers, almond tuile", price: "$11" },
      { name: "Crème Brûlée", description: "Madagascar vanilla, caramelized sugar crust", price: "$10" },
    ],
    drinks: [
      { name: "Signature Martini", description: "Premium vodka, dry vermouth, twist", price: "$16" },
      { name: "Old Fashioned", description: "Bourbon, bitters, sugar, orange peel", price: "$14" },
      { name: "Espresso Martini", description: "Vodka, Kahlúa, fresh espresso", price: "$15" },
      { name: "House Wine Selection", description: "Curated by our sommelier", price: "$12-18" },
    ],
  };

  const currentMenu = menuItems[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif tracking-tight text-accent">Luna</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
            <a href="#reserve" className="hover:text-accent transition-colors">Reserve</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Reserve Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-ambiance.jpg"
            alt="Luna Bistro dining experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 text-white leading-tight">
            Where Flavor Meets Atmosphere
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience chef-crafted cuisine in an intimate setting designed for unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base">
              View Menu
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base">
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 animate-fade-in-up">
              <div className="text-4xl font-serif font-bold text-accent">✓</div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Fresh Ingredients</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Sourced daily from local farmers and sustainable suppliers. Every ingredient is selected for quality and flavor.
              </p>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-serif font-bold text-accent">✓</div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Chef-Crafted</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Our executive chef brings 20+ years of culinary expertise, creating innovative dishes that honor tradition.
              </p>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-serif font-bold text-accent">✓</div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Intimate Ambiance</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Thoughtfully designed spaces with warm lighting and curated music create the perfect backdrop for every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">Our Menu</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-border pb-4 sm:pb-6 overflow-x-auto">
            {(["starters", "mains", "desserts", "drinks"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base sm:text-lg font-serif capitalize pb-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-400 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {currentMenu.map((item, idx) => (
              <div key={idx} className="pb-6 sm:pb-8 border-b border-border/50 last:border-b-0 animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="text-lg sm:text-xl font-serif font-bold">{item.name}</h4>
                  <span className="text-accent font-serif text-base sm:text-lg flex-shrink-0">{item.price}</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Seasonal menu changes monthly. Ask your server about today's specials.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">About Luna Bistro</h2>
              <div className="w-16 h-1 bg-accent mb-6 sm:mb-8"></div>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Founded in 2018, Luna Bistro emerged from a vision to create a sanctuary for food lovers seeking authentic culinary excellence. Our name reflects the restaurant's commitment to creating magical moments—under the glow of warm lighting and surrounded by like-minded diners.
              </p>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Chef Marcus Chen leads our kitchen with a philosophy rooted in respect for ingredients and technique. Each dish tells a story of sourcing, preparation, and passion. We believe that exceptional food, paired with genuine hospitality, creates memories that last a lifetime.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Whether you're celebrating a milestone or simply seeking an exceptional meal, Luna Bistro welcomes you to our table.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/images/chef-craft.jpg"
                alt="Chef Marcus Chen at work"
                className="w-full h-full object-cover hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">Gallery</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="relative h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/images/hero-food.jpg"
                alt="Signature dish plating"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/images/menu-showcase.jpg"
                alt="Menu showcase"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-16 sm:py-24 md:py-32 bg-background border-b border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">Reserve Your Table</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <Card className="bg-card border-border p-6 sm:p-8 md:p-12 animate-fade-in-up">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Guests</label>
                  <select className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  placeholder="Allergies, dietary preferences, or special occasions..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm"
                />
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-10 sm:h-12 text-sm sm:text-base font-medium">
                Reserve Table
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact & Footer */}
      <section className="bg-card border-t border-border py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-12">
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0" />
                Location
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                428 Urban Avenue<br />
                Downtown District<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0" />
                Contact
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Phone: (212) 555-0123<br />
                Email: hello@lunabistro.com<br />
                Reservations: reserve@lunabistro.com
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0" />
                Hours
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Tue–Thu: 5pm–11pm<br />
                Fri–Sat: 5pm–12am<br />
                Sun: 5pm–10pm<br />
                Closed Mondays
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © 2024 Luna Bistro. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
