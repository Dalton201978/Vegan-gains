# Sprout Ledger — Vegan Gains

A static, no-build web app for a vegan meal-prep system: breakfasts, lunches, dinners, snacks and interchangeable sauces, with weight-loss and weight-gain portions, a mix-and-match builder, a weekly plan builder and an auto-generated grocery list.

## Run it

Open `index.html` in a browser. No server, install or build step. Plan selections are saved in the browser's `localStorage`.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | The whole app: layout, styles and rendering logic |
| `data.js` | All content, as `window.MEAL_DATA` |

## Adding content

Everything the app shows comes from `data.js`. The schema is documented at the top of that file. Add meals with a `week` number and the rotation lengths and counts update on their own. An ingredient line that contains a sauce's name (e.g. `"2 tbsp Peanut Sauce"`) links to that sauce's recipe.

The content in `data.js` comes from the planning PDFs: 40 breakfasts (8 weeks), 25 lunches (5 weeks), 20 dinners (4 weeks) and 20 snacks. Those PDFs name the sauces but don't include their recipes, so each sauce is flagged `incomplete`. To add a sauce recipe, fill in its `ingredients`, `directions`, `yields`, `fridge` and `freezer` fields and delete `incomplete`.
