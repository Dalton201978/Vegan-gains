/* =====================================================================
   Sprout Ledger — meal data
   index.html reads everything from window.MEAL_DATA, so extending the
   system means editing this file only.

   Source: the Vegan breakfast / lunch 1–10 / lunch 11–25 / dinner / snack
   planning PDFs and the 20-sauce PDF.

   Schema
   ------
   BREAKFASTS / LUNCHES / DINNERS: {
     id, week, name, protein, carb, sauce?,
     weightLoss: [ingredient lines], weightGain: [ingredient lines],
     prep?, note?, incomplete?
   }
   Ingredient lines containing a sauce name (e.g. "2 tbsp Buffalo Sauce")
   link to that sauce automatically.

   SNACKS: { id, name, bulk, storage, roles: [], weightLoss, weightGain,
             ingredients: [], directions: [], note? }
   SAUCES: { id, name, match?, section, week, yields, fridge, freezer,
             ingredients: [], directions: [], pairings: [], note?, incomplete? }
     `match` is the shorter name meal recipes use for the sauce, when it
     differs from `name`. `freezer` is the storage guide's symbol:
     ✅ / ⚠ / ❌. "Used in" is computed from the meals.
   PORTION_FRAMEWORK: { weightLoss: {protein, starch, vegetables, sauce, fats},
                        weightGain: {...} }
   CORE_INGREDIENTS: { protein: [], carb: [], vegetable: [], fat: [] }
   ===================================================================== */
window.MEAL_DATA = {
  "PORTION_FRAMEWORK": {
    "weightLoss": {
      "protein": "¾ cup",
      "starch": "½ cup cooked",
      "vegetables": "1½ cups",
      "sauce": "2 tbsp",
      "fats": "0–1 tbsp seeds"
    },
    "weightGain": {
      "protein": "1½ cups",
      "starch": "1 cup cooked",
      "vegetables": "1½ cups",
      "sauce": "⅓ cup",
      "fats": "¼ avocado + 1 tbsp seeds or oil"
    }
  },
  "CORE_INGREDIENTS": {
    "protein": [
      "Tofu",
      "Tempeh",
      "Chickpeas",
      "Black beans",
      "White beans",
      "Lentils",
      "Edamame",
      "Jackfruit"
    ],
    "carb": [
      "Brown rice",
      "Quinoa",
      "Pasta",
      "Soba noodles",
      "Rice noodles",
      "Potatoes",
      "Sweet potatoes",
      "Whole-grain bread/wraps"
    ],
    "vegetable": [
      "Broccoli",
      "Spinach",
      "Cabbage",
      "Mushrooms",
      "Peppers",
      "Carrots",
      "Zucchini",
      "Cauliflower",
      "Green beans"
    ],
    "fat": [
      "Avocado",
      "Pumpkin seeds",
      "Sesame seeds",
      "Hemp seeds",
      "Peanut butter",
      "Nuts",
      "Olive oil"
    ]
  },
  "BREAKFASTS": [
    {
      "id": "b1",
      "week": 1,
      "name": "Tofu Scramble Breakfast Bowl",
      "protein": "Tofu",
      "carb": "Potatoes",
      "sauce": "Jalapeño Cilantro Sauce",
      "weightLoss": [
        "¾ cup tofu",
        "½ cup roasted potatoes",
        "1 cup vegetables",
        "1 tbsp nutritional yeast",
        "1 tbsp Jalapeño Cilantro Sauce"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup roasted potatoes",
        "1 cup vegetables",
        "2 tbsp nutritional yeast",
        "2 tbsp Jalapeño Cilantro Sauce",
        "¼ avocado"
      ],
      "prep": "Prepare 4–5 containers. Keep sauce separate."
    },
    {
      "id": "b2",
      "week": 1,
      "name": "Peanut Butter Overnight Oats",
      "protein": "Peanut Butter/Chia",
      "carb": "Oats",
      "weightLoss": [
        "½ cup oats",
        "¾ cup unsweetened plant milk",
        "1 tbsp peanut butter",
        "½ banana",
        "1 tbsp chia seeds",
        "Cinnamon"
      ],
      "weightGain": [
        "1 cup oats",
        "1 cup plant milk",
        "2 tbsp peanut butter",
        "1 banana",
        "2 tbsp chia seeds",
        "1 tbsp maple syrup",
        "1 tbsp hemp seeds"
      ],
      "prep": "Prepare in jars the night before. Best within 3–4 days."
    },
    {
      "id": "b3",
      "week": 1,
      "name": "Vegan Breakfast Burrito",
      "protein": "Tofu + Beans",
      "carb": "Tortilla",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "1 small whole-grain tortilla",
        "½ cup tofu scramble",
        "¼ cup black beans",
        "½ cup peppers/onions",
        "1 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1 large tortilla",
        "1 cup tofu",
        "½ cup black beans",
        "½ cup potatoes",
        "¼ avocado",
        "2 tbsp Chipotle Lime Sauce"
      ],
      "prep": "Wrap individually and refrigerate."
    },
    {
      "id": "b4",
      "week": 1,
      "name": "Chickpea Breakfast Hash",
      "protein": "Chickpeas",
      "carb": "Sweet Potato",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "½ cup chickpeas",
        "½ cup roasted sweet potato",
        "1 cup spinach",
        "½ cup peppers/onions",
        "1 tbsp Tahini Lemon Sauce"
      ],
      "weightGain": [
        "1 cup chickpeas",
        "1 cup sweet potato",
        "1 cup vegetables",
        "½ avocado",
        "2 tbsp Tahini Lemon Sauce"
      ]
    },
    {
      "id": "b5",
      "week": 1,
      "name": "Protein Smoothie Bowl",
      "protein": "Silken Tofu + Protein",
      "carb": "Fruit",
      "weightLoss": [
        "1 cup unsweetened plant milk",
        "½ banana",
        "½ cup frozen berries",
        "½ cup silken tofu",
        "1 tbsp chia",
        "½ scoop vegan protein powder",
        "¼ cup berries",
        "1 tbsp pumpkin seeds"
      ],
      "weightGain": [
        "1½ cups plant milk",
        "1 banana",
        "1 cup berries",
        "1 cup silken tofu",
        "1 scoop protein powder",
        "2 tbsp peanut butter",
        "1 tbsp chia",
        "½ cup granola",
        "2 tbsp nuts"
      ]
    },
    {
      "id": "b6",
      "week": 2,
      "name": "Avocado Toast + Tofu",
      "protein": "Tofu",
      "carb": "Toast",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "1 slice whole-grain toast",
        "¼ avocado",
        "½ cup seasoned tofu",
        "Tomato",
        "Spinach",
        "1 tsp Vegan Pesto"
      ],
      "weightGain": [
        "2 slices whole-grain toast",
        "½–1 avocado",
        "1 cup tofu",
        "Tomato",
        "Spinach",
        "1 tbsp Vegan Pesto"
      ]
    },
    {
      "id": "b7",
      "week": 2,
      "name": "Vegan Breakfast Pasta",
      "protein": "Tofu",
      "carb": "Pasta",
      "sauce": "Creamy Tomato Sauce",
      "weightLoss": [
        "¾ cup cooked whole-grain pasta",
        "½ cup tofu",
        "1 cup spinach/mushrooms",
        "2 tbsp Creamy Tomato Sauce"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1 cup tofu",
        "1 cup vegetables",
        "⅓ cup Creamy Tomato Sauce",
        "1 tbsp nutritional yeast"
      ],
      "note": "Alternative sauces: Vegan Pesto or Roasted Red Pepper."
    },
    {
      "id": "b8",
      "week": 2,
      "name": "Quinoa Breakfast Bowl",
      "protein": "Quinoa + Nut Butter",
      "carb": "Quinoa",
      "weightLoss": [
        "½ cup cooked quinoa",
        "½ cup berries",
        "½ banana",
        "1 tbsp chia",
        "1 tbsp nut butter",
        "Cinnamon"
      ],
      "weightGain": [
        "1 cup quinoa",
        "1 cup berries",
        "1 banana",
        "2 tbsp nut butter",
        "2 tbsp chia",
        "2 tbsp hemp",
        "1 tbsp maple syrup"
      ],
      "note": "Savory Option: Quinoa + tofu + vegetables + Cilantro-Lime Cashew Sauce."
    },
    {
      "id": "b9",
      "week": 2,
      "name": "Sweet Potato Breakfast Bowl",
      "protein": "Tofu + Beans",
      "carb": "Sweet Potato",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "½ medium sweet potato",
        "½ cup tofu",
        "1 cup spinach",
        "¼ cup black beans",
        "1 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1 large sweet potato",
        "1 cup tofu",
        "½ cup black beans",
        "½ avocado",
        "2 tbsp Chipotle Lime Sauce",
        "1 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b10",
      "week": 2,
      "name": "Vegan Protein Pancake Bowl",
      "protein": "Protein Powder",
      "carb": "Oat Flour",
      "weightLoss": [
        "½ cup oat flour",
        "½ mashed banana",
        "½ cup plant milk",
        "½ scoop vegan protein",
        "1 tsp baking powder",
        "½ cup berries",
        "1 tbsp peanut butter"
      ],
      "weightGain": [
        "1 cup oat flour",
        "1 banana",
        "¾ cup plant milk",
        "1 scoop protein",
        "1 tbsp peanut butter",
        "1 tsp baking powder",
        "1 cup berries",
        "2 tbsp peanut butter",
        "1 tbsp maple syrup",
        "2 tbsp walnuts"
      ]
    },
    {
      "id": "b11",
      "week": 3,
      "name": "Southwest Tofu Breakfast Bowl",
      "protein": "Tofu + Beans",
      "carb": "Sweet Potato",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "¾ cup tofu",
        "½ cup black beans",
        "½ cup roasted sweet potato",
        "1 cup peppers/onions/spinach",
        "1 tbsp Chipotle Lime Sauce",
        "1 tbsp nutritional yeast"
      ],
      "weightGain": [
        "1½ cups tofu",
        "¾ cup black beans",
        "1 cup sweet potato",
        "1 cup vegetables",
        "2 tbsp Chipotle Lime Sauce",
        "¼ avocado",
        "1 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b12",
      "week": 3,
      "name": "Apple Cinnamon Protein Oatmeal",
      "protein": "Protein Powder",
      "carb": "Oats",
      "weightLoss": [
        "½ cup oats",
        "¾ cup unsweetened plant milk",
        "½ apple",
        "½ scoop vegan protein",
        "1 tbsp chia",
        "Cinnamon",
        "1 tsp maple syrup"
      ],
      "weightGain": [
        "1 cup oats",
        "1 cup plant milk",
        "1 apple",
        "1 scoop protein",
        "2 tbsp peanut butter",
        "2 tbsp chia",
        "1 tbsp maple syrup",
        "Cinnamon"
      ]
    },
    {
      "id": "b13",
      "week": 3,
      "name": "Tofu Breakfast Bagel",
      "protein": "Tofu",
      "carb": "Bagel",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "½ whole-grain bagel",
        "½ cup tofu",
        "1 tbsp vegan cream cheese",
        "Tomato",
        "Spinach",
        "1 tsp Vegan Pesto"
      ],
      "weightGain": [
        "1 whole-grain bagel",
        "1 cup tofu",
        "2 tbsp vegan cream cheese",
        "Tomato",
        "Spinach",
        "1 tbsp Vegan Pesto",
        "¼ avocado"
      ]
    },
    {
      "id": "b14",
      "week": 3,
      "name": "Vegan Breakfast \"Egg\" Muffins",
      "protein": "Tofu",
      "carb": "Potatoes",
      "sauce": "Jalapeño Cilantro Sauce",
      "weightLoss": [
        "2 muffins",
        "½ cup roasted potatoes",
        "1 cup fruit"
      ],
      "weightGain": [
        "4 muffins",
        "1 cup potatoes",
        "½ avocado",
        "1 tbsp Jalapeño Cilantro Sauce"
      ],
      "prep": "Base — blend 1½ cups firm tofu, ¼ cup unsweetened plant milk, 2 tbsp nutritional yeast, ½ tsp turmeric, ½ tsp garlic powder, ½ tsp onion powder and ½ tsp salt. Fold in spinach, bell peppers, mushrooms and green onions. Bake in a muffin pan until firm."
    },
    {
      "id": "b15",
      "week": 3,
      "name": "Breakfast Potato & Tempeh Hash",
      "protein": "Tempeh",
      "carb": "Potatoes",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "½ cup roasted potatoes",
        "½ cup tempeh",
        "1 cup peppers/onions/spinach",
        "1 tbsp Miso Ginger Sauce"
      ],
      "weightGain": [
        "1 cup potatoes",
        "1 cup tempeh",
        "1 cup vegetables",
        "2 tbsp Miso Ginger Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ],
      "note": "Alternative: Gochujang Sauce."
    },
    {
      "id": "b16",
      "week": 4,
      "name": "Banana Protein Chia Pudding",
      "protein": "Protein Powder/Chia",
      "carb": "Fruit",
      "weightLoss": [
        "3 tbsp chia",
        "¾ cup unsweetened plant milk",
        "½ banana",
        "½ scoop protein",
        "Cinnamon",
        "1 tsp maple syrup"
      ],
      "weightGain": [
        "¼ cup chia",
        "1 cup plant milk",
        "1 banana",
        "1 scoop protein",
        "2 tbsp peanut butter",
        "1 tbsp maple syrup",
        "2 tbsp hemp"
      ],
      "note": "Toppings: Berries, banana, pumpkin seeds or walnuts."
    },
    {
      "id": "b17",
      "week": 4,
      "name": "Tempeh Breakfast Wrap",
      "protein": "Tempeh + Beans",
      "carb": "Tortilla",
      "sauce": "Cilantro-Lime Cashew Sauce",
      "weightLoss": [
        "1 small whole-grain tortilla",
        "½ cup tempeh",
        "½ cup black beans",
        "½ cup peppers/onions",
        "Spinach",
        "1 tbsp Cilantro-Lime Cashew Sauce"
      ],
      "weightGain": [
        "1 large tortilla",
        "1 cup tempeh",
        "½ cup black beans",
        "½ cup roasted potatoes",
        "½ avocado",
        "2 tbsp Cilantro-Lime Cashew Sauce"
      ]
    },
    {
      "id": "b18",
      "week": 4,
      "name": "Berry Quinoa Protein Breakfast",
      "protein": "Protein Powder",
      "carb": "Quinoa",
      "weightLoss": [
        "½ cup cooked quinoa",
        "½ cup berries",
        "½ cup unsweetened plant milk",
        "½ scoop protein",
        "1 tbsp chia",
        "Cinnamon"
      ],
      "weightGain": [
        "1 cup quinoa",
        "1 cup berries",
        "1 cup plant milk",
        "1 scoop protein",
        "2 tbsp peanut butter",
        "2 tbsp chia",
        "2 tbsp hemp",
        "1 tbsp maple syrup"
      ]
    },
    {
      "id": "b19",
      "week": 4,
      "name": "Savory Breakfast Polenta Bowl",
      "protein": "Tofu",
      "carb": "Polenta",
      "sauce": "Roasted Red Pepper Sauce",
      "weightLoss": [
        "¾ cup cooked polenta",
        "½ cup tofu",
        "1 cup mushrooms/spinach",
        "1 tbsp Roasted Red Pepper Sauce",
        "1 tbsp nutritional yeast"
      ],
      "weightGain": [
        "1½ cups polenta",
        "1 cup tofu",
        "1 cup vegetables",
        "⅓ cup Roasted Red Pepper Sauce",
        "1 tbsp olive oil",
        "2 tbsp nutritional yeast"
      ],
      "note": "Alternatives: Vegan Pesto or Creamy Tomato."
    },
    {
      "id": "b20",
      "week": 4,
      "name": "Sweet Potato Protein Pancakes",
      "protein": "Protein Powder",
      "carb": "Oat Flour + Sweet Potato",
      "weightLoss": [
        "½ cup oat flour",
        "½ cup mashed sweet potato",
        "½ scoop protein",
        "½ cup plant milk",
        "½ tsp baking powder",
        "Cinnamon",
        "½ tsp vanilla",
        "½ cup berries",
        "1 tbsp peanut butter"
      ],
      "weightGain": [
        "1 cup oat flour",
        "1 cup sweet potato",
        "1 scoop protein",
        "¾ cup plant milk",
        "1 tbsp peanut butter",
        "1 tsp baking powder",
        "Cinnamon",
        "1 tsp vanilla",
        "1 cup berries",
        "2 tbsp peanut butter",
        "1 tbsp maple syrup",
        "2 tbsp walnuts"
      ]
    },
    {
      "id": "b21",
      "week": 5,
      "name": "Savory Breakfast Oatmeal Bowl",
      "protein": "Tofu",
      "carb": "Oats",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "½ cup dry rolled oats",
        "½ cup tofu",
        "1 cup spinach/mushrooms",
        "1 tbsp nutritional yeast",
        "1 tbsp Miso Ginger Sauce",
        "Green onions"
      ],
      "weightGain": [
        "1 cup dry oats",
        "1 cup tofu",
        "1 cup vegetables",
        "2 tbsp nutritional yeast",
        "2 tbsp Miso Ginger Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ]
    },
    {
      "id": "b22",
      "week": 5,
      "name": "Vegan Breakfast Quesadilla",
      "protein": "Tofu + Beans",
      "carb": "Tortilla",
      "sauce": "Jalapeño Cilantro Sauce",
      "weightLoss": [
        "1 small whole-grain tortilla",
        "½ cup tofu scramble",
        "¼ cup black beans",
        "¼ cup peppers/onions",
        "2 tbsp vegan cheese",
        "1 tbsp Jalapeño Cilantro Sauce"
      ],
      "weightGain": [
        "1 large tortilla",
        "1 cup tofu",
        "½ cup black beans",
        "½ cup peppers/onions",
        "½ cup vegan cheese",
        "2 tbsp Jalapeño Cilantro Sauce",
        "¼ avocado"
      ]
    },
    {
      "id": "b23",
      "week": 5,
      "name": "Mediterranean Breakfast Chickpea Bowl",
      "protein": "Chickpeas",
      "carb": "Quinoa",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "½ cup chickpeas",
        "½ cup quinoa",
        "1 cup cucumber, tomato and spinach",
        "¼ cup roasted red peppers",
        "1 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "1 cup chickpeas",
        "1 cup quinoa",
        "1 cup vegetables",
        "½ cup roasted red peppers",
        "2 tbsp Mediterranean Herb Sauce",
        "¼ avocado",
        "2 tbsp hummus"
      ]
    },
    {
      "id": "b24",
      "week": 5,
      "name": "Vegan Breakfast Stuffed Sweet Potato",
      "protein": "Tofu + Beans",
      "carb": "Sweet Potato",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "1 small sweet potato",
        "½ cup black beans",
        "½ cup tofu",
        "½ cup spinach",
        "1 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1 large sweet potato",
        "1 cup black beans",
        "1 cup tofu",
        "½ cup spinach",
        "2 tbsp Chipotle Lime Sauce",
        "¼ avocado",
        "2 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b25",
      "week": 5,
      "name": "Cinnamon Apple Breakfast Couscous",
      "protein": "Protein Powder",
      "carb": "Couscous",
      "weightLoss": [
        "½ cup cooked whole-wheat couscous",
        "½ apple",
        "½ cup unsweetened plant milk",
        "½ scoop vegan protein",
        "1 tbsp chia",
        "Cinnamon",
        "1 tsp maple syrup"
      ],
      "weightGain": [
        "1 cup couscous",
        "1 apple",
        "¾ cup plant milk",
        "1 scoop vegan protein",
        "2 tbsp peanut butter",
        "2 tbsp chia",
        "1 tbsp maple syrup"
      ]
    },
    {
      "id": "b26",
      "week": 6,
      "name": "Vegan Breakfast Sushi Rolls",
      "protein": "Tofu",
      "carb": "Sushi Rice",
      "sauce": "Spicy Peanut Sauce",
      "weightLoss": [
        "1 nori sheet",
        "½ cup sushi rice",
        "½ cup seasoned tofu",
        "Cucumber",
        "Carrot",
        "Spinach",
        "1 tbsp Spicy Peanut Sauce"
      ],
      "weightGain": [
        "2 nori sheets",
        "1 cup sushi rice",
        "1 cup tofu",
        "Cucumber",
        "Carrot",
        "Avocado",
        "2 tbsp Spicy Peanut Sauce",
        "Sesame seeds"
      ]
    },
    {
      "id": "b27",
      "week": 6,
      "name": "Vegan Breakfast Stuffed Bell Peppers",
      "protein": "Tofu + Beans",
      "carb": "Cauliflower Rice / Brown Rice",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "1 large bell pepper",
        "½ cup tofu",
        "¼ cup black beans",
        "½ cup cauliflower rice",
        "¼ cup corn",
        "1 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "2 large bell peppers",
        "1 cup tofu",
        "½ cup black beans",
        "½ cup brown rice",
        "½ cup corn",
        "2 tbsp Chipotle Lime Sauce",
        "¼ avocado"
      ]
    },
    {
      "id": "b28",
      "week": 6,
      "name": "Tofu Breakfast Flatbread",
      "protein": "Tofu",
      "carb": "Flatbread",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "1 small whole-grain flatbread",
        "½ cup tofu",
        "½ cup mushrooms",
        "½ cup spinach",
        "Tomato",
        "1 tbsp Vegan Pesto"
      ],
      "weightGain": [
        "1 large flatbread",
        "1 cup tofu",
        "1 cup mushrooms",
        "½ cup spinach",
        "Tomato",
        "2 tbsp Vegan Pesto",
        "¼ cup vegan cheese"
      ]
    },
    {
      "id": "b29",
      "week": 6,
      "name": "Vegan Breakfast Lentil Bowl",
      "protein": "Lentils",
      "carb": "Potatoes",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "½ cup cooked lentils",
        "½ cup roasted potatoes",
        "1 cup spinach",
        "½ cup mushrooms",
        "1 tbsp Tahini Lemon Sauce"
      ],
      "weightGain": [
        "1 cup lentils",
        "1 cup potatoes",
        "1 cup vegetables",
        "2 tbsp Tahini Lemon Sauce",
        "¼ avocado",
        "1 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b30",
      "week": 6,
      "name": "Vegan Breakfast Polenta Cakes",
      "protein": "White Beans",
      "carb": "Polenta",
      "sauce": "Roasted Red Pepper Sauce",
      "weightLoss": [
        "2 small baked polenta cakes",
        "½ cup white beans",
        "1 cup spinach/mushrooms",
        "2 tbsp Roasted Red Pepper Sauce"
      ],
      "weightGain": [
        "4 polenta cakes",
        "1 cup white beans",
        "1 cup vegetables",
        "⅓ cup Roasted Red Pepper Sauce",
        "1 tbsp olive oil",
        "2 tbsp nutritional yeast"
      ]
    },
    {
      "id": "b31",
      "week": 7,
      "name": "Caribbean-Inspired Breakfast Rice Bowl",
      "protein": "Black Beans",
      "carb": "Brown Rice",
      "sauce": "Jalapeño Cilantro Sauce",
      "weightLoss": [
        "½ cup brown rice",
        "½ cup black beans",
        "½ cup peppers",
        "½ cup spinach",
        "1 tbsp Jalapeño Cilantro Sauce"
      ],
      "weightGain": [
        "1 cup brown rice",
        "1 cup black beans",
        "1 cup peppers/spinach",
        "2 tbsp Jalapeño Cilantro Sauce",
        "¼ avocado",
        "1 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b32",
      "week": 7,
      "name": "Vegan Breakfast Stuffed Portobello Mushrooms",
      "protein": "Chickpeas",
      "carb": "Toast",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "2 large portobello mushrooms",
        "½ cup chickpeas",
        "½ cup spinach",
        "¼ cup tomatoes",
        "1 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "3 large portobellos",
        "1 cup chickpeas",
        "½ cup spinach",
        "½ cup tomatoes",
        "2 tbsp Mediterranean Herb Sauce",
        "¼ cup vegan cheese",
        "1 slice whole-grain toast"
      ]
    },
    {
      "id": "b33",
      "week": 7,
      "name": "Vegan Breakfast Ramen Bowl",
      "protein": "Tofu",
      "carb": "Noodles",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "1 serving ramen or rice noodles",
        "½ cup tofu",
        "1 cup mushrooms/cabbage/spinach",
        "1 tbsp Miso Ginger Sauce",
        "Green onions"
      ],
      "weightGain": [
        "1½ servings noodles",
        "1 cup tofu",
        "1½ cups vegetables",
        "2 tbsp Miso Ginger Sauce",
        "1 tbsp sesame oil",
        "Sesame seeds"
      ]
    },
    {
      "id": "b34",
      "week": 7,
      "name": "Vegan Breakfast Falafel Bowl",
      "protein": "Falafel",
      "carb": "Quinoa",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "3 small baked falafel",
        "½ cup quinoa",
        "1 cup cucumber/tomato/greens",
        "2 tbsp Tahini Lemon Sauce"
      ],
      "weightGain": [
        "5–6 falafel",
        "1 cup quinoa",
        "1½ cups vegetables",
        "¼ avocado",
        "¼ cup hummus",
        "3 tbsp Tahini Lemon Sauce"
      ]
    },
    {
      "id": "b35",
      "week": 7,
      "name": "Vegan Breakfast Rice Paper Wraps",
      "protein": "Tofu",
      "carb": "Rice Paper",
      "sauce": "Sweet Chili Sauce",
      "weightLoss": [
        "2 rice-paper wrappers",
        "½ cup tofu",
        "½ cup cabbage",
        "½ cup carrots/cucumber",
        "1 tbsp Sweet Chili Sauce"
      ],
      "weightGain": [
        "4 wrappers",
        "1 cup tofu",
        "1 cup vegetables",
        "¼ avocado",
        "2 tbsp Sweet Chili Sauce",
        "1 tbsp sesame seeds"
      ]
    },
    {
      "id": "b36",
      "week": 8,
      "name": "Vegan Breakfast Lasagna Cups",
      "protein": "Tofu",
      "carb": "Lasagna",
      "sauce": "Classic Marinara",
      "weightLoss": [
        "2 lasagna cups",
        "½ cup tofu",
        "½ cup spinach",
        "¼ cup mushrooms",
        "2 tbsp Classic Marinara",
        "1 tbsp nutritional yeast"
      ],
      "weightGain": [
        "4 lasagna cups",
        "1 cup tofu",
        "½ cup spinach",
        "½ cup mushrooms",
        "⅓ cup Classic Marinara",
        "¼ cup vegan cheese",
        "1 tbsp nutritional yeast"
      ]
    },
    {
      "id": "b37",
      "week": 8,
      "name": "Vegan Breakfast Bean & Corn Tostadas",
      "protein": "Black Beans",
      "carb": "Corn Tostadas",
      "sauce": "Avocado Lime Crema",
      "weightLoss": [
        "2 baked corn tostadas",
        "½ cup black beans",
        "¼ cup corn",
        "½ cup lettuce/tomato",
        "1 tbsp Avocado Lime Crema"
      ],
      "weightGain": [
        "4 tostadas",
        "1 cup black beans",
        "½ cup corn",
        "1 cup vegetables",
        "¼ avocado",
        "2 tbsp Avocado Lime Crema",
        "2 tbsp vegan cheese"
      ]
    },
    {
      "id": "b38",
      "week": 8,
      "name": "Vegan Savory French Toast",
      "protein": "Chickpea Flour",
      "carb": "Bread",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "2 slices whole-grain bread",
        "½ cup unsweetened plant milk",
        "2 tbsp chickpea flour",
        "1 tbsp nutritional yeast",
        "Garlic powder",
        "Black pepper",
        "½ cup mushrooms",
        "1 tbsp Vegan Pesto"
      ],
      "weightGain": [
        "4 slices bread",
        "¾ cup plant milk",
        "¼ cup chickpea flour",
        "2 tbsp nutritional yeast",
        "1 cup mushrooms",
        "2 tbsp Vegan Pesto",
        "¼ avocado"
      ]
    },
    {
      "id": "b39",
      "week": 8,
      "name": "Vegan Breakfast Stuffed Acorn Squash",
      "protein": "Lentils",
      "carb": "Acorn Squash",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "½ small roasted acorn squash",
        "½ cup lentils",
        "½ cup spinach",
        "¼ cup cranberries",
        "1 tbsp Miso Ginger Sauce"
      ],
      "weightGain": [
        "1 large acorn squash",
        "1 cup lentils",
        "½ cup quinoa",
        "½ cup spinach",
        "¼ cup cranberries",
        "2 tbsp Miso Ginger Sauce",
        "1 tbsp pumpkin seeds"
      ]
    },
    {
      "id": "b40",
      "week": 8,
      "name": "Vegan Breakfast Naan Pizza",
      "protein": "Tofu",
      "carb": "Naan",
      "sauce": "Classic Marinara",
      "weightLoss": [
        "1 small whole-grain naan",
        "2 tbsp Classic Marinara",
        "½ cup tofu crumbles",
        "½ cup mushrooms/spinach",
        "2 tbsp vegan cheese",
        "1 tsp Vegan Pesto"
      ],
      "weightGain": [
        "1 large naan",
        "⅓ cup Classic Marinara",
        "1 cup tofu crumbles",
        "1 cup vegetables",
        "½ cup vegan cheese",
        "1 tbsp Vegan Pesto",
        "¼ avocado"
      ]
    }
  ],
  "LUNCHES": [
    {
      "id": "l1",
      "week": 1,
      "name": "Crispy Tofu Buddha Bowl",
      "protein": "Tofu + Edamame",
      "carb": "Quinoa",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "¾ cup crispy tofu",
        "½ cup quinoa",
        "1½ cups roasted broccoli, carrots and cauliflower",
        "¼ cup edamame",
        "2 tbsp Tahini Lemon Sauce",
        "1 tbsp pumpkin seeds"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup quinoa",
        "1½ cups vegetables",
        "½ cup edamame",
        "⅓ cup Tahini Lemon Sauce",
        "2 tbsp pumpkin seeds",
        "¼ avocado"
      ],
      "prep": "Make 4–5 bowls. Keep sauce separate."
    },
    {
      "id": "l2",
      "week": 1,
      "name": "Vegan Mediterranean Pasta Salad",
      "protein": "Chickpeas",
      "carb": "Pasta",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "1 cup cooked whole-grain pasta",
        "½ cup chickpeas",
        "1 cup cucumber, tomato and spinach",
        "¼ cup roasted red peppers",
        "2 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1 cup chickpeas",
        "1½ cups vegetables",
        "½ cup roasted red peppers",
        "⅓ cup Mediterranean Herb Sauce",
        "¼ cup olives",
        "¼ avocado"
      ],
      "note": "This can be eaten cold, making it excellent for work lunches."
    },
    {
      "id": "l3",
      "week": 1,
      "name": "Buffalo Chickpea Wrap",
      "protein": "Chickpeas",
      "carb": "Whole-Grain Wrap",
      "sauce": "Buffalo Sauce",
      "weightLoss": [
        "1 small whole-grain tortilla",
        "¾ cup chickpeas",
        "1 cup shredded cabbage",
        "Lettuce and tomato",
        "2 tbsp Buffalo Sauce",
        "1 tbsp vegan ranch"
      ],
      "weightGain": [
        "1 large tortilla",
        "1½ cups chickpeas",
        "1 cup cabbage",
        "Lettuce and tomato",
        "⅓ cup Buffalo Sauce",
        "2 tbsp vegan ranch",
        "¼ avocado"
      ],
      "prep": "Keep the filling and tortilla separate if preparing more than 2–3 days ahead."
    },
    {
      "id": "l4",
      "week": 1,
      "name": "Korean-Inspired Tempeh Lunch Bowl",
      "protein": "Tempeh",
      "carb": "Brown Rice",
      "sauce": "Gochujang Sauce",
      "weightLoss": [
        "¾ cup tempeh",
        "½ cup brown rice",
        "1½ cups cabbage, carrots and broccoli",
        "2 tbsp Gochujang Sauce",
        "Cucumber"
      ],
      "weightGain": [
        "1½ cups tempeh",
        "1 cup brown rice",
        "1½ cups vegetables",
        "⅓ cup Gochujang Sauce",
        "¼ avocado",
        "1 tbsp sesame seeds"
      ],
      "prep": "Tempeh, rice and vegetables can all be cooked in bulk."
    },
    {
      "id": "l5",
      "week": 1,
      "name": "Vegan Mediterranean Falafel Wrap",
      "protein": "Falafel",
      "carb": "Wrap",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "3 small baked falafel",
        "1 small whole-grain wrap",
        "1 cup lettuce, cucumber and tomato",
        "2 tbsp Tahini Lemon Sauce",
        "2 tbsp hummus"
      ],
      "weightGain": [
        "5–6 falafel",
        "1 large wrap",
        "1½ cups vegetables",
        "⅓ cup Tahini Lemon Sauce",
        "¼ cup hummus",
        "¼ avocado"
      ],
      "prep": "Store the sauce separately to prevent the wrap from becoming soggy."
    },
    {
      "id": "l6",
      "week": 2,
      "name": "Creamy Pesto Chickpea Pasta Bowl",
      "protein": "Chickpeas",
      "carb": "Pasta",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "1 cup cooked pasta",
        "¾ cup chickpeas",
        "1 cup spinach and broccoli",
        "2 tbsp Vegan Pesto"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1½ cups chickpeas",
        "1 cup vegetables",
        "⅓ cup Vegan Pesto",
        "2 tbsp nutritional yeast",
        "1 tbsp olive oil"
      ],
      "prep": "Add a splash of pasta water or plant milk when reheating."
    },
    {
      "id": "l7",
      "week": 2,
      "name": "Southwest Lentil & Quinoa Bowl",
      "protein": "Lentils + Beans",
      "carb": "Quinoa",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "½ cup cooked quinoa",
        "¾ cup lentils",
        "½ cup black beans",
        "1 cup peppers, corn and spinach",
        "2 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1 cup quinoa",
        "1 cup lentils",
        "¾ cup black beans",
        "1½ cups vegetables",
        "⅓ cup Chipotle Lime Sauce",
        "¼ avocado",
        "2 tbsp pumpkin seeds"
      ],
      "prep": "This is particularly good as a 5-container lunch batch."
    },
    {
      "id": "l8",
      "week": 2,
      "name": "Miso Ginger Soba Noodle Salad",
      "protein": "Tofu",
      "carb": "Soba",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "1 cup cooked soba noodles",
        "¾ cup tofu",
        "1½ cups cabbage, carrots, cucumber and spinach",
        "2 tbsp Miso Ginger Sauce"
      ],
      "weightGain": [
        "1½ cups soba noodles",
        "1½ cups tofu",
        "1½ cups vegetables",
        "⅓ cup Miso Ginger Sauce",
        "1 tbsp sesame seeds",
        "1 tbsp sesame oil"
      ],
      "prep": "Can be eaten cold, so there's no need for an office microwave."
    },
    {
      "id": "l9",
      "week": 2,
      "name": "White Bean Mediterranean Grain Bowl",
      "protein": "White Beans",
      "carb": "Rice/Quinoa",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "¾ cup white beans",
        "½ cup brown rice or quinoa",
        "1½ cups roasted vegetables",
        "2 tbsp Mediterranean Herb Sauce",
        "¼ cup hummus"
      ],
      "weightGain": [
        "1½ cups white beans",
        "1 cup rice/quinoa",
        "1½ cups vegetables",
        "⅓ cup Mediterranean Herb Sauce",
        "½ cup hummus",
        "¼ avocado",
        "Whole-grain pita"
      ],
      "prep": "Great cold or reheated."
    },
    {
      "id": "l10",
      "week": 2,
      "name": "Spicy Peanut Tofu Lettuce Bowl",
      "protein": "Tofu",
      "carb": "Brown Rice",
      "sauce": "Spicy Peanut Sauce",
      "weightLoss": [
        "¾ cup tofu",
        "½ cup brown rice",
        "1½ cups shredded cabbage",
        "½ cup carrots",
        "Lettuce leaves",
        "2 tbsp Spicy Peanut Sauce"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup brown rice",
        "1½ cups cabbage/carrots",
        "Lettuce",
        "⅓ cup Spicy Peanut Sauce",
        "¼ avocado",
        "2 tbsp crushed peanuts"
      ],
      "prep": "Store lettuce separately and assemble when ready to eat."
    },
    {
      "id": "l11",
      "week": 3,
      "name": "Smoky Lentil Taco Bowl",
      "protein": "Lentils + Beans",
      "carb": "Brown Rice",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "¾ cup cooked lentils",
        "½ cup brown rice",
        "½ cup black beans",
        "1 cup sautéed peppers and onions",
        "½ cup shredded lettuce",
        "2 tbsp Chipotle Lime Sauce",
        "1 tbsp salsa"
      ],
      "weightGain": [
        "1½ cups lentils",
        "1 cup brown rice",
        "¾ cup black beans",
        "1 cup peppers and onions",
        "1 cup lettuce",
        "⅓ cup Chipotle Lime Sauce",
        "¼ avocado",
        "2 tbsp vegan cheese"
      ],
      "prep": "Make 4–5 bowls. Keep lettuce, avocado, and sauce separate.",
      "note": "A hearty Southwestern bowl with lentils instead of tofu."
    },
    {
      "id": "l12",
      "week": 3,
      "name": "Lemon Herb Tofu Couscous Bowl",
      "protein": "Tofu",
      "carb": "Couscous",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "¾ cup baked tofu",
        "½ cup cooked whole-wheat couscous",
        "1½ cups roasted zucchini, peppers, and broccoli",
        "¼ cup chickpeas",
        "2 tbsp Mediterranean Herb Sauce",
        "Fresh lemon"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup couscous",
        "1½ cups roasted vegetables",
        "½ cup chickpeas",
        "⅓ cup Mediterranean Herb Sauce",
        "¼ avocado",
        "1 tbsp pumpkin seeds"
      ],
      "prep": "Holds well for 4 days. Add fresh lemon after reheating.",
      "note": "A lighter Mediterranean-style lunch with fluffy couscous and roasted vegetables."
    },
    {
      "id": "l13",
      "week": 3,
      "name": "BBQ Lentil Stuffed Sweet Potato",
      "protein": "Lentils",
      "carb": "Sweet Potato",
      "sauce": "Sweet Chili Sauce",
      "weightLoss": [
        "1 small sweet potato",
        "¾ cup cooked lentils",
        "½ cup cabbage slaw",
        "2 tbsp Sweet Chili Sauce",
        "1 tbsp green onions",
        "1 cup steamed broccoli"
      ],
      "weightGain": [
        "1 large sweet potato",
        "1½ cups lentils",
        "1 cup cabbage slaw",
        "⅓ cup Sweet Chili Sauce",
        "¼ avocado",
        "2 tbsp vegan cheese",
        "1 cup broccoli"
      ],
      "prep": "Store sweet potatoes and lentil mixture together; keep slaw separate.",
      "note": "A meal-prep-friendly stuffed sweet potato with smoky lentils."
    },
    {
      "id": "l14",
      "week": 3,
      "name": "Creamy Cajun Chickpea Pasta",
      "protein": "Chickpeas",
      "carb": "Pasta",
      "sauce": "Creamy Cashew Sauce",
      "weightLoss": [
        "1 cup cooked whole-grain pasta",
        "¾ cup chickpeas",
        "1 cup spinach and mushrooms",
        "¼ cup Creamy Cashew Sauce",
        "Cajun seasoning"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1½ cups chickpeas",
        "1 cup spinach and mushrooms",
        "½ cup Creamy Cashew Sauce",
        "1 tbsp olive oil",
        "2 tbsp nutritional yeast"
      ],
      "prep": "Make 4 portions. Add a splash of plant milk when reheating if the sauce thickens.",
      "note": "A spicy, creamy pasta lunch using chickpeas for protein."
    },
    {
      "id": "l15",
      "week": 3,
      "name": "Teriyaki Edamame Power Bowl",
      "protein": "Edamame",
      "carb": "Brown Rice",
      "sauce": "Teriyaki Sauce",
      "weightLoss": [
        "¾ cup shelled edamame",
        "½ cup brown rice",
        "1 cup broccoli",
        "½ cup shredded carrots",
        "½ cup cabbage",
        "2 tbsp Teriyaki Sauce",
        "1 tsp sesame seeds"
      ],
      "weightGain": [
        "1½ cups edamame",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Teriyaki Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ],
      "prep": "Excellent cold or reheated.",
      "note": "This one gives you a different protein combination using edamame."
    },
    {
      "id": "l16",
      "week": 4,
      "name": "Mediterranean Lentil Stuffed Zucchini",
      "protein": "Lentils",
      "carb": "Quinoa",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "2 zucchini halves",
        "¾ cup lentils",
        "¼ cup quinoa",
        "½ cup diced tomatoes",
        "¼ cup spinach",
        "2 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "3–4 zucchini halves",
        "1½ cups lentils",
        "½ cup quinoa",
        "½ cup tomatoes",
        "½ cup spinach",
        "⅓ cup Mediterranean Herb Sauce",
        "¼ cup vegan feta",
        "1 tbsp olive oil"
      ],
      "prep": "Bake everything together and portion into containers.",
      "note": "A vegetable-forward lunch that's different from the grain bowls."
    },
    {
      "id": "l17",
      "week": 4,
      "name": "Crispy Tofu Sushi Bowl",
      "protein": "Tofu + Edamame",
      "carb": "Sushi Rice",
      "sauce": "Spicy Peanut Sauce",
      "weightLoss": [
        "¾ cup crispy tofu",
        "½ cup sushi rice",
        "1 cup cucumber",
        "½ cup shredded carrots",
        "½ cup edamame",
        "1 tbsp Spicy Peanut Sauce",
        "1 tbsp soy sauce",
        "Nori strips"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup sushi rice",
        "1 cup cucumber",
        "½ cup carrots",
        "¾ cup edamame",
        "⅓ cup Spicy Peanut Sauce",
        "¼ avocado",
        "1 tbsp sesame seeds",
        "Nori strips"
      ],
      "prep": "Keep nori separate so it stays crisp.",
      "note": "All the flavors of sushi without having to make individual rolls."
    },
    {
      "id": "l18",
      "week": 4,
      "name": "Moroccan Chickpea & Couscous Bowl",
      "protein": "Chickpeas",
      "carb": "Couscous",
      "sauce": "Tahini Lemon Sauce",
      "weightLoss": [
        "¾ cup chickpeas",
        "½ cup couscous",
        "1½ cups roasted carrots, zucchini, and cauliflower",
        "2 tbsp Tahini Lemon Sauce",
        "Cumin",
        "Cinnamon",
        "Smoked paprika"
      ],
      "weightGain": [
        "1½ cups chickpeas",
        "1 cup couscous",
        "1½ cups roasted vegetables",
        "⅓ cup Tahini Lemon Sauce",
        "¼ avocado",
        "2 tbsp pumpkin seeds",
        "1 tbsp olive oil"
      ],
      "prep": "Make 4–5 containers.",
      "note": "Warm spices make this feel completely different from the Mediterranean lunches."
    },
    {
      "id": "l19",
      "week": 4,
      "name": "Buffalo Lentil Potato Bowl",
      "protein": "Lentils",
      "carb": "Potatoes",
      "sauce": "Buffalo Sauce",
      "weightLoss": [
        "¾ cup lentils",
        "½ cup roasted potatoes",
        "1½ cups broccoli and cauliflower",
        "2 tbsp Buffalo Sauce",
        "1 tbsp vegan ranch"
      ],
      "weightGain": [
        "1½ cups lentils",
        "1 cup roasted potatoes",
        "1½ cups vegetables",
        "⅓ cup Buffalo Sauce",
        "2 tbsp vegan ranch",
        "¼ avocado"
      ],
      "prep": "Keep ranch separate until eating.",
      "note": "A completely different way to use the Buffalo sauce."
    },
    {
      "id": "l20",
      "week": 4,
      "name": "Sesame Ginger Tempeh Cabbage Bowl",
      "protein": "Tempeh",
      "carb": "Brown Rice",
      "sauce": "Sesame Ginger Sauce",
      "weightLoss": [
        "¾ cup tempeh",
        "½ cup brown rice",
        "1½ cups cabbage, carrots, and broccoli",
        "2 tbsp Sesame Ginger Sauce",
        "1 tsp sesame seeds"
      ],
      "weightGain": [
        "1½ cups tempeh",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Sesame Ginger Sauce",
        "1 tbsp sesame seeds",
        "1 tbsp sesame oil"
      ],
      "prep": "Store sauce separately if you want the vegetables to stay crisp.",
      "note": "High-protein tempeh with crunchy cabbage."
    },
    {
      "id": "l21",
      "week": 5,
      "name": "Creamy Tomato White Bean Orzo",
      "protein": "White Beans",
      "carb": "Orzo",
      "sauce": "Creamy Tomato Sauce",
      "weightLoss": [
        "1 cup cooked orzo",
        "¾ cup white beans",
        "1 cup spinach",
        "¾ cup mushrooms",
        "¼ cup Creamy Tomato Sauce",
        "1 tbsp nutritional yeast"
      ],
      "weightGain": [
        "1½ cups orzo",
        "1½ cups white beans",
        "1 cup spinach",
        "1 cup mushrooms",
        "½ cup Creamy Tomato Sauce",
        "2 tbsp nutritional yeast",
        "1 tbsp olive oil"
      ],
      "prep": "Add a little vegetable broth when reheating if necessary.",
      "note": "A comforting lunch that works especially well for colder days."
    },
    {
      "id": "l22",
      "week": 5,
      "name": "Caribbean Black Bean & Plantain Bowl",
      "protein": "Black Beans",
      "carb": "Rice + Plantain",
      "sauce": "Jalapeño Cilantro Sauce",
      "weightLoss": [
        "¾ cup black beans",
        "½ cup brown rice",
        "½ small baked plantain",
        "1 cup cabbage and peppers",
        "2 tbsp Jalapeño Cilantro Sauce",
        "Lime"
      ],
      "weightGain": [
        "1½ cups black beans",
        "1 cup rice",
        "1 whole baked plantain",
        "1½ cups vegetables",
        "⅓ cup Jalapeño Cilantro Sauce",
        "¼ avocado",
        "1 tbsp pumpkin seeds"
      ],
      "prep": "Keep plantains separate if you want them to remain crisp.",
      "note": "This adds a Caribbean-inspired lunch to the rotation."
    },
    {
      "id": "l23",
      "week": 5,
      "name": "Roasted Red Pepper Chickpea Polenta Bowl",
      "protein": "Chickpeas",
      "carb": "Polenta",
      "sauce": "Roasted Red Pepper Sauce",
      "weightLoss": [
        "¾ cup chickpeas",
        "¾ cup cooked polenta",
        "1½ cups roasted vegetables",
        "2 tbsp Roasted Red Pepper Sauce",
        "1 tbsp nutritional yeast"
      ],
      "weightGain": [
        "1½ cups chickpeas",
        "1½ cups polenta",
        "1½ cups vegetables",
        "⅓–½ cup Roasted Red Pepper Sauce",
        "2 tbsp nutritional yeast",
        "1 tbsp olive oil"
      ],
      "prep": "Store sauce separately and add after reheating.",
      "note": "Creamy polenta paired with chickpeas and roasted vegetables."
    },
    {
      "id": "l24",
      "week": 5,
      "name": "Korean BBQ Jackfruit Rice Bowl",
      "protein": "Jackfruit + Edamame",
      "carb": "Brown Rice",
      "sauce": "Gochujang Sauce",
      "weightLoss": [
        "1 cup shredded jackfruit",
        "½ cup brown rice",
        "½ cup edamame",
        "1 cup cabbage and carrots",
        "2 tbsp Gochujang Sauce",
        "Cucumber"
      ],
      "weightGain": [
        "1½ cups jackfruit",
        "1 cup rice",
        "¾ cup edamame",
        "1½ cups vegetables",
        "⅓ cup Gochujang Sauce",
        "¼ avocado",
        "1 tbsp sesame seeds"
      ],
      "prep": "Keep cucumber and sauce separate.",
      "note": "Jackfruit gives the lunch rotation another texture and keeps it different from the tofu/tempeh meals."
    },
    {
      "id": "l25",
      "week": 5,
      "name": "Garlic Herb White Bean Stuffed Portobello",
      "protein": "White Beans",
      "carb": "Quinoa",
      "sauce": "Garlic Aioli",
      "weightLoss": [
        "2 large portobello mushrooms",
        "¾ cup white beans",
        "½ cup spinach",
        "¼ cup quinoa",
        "2 tbsp Vegan Garlic Aioli",
        "Side salad"
      ],
      "weightGain": [
        "3 large portobellos",
        "1½ cups white beans",
        "½ cup spinach",
        "½ cup quinoa",
        "¼ cup vegan cheese",
        "⅓ cup Garlic Aioli",
        "1 slice whole-grain bread"
      ],
      "prep": "Bake mushrooms and filling together. Add aioli after reheating.",
      "note": "A substantial vegetable-based lunch that doesn't rely on a grain bowl."
    }
  ],
  "DINNERS": [
    {
      "id": "d1",
      "week": 1,
      "name": "Teriyaki Tofu & Vegetable Rice Bowls",
      "protein": "Tofu",
      "carb": "Brown Rice",
      "sauce": "Teriyaki Sauce",
      "weightLoss": [
        "¾ cup baked tofu",
        "½ cup brown rice",
        "1½ cups broccoli, carrots and bell peppers",
        "2 tbsp Teriyaki Sauce",
        "1 tsp sesame seeds"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup brown rice",
        "1½ cups vegetables",
        "⅓ cup Teriyaki Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ],
      "prep": "Bake tofu and vegetables together; portion rice separately."
    },
    {
      "id": "d2",
      "week": 1,
      "name": "Vegan Chickpea Coconut Curry",
      "protein": "Chickpeas",
      "carb": "Rice",
      "weightLoss": [
        "¾ cup chickpeas",
        "1 cup cauliflower, spinach and peppers",
        "½ cup cooked brown rice",
        "½ cup light coconut milk-based curry sauce"
      ],
      "weightGain": [
        "1½ cups chickpeas",
        "1½ cups vegetables",
        "1 cup rice",
        "¾ cup curry sauce",
        "1 tbsp coconut cream"
      ],
      "prep": "Make one large pot and portion into 5 containers."
    },
    {
      "id": "d3",
      "week": 1,
      "name": "Korean Gochujang Tofu Bowls",
      "protein": "Tofu",
      "carb": "Brown Rice",
      "sauce": "Gochujang Sauce",
      "weightLoss": [
        "¾ cup crispy tofu",
        "½ cup brown rice",
        "1½ cups broccoli, cabbage and carrots",
        "2 tbsp Korean-Style Gochujang Sauce"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Gochujang Sauce",
        "¼ avocado",
        "1 tbsp sesame seeds"
      ],
      "prep": "Keep cucumber and sesame seeds separate until serving."
    },
    {
      "id": "d4",
      "week": 1,
      "name": "Vegan Mediterranean Chickpea Plates",
      "protein": "Chickpeas",
      "carb": "Quinoa",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "¾ cup chickpeas",
        "½ cup quinoa",
        "1½ cups cucumber, tomato, spinach and peppers",
        "2 tbsp Mediterranean Herb Sauce",
        "¼ cup hummus"
      ],
      "weightGain": [
        "1½ cups chickpeas",
        "1 cup quinoa",
        "1½ cups vegetables",
        "3 tbsp Mediterranean Herb Sauce",
        "½ cup hummus",
        "½ pita",
        "¼ avocado"
      ],
      "prep": "Store vegetables and sauce separately if possible."
    },
    {
      "id": "d5",
      "week": 1,
      "name": "Buffalo Tofu & Roasted Vegetable Bowls",
      "protein": "Tofu",
      "carb": "Potatoes",
      "sauce": "Buffalo Sauce",
      "weightLoss": [
        "¾ cup tofu",
        "½ cup roasted potatoes",
        "1½ cups broccoli/cauliflower",
        "2 tbsp Buffalo Sauce",
        "1 tbsp vegan ranch or avocado-based dressing"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup potatoes",
        "1½ cups vegetables",
        "⅓ cup Buffalo Sauce",
        "¼ avocado",
        "1 tbsp vegan ranch"
      ],
      "prep": "Keep buffalo sauce separate and add after reheating."
    },
    {
      "id": "d6",
      "week": 2,
      "name": "Vegan Peanut Noodle Bowls",
      "protein": "Tofu",
      "carb": "Rice Noodles",
      "sauce": "Spicy Peanut Sauce",
      "weightLoss": [
        "1 cup cooked rice noodles",
        "¾ cup tofu",
        "1½ cups cabbage, carrots and broccoli",
        "2 tbsp Spicy Peanut Sauce"
      ],
      "weightGain": [
        "1½ cups noodles",
        "1½ cups tofu",
        "1½ cups vegetables",
        "⅓ cup Spicy Peanut Sauce",
        "1 tbsp crushed peanuts"
      ],
      "prep": "Add a splash of water when reheating because the sauce thickens."
    },
    {
      "id": "d7",
      "week": 2,
      "name": "Lentil Shepherd's Pie",
      "protein": "Lentils",
      "carb": "Potatoes",
      "weightLoss": [
        "1½ cups lentil/vegetable filling",
        "½ cup mashed potatoes",
        "1 cup green beans or broccoli"
      ],
      "weightGain": [
        "1½–2 cups lentil filling",
        "1 cup mashed potatoes",
        "1 cup vegetables",
        "1 tbsp olive oil mixed into potatoes"
      ],
      "prep": "Bake one large casserole and divide into containers.",
      "note": "Sauce: Mediterranean Herb Sauce can be drizzled over the vegetables.",
      "sauce": "Mediterranean Herb Sauce"
    },
    {
      "id": "d8",
      "week": 2,
      "name": "Vegan Fajita Rice Bowls",
      "protein": "Tofu/Tempeh",
      "carb": "Brown Rice",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "¾ cup tofu or tempeh",
        "½ cup brown rice",
        "1½ cups peppers/onions",
        "½ cup black beans",
        "2 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1½ cups tofu/tempeh",
        "1 cup rice",
        "1½ cups peppers/onions",
        "¾ cup black beans",
        "⅓ cup Chipotle Lime Sauce",
        "¼ avocado",
        "2 tbsp vegan cheese"
      ],
      "prep": "Excellent five-container meal."
    },
    {
      "id": "d9",
      "week": 2,
      "name": "Creamy Garlic Mushroom Pasta",
      "protein": "Tofu",
      "carb": "Pasta",
      "sauce": "Creamy Cashew Sauce",
      "weightLoss": [
        "1 cup cooked whole-grain pasta",
        "¾ cup mushrooms",
        "½ cup tofu",
        "¼ cup Creamy Cashew Sauce",
        "1 cup spinach"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1 cup mushrooms",
        "1 cup tofu",
        "½ cup Creamy Cashew Sauce",
        "1 cup spinach",
        "1 tbsp olive oil"
      ],
      "note": "Alternative: Add Vegan Garlic Aioli to roasted vegetables on the side."
    },
    {
      "id": "d10",
      "week": 2,
      "name": "Vegan Mediterranean Stuffed Peppers",
      "protein": "Lentils",
      "carb": "Quinoa",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "2 stuffed pepper halves",
        "½ cup lentils",
        "¼ cup quinoa",
        "Spinach",
        "Tomato",
        "1 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "3–4 stuffed pepper halves",
        "1 cup lentils",
        "½ cup quinoa",
        "¼ cup vegan cheese",
        "2 tbsp Mediterranean Herb Sauce",
        "¼ avocado"
      ],
      "prep": "Bake 10–12 halves at once."
    },
    {
      "id": "d11",
      "week": 3,
      "name": "Thai-Inspired Tofu Vegetable Bowls",
      "protein": "Tofu",
      "carb": "Rice",
      "sauce": "Spicy Peanut Sauce",
      "weightLoss": [
        "¾ cup tofu",
        "½ cup jasmine or brown rice",
        "1½ cups broccoli, cabbage and carrots",
        "2 tbsp Spicy Peanut Sauce",
        "Lime"
      ],
      "weightGain": [
        "1½ cups tofu",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Spicy Peanut Sauce",
        "¼ avocado",
        "1 tbsp crushed peanuts"
      ]
    },
    {
      "id": "d12",
      "week": 3,
      "name": "Vegan Black Bean Enchilada Bowls",
      "protein": "Black Beans",
      "carb": "Brown Rice",
      "sauce": "Chipotle Lime Sauce",
      "weightLoss": [
        "¾ cup black beans",
        "½ cup brown rice",
        "1 cup peppers and corn",
        "½ cup salsa",
        "2 tbsp Chipotle Lime Sauce"
      ],
      "weightGain": [
        "1½ cups black beans",
        "1 cup rice",
        "1 cup peppers/corn",
        "½ cup salsa",
        "⅓ cup Chipotle Lime Sauce",
        "¼ avocado",
        "¼ cup vegan cheese"
      ]
    },
    {
      "id": "d13",
      "week": 3,
      "name": "Miso Ginger Tofu & Soba Noodles",
      "protein": "Tofu",
      "carb": "Soba",
      "sauce": "Miso Ginger Sauce",
      "weightLoss": [
        "1 cup cooked soba noodles",
        "¾ cup tofu",
        "1½ cups broccoli, cabbage and mushrooms",
        "2 tbsp Miso Ginger Sauce"
      ],
      "weightGain": [
        "1½ cups noodles",
        "1½ cups tofu",
        "1½ cups vegetables",
        "⅓ cup Miso Ginger Sauce",
        "1 tbsp sesame seeds",
        "1 tsp sesame oil"
      ],
      "prep": "Keep sauce separate if possible."
    },
    {
      "id": "d14",
      "week": 3,
      "name": "Vegan Lentil Bolognese",
      "protein": "Lentils",
      "carb": "Pasta",
      "sauce": "Classic Marinara",
      "weightLoss": [
        "1 cup whole-grain pasta",
        "¾ cup lentil Bolognese",
        "1 cup zucchini/spinach",
        "2 tbsp Classic Marinara"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1½ cups lentil Bolognese",
        "1 cup vegetables",
        "⅓ cup Classic Marinara",
        "2 tbsp nutritional yeast",
        "1 tbsp olive oil"
      ],
      "prep": "Make a large pot of lentil Bolognese and freeze extra portions."
    },
    {
      "id": "d15",
      "week": 3,
      "name": "Vegan BBQ-Style Jackfruit & Sweet Potato Bowl",
      "protein": "Jackfruit + Beans",
      "carb": "Sweet Potato",
      "sauce": "Sweet Chili Sauce",
      "weightLoss": [
        "1 cup shredded jackfruit",
        "½ medium sweet potato",
        "1 cup cabbage slaw",
        "½ cup black beans",
        "2 tbsp Sweet Chili Sauce"
      ],
      "weightGain": [
        "1½ cups jackfruit",
        "1 large sweet potato",
        "1 cup cabbage slaw",
        "¾ cup black beans",
        "⅓ cup Sweet Chili Sauce",
        "¼ avocado"
      ],
      "note": "You can substitute a homemade vegan BBQ sauce if desired."
    },
    {
      "id": "d16",
      "week": 4,
      "name": "Creamy Roasted Red Pepper Tofu Pasta",
      "protein": "Tofu",
      "carb": "Pasta",
      "sauce": "Roasted Red Pepper Sauce",
      "weightLoss": [
        "1 cup cooked pasta",
        "¾ cup tofu",
        "1 cup spinach",
        "¼ cup Roasted Red Pepper Sauce"
      ],
      "weightGain": [
        "1½ cups pasta",
        "1½ cups tofu",
        "1 cup spinach",
        "½ cup Roasted Red Pepper Sauce",
        "1 tbsp olive oil",
        "2 tbsp nutritional yeast"
      ]
    },
    {
      "id": "d17",
      "week": 4,
      "name": "Vegan Teriyaki Tempeh Stir-Fry",
      "protein": "Tempeh",
      "carb": "Brown Rice",
      "sauce": "Teriyaki Sauce",
      "weightLoss": [
        "¾ cup tempeh",
        "½ cup brown rice",
        "1½ cups broccoli, carrots and mushrooms",
        "2 tbsp Teriyaki Sauce"
      ],
      "weightGain": [
        "1½ cups tempeh",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Teriyaki Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ],
      "prep": "This one reheats particularly well."
    },
    {
      "id": "d18",
      "week": 4,
      "name": "Vegan White Bean & Potato Stew",
      "protein": "White Beans",
      "carb": "Potatoes",
      "sauce": "Mediterranean Herb Sauce",
      "weightLoss": [
        "1½ cups white bean/vegetable stew",
        "½ cup potatoes",
        "1 cup greens",
        "1 tbsp Mediterranean Herb Sauce"
      ],
      "weightGain": [
        "2 cups stew",
        "1 cup potatoes",
        "1 cup greens",
        "2 tbsp Mediterranean Herb Sauce",
        "1 slice whole-grain bread",
        "1 tbsp olive oil"
      ],
      "prep": "Make a large Dutch oven or slow-cooker batch."
    },
    {
      "id": "d19",
      "week": 4,
      "name": "Vegan Gochujang Tempeh & Rice",
      "protein": "Tempeh",
      "carb": "Rice",
      "sauce": "Gochujang Sauce",
      "weightLoss": [
        "¾ cup tempeh",
        "½ cup rice",
        "1½ cups cabbage, broccoli and carrots",
        "2 tbsp Gochujang Sauce"
      ],
      "weightGain": [
        "1½ cups tempeh",
        "1 cup rice",
        "1½ cups vegetables",
        "⅓ cup Gochujang Sauce",
        "1 tbsp sesame seeds",
        "¼ avocado"
      ]
    },
    {
      "id": "d20",
      "week": 4,
      "name": "Vegan Pesto White Bean & Potato Bowl",
      "protein": "White Beans",
      "carb": "Potatoes",
      "sauce": "Vegan Pesto",
      "weightLoss": [
        "¾ cup white beans",
        "½ cup roasted potatoes",
        "1½ cups broccoli, zucchini and spinach",
        "1 tbsp Vegan Pesto"
      ],
      "weightGain": [
        "1½ cups white beans",
        "1 cup potatoes",
        "1½ cups vegetables",
        "2 tbsp Vegan Pesto",
        "¼ avocado",
        "1 slice whole-grain bread"
      ]
    }
  ],
  "SNACKS": [
    {
      "id": "s1",
      "name": "Peanut Butter Energy Bites",
      "bulk": "12–20 bites",
      "storage": "7–10 days",
      "roles": [
        "Higher-calorie",
        "Freezer"
      ],
      "weightLoss": "1 bite + fruit",
      "weightGain": "2–3 bites + banana",
      "ingredients": [
        "1½ cups rolled oats",
        "½ cup natural peanut butter",
        "⅓ cup maple syrup",
        "¼ cup ground flaxseed",
        "¼ cup chia seeds",
        "2 tbsp hemp seeds",
        "1 tsp vanilla",
        "½ tsp cinnamon",
        "2–4 tbsp plant milk if needed"
      ],
      "directions": [
        "Mix everything together, chill for 20–30 minutes, then roll into balls."
      ],
      "note": "Excellent freezer snack."
    },
    {
      "id": "s2",
      "name": "Homemade Trail Mix",
      "bulk": "10–15 portions",
      "storage": "2–3 weeks",
      "roles": [
        "Higher-calorie"
      ],
      "weightLoss": "¼ cup",
      "weightGain": "½–¾ cup",
      "ingredients": [
        "2 cups almonds",
        "1 cup walnuts",
        "1 cup pumpkin seeds",
        "1 cup roasted chickpeas",
        "½ cup raisins",
        "½ cup dried cranberries",
        "½ cup unsweetened coconut"
      ],
      "directions": [
        "Mix and divide into 10 portions."
      ],
      "note": "Nuts and seeds make this very calorie-dense, so portioning is important."
    },
    {
      "id": "s3",
      "name": "Crispy Roasted Chickpeas",
      "bulk": "6–8 portions",
      "storage": "4–5 days",
      "roles": [
        "Higher-protein"
      ],
      "weightLoss": "½ cup",
      "weightGain": "¾–1 cup",
      "ingredients": [
        "4 cans chickpeas, drained/rinsed",
        "2 tbsp olive oil",
        "1 tsp smoked paprika",
        "1 tsp garlic powder",
        "1 tsp cumin",
        "½ tsp salt",
        "½ tsp black pepper",
        "Optional cayenne"
      ],
      "directions": [
        "Dry chickpeas thoroughly, toss with oil and seasoning, then roast at 400°F for approximately 30–40 minutes, shaking periodically."
      ]
    },
    {
      "id": "s4",
      "name": "Homemade Vegan Granola Bars",
      "bulk": "10–12 bars",
      "storage": "7–10 days",
      "roles": [
        "Higher-calorie",
        "Freezer"
      ],
      "weightLoss": "½–1 bar",
      "weightGain": "1–2 bars",
      "ingredients": [
        "2 cups rolled oats",
        "½ cup peanut butter",
        "⅓ cup maple syrup",
        "½ cup chopped almonds",
        "¼ cup pumpkin seeds",
        "¼ cup raisins",
        "2 tbsp chia seeds",
        "1 tsp cinnamon",
        "½ tsp vanilla",
        "2–4 tbsp plant milk"
      ],
      "directions": [
        "Mix, press firmly into a lined baking pan and refrigerate until firm. Cut into bars."
      ]
    },
    {
      "id": "s5",
      "name": "Vegan Banana Muffins",
      "bulk": "12 muffins",
      "storage": "4–5 days",
      "roles": [
        "Freezer"
      ],
      "weightLoss": "1 muffin",
      "weightGain": "2 muffins",
      "ingredients": [
        "3 ripe bananas",
        "1½ cups whole-wheat flour",
        "½ cup rolled oats",
        "½ cup plant milk",
        "¼ cup maple syrup",
        "2 tbsp ground flaxseed",
        "1 tsp baking powder",
        "½ tsp baking soda",
        "1 tsp cinnamon",
        "1 tsp vanilla",
        "¼ cup chopped walnuts"
      ],
      "directions": [
        "Bake at 350°F for approximately 18–22 minutes."
      ],
      "note": "Freezer: excellent."
    },
    {
      "id": "s6",
      "name": "Apple + Peanut Butter Snack Packs",
      "bulk": "5 portions",
      "storage": "3–4 days",
      "roles": [
        "Higher-volume"
      ],
      "weightLoss": "1 tbsp peanut butter",
      "weightGain": "2 tbsp peanut butter + small handful of walnuts",
      "ingredients": [
        "1 apple",
        "1–2 tbsp peanut butter",
        "Cinnamon"
      ],
      "directions": [
        "Prepare 5 containers, each with the ingredients above."
      ],
      "note": "Use lemon juice on sliced apples to reduce browning."
    },
    {
      "id": "s7",
      "name": "Hummus & Vegetable Cups",
      "bulk": "5–7 cups",
      "storage": "4–5 days",
      "roles": [
        "Higher-protein",
        "Higher-volume"
      ],
      "weightLoss": "¼ cup hummus + plenty of vegetables",
      "weightGain": "⅓–½ cup hummus + whole-grain pita",
      "ingredients": [
        "¼–⅓ cup hummus",
        "Carrots",
        "Cucumber",
        "Bell peppers",
        "Celery",
        "Cherry tomatoes"
      ],
      "directions": [
        "Prepare individual containers with the hummus and vegetables above."
      ],
      "note": "This is one of the easiest high-volume snacks in the group."
    },
    {
      "id": "s8",
      "name": "Chocolate Chia Pudding",
      "bulk": "5 portions",
      "storage": "4–5 days",
      "roles": [],
      "weightLoss": "1 serving topped with berries",
      "weightGain": "1 serving + 1 tbsp peanut butter + banana",
      "ingredients": [
        "3 tbsp chia seeds",
        "¾ cup unsweetened plant milk",
        "1 tbsp unsweetened cocoa powder",
        "½ banana",
        "1 tsp maple syrup",
        "½ tsp vanilla"
      ],
      "directions": [
        "Mix and refrigerate overnight."
      ],
      "note": "Ingredients are per serving; make 5 servings."
    },
    {
      "id": "s9",
      "name": "Homemade Popcorn Snack Bags",
      "bulk": "8–10 bags",
      "storage": "1–2 weeks",
      "roles": [
        "Higher-volume"
      ],
      "weightLoss": "3–4 cups popped popcorn",
      "weightGain": "4–5 cups + 1 tbsp pumpkin seeds or nuts",
      "ingredients": [
        "½ cup popcorn kernels",
        "1–2 tbsp olive oil",
        "Nutritional yeast",
        "Garlic powder",
        "Smoked paprika",
        "Salt"
      ],
      "directions": [
        "Make a large batch with the ingredients above.",
        "Divide into 8–10 bags."
      ],
      "note": "Very high-volume snack for relatively little food cost."
    },
    {
      "id": "s10",
      "name": "Sweet Potato Bites",
      "bulk": "10–15 portions",
      "storage": "4–5 days",
      "roles": [
        "Higher-volume"
      ],
      "weightLoss": "½ cup",
      "weightGain": "1 cup + 2 tbsp hummus or tahini",
      "ingredients": [
        "3 medium sweet potatoes",
        "2 tbsp olive oil",
        "Cinnamon",
        "Smoked paprika",
        "Garlic powder",
        "Salt"
      ],
      "directions": [
        "Cut into small cubes and roast at 400°F for 25–35 minutes."
      ],
      "note": "These can be eaten warm or cold."
    },
    {
      "id": "s11",
      "name": "Peanut Butter Banana Roll-Ups",
      "bulk": "5–7 portions",
      "storage": "2–3 days",
      "roles": [
        "Higher-calorie"
      ],
      "weightLoss": "½ roll-up",
      "weightGain": "1–2 roll-ups",
      "ingredients": [
        "1 small whole-grain tortilla",
        "1 tbsp peanut butter",
        "½ banana",
        "Cinnamon"
      ],
      "directions": [
        "Makes 5. For each: spread the tortilla with peanut butter, add banana and cinnamon.",
        "Roll tightly and slice into pieces."
      ],
      "note": "These are best prepared 1–2 days at a time rather than for an entire week."
    },
    {
      "id": "s12",
      "name": "Crispy Edamame",
      "bulk": "6–8 portions",
      "storage": "4–5 days",
      "roles": [
        "Higher-protein"
      ],
      "weightLoss": "½ cup",
      "weightGain": "1 cup",
      "ingredients": [
        "4 cups shelled frozen edamame",
        "1 tbsp olive oil",
        "Garlic powder",
        "Smoked paprika",
        "Black pepper",
        "Salt"
      ],
      "directions": [
        "Roast at 400°F for 25–30 minutes, stirring periodically."
      ],
      "note": "Edamame gives you a substantial plant-protein option rather than relying mostly on nuts or fruit."
    },
    {
      "id": "s13",
      "name": "Vegan Protein Brownie Bites",
      "bulk": "12–16 bites",
      "storage": "5–7 days",
      "roles": [
        "Higher-protein",
        "Freezer"
      ],
      "weightLoss": "1 bite",
      "weightGain": "2–3 bites",
      "ingredients": [
        "1 cup oat flour",
        "½ cup vegan protein powder",
        "½ cup peanut butter",
        "⅓ cup maple syrup",
        "¼ cup cocoa powder",
        "¼ cup plant milk",
        "1 tsp vanilla",
        "1 tbsp chia seeds"
      ],
      "directions": [
        "Mix, roll into balls and refrigerate."
      ]
    },
    {
      "id": "s14",
      "name": "Cinnamon Roasted Pumpkin Seeds",
      "bulk": "8–10 portions",
      "storage": "2–3 weeks",
      "roles": [
        "Higher-calorie"
      ],
      "weightLoss": "2 tbsp",
      "weightGain": "¼–½ cup",
      "ingredients": [
        "3 cups pumpkin seeds",
        "1 tbsp maple syrup",
        "1 tsp cinnamon",
        "½ tsp vanilla",
        "Pinch of salt"
      ],
      "directions": [
        "Roast at 325°F for approximately 12–15 minutes.",
        "Divide into 8–10 portions."
      ]
    },
    {
      "id": "s15",
      "name": "No-Bake Oatmeal Cookies",
      "bulk": "12–16 cookies",
      "storage": "7–10 days",
      "roles": [],
      "weightLoss": "1 cookie",
      "weightGain": "2 cookies",
      "ingredients": [
        "1½ cups rolled oats",
        "½ cup peanut butter",
        "⅓ cup maple syrup",
        "¼ cup ground flaxseed",
        "2 tbsp chia seeds",
        "1 tsp cinnamon",
        "1 tsp vanilla",
        "2–4 tbsp plant milk"
      ],
      "directions": [
        "Mix and form into cookies. Refrigerate until firm."
      ]
    },
    {
      "id": "s16",
      "name": "Frozen Banana Peanut Butter Bites",
      "bulk": "10–15 portions",
      "storage": "2–3 weeks",
      "roles": [
        "Higher-volume",
        "Freezer"
      ],
      "weightLoss": "2–3 pieces",
      "weightGain": "4–6 pieces",
      "ingredients": [
        "3 bananas",
        "¼ cup peanut butter",
        "2 tbsp chopped walnuts",
        "2 tbsp shredded coconut"
      ],
      "directions": [
        "Slice bananas, add peanut butter, sprinkle with toppings and freeze."
      ],
      "note": "Keep frozen in an airtight container."
    },
    {
      "id": "s17",
      "name": "White Bean Dip & Crackers",
      "bulk": "5–7 portions",
      "storage": "4–5 days",
      "roles": [
        "Higher-protein"
      ],
      "weightLoss": "¼ cup dip + vegetables",
      "weightGain": "½ cup dip + whole-grain crackers or pita",
      "ingredients": [
        "1 can cannellini beans",
        "2 tbsp lemon juice",
        "1 tbsp olive oil",
        "1 garlic clove",
        "½ tsp cumin",
        "Salt and pepper",
        "2–4 tbsp water"
      ],
      "directions": [
        "Blend all bean dip ingredients.",
        "Divide into 5 containers."
      ]
    },
    {
      "id": "s18",
      "name": "Homemade Vegan Snack Mix",
      "bulk": "10 portions",
      "storage": "2–3 weeks",
      "roles": [],
      "weightLoss": "¼ cup",
      "weightGain": "½–¾ cup",
      "ingredients": [
        "2 cups whole-grain cereal",
        "1 cup roasted chickpeas",
        "1 cup pumpkin seeds",
        "1 cup almonds",
        "½ cup pretzels",
        "½ cup dried cranberries",
        "½ cup coconut flakes"
      ],
      "directions": [
        "Mix and divide into 10 portions."
      ],
      "note": "You can change the seasonings to create different flavors each week."
    },
    {
      "id": "s19",
      "name": "Mini Vegan Protein Muffins",
      "bulk": "12–18 muffins",
      "storage": "4–5 days",
      "roles": [
        "Higher-protein",
        "Freezer"
      ],
      "weightLoss": "1–2 mini muffins",
      "weightGain": "3–4 mini muffins",
      "ingredients": [
        "1½ cups oat flour",
        "1 ripe banana",
        "½ cup vegan protein powder",
        "½ cup plant milk",
        "2 tbsp ground flax",
        "1 tsp baking powder",
        "1 tsp cinnamon",
        "1 tsp vanilla",
        "¼ cup blueberries"
      ],
      "directions": [
        "Bake at 350°F for approximately 15–18 minutes."
      ]
    },
    {
      "id": "s20",
      "name": "Date & Nut Energy Balls",
      "bulk": "15–20 balls",
      "storage": "7–10 days",
      "roles": [
        "Higher-calorie"
      ],
      "weightLoss": "1 ball + fruit",
      "weightGain": "2–3 balls + plant milk or smoothie",
      "ingredients": [
        "1½ cups pitted dates",
        "1 cup walnuts",
        "½ cup almonds",
        "¼ cup shredded coconut",
        "2 tbsp chia seeds",
        "1 tbsp cocoa powder",
        "½ tsp cinnamon",
        "1 tsp vanilla"
      ],
      "directions": [
        "Process until sticky, roll into balls and refrigerate."
      ]
    }
  ],
  "SAUCES": [
    {
      "id": "sa1",
      "name": "Creamy Sriracha Sauce",
      "section": "Spicy & Bold",
      "week": 1,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "1 cup vegan mayonnaise",
        "½ cup unsweetened plant milk",
        "⅓ cup sriracha",
        "2 tbsp fresh lime juice",
        "1 tbsp maple syrup",
        "2 cloves garlic, minced",
        "½ tsp smoked paprika",
        "¼ tsp salt"
      ],
      "directions": [
        "Whisk everything together until smooth.",
        "Add another tablespoon or two of plant milk if you want a thinner sauce."
      ],
      "pairings": [
        "Tofu",
        "Vegan burgers",
        "Fries",
        "Roasted potatoes",
        "Cauliflower",
        "Wraps",
        "Rice bowls"
      ]
    },
    {
      "id": "sa2",
      "name": "Spicy Peanut Sauce",
      "section": "Spicy & Bold",
      "week": 1,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "1 cup creamy natural peanut butter",
        "½ cup warm water",
        "¼ cup low-sodium soy sauce or tamari",
        "3 tbsp lime juice",
        "2 tbsp maple syrup",
        "1 tbsp rice vinegar",
        "1 tbsp sriracha or chili garlic sauce",
        "2 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "½ tsp sesame oil"
      ],
      "directions": [
        "Whisk peanut butter and warm water first.",
        "Add remaining ingredients.",
        "Whisk until smooth."
      ],
      "pairings": [
        "Noodles",
        "Tofu",
        "Tempeh",
        "Spring rolls",
        "Broccoli",
        "Cabbage",
        "Rice bowls"
      ],
      "note": "Meal-prep tip: The sauce thickens in the refrigerator. Stir in 1–2 tbsp water before serving."
    },
    {
      "id": "sa3",
      "name": "Buffalo Sauce",
      "section": "Spicy & Bold",
      "week": 1,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "✅",
      "ingredients": [
        "1¼ cups vegan hot sauce",
        "½ cup vegan butter, melted",
        "2 tbsp white vinegar",
        "1 tbsp maple syrup",
        "1 tsp garlic powder",
        "½ tsp onion powder",
        "¼ tsp smoked paprika",
        "¼ tsp salt"
      ],
      "directions": [
        "Melt vegan butter over low heat.",
        "Whisk in remaining ingredients.",
        "Continue whisking until completely combined."
      ],
      "pairings": [
        "Buffalo cauliflower",
        "Tofu",
        "Vegan chick'n",
        "Wraps",
        "Sandwiches",
        "Roasted potatoes"
      ],
      "note": "For extra heat: Add ½–1 tsp cayenne pepper."
    },
    {
      "id": "sa4",
      "name": "Chipotle Lime Sauce",
      "section": "Spicy & Bold",
      "week": 1,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "1 cup vegan mayonnaise",
        "½ cup unsweetened plant milk",
        "¼ cup fresh lime juice",
        "2–3 tbsp adobo sauce from canned chipotle peppers",
        "1 chipotle pepper, finely minced",
        "2 cloves garlic",
        "1 tbsp maple syrup",
        "½ tsp cumin",
        "½ tsp smoked paprika",
        "¼ tsp salt"
      ],
      "directions": [
        "Blend everything until smooth.",
        "Taste and adjust lime, salt, or chipotle."
      ],
      "pairings": [
        "Tacos",
        "Burrito bowls",
        "Black beans",
        "Roasted corn",
        "Potatoes",
        "Tofu",
        "Vegan fajitas"
      ],
      "note": "Heat tip: Start with 2 tbsp adobo sauce and add more for additional heat."
    },
    {
      "id": "sa5",
      "name": "Jalapeño Cilantro Sauce",
      "section": "Spicy & Bold",
      "week": 1,
      "yields": "~2 cups · 7 servings",
      "fridge": "3–4 days",
      "freezer": "❌",
      "ingredients": [
        "1 large ripe avocado",
        "1 cup fresh cilantro",
        "½ cup unsweetened plant milk",
        "¼ cup fresh lime juice",
        "1–2 jalapeños, seeded",
        "2 cloves garlic",
        "2 tbsp olive oil",
        "½ tsp cumin",
        "½ tsp salt",
        "2–4 tbsp water as needed"
      ],
      "directions": [
        "Add everything to a blender or food processor.",
        "Blend until completely smooth.",
        "Add water gradually until desired consistency."
      ],
      "pairings": [
        "Tacos",
        "Rice bowls",
        "Black beans",
        "Roasted vegetables",
        "Potatoes",
        "Tofu"
      ],
      "note": "Meal-prep note: Because of the avocado, make half the batch twice during the week for best color and freshness."
    },
    {
      "id": "sa6",
      "name": "Classic Tahini Lemon Sauce",
      "section": "Creamy & Rich",
      "week": 2,
      "yields": "~2¼ cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "1 cup tahini",
        "¾ cup cold water",
        "⅓ cup fresh lemon juice",
        "2 cloves garlic, minced",
        "1 tbsp maple syrup",
        "½ tsp ground cumin",
        "½ tsp salt",
        "¼ tsp black pepper"
      ],
      "directions": [
        "Whisk tahini and lemon juice together.",
        "Slowly add cold water.",
        "Add garlic, maple syrup, cumin, salt, and pepper.",
        "Adjust water to desired consistency."
      ],
      "pairings": [
        "Falafel",
        "Chickpeas",
        "Roasted vegetables",
        "Potatoes",
        "Quinoa",
        "Rice bowls",
        "Tofu"
      ],
      "match": "Tahini Lemon Sauce",
      "note": "Meal-prep tip: It thickens in the refrigerator. Add a splash of water before serving."
    },
    {
      "id": "sa7",
      "name": "Creamy Cashew Sauce",
      "section": "Creamy & Rich",
      "week": 2,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "✅",
      "ingredients": [
        "1½ cups raw unsalted cashews",
        "¾ cup water",
        "¼ cup nutritional yeast",
        "2 tbsp fresh lemon juice",
        "2 cloves garlic",
        "½ tsp onion powder",
        "½ tsp salt",
        "¼ tsp black pepper",
        "1 tbsp olive oil"
      ],
      "directions": [
        "Soak cashews in hot water for 30 minutes or room-temperature water for 4 hours.",
        "Drain and rinse.",
        "Blend all ingredients until completely smooth.",
        "Add additional water if necessary."
      ],
      "pairings": [
        "Pasta",
        "Roasted vegetables",
        "Potatoes",
        "Broccoli",
        "Tofu",
        "Grain bowls"
      ],
      "note": "Flavor variation: Add ½ tsp smoked paprika."
    },
    {
      "id": "sa8",
      "name": "Vegan Garlic Aioli",
      "section": "Creamy & Rich",
      "week": 2,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "1½ cups vegan mayonnaise",
        "¼ cup unsweetened plant milk",
        "¼ cup fresh lemon juice",
        "6 cloves roasted garlic",
        "1 tbsp Dijon mustard",
        "1 tsp garlic powder",
        "½ tsp salt",
        "¼ tsp black pepper"
      ],
      "directions": [
        "Roast garlic until soft and lightly browned.",
        "Mash garlic into a paste.",
        "Whisk everything together.",
        "Refrigerate for at least 30 minutes before serving."
      ],
      "pairings": [
        "Vegan burgers",
        "Sandwiches",
        "Wraps",
        "Fries",
        "Roasted potatoes",
        "Cauliflower",
        "Tofu"
      ],
      "match": "Garlic Aioli",
      "note": "Garlic upgrade: Use 8 cloves for a stronger garlic flavor."
    },
    {
      "id": "sa9",
      "name": "Avocado Lime Crema",
      "section": "Creamy & Rich",
      "week": 2,
      "yields": "~2 cups · 7 servings",
      "fridge": "3–4 days",
      "freezer": "❌",
      "ingredients": [
        "2 large ripe avocados",
        "½ cup unsweetened plant milk",
        "⅓ cup fresh lime juice",
        "½ cup fresh cilantro",
        "2 cloves garlic",
        "1 jalapeño, seeded",
        "½ tsp cumin",
        "½ tsp salt",
        "2 tbsp olive oil",
        "2–4 tbsp water as needed"
      ],
      "directions": [
        "Add ingredients to a blender.",
        "Blend until smooth.",
        "Add water gradually until creamy.",
        "Adjust lime and salt to taste."
      ],
      "pairings": [
        "Tacos",
        "Burritos",
        "Rice bowls",
        "Black beans",
        "Roasted vegetables",
        "Potatoes",
        "Tofu"
      ],
      "note": "Storage: Make half the batch twice per week. Best used within 3–4 days."
    },
    {
      "id": "sa10",
      "name": "Cilantro-Lime Cashew Sauce",
      "section": "Creamy & Rich",
      "week": 2,
      "yields": "~2¼ cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "✅",
      "ingredients": [
        "1½ cups raw unsalted cashews",
        "¾ cup water",
        "1 cup fresh cilantro",
        "¼ cup fresh lime juice",
        "2 cloves garlic",
        "1 tbsp olive oil",
        "½ tsp cumin",
        "½ tsp salt",
        "¼ tsp black pepper",
        "1 tbsp maple syrup"
      ],
      "directions": [
        "Soak cashews in hot water for 30 minutes.",
        "Drain and rinse.",
        "Blend everything until smooth.",
        "Add water as needed."
      ],
      "pairings": [
        "Tofu",
        "Tempeh",
        "Rice",
        "Black beans",
        "Roasted vegetables",
        "Quinoa",
        "Tacos",
        "Burrito bowls"
      ]
    },
    {
      "id": "sa11",
      "name": "Classic Marinara Sauce",
      "section": "Italian & Mediterranean",
      "week": 3,
      "yields": "~2½ cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "✅",
      "ingredients": [
        "1 can (28 oz) crushed tomatoes",
        "1 small yellow onion, finely diced",
        "4 cloves garlic, minced",
        "2 tbsp olive oil",
        "1 tsp dried oregano",
        "1 tsp dried basil",
        "½ tsp onion powder",
        "½ tsp salt",
        "¼ tsp black pepper",
        "1 tsp maple syrup (optional)",
        "¼ tsp red pepper flakes (optional)"
      ],
      "directions": [
        "Heat olive oil.",
        "Sauté onion for 4–5 minutes.",
        "Add garlic and cook 30–60 seconds.",
        "Add tomatoes and seasonings.",
        "Simmer uncovered 20–30 minutes."
      ],
      "pairings": [
        "Pasta",
        "Vegan meatballs",
        "Eggplant",
        "Zucchini",
        "Tofu",
        "Stuffed peppers",
        "Lasagna"
      ],
      "match": "Classic Marinara",
      "note": "Freezer: Excellent. Freeze individual portions for up to about 3 months."
    },
    {
      "id": "sa12",
      "name": "Vegan Pesto",
      "section": "Italian & Mediterranean",
      "week": 3,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "✅",
      "ingredients": [
        "3 cups fresh basil leaves, packed",
        "½ cup raw cashews or pine nuts",
        "½ cup extra-virgin olive oil",
        "¼ cup nutritional yeast",
        "3 cloves garlic",
        "2 tbsp fresh lemon juice",
        "½ tsp salt",
        "¼ tsp black pepper",
        "2–4 tbsp water as needed"
      ],
      "directions": [
        "Add basil, nuts, nutritional yeast, garlic, lemon juice, salt, and pepper to a food processor.",
        "Pulse several times.",
        "Slowly add olive oil.",
        "Add water as needed."
      ],
      "pairings": [
        "Pasta",
        "Potatoes",
        "Tofu",
        "Sandwiches",
        "Wraps",
        "Roasted vegetables",
        "Grain bowls"
      ],
      "note": "Storage tip: Add a thin layer of olive oil to the surface before refrigerating."
    },
    {
      "id": "sa13",
      "name": "Roasted Red Pepper Sauce",
      "section": "Italian & Mediterranean",
      "week": 3,
      "yields": "~2¼ cups · 7 servings",
      "fridge": "4–5 days",
      "freezer": "✅",
      "ingredients": [
        "2 large roasted red bell peppers or 1½ cups jarred roasted peppers",
        "¾ cup raw cashews",
        "½ cup unsweetened plant milk",
        "2 cloves garlic",
        "2 tbsp nutritional yeast",
        "2 tbsp lemon juice",
        "1 tbsp olive oil",
        "½ tsp smoked paprika",
        "½ tsp salt",
        "¼ tsp black pepper"
      ],
      "directions": [
        "Soak cashews in hot water for 30 minutes.",
        "Drain and rinse.",
        "Blend all ingredients until smooth.",
        "Warm gently in a saucepan if using as pasta sauce."
      ],
      "pairings": [
        "Pasta",
        "Gnocchi",
        "Tofu",
        "Rice bowls",
        "Roasted vegetables",
        "Potatoes"
      ],
      "note": "Flavor upgrade: Add ½ tsp Italian seasoning."
    },
    {
      "id": "sa14",
      "name": "Creamy Tomato Sauce",
      "section": "Italian & Mediterranean",
      "week": 3,
      "yields": "~2¼ cups · 7 servings",
      "fridge": "4–5 days",
      "freezer": "✅",
      "ingredients": [
        "1½ cups tomato sauce",
        "½ cup unsweetened plant milk",
        "½ cup cashew cream",
        "3 cloves garlic, minced",
        "2 tbsp nutritional yeast",
        "1 tbsp olive oil",
        "1 tsp dried basil",
        "½ tsp dried oregano",
        "½ tsp salt",
        "¼ tsp black pepper",
        "¼ tsp red pepper flakes (optional)"
      ],
      "directions": [
        "Heat olive oil.",
        "Sauté garlic for 30 seconds.",
        "Add tomato sauce and seasonings.",
        "Simmer for 10 minutes.",
        "Stir in plant milk and cashew cream.",
        "Add nutritional yeast.",
        "Simmer another 3–5 minutes."
      ],
      "pairings": [
        "Pasta",
        "Gnocchi",
        "Vegan meatballs",
        "Tofu",
        "Mushrooms",
        "Zucchini"
      ],
      "note": "Quick Cashew Cream: blend ½ cup soaked cashews with ½ cup water until completely smooth."
    },
    {
      "id": "sa15",
      "name": "Mediterranean Herb Sauce",
      "section": "Italian & Mediterranean",
      "week": 3,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "¾ cup extra-virgin olive oil",
        "½ cup fresh parsley, finely chopped",
        "¼ cup fresh basil, chopped",
        "¼ cup fresh cilantro, chopped",
        "¼ cup fresh lemon juice",
        "4 cloves garlic, minced",
        "1 tbsp red wine vinegar",
        "1 tsp dried oregano",
        "½ tsp salt",
        "½ tsp black pepper",
        "¼ tsp red pepper flakes (optional)"
      ],
      "directions": [
        "Finely chop herbs and garlic.",
        "Combine everything.",
        "Whisk thoroughly.",
        "Refrigerate for at least 30 minutes."
      ],
      "pairings": [
        "Chickpeas",
        "Potatoes",
        "Tofu",
        "Tempeh",
        "Quinoa",
        "Rice",
        "Roasted vegetables",
        "Salads",
        "Pita"
      ]
    },
    {
      "id": "sa16",
      "name": "Teriyaki Sauce",
      "section": "Asian-inspired",
      "week": 4,
      "yields": "~2¼ cups · 7 servings",
      "fridge": "7–10 days",
      "freezer": "✅",
      "ingredients": [
        "1 cup low-sodium soy sauce or tamari",
        "½ cup water",
        "¼ cup maple syrup",
        "2 tbsp rice vinegar",
        "1 tbsp toasted sesame oil",
        "1 tbsp fresh ginger, grated",
        "3 cloves garlic, minced",
        "2 tbsp cornstarch",
        "3 tbsp cold water"
      ],
      "directions": [
        "Combine soy sauce, water, maple syrup, vinegar, sesame oil, ginger, and garlic.",
        "Bring to a gentle simmer.",
        "Mix cornstarch with 3 tbsp cold water.",
        "Slowly whisk into sauce.",
        "Simmer 2–3 minutes until thickened.",
        "Cool before storing."
      ],
      "pairings": [
        "Tofu",
        "Tempeh",
        "Mushrooms",
        "Broccoli",
        "Carrots",
        "Rice",
        "Noodles",
        "Edamame"
      ],
      "note": "Meal-prep tip: Add a tablespoon of water if it becomes too thick."
    },
    {
      "id": "sa17",
      "name": "Sesame Ginger Sauce",
      "section": "Asian-inspired",
      "week": 4,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "¾ cup low-sodium soy sauce or tamari",
        "½ cup water",
        "¼ cup rice vinegar",
        "3 tbsp maple syrup",
        "2 tbsp toasted sesame oil",
        "2 tbsp fresh ginger, grated",
        "3 cloves garlic, minced",
        "1 tbsp tahini",
        "1 tbsp lime juice",
        "1 tsp red pepper flakes (optional)",
        "1 tbsp sesame seeds"
      ],
      "directions": [
        "Combine all ingredients except sesame seeds.",
        "Whisk thoroughly.",
        "Stir in sesame seeds.",
        "Refrigerate for 30 minutes before serving."
      ],
      "pairings": [
        "Noodles",
        "Tofu",
        "Broccoli",
        "Cabbage",
        "Carrots",
        "Edamame",
        "Rice bowls"
      ],
      "note": "Creamier version: Increase tahini to 2–3 tbsp."
    },
    {
      "id": "sa18",
      "name": "Sweet Chili Sauce",
      "section": "Asian-inspired",
      "week": 4,
      "yields": "~2 cups · 7 servings",
      "fridge": "7–10 days",
      "freezer": "✅",
      "ingredients": [
        "1 cup water",
        "½ cup rice vinegar",
        "½ cup maple syrup",
        "¼ cup red chili paste or sambal oelek",
        "4 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "2 tbsp cornstarch",
        "3 tbsp cold water",
        "½ tsp salt"
      ],
      "directions": [
        "Combine water, vinegar, maple syrup, chili paste, garlic, ginger, and salt.",
        "Bring to a gentle simmer.",
        "Mix cornstarch and cold water.",
        "Whisk into sauce.",
        "Simmer 2–3 minutes.",
        "Cool before storing."
      ],
      "pairings": [
        "Spring rolls",
        "Tofu",
        "Cauliflower",
        "Vegan chick'n",
        "Rice",
        "Vegetables",
        "Noodles"
      ],
      "note": "Heat levels: mild 2–3 tbsp chili paste · medium ¼ cup · hot ⅓ cup."
    },
    {
      "id": "sa19",
      "name": "Korean-Style Gochujang Sauce",
      "section": "Asian-inspired",
      "week": 4,
      "yields": "~2 cups · 7 servings",
      "fridge": "7–10 days",
      "freezer": "✅",
      "ingredients": [
        "¾ cup gochujang",
        "½ cup water",
        "¼ cup low-sodium soy sauce",
        "¼ cup maple syrup",
        "2 tbsp rice vinegar",
        "1 tbsp toasted sesame oil",
        "3 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "1 tbsp sesame seeds",
        "2 tbsp lime juice"
      ],
      "directions": [
        "Combine all ingredients in a saucepan.",
        "Bring to a gentle simmer.",
        "Cook 5–7 minutes.",
        "Stir occasionally.",
        "Cool before refrigerating."
      ],
      "pairings": [
        "Crispy tofu",
        "Mushrooms",
        "Rice",
        "Noodles",
        "Broccoli",
        "Cabbage",
        "Edamame",
        "Roasted vegetables"
      ],
      "match": "Gochujang Sauce",
      "note": "Meal Bowl: Crispy tofu + rice + broccoli + shredded carrots + cucumber + gochujang sauce + sesame seeds"
    },
    {
      "id": "sa20",
      "name": "Miso Ginger Sauce",
      "section": "Asian-inspired",
      "week": 4,
      "yields": "~2 cups · 7 servings",
      "fridge": "5–7 days",
      "freezer": "⚠",
      "ingredients": [
        "½ cup white miso",
        "½ cup warm water",
        "¼ cup rice vinegar",
        "¼ cup maple syrup",
        "2 tbsp toasted sesame oil",
        "2 tbsp fresh ginger, grated",
        "3 cloves garlic, minced",
        "2 tbsp lime juice",
        "2 tbsp tahini",
        "¼ tsp black pepper",
        "1–2 tbsp water as needed"
      ],
      "directions": [
        "Whisk miso and warm water until smooth.",
        "Add vinegar, maple syrup, sesame oil, ginger, garlic, lime juice, and tahini.",
        "Whisk until smooth.",
        "Add additional water as needed."
      ],
      "pairings": [
        "Tofu",
        "Tempeh",
        "Noodles",
        "Roasted vegetables",
        "Broccoli",
        "Mushrooms",
        "Cabbage",
        "Rice bowls"
      ]
    }
  ]
};
