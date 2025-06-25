
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
      title: "Ethereal Landscape",
      price: 450,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      category: "landscapes",
      description: "A dreamy landscape capturing the essence of tranquility"
    },
    {
      id: 2,
      title: "Urban Sketches",
      price: 320,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "urban",
      description: "Dynamic cityscapes with bold strokes and vivid details"
    },
    {
      id: 3,
      title: "Abstract Emotions",
      price: 380,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      category: "abstract",
      description: "Emotional expression through abstract forms and colors"
    },
    {
      id: 4,
      title: "Portrait Study",
      price: 520,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      category: "portraits",
      description: "Intimate portrait capturing the soul of the subject"
    },
    {
      id: 5,
      title: "Nature's Harmony",
      price: 280,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      category: "nature",
      description: "Delicate botanical illustrations with intricate details"
    },
    {
      id: 6,
      title: "Digital Dreams",
      price: 350,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
      category: "digital",
      description: "Modern digital art blending traditional techniques"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'urban', name: 'Urban' },
    { id: 'nature', name: 'Nature' },
    { id: 'digital', name: 'Digital' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? featuredArtworks 
    : featuredArtworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              ArtistryStudio
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="hover:text-slate-600 transition-colors">Gallery</a>
              <a href="#about" className="hover:text-slate-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-slate-600 transition-colors">Contact</a>
              <Button variant="outline" className="bg-white/50 hover:bg-white">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Artistry in Every Stroke
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Discover a collection of original drawings that capture emotions, moments, and dreams. 
              Each piece is carefully crafted with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                <Eye className="w-5 h-5 mr-2" />
                Explore Gallery
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 px-8 py-3">
                <Heart className="w-5 h-5 mr-2" />
                View Featured
              </Button>
            </div>
          </div>

          {/* Featured Artwork Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop" 
                alt="Featured Artwork" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">Latest Creation</h3>
                <p className="text-white/90">Ethereal Landscape - $450</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-4 border-slate-300 pl-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Where Art Meets Soul
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Each drawing is a journey into the depths of creativity, where every line tells a story 
                  and every shade conveys emotion. My work spans from detailed portraits to abstract 
                  expressions, all created with traditional techniques and modern vision.
                </p>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-white/50">Original Artwork</Badge>
                  <Badge variant="outline" className="bg-white/50">Signed & Numbered</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Gallery Collection</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore my diverse portfolio of original drawings, each piece unique and available for purchase.
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
                    ? "bg-slate-900 text-white" 
                    : "bg-white/70 hover:bg-white border-slate-200"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-slate-200/50">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">{artwork.title}</h3>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      ${artwork.price}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-4 line-clamp-2">{artwork.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-slate-900 hover:bg-slate-800">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Purchase
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
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
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About the Artist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                With over a decade of experience in fine arts, I specialize in creating original drawings 
                that capture the essence of my subjects through careful observation and skilled technique.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My work has been featured in galleries across the country, and I'm passionate about 
                sharing my art with collectors who appreciate the beauty of traditional drawing methods.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                alt="Artist at work"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in commissioning a piece or have questions about my work? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Commission Info
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            ArtistryStudio
          </div>
          <p className="text-slate-400 mb-4">
            © 2024 ArtistryStudio. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
