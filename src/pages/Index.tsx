
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart, Mail, Instagram, Twitter } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredArtworks = [
    {
      id: 1,
      title: "Divine Shiva - Cosmic Dance",
      price: 450,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      category: "shiva",
      description: "An explosion of colors capturing Lord Shiva's cosmic dance, blending tradition with abstract expression"
    },
    {
      id: 2,
      title: "Krishna's Divine Play",
      price: 520,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "krishna",
      description: "Vibrant colored pencil artwork depicting Krishna's divine leela with modern abstract elements"
    },
    {
      id: 3,
      title: "Hanuman's Strength",
      price: 380,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      category: "hanuman",
      description: "Powerful portrayal of Hanuman's devotion through colorful abstract forms and dynamic energy"
    },
    {
      id: 4,
      title: "Mahavir's Enlightenment",
      price: 420,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      category: "mahavir",
      description: "Serene yet vibrant depiction of Lord Mahavir's spiritual journey in colored pencil"
    },
    {
      id: 5,
      title: "Ganesha's Blessings",
      price: 480,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      category: "shiva",
      description: "Colorful explosion of divine energy surrounding Lord Ganesha in abstract styled devotion"
    },
    {
      id: 6,
      title: "Krishna's Radha Love",
      price: 550,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
      category: "krishna",
      description: "Romantic divine love portrayed through vibrant colored pencil strokes and abstract forms"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'shiva', name: 'Shiva' },
    { id: 'krishna', name: 'Krishna' },
    { id: 'hanuman', name: 'Hanuman' },
    { id: 'mahavir', name: 'Mahavir' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? featuredArtworks 
    : featuredArtworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
              Gayathri Sriram Art
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="text-amber-800 hover:text-orange-700 transition-colors">Gallery</a>
              <a href="#about" className="text-amber-800 hover:text-orange-700 transition-colors">About</a>
              <a href="#contact" className="text-amber-800 hover:text-orange-700 transition-colors">Contact</a>
              <Button variant="outline" className="bg-stone-100/70 hover:bg-stone-200 border-amber-300 text-amber-800">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-red-700 bg-clip-text text-transparent">
              Divine Art in Color
            </h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto mb-8">
              Blending tradition, devotion, and creativity in my own unique visual language. 
              Vibrant colored pencil drawings of Hindu deities - an explosion of color and spiritual energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-stone-50 px-8 py-3">
                <Eye className="w-5 h-5 mr-2" />
                Explore Divine Gallery
              </Button>
              <Button size="lg" variant="outline" className="border-amber-400 hover:bg-amber-50 text-amber-800 px-8 py-3">
                <Heart className="w-5 h-5 mr-2" />
                View Sacred Art
              </Button>
            </div>
          </div>

          {/* Featured Artwork Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop" 
                alt="Featured Divine Artwork" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-stone-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">Latest Creation</h3>
                <p className="text-stone-200">Divine Shiva - Cosmic Dance - $450</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-4 border-amber-400 pl-6">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Tradition Meets Modern Expression
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed mb-6">
                  My colored pencil drawings of Hindu deities are an explosion of color and devotion. 
                  Each piece captures the divine essence through vibrant abstract forms, blending ancient 
                  spirituality with contemporary artistic expression. Every stroke carries deep reverence 
                  and creative passion.
                </p>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-stone-100/70 border-amber-300 text-amber-800">Original Colored Pencil</Badge>
                  <Badge variant="outline" className="bg-stone-100/70 border-amber-300 text-amber-800">Signed & Blessed</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Sacred Art Collection</h2>
            <p className="text-amber-800 text-lg max-w-2xl mx-auto">
              Explore my divine portfolio of Hindu deity drawings - each piece a vibrant explosion of color, devotion, and artistic expression.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? "bg-amber-800 text-stone-50 hover:bg-amber-900" 
                    : "bg-stone-100/70 hover:bg-stone-200 border-amber-300 text-amber-800"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-stone-50/80 backdrop-blur-sm border-amber-200/50">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-stone-100/90 hover:bg-stone-200 text-amber-800">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-amber-900">{artwork.title}</h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      ${artwork.price}
                    </Badge>
                  </div>
                  <p className="text-amber-700 mb-4 line-clamp-2">{artwork.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber-800 hover:bg-amber-900 text-stone-50">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Acquire Art
                    </Button>
                    <Button variant="outline" size="sm" className="border-amber-300 hover:bg-amber-50 text-amber-800">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">About Gayathri Sriram</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-amber-800 leading-relaxed">
                I am Gayathri Sriram, and my art is a spiritual journey expressed through vibrant colored pencils. 
                My drawings of Hindu deities are an explosion of color and devotion - each piece blending tradition 
                with my own unique creative vision.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Through my work, I seek to capture the divine essence of our beloved deities while expressing 
                the joy and energy I feel in their presence. Every stroke is a prayer, every color a celebration 
                of the sacred.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="outline" size="sm" className="border-amber-400 hover:bg-amber-50 text-amber-800">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Journey
                </Button>
                <Button variant="outline" size="sm" className="border-amber-400 hover:bg-amber-50 text-amber-800">
                  <Twitter className="w-4 h-4 mr-2" />
                  Divine Updates
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                alt="Gayathri Sriram creating divine art"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-amber-800 to-orange-800 text-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Connect with Divine Art</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Interested in commissioning a divine piece or have questions about my sacred art? 
            I'd be honored to create something meaningful for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-stone-50 text-amber-800 hover:bg-stone-100">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-stone-50 text-stone-50 hover:bg-amber-700">
              Commission Info
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-stone-50 to-amber-200 bg-clip-text text-transparent">
            Gayathri Sriram Art
          </div>
          <p className="text-amber-200 mb-4">
            © 2024 Gayathri Sriram. All divine creations blessed with love.
          </p>
          <div className="flex justify-center space-x-6 text-amber-200">
            <a href="#" className="hover:text-stone-50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-50 transition-colors">Sacred Shipping</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
