// Chatbot knowledge base for Kabo Billiards and billiards industry
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatbotResponse {
  message: string;
  suggestions?: string[];
}

// Knowledge base for billiards industry and Kabo Billiards
const knowledgeBase = {
  // Company Information
  company: {
    name: "Kabo Billiards",
    location: "Harare, Zimbabwe",
    address: "8406 Stortford Road, Tywald Plots, Harare",
    phone: "+263 77 851 9223",
    email: "kabobilliards@gmail.com",
    hours: "Monday-Friday: 9:00-18:00, Saturday: 10:00-16:00",
    founder: "Brian Kaboti",
    team: ["Brian Kaboti (Founder & CEO)", "Maxine Kaboti (Designer)", "Maison Kaboti (Technical Director)"],
    services: [
      "Pool table sales and installation",
      "Snooker table sales and installation", 
      "Table tennis equipment",
      "Foosball tables",
      "Game room design",
      "Professional installation services",
      "Equipment maintenance and repair"
    ]
  },

  // Product Categories
  products: {
    pool: {
      name: "Pool Tables",
      brands: ["Brunswick"],
      description: "Professional and recreational pool tables for every skill level",
      sizes: ["7ft", "8ft", "9ft"],
      features: ["Premium slate playing surface", "Professional cushions", "Tournament-grade cloth"]
    },
    snooker: {
      name: "Snooker Tables",
      description: "Tournament-grade snooker tables for serious players",
      sizes: ["10ft", "12ft"],
      features: ["Full-size tournament specifications", "Premium Welsh slate", "Professional pocket design"]
    },
    tableTennis: {
      name: "Table Tennis",
      brands: ["Butterfly"],
      description: "High-quality table tennis tables for recreation and competition",
      features: ["Tournament-approved surfaces", "Adjustable height", "Weatherproof options"]
    },
    foosball: {
      name: "Foosball Tables",
      brands: ["Tornado"],
      description: "Premium foosball tables for entertainment and competition",
      features: ["Professional tournament rods", "Counterbalanced players", "Adjustable leg levelers"]
    }
  },

  // Billiards Industry Knowledge
  industry: {
    poolRules: {
      "8-ball": "Most popular pool game. Players must pocket their group (stripes or solids) then the 8-ball.",
      "9-ball": "Players must hit the lowest numbered ball first. Winner pockets the 9-ball.",
      "straight pool": "Players call their shots and can shoot any ball. First to reach target score wins."
    },
    equipment: {
      cues: "Pool cues typically 57-59 inches long, weight 18-21 oz. Tips should be properly maintained.",
      balls: "Standard pool balls are 2.25 inches diameter. Snooker balls are smaller at 2.07 inches.",
      cloth: "Professional tables use worsted wool cloth. Speed and accuracy depend on cloth quality.",
      chalk: "Essential for proper cue tip grip. Apply before every shot for best results."
    },
    maintenance: {
      table: "Brush regularly, keep covered when not in use, maintain proper humidity levels.",
      cloth: "Brush in one direction, avoid spills, replace when worn or damaged.",
      cushions: "Check for proper bounce, replace when they become hard or unresponsive."
    }
  }
};

// Intent recognition patterns
const intents = {
  greeting: /^(hi|hello|hey|good morning|good afternoon|good evening)/i,
  company: /(kabo|company|business|about|who are you|contact|location|address|phone|hours)/i,
  products: /(pool table|snooker|table tennis|foosball|equipment|what do you sell|products)/i,
  prices: /(price|cost|how much|expensive|cheap|budget)/i,
  installation: /(install|installation|setup|delivery|service)/i,
  maintenance: /(maintain|maintenance|repair|fix|clean|care)/i,
  rules: /(rules|how to play|game rules|8-ball|9-ball|snooker rules)/i,
  equipment: /(cue|balls|chalk|cloth|accessories)/i,
  sizes: /(size|dimensions|how big|measurements|space)/i,
  brands: /(brunswick|butterfly|tornado|brand|manufacturer)/i,
  goodbye: /(bye|goodbye|thanks|thank you|see you)/i
};

export function generateChatbotResponse(userMessage: string): ChatbotResponse {
  const message = userMessage.toLowerCase().trim();

  // Greeting
  if (intents.greeting.test(message)) {
    return {
      message: "Hello! Welcome to Kabo Billiards! I'm here to help you with any questions about billiards equipment, our products, or the game itself. How can I assist you today?",
      suggestions: ["Tell me about your products", "What are your prices?", "How do I contact you?", "Pool table sizes"]
    };
  }

  // Company information
  if (intents.company.test(message)) {
    return {
      message: `Kabo Billiards is Zimbabwe's premier billiards equipment supplier, founded by Brian Kaboti. We're located at ${knowledgeBase.company.address} in Harare. You can reach us at ${knowledgeBase.company.phone} or ${knowledgeBase.company.email}. Our hours are ${knowledgeBase.company.hours}. We specialize in ${knowledgeBase.company.services.join(', ')}.`,
      suggestions: ["View our products", "Installation services", "Contact information"]
    };
  }

  // Products
  if (intents.products.test(message)) {
    if (message.includes('pool')) {
      return {
        message: `Our pool tables include ${knowledgeBase.products.pool.brands.join(', ')} brands. We offer ${knowledgeBase.products.pool.sizes.join(', ')} sizes with features like ${knowledgeBase.products.pool.features.join(', ')}. Perfect for both recreational and professional use.`,
        suggestions: ["Pool table prices", "Installation service", "Pool table maintenance"]
      };
    }
    if (message.includes('snooker')) {
      return {
        message: `We offer professional snooker tables in ${knowledgeBase.products.snooker.sizes.join(' and ')} sizes. Features include ${knowledgeBase.products.snooker.features.join(', ')}. Perfect for serious players and tournaments.`,
        suggestions: ["Snooker rules", "Table maintenance", "Contact for pricing"]
      };
    }
    if (message.includes('table tennis') || message.includes('ping pong')) {
      return {
        message: `Our table tennis selection includes ${knowledgeBase.products.tableTennis.brands.join(', ')} brand tables. Features: ${knowledgeBase.products.tableTennis.features.join(', ')}. Great for both indoor and outdoor use.`,
        suggestions: ["Table tennis rules", "Equipment accessories", "Installation"]
      };
    }
    if (message.includes('foosball') || message.includes('soccer table')) {
      return {
        message: `We carry ${knowledgeBase.products.foosball.brands.join(', ')} foosball tables with ${knowledgeBase.products.foosball.features.join(', ')}. Perfect for game rooms and entertainment areas.`,
        suggestions: ["Game room design", "Foosball accessories", "Contact us"]
      };
    }
    return {
      message: "We offer a complete range of billiards equipment: Pool tables (Brunswick), Snooker tables, Table Tennis (Butterfly), and Foosball tables (Tornado). We also provide game room design services and professional installation.",
      suggestions: ["Pool tables", "Snooker tables", "Table tennis", "Foosball tables"]
    };
  }

  // Prices
  if (intents.prices.test(message)) {
    return {
      message: "Our prices vary depending on the specific product, size, and features you choose. We offer competitive pricing on all our equipment. For detailed pricing information, please contact us at +263 77 851 9223 or kabobilliards@gmail.com. We'd be happy to provide a personalized quote based on your needs.",
      suggestions: ["Contact us", "View products", "Installation costs"]
    };
  }

  // Installation
  if (intents.installation.test(message)) {
    return {
      message: "We provide professional installation services for all our equipment. Our experienced team ensures proper setup, leveling, and testing. Installation includes delivery, assembly, and final adjustments. Contact us for installation scheduling and pricing.",
      suggestions: ["Contact for installation", "Maintenance services", "Game room design"]
    };
  }

  // Rules
  if (intents.rules.test(message)) {
    if (message.includes('8-ball') || message.includes('eight ball')) {
      return {
        message: knowledgeBase.industry.poolRules["8-ball"] + " It's the most popular pool game worldwide and great for beginners.",
        suggestions: ["9-ball rules", "Pool equipment", "Cue selection tips"]
      };
    }
    if (message.includes('9-ball') || message.includes('nine ball')) {
      return {
        message: knowledgeBase.industry.poolRules["9-ball"] + " It's a faster-paced game that requires more skill and strategy.",
        suggestions: ["8-ball rules", "Straight pool rules", "Pool table sizes"]
      };
    }
    if (message.includes('snooker')) {
      return {
        message: "Snooker is played with 15 red balls (1 point each) and 6 colored balls (yellow=2, green=3, brown=4, blue=5, pink=6, black=7). Players alternate between potting reds and colors. It's a complex and strategic game.",
        suggestions: ["Snooker tables", "Snooker equipment", "Professional coaching"]
      };
    }
    return {
      message: "I can help you with rules for various games: 8-ball pool (most popular), 9-ball pool (fast-paced), straight pool (call your shots), and snooker (complex strategy game). Which game would you like to know about?",
      suggestions: ["8-ball rules", "9-ball rules", "Snooker rules"]
    };
  }

  // Equipment
  if (intents.equipment.test(message)) {
    if (message.includes('cue')) {
      return {
        message: knowledgeBase.industry.equipment.cues + " We can help you select the right cue for your playing style and skill level.",
        suggestions: ["Cue accessories", "Pool balls", "Chalk types"]
      };
    }
    if (message.includes('balls')) {
      return {
        message: knowledgeBase.industry.equipment.balls + " We stock high-quality ball sets for all games.",
        suggestions: ["Pool cues", "Table cloth", "Game accessories"]
      };
    }
    return {
      message: "We offer a complete range of billiards accessories: professional cues, ball sets, chalk, table brushes, covers, and lighting. All equipment meets tournament standards.",
      suggestions: ["Cue selection", "Ball sets", "Table maintenance"]
    };
  }

  // Maintenance
  if (intents.maintenance.test(message)) {
    return {
      message: `Table maintenance tips: ${knowledgeBase.industry.maintenance.table} ${knowledgeBase.industry.maintenance.cloth} We also offer professional maintenance services.`,
      suggestions: ["Maintenance services", "Table covers", "Professional cleaning"]
    };
  }

  // Sizes
  if (intents.sizes.test(message)) {
    return {
      message: "Pool tables: 7ft (bar size), 8ft (home standard), 9ft (tournament). Snooker tables: 10ft and 12ft (full tournament size). Table tennis: standard 9ft x 5ft. We can help you choose the right size for your space.",
      suggestions: ["Room size requirements", "Installation service", "Space planning"]
    };
  }

  // Brands
  if (intents.brands.test(message)) {
    return {
      message: "We carry premium brands: Brunswick (pool tables) - American craftsmanship and quality, Butterfly (table tennis) - Japanese precision and innovation, Tornado (foosball) - Tournament-grade construction. All brands are industry leaders.",
      suggestions: ["Brunswick pool tables", "Butterfly table tennis", "Tornado foosball"]
    };
  }

  // Goodbye
  if (intents.goodbye.test(message)) {
    return {
      message: "Thank you for chatting with Kabo Billiards! Feel free to contact us anytime at +263 77 851 9223 or visit us at 8406 Stortford Road, Harare. We look forward to helping you create the perfect game room!",
      suggestions: ["Contact information", "Visit our showroom", "Browse products"]
    };
  }

  // Default response
  return {
    message: "I'd be happy to help you with information about billiards equipment, our products, game rules, or Kabo Billiards services. Could you please be more specific about what you'd like to know?",
    suggestions: ["Our products", "Company information", "Game rules", "Contact us"]
  };
}
