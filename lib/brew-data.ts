export const brewData = {
  "espresso": {
    "id": "espresso",
    "title": "Espresso Machine",
    "short_description": "High pressure brewing method producing concentrated coffee with crema and rich body.",
    "history": {
      "origin_country": "Italy",
      "invented_year": 1884,
      "inventor": "Angelo Moriondo",
      "background": "Espresso originated in Italy during the industrial era when people needed faster coffee preparation. The first espresso machine was patented by Angelo Moriondo in Turin. Later innovations improved pressure systems and extraction quality, creating the modern espresso culture known today.",
      "culture": "Espresso became the foundation of Italian coffee culture and later spread globally through specialty coffee shops and modern cafes.",
      "specialty_coffee_role": "In specialty coffee, espresso is used to highlight sweetness, balance, body, and texture while preserving the unique characteristics of the beans."
    },
    "characteristics": {
      "body": "Heavy",
      "acidity": "Medium",
      "sweetness": "Medium-High",
      "texture": "Syrupy",
      "strength": "Strong",
      "crema": true
    },
    "recommended_roast": [
      "Medium Roast",
      "Medium-Dark Roast",
      "Dark Roast"
    ],
    "recommended_beans": [
      "Brazil",
      "Sumatra",
      "Toraja",
      "Colombia"
    ],
    "equipment": [
      "Espresso Machine",
      "Portafilter",
      "Tamper",
      "Coffee Grinder",
      "Scale",
      "Shot Glass"
    ],
    "guides": [
      {
        "name": "Classic Espresso",
        "difficulty": "Intermediate",
        "coffee_dose_grams": 18,
        "yield_grams": 36,
        "brew_ratio": "1:2",
        "grind_size": "Fine",
        "water_temperature_celsius": "92-94",
        "pressure_bar": 9,
        "extraction_time_seconds": "25-30",
        "taste_profile": [
          "Chocolate",
          "Balanced",
          "Sweet"
        ],
        "steps": [
          "Preheat the espresso machine and portafilter.",
          "Grind coffee beans to fine consistency.",
          "Dose 18 grams into the portafilter.",
          "Distribute and tamp evenly.",
          "Lock the portafilter into the group head.",
          "Start extraction immediately.",
          "Stop extraction when yield reaches 36 grams."
        ],
        "tips": [
          "Use freshly roasted beans within 2-4 weeks.",
          "Ensure tamping pressure is even.",
          "Use filtered water for cleaner flavor."
        ],
        "common_mistakes": [
          "Grinding too coarse causing sour taste.",
          "Over extraction causing bitterness.",
          "Uneven tamping creating channeling."
        ],
        "notes": "Balanced espresso shot with syrupy body and moderate acidity."
      },
      {
        "name": "Bright Fruity Espresso",
        "difficulty": "Advanced",
        "coffee_dose_grams": 18,
        "yield_grams": 40,
        "brew_ratio": "1:2.2",
        "grind_size": "Fine",
        "water_temperature_celsius": "93-95",
        "pressure_bar": 9,
        "extraction_time_seconds": "28-32",
        "taste_profile": [
          "Fruity",
          "Floral",
          "Juicy"
        ],
        "steps": [
          "Use light roast specialty beans.",
          "Preheat all equipment properly.",
          "Grind slightly finer than standard espresso.",
          "Extract slowly for better clarity.",
          "Stop extraction at 40 grams output."
        ],
        "tips": [
          "Best suited for washed Ethiopian or Kenyan beans.",
          "Higher temperature helps fruity extraction."
        ],
        "common_mistakes": [
          "Using dark roast beans for fruity profile.",
          "Low temperature causing under extraction."
        ],
        "notes": "Designed to highlight acidity and fruit-forward flavor notes."
      }
    ]
  },
  "pour-over": {
    "id": "pour-over",
    "title": "Manual Brew (V60)",
    "short_description": "Hand brewing methods focused on clarity, sweetness, and flavor complexity.",
    "history": {
      "origin_country": "Germany / Japan",
      "invented_year": 1908,
      "inventor": "Melitta Bentz",
      "background": "Manual brewing became popular after Melitta Bentz invented paper coffee filters in Germany. Over time, pour-over brewing methods evolved in Japan and became an important part of specialty coffee culture.",
      "culture": "Manual brew emphasizes precision, patience, and craftsmanship. It is closely associated with specialty coffee communities worldwide.",
      "specialty_coffee_role": "Manual brew methods are widely used to showcase the unique flavor profile and origin character of specialty coffee beans."
    },
    "characteristics": {
      "body": "Light-Medium",
      "acidity": "High",
      "sweetness": "High",
      "texture": "Clean",
      "strength": "Moderate",
      "clarity": true
    },
    "recommended_roast": [
      "Light Roast",
      "Medium Roast"
    ],
    "recommended_beans": [
      "Ethiopia",
      "Kenya",
      "Gayo",
      "Kintamani"
    ],
    "equipment": [
      "Dripper",
      "Paper Filter",
      "Gooseneck Kettle",
      "Scale",
      "Coffee Grinder",
      "Server"
    ],
    "guides": [
      {
        "name": "V60 Standard",
        "difficulty": "Beginner",
        "coffee_dose_grams": 15,
        "water_ml": 240,
        "brew_ratio": "1:16",
        "grind_size": "Medium",
        "water_temperature_celsius": "92-96",
        "brew_time_minutes": "2:30-3:00",
        "taste_profile": [
          "Clean",
          "Bright",
          "Floral"
        ],
        "steps": [
          "Rinse paper filter with hot water.",
          "Add ground coffee into dripper.",
          "Bloom coffee for 30 seconds.",
          "Pour water slowly in circular motion.",
          "Maintain stable flow rate.",
          "Finish brew within 3 minutes."
        ],
        "tips": [
          "Use gooseneck kettle for better control.",
          "Freshly ground beans improve aroma."
        ],
        "common_mistakes": [
          "Pouring too aggressively.",
          "Uneven extraction due to poor pouring."
        ],
        "notes": "Produces a clean cup with delicate sweetness and bright acidity."
      }
    ]
  },
  "cold-brew": {
    "id": "cold-brew",
    "title": "Cold Brew",
    "short_description": "Slow immersion brewing using cold water for smooth and refreshing coffee.",
    "history": {
      "origin_country": "Japan",
      "invented_year": 1600,
      "background": "Cold brew methods are believed to originate from Kyoto, Japan. Traditional Kyoto-style coffee used slow dripping cold water over many hours.",
      "culture": "Cold brew became globally popular because of its smooth flavor and refreshing profile, especially in modern urban coffee culture.",
      "specialty_coffee_role": "Specialty coffee shops use cold brew to create sweeter and lower-acidity coffee beverages."
    },
    "characteristics": {
      "body": "Medium",
      "acidity": "Low",
      "sweetness": "High",
      "texture": "Smooth",
      "strength": "Moderate-Strong",
      "refreshing": true
    },
    "recommended_roast": [
      "Medium Roast",
      "Medium-Dark Roast"
    ],
    "recommended_beans": [
      "Brazil",
      "Colombia",
      "Java",
      "Flores"
    ],
    "equipment": [
      "Jar or Brewer",
      "Filter",
      "Scale",
      "Coffee Grinder"
    ],
    "guides": [
      {
        "name": "Classic Cold Brew",
        "difficulty": "Beginner",
        "coffee_dose_grams": 100,
        "water_ml": 1000,
        "brew_ratio": "1:10",
        "grind_size": "Coarse",
        "brew_time_hours": "12-18",
        "taste_profile": [
          "Smooth",
          "Chocolate",
          "Low Acidity"
        ],
        "steps": [
          "Grind coffee coarsely.",
          "Combine coffee and water in container.",
          "Stir gently until saturated.",
          "Steep for 12-18 hours.",
          "Filter coffee slowly.",
          "Serve with ice."
        ],
        "tips": [
          "Use coarse grind to reduce bitterness.",
          "Store concentrate in refrigerator."
        ],
        "common_mistakes": [
          "Grinding too fine causing muddy texture.",
          "Over steeping causing bitterness."
        ],
        "notes": "Smooth and refreshing coffee concentrate ideal for iced beverages."
      }
    ]
  },
  "french-press": {
    "id": "french-press",
    "title": "French Press",
    "short_description": "Immersion brewing method producing rich body and full flavor.",
    "history": {
      "origin_country": "France",
      "invented_year": 1929,
      "background": "French Press became popular in Europe because of its simple immersion brewing process and ability to preserve coffee oils.",
      "culture": "French Press is commonly associated with relaxed home brewing and rich-bodied coffee experiences.",
      "specialty_coffee_role": "Specialty coffee drinkers use French Press to emphasize body, sweetness, and mouthfeel."
    },
    "characteristics": {
      "body": "Heavy",
      "acidity": "Low-Medium",
      "sweetness": "Medium",
      "texture": "Rich",
      "strength": "Strong",
      "oiliness": true
    },
    "recommended_roast": [
      "Medium Roast",
      "Medium-Dark Roast"
    ],
    "recommended_beans": [
      "Sumatra",
      "Toraja",
      "Brazil",
      "Mandheling"
    ],
    "equipment": [
      "French Press",
      "Scale",
      "Coffee Grinder",
      "Kettle"
    ],
    "guides": [
      {
        "name": "Classic French Press",
        "difficulty": "Beginner",
        "coffee_dose_grams": 30,
        "water_ml": 500,
        "brew_ratio": "1:16.5",
        "grind_size": "Coarse",
        "water_temperature_celsius": "93-95",
        "brew_time_minutes": "4:00",
        "taste_profile": [
          "Rich",
          "Heavy Body",
          "Chocolate"
        ],
        "steps": [
          "Preheat French Press.",
          "Add coarse ground coffee.",
          "Pour hot water evenly.",
          "Stir gently.",
          "Steep for 4 minutes.",
          "Press plunger slowly.",
          "Serve immediately."
        ],
        "tips": [
          "Use coarse grind for cleaner cup.",
          "Avoid over steeping."
        ],
        "common_mistakes": [
          "Using fine grind causing muddy coffee.",
          "Pressing plunger too quickly."
        ],
        "notes": "Produces full-bodied coffee with rich mouthfeel."
      }
    ]
  }
};
