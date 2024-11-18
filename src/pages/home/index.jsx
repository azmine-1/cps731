import React from 'react';
import * as Icons from 'lucide-react';
import Pizza from '../../assets/pizza.jpg';
import Tiramisu from '../../assets/tiramisu.jpg';
import Curry from '../../assets/greencurry.jpg';
import logo from '../../assets/logo.png';

const LandingPage = () => {
  const { Search, ChefHat, Clock, Users, ArrowRight, Heart } = Icons;
  
  const featuredRecipes = [
    {
      title: "Homemade Pizza Margherita",
      chef: "Maria Garcia",
      time: "45 mins",
      likes: 1240,
      difficulty: "Medium",
      img: Pizza
    },
    {
      title: "Thai Green Curry",
      chef: "Alex Chen",
      time: "30 mins",
      likes: 892,
      difficulty: "Easy",
      img: Curry
    },
    {
      title: "Classic Tiramisu",
      chef: "Sophie Martin",
      time: "1 hour",
      likes: 1567,
      difficulty: "Hard",
      img: Tiramisu

    }
  ];

  return (
    <div className="min-h-screen bg-white">
         <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-indigo-600">RecipeShare</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#recipes" className="text-gray-600 hover:text-indigo-600">Recipes</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
          {/* Sign In Button */}
          <button className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Sign In
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Share Your Culinary</span>
              <span className="block text-indigo-600">Masterpieces</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our community of passionate home chefs. Share recipes, discover new dishes, and connect with food lovers worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="mt-10 max-w-xl mx-auto">
              <div className="flex items-center bg-white rounded-lg shadow-md p-2">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  className="flex-1 p-2 pl-4 focus:outline-none"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <ChefHat className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Share Your Recipes</h3>
              <p className="mt-2 text-gray-500">Upload and share your favorite recipes with our growing community.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Connect with Chefs</h3>
              <p className="mt-2 text-gray-500">Follow other chefs and get inspired by their culinary creations.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Save Favorites</h3>
              <p className="mt-2 text-gray-500">Build your collection of favorite recipes from around the world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Recipes</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src={recipe.img}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{recipe.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <ChefHat className="h-4 w-4 mr-2" />
                    <span>{recipe.chef}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{recipe.time}</span>
                    <Heart className="h-4 w-4 ml-4 mr-2" />
                    <span>{recipe.likes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{recipe.difficulty}</span>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                      View Recipe <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to start sharing your recipes?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join our community today and showcase your culinary creativity.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Sign Up Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;