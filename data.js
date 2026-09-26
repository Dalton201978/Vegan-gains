/* =====================================================================
   Sprout Ledger — meal data
   index.html reads everything from window.MEAL_DATA, so extending the
   system (more weeks, snacks, sauces) means editing this file only.

   Schema
   ------
   BREAKFASTS / LUNCHES / DINNERS: {
     id, week, name, protein, carb, sauce,
     weightLoss: [ingredient lines], weightGain: [ingredient lines],
     prep?, note?, incomplete?   // incomplete: true hides ingredients
   }
   Ingredient lines that contain a sauce name (e.g. "2 tbsp Peanut Sauce")
   link to that sauce automatically.

   SNACKS: { id, name, bulk, storage, weightLoss, weightGain,
             ingredients: [], directions: [], note? }
   SAUCES: { id, name, section, yields, fridge, freezer,
             ingredients: [], directions: [], pairings: [], note? }
   PORTION_FRAMEWORK: { weightLoss: {protein, starch, vegetables, sauce, fats},
                        weightGain: {...} }
   CORE_INGREDIENTS: { protein: [], carb: [], vegetable: [], fat: [] }
   ===================================================================== */
window.MEAL_DATA = {
  PORTION_FRAMEWORK: {
    weightLoss: { protein: '4–6 oz', starch: '½ cup', vegetables: '2 cups', sauce: '1–2 tbsp', fats: '½ tbsp' },
    weightGain: { protein: '6–8 oz', starch: '1–1½ cups', vegetables: '1–1½ cups', sauce: '2–3 tbsp', fats: '1–2 tbsp' }
  },

  CORE_INGREDIENTS: {
    protein:   ['Extra-firm tofu', 'Tempeh', 'Chickpeas', 'Black beans', 'Lentils', 'Edamame', 'Seitan'],
    carb:      ['Brown rice', 'Quinoa', 'Sweet potato', 'Whole-wheat pasta', 'Rolled oats', 'Whole-wheat tortillas'],
    vegetable: ['Broccoli', 'Spinach', 'Bell peppers', 'Zucchini', 'Carrots', 'Cauliflower', 'Kale'],
    fat:       ['Avocado', 'Tahini', 'Peanut butter', 'Almonds', 'Chia seeds', 'Olive oil']
  },

  BREAKFASTS: [
    { id: 'b1', week: 1, name: 'Tofu Scramble Burrito', protein: 'Tofu', carb: 'Tortilla', sauce: 'Chipotle Cashew Crema',
      weightLoss: ['4 oz extra-firm tofu, crumbled', '1 small whole-wheat tortilla', '1 cup spinach', '½ bell pepper, diced', '1 tbsp Chipotle Cashew Crema'],
      weightGain: ['7 oz extra-firm tofu, crumbled', '1 large whole-wheat tortilla', '½ cup black beans', '1 cup spinach', '½ avocado', '2 tbsp Chipotle Cashew Crema'],
      prep: 'Scramble a full block of tofu with turmeric and cumin on Sunday; wrap burritos in foil and freeze. Reheat 2 min in the microwave or 15 min at 375°F.' },
    { id: 'b2', week: 1, name: 'Peanut Butter Protein Oats', protein: 'Protein powder', carb: 'Oats',
      weightLoss: ['½ cup rolled oats', '½ scoop vegan protein powder', '½ tbsp peanut butter', '½ banana', '1 cup unsweetened soy milk'],
      weightGain: ['1 cup rolled oats', '1 scoop vegan protein powder', '2 tbsp peanut butter', '1 banana', '1 tbsp chia seeds', '1½ cups soy milk'],
      prep: 'Portion dry oats, protein and chia into 5 jars. Add milk the night before for overnight oats, or cook 2 min.' },
    { id: 'b3', week: 1, name: 'Chickpea Flour Veggie Frittata', protein: 'Chickpea flour', carb: 'Toast',
      weightLoss: ['½ cup chickpea flour', '1 cup zucchini and spinach', '1 slice whole-grain toast'],
      weightGain: ['¾ cup chickpea flour', '1 cup zucchini and spinach', '2 slices whole-grain toast', '1 tbsp olive oil'],
      prep: 'Bake as a sheet-pan frittata (400°F, 25 min) and cut into 5 squares. Keeps 5 days in the fridge.' },
    { id: 'b4', week: 1, name: 'Tempeh Breakfast Hash', protein: 'Tempeh', carb: 'Sweet potato', sauce: 'Smoky Maple Glaze',
      weightLoss: ['3 oz tempeh, cubed', '½ cup sweet potato, cubed', '1 cup kale', '1 tbsp Smoky Maple Glaze'],
      weightGain: ['5 oz tempeh, cubed', '1½ cups sweet potato, cubed', '1 cup kale', '1 tbsp olive oil', '2 tbsp Smoky Maple Glaze'],
      prep: 'Roast tempeh and sweet potato on one tray (425°F, 25 min). Toss with the glaze after roasting so it doesn\'t burn.' },
    { id: 'b5', week: 1, name: 'Berry Chia Smoothie Pack', protein: 'Soy milk', carb: 'Fruit',
      weightLoss: ['1 cup frozen berries', '1 tbsp chia seeds', '1 cup spinach', '1 cup soy milk'],
      weightGain: ['1½ cups frozen berries', '1 banana', '2 tbsp chia seeds', '1 scoop vegan protein powder', '2 tbsp almond butter', '1½ cups soy milk'],
      prep: 'Freeze everything except the milk in 5 zip bags. Blend straight from frozen.' }
  ],

  LUNCHES: [
    { id: 'l1', week: 1, name: 'Peanut Tofu Noodle Bowl', protein: 'Tofu', carb: 'Noodles', sauce: 'Peanut Sauce',
      weightLoss: ['5 oz baked tofu', '½ cup soba noodles', '2 cups shredded cabbage and carrot', '1 tbsp Peanut Sauce'],
      weightGain: ['7 oz baked tofu', '1½ cups soba noodles', '1 cup shredded cabbage and carrot', '½ cup edamame', '3 tbsp Peanut Sauce'],
      prep: 'Keep sauce in a separate small container so noodles don\'t go soggy. Eat cold or warm.' },
    { id: 'l2', week: 1, name: 'Mediterranean Chickpea Box', protein: 'Chickpeas', carb: 'Quinoa', sauce: 'Lemon Tahini Sauce',
      weightLoss: ['¾ cup chickpeas', '½ cup quinoa', '2 cups cucumber, tomato and red onion', '1 tbsp Lemon Tahini Sauce'],
      weightGain: ['1¼ cups chickpeas', '1 cup quinoa', '1 cup cucumber, tomato and red onion', '1 whole-wheat pita', '3 tbsp Lemon Tahini Sauce'] },
    { id: 'l3', week: 1, name: 'Black Bean Burrito Bowl', protein: 'Black beans', carb: 'Brown rice', sauce: 'Cilantro Lime Sauce',
      weightLoss: ['¾ cup black beans', '½ cup brown rice', '1½ cups peppers and onions', '½ cup corn salsa', '1 tbsp Cilantro Lime Sauce'],
      weightGain: ['1¼ cups black beans', '1½ cups brown rice', '1 cup peppers and onions', '½ avocado', '3 tbsp Cilantro Lime Sauce'] },
    { id: 'l4', week: 1, name: 'Teriyaki Tempeh Rice Box', protein: 'Tempeh', carb: 'Brown rice', sauce: 'Ginger Teriyaki',
      weightLoss: ['4 oz tempeh', '½ cup brown rice', '2 cups steamed broccoli', '1 tbsp Ginger Teriyaki'],
      weightGain: ['6 oz tempeh', '1½ cups brown rice', '1½ cups steamed broccoli', '1 tbsp sesame seeds', '3 tbsp Ginger Teriyaki'] },
    { id: 'l5', week: 1, name: 'Lentil Pesto Pasta Salad', protein: 'Lentils', carb: 'Pasta', sauce: 'Basil Walnut Pesto',
      weightLoss: ['¾ cup cooked lentils', '½ cup whole-wheat pasta', '2 cups spinach and cherry tomatoes', '1 tbsp Basil Walnut Pesto'],
      weightGain: ['1¼ cups cooked lentils', '1½ cups whole-wheat pasta', '1 cup spinach and cherry tomatoes', '3 tbsp Basil Walnut Pesto'] }
  ],

  DINNERS: [
    { id: 'd1', week: 1, name: 'Sheet-Pan Tofu & Broccoli with Teriyaki', protein: 'Tofu', carb: 'Brown rice', sauce: 'Ginger Teriyaki',
      weightLoss: ['6 oz extra-firm tofu', '½ cup brown rice', '2 cups broccoli', '2 tbsp Ginger Teriyaki'],
      weightGain: ['8 oz extra-firm tofu', '1½ cups brown rice', '1½ cups broccoli', '1 tbsp sesame oil', '3 tbsp Ginger Teriyaki'],
      prep: 'Press tofu 20 min, toss in cornstarch, roast 425°F for 30 min alongside the broccoli.' },
    { id: 'd2', week: 1, name: 'Coconut Chickpea Curry', protein: 'Chickpeas', carb: 'Brown rice',
      weightLoss: ['1 cup chickpeas', '½ cup brown rice', '2 cups spinach and cauliflower', '¼ cup light coconut milk', '1 tbsp curry paste'],
      weightGain: ['1½ cups chickpeas', '1½ cups brown rice', '1½ cups spinach and cauliflower', '½ cup full-fat coconut milk', '1 naan'],
      prep: 'Big-batch in one pot; freezes well for up to 3 months without the rice.' },
    { id: 'd3', week: 1, name: 'Lentil Bolognese', protein: 'Lentils', carb: 'Pasta',
      weightLoss: ['1 cup lentil bolognese', '½ cup whole-wheat pasta', '2 cups zucchini noodles'],
      weightGain: ['1½ cups lentil bolognese', '2 cups whole-wheat pasta', '1 cup zucchini', '2 tbsp nutritional yeast', '1 tbsp olive oil'],
      prep: 'Simmer 2 cups dry lentils with crushed tomatoes, carrot, celery and onion for 35 min. Makes ~8 servings.' },
    { id: 'd4', week: 1, name: 'BBQ Tempeh Sweet Potato Plate', protein: 'Tempeh', carb: 'Sweet potato', sauce: 'Smoky Maple Glaze',
      weightLoss: ['4 oz tempeh', '½ cup sweet potato', '2 cups green beans', '2 tbsp Smoky Maple Glaze'],
      weightGain: ['7 oz tempeh', '1 large sweet potato', '1 cup green beans', '1 tbsp olive oil', '3 tbsp Smoky Maple Glaze'] },
    { id: 'd5', week: 1, name: 'Black Bean Enchilada Bake', protein: 'Black beans', carb: 'Tortilla', sauce: 'Chipotle Cashew Crema',
      weightLoss: ['1 cup black beans', '2 corn tortillas', '1½ cups peppers and spinach', '½ cup enchilada sauce', '1 tbsp Chipotle Cashew Crema'],
      weightGain: ['1½ cups black beans', '3 corn tortillas', '½ cup brown rice', '1 cup peppers and spinach', '½ avocado', '3 tbsp Chipotle Cashew Crema'],
      prep: 'Assemble in a 9×13 pan, bake 375°F for 25 min, cut into 5 portions.' }
  ],

  SNACKS: [
    { id: 's1', name: 'Roasted Chickpeas', bulk: '4 cups', storage: '5 days',
      weightLoss: '⅓ cup', weightGain: '¾ cup',
      ingredients: ['3 cans chickpeas, drained and dried', '1 tbsp olive oil', '1 tsp smoked paprika', '½ tsp salt'],
      directions: ['Pat chickpeas very dry.', 'Toss with oil and spices.', 'Roast 400°F for 35–40 min, shaking halfway.', 'Cool completely before storing loosely covered.'] },
    { id: 's2', name: 'Edamame Hummus & Veg', bulk: '3 cups', storage: '5 days',
      weightLoss: '¼ cup + 1 cup veg', weightGain: '½ cup + pita',
      ingredients: ['2 cups shelled edamame', '¼ cup tahini', '2 lemons, juiced', '2 cloves garlic', 'Carrots, cucumber and peppers for dipping'],
      directions: ['Blend everything except veg until smooth, loosening with water.', 'Portion into small containers with cut veg.'] },
    { id: 's3', name: 'Peanut Butter Protein Balls', bulk: '20 balls', storage: '3 months frozen',
      weightLoss: '1 ball', weightGain: '3 balls',
      ingredients: ['1½ cups rolled oats', '¾ cup peanut butter', '½ cup vegan protein powder', '⅓ cup maple syrup', '2 tbsp chia seeds'],
      directions: ['Mix everything in a bowl.', 'Roll into 20 balls.', 'Chill 30 min; freeze the extras.'] },
    { id: 's4', name: 'Baked Tofu Bites', bulk: '2 blocks', storage: '5 days',
      weightLoss: '3 oz', weightGain: '6 oz',
      ingredients: ['2 blocks extra-firm tofu', '2 tbsp soy sauce', '1 tbsp cornstarch', '1 tsp garlic powder'],
      directions: ['Press and cube tofu.', 'Toss in soy sauce, then cornstarch and garlic powder.', 'Bake 425°F for 25 min.'] },
    { id: 's5', name: 'Trail Mix Packs', bulk: '10 packs', storage: '1 month',
      weightLoss: '2 tbsp', weightGain: '½ cup',
      ingredients: ['1 cup almonds', '1 cup walnuts', '½ cup pumpkin seeds', '½ cup raisins', '¼ cup dark chocolate chips'],
      directions: ['Combine and divide into small bags.'],
      note: 'Calorie-dense by design — the easiest add-on for weight gain.' },
    { id: 's6', name: 'Chocolate Chia Pudding', bulk: '5 jars', storage: '5 days',
      weightLoss: '½ jar', weightGain: '1 jar + granola',
      ingredients: ['½ cup chia seeds', '2 cups soy milk', '2 tbsp cocoa powder', '2 tbsp maple syrup'],
      directions: ['Whisk everything together.', 'Rest 10 min, whisk again, divide into jars.', 'Chill overnight.'] }
  ],

  SAUCES: [
    { id: 'sa1', name: 'Peanut Sauce', section: 'Asian-inspired', yields: '1½ cups', fridge: '7 days', freezer: '2 months',
      ingredients: ['½ cup peanut butter', '3 tbsp soy sauce', '2 tbsp rice vinegar', '1 tbsp maple syrup', '1 tsp sriracha', 'Warm water to thin'],
      directions: ['Whisk everything except water.', 'Add water a tablespoon at a time until pourable.'],
      pairings: ['Tofu', 'Noodles', 'Cabbage slaw', 'Spring rolls'] },
    { id: 'sa2', name: 'Ginger Teriyaki', section: 'Asian-inspired', yields: '1 cup', fridge: '10 days', freezer: '3 months',
      ingredients: ['½ cup soy sauce', '¼ cup maple syrup', '2 tbsp rice vinegar', '1 tbsp fresh ginger, grated', '2 cloves garlic', '1 tbsp cornstarch'],
      directions: ['Simmer everything except cornstarch for 3 min.', 'Whisk cornstarch with 2 tbsp water, stir in, cook until glossy.'],
      pairings: ['Tempeh', 'Tofu', 'Broccoli', 'Brown rice'] },
    { id: 'sa3', name: 'Lemon Tahini Sauce', section: 'Mediterranean', yields: '1 cup', fridge: '7 days', freezer: 'Not recommended',
      ingredients: ['½ cup tahini', '2 lemons, juiced', '1 clove garlic', '½ tsp salt', 'Cold water to thin'],
      directions: ['Whisk tahini, lemon, garlic and salt — it will seize up.', 'Keep adding cold water until smooth and creamy.'],
      pairings: ['Chickpeas', 'Quinoa', 'Roasted cauliflower', 'Falafel'] },
    { id: 'sa4', name: 'Basil Walnut Pesto', section: 'Mediterranean', yields: '1 cup', fridge: '5 days', freezer: '3 months',
      ingredients: ['2 cups basil', '½ cup walnuts', '3 tbsp nutritional yeast', '1 clove garlic', '⅓ cup olive oil', '1 lemon, juiced'],
      directions: ['Pulse basil, walnuts, yeast and garlic.', 'Stream in oil and lemon with the processor running.'],
      pairings: ['Pasta', 'Lentils', 'Zucchini', 'Sandwiches'],
      note: 'Freeze in an ice-cube tray for single portions.' },
    { id: 'sa5', name: 'Cilantro Lime Sauce', section: 'Latin-inspired', yields: '1 cup', fridge: '5 days', freezer: '1 month',
      ingredients: ['1 bunch cilantro', '½ cup vegan mayo or silken tofu', '2 limes, juiced', '1 jalapeño', '1 clove garlic'],
      directions: ['Blend until smooth.', 'Taste and adjust salt and lime.'],
      pairings: ['Black beans', 'Burrito bowls', 'Tacos', 'Sweet potato'] },
    { id: 'sa6', name: 'Chipotle Cashew Crema', section: 'Latin-inspired', yields: '1¼ cups', fridge: '6 days', freezer: '2 months',
      ingredients: ['1 cup raw cashews, soaked', '1–2 chipotles in adobo', '1 lime, juiced', '½ cup water', '½ tsp salt'],
      directions: ['Soak cashews in hot water 15 min, drain.', 'Blend with everything else until silky.'],
      pairings: ['Burritos', 'Enchiladas', 'Tofu scramble', 'Roasted veg'] },
    { id: 'sa7', name: 'Smoky Maple Glaze', section: 'American BBQ', yields: '¾ cup', fridge: '14 days', freezer: '3 months',
      ingredients: ['¼ cup maple syrup', '¼ cup tomato paste', '2 tbsp apple cider vinegar', '1 tbsp soy sauce', '1 tsp smoked paprika', '½ tsp liquid smoke'],
      directions: ['Whisk everything in a small pot.', 'Simmer 5 min until thick.'],
      pairings: ['Tempeh', 'Sweet potato', 'Tofu', 'Green beans'] }
  ]
};
