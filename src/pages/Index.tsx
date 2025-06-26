import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart, Mail, Instagram, Twitter, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(0);

  // Hero carousel images
  const heroImages = [
    { src: "/images/IMG_0423_Original.JPG", title: "Baby Krishna - Divine Innocence", price: "$750" },
    { src: "/images/IMG_1989.JPG", title: "Hanuman's Devotion", price: "$850" },
    { src: "/images/IMG_9171_Original.JPG", title: "Lord Shiva - Cosmic Serenity", price: "$800" },
    { src: "/images/Mahavir.JPG", title: "Lord Mahavir - Sacred Peace", price: "$780" }
  ];

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCarouselIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const featuredArtworks = [
    {
      id: 1,
      title: "Baby Krishna - Divine Innocence",
      price: 750,
      images: ["/images/IMG_0423_Original.JPG", "/images/KrishnaDrawing.JPG"],
      category: "krishna",
      description: "Enchanting colored pencil portrayal of baby Krishna with his beloved butter pot, radiating divine playfulness and innocence"
    },
    {
      id: 2,
      title: "Hanuman's Devotion",
      price: 850,
      images: ["/images/IMG_1989.JPG", "/images/IMG_9790 2.JPG"],
      category: "hanuman",
      description: "Powerful depiction of Hanuman carrying Rama and Sita in his heart, showcasing unwavering devotion through vibrant colored pencil work"
    },
    {
      id: 3,
      title: "Lord Shiva - Cosmic Serenity",
      price: 800,
      images: ["/images/IMG_9171_Original.JPG", "/images/ShivaDrawing.JPG"],
      category: "shiva",
      description: "Mesmerizing portrayal of Lord Shiva in meditative bliss, with explosive colors capturing his divine cosmic energy"
    },
    {
      id: 4,
      title: "Lord Mahavir - Sacred Peace",
      price: 780,
      images: ["/images/Mahavir.JPG", "/images/MahavirDrawing.JPG"],
      category: "mahavir",
      description: "Serene depiction of Lord Mahavir in meditation, surrounded by divine golden light, embodying peace and spiritual enlightenment"
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

  const getCurrentImageIndex = (artworkId) => {
    return currentImageIndex[artworkId] || 0;
  };

  const nextImage = (artworkId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [artworkId]: (prev[artworkId] || 0) + 1 >= totalImages ? 0 : (prev[artworkId] || 0) + 1
    }));
  };

  const prevImage = (artworkId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [artworkId]: (prev[artworkId] || 0) - 1 < 0 ? totalImages - 1 : (prev[artworkId] || 0) - 1
    }));
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextHeroImage = () => {
    setHeroCarouselIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroImage = () => {
    setHeroCarouselIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const currentHeroImage = heroImages[heroCarouselIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-200" style={{ backgroundColor: 'rgba(248, 245, 240, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">
              Gayathri Art
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="text-black hover:text-gray-700 transition-colors">Gallery</a>
              <a href="#about" className="text-black hover:text-gray-700 transition-colors">About</a>
              <a href="#contact" className="text-black hover:text-gray-700 transition-colors">Contact</a>
              <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white" style={{ backgroundColor: '#f0e6db' }}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - White Background */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Gayathri Sriram
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Experience the divine through vibrant colored pencil drawings of Hindu Gods. 
              Each piece is an explosion of color and devotion, blending tradition with my unique creative vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3" style={{ backgroundColor: '#f2ebe2' }}>
                <Heart className="w-5 h-5 mr-2" />
                View Collection
              </Button>
            </div>
          </div>

          {/* Featured Artwork Showcase with Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="relative cursor-pointer" onClick={() => openImageModal(currentHeroImage.src)}>
                <img 
                  src={currentHeroImage.src}
                  alt={currentHeroImage.title}
                  className="w-full h-[700px] object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">Divine Creation</h3>
                  <p className="text-white/90">{currentHeroImage.title} - {currentHeroImage.price}</p>
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <button
                onClick={prevHeroImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextHeroImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setHeroCarouselIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === heroCarouselIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-4 pl-6" style={{ borderColor: '#e0d4c8' }}>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Tradition, Devotion & Creativity
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  My colored pencil artwork brings Hindu deities to life through vibrant, explosive colors. 
                  Each piece captures the divine essence - from baby Krishna's playful innocence to 
                  Hanuman's unwavering devotion and Shiva's cosmic serenity. Every stroke blends 
                  traditional devotion with contemporary artistic expression.
                </p>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-black border-black" style={{ backgroundColor: '#f2ebe2' }}>Colored Pencil Art</Badge>
                  <Badge variant="outline" className="text-black border-black" style={{ backgroundColor: '#f0e6db' }}>Hand-Drawn Originals</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Medium Beige Background */}
      <section id="gallery" className="py-16 px-6" style={{ backgroundColor: '#f2ebe2' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Gallery Collection</h2>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              Discover my divine collection of Hindu Gods rendered in vibrant colored pencil, 
              each piece a colorful explosion of devotion and creativity.
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
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
                style={selectedCategory !== category.id ? { backgroundColor: '#f8f5f0' } : {}}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => {
              const currentIndex = getCurrentImageIndex(artwork.id);
              const currentImage = artwork.images[currentIndex];
              
              return (
                <Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200" style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f8f5f0' }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={currentImage}
                      alt={artwork.title}
                      className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => openImageModal(currentImage)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Carousel Navigation */}
                    {artwork.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(artwork.id, artwork.images.length);
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(artwork.id, artwork.images.length);
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {artwork.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full ${
                                imgIndex === currentIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-black">{artwork.title}</h3>
                      <Badge variant="secondary" className="text-black" style={{ backgroundColor: '#f0e6db' }}>
                        ${artwork.price}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-2">{artwork.description}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Purchase
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-black text-black hover:bg-black hover:text-white" 
                        style={{ backgroundColor: '#f2ebe2' }}
                        onClick={() => openImageModal(currentImage)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size artwork"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* About Section - Lightest Beige Background */}
      <section id="about" className="py-16 px-6" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-8">About Gayathri Sriram</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 p-8 bg-white rounded-2xl shadow-sm">
              <p className="text-lg text-gray-800 leading-relaxed">
                I am passionate about creating vibrant, abstract representations of Hindu Gods through 
                colored pencil art. My work is an explosion of colors that celebrates the divine while 
                exploring contemporary artistic expression.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Each piece I create blends traditional devotion with my unique creative vision, 
                resulting in artwork that honors sacred traditions while embracing bold, 
                modern aesthetics. My colored pencil technique brings these divine figures to life 
                through brilliant, explosive color palettes.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white" style={{ backgroundColor: '#f2ebe2' }}>
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white" style={{ backgroundColor: '#f0e6db' }}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
            <div className="relative cursor-pointer" onClick={() => openImageModal("/images/Gayathri.JPG")}>
              <img
                src="/images/Gayathri.JPG"
                alt="Gayathri Sriram - Artist"
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Connect with the Artist</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in commissioning a divine artwork or have questions about my colorful creations? 
            I'd love to share my artistic journey with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-black hover:opacity-90" style={{ backgroundColor: '#f8f5f0' }}>
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Gayathri Sriram. All divine artwork rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
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
