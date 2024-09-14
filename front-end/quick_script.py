import os

# Directories for JSON files and the app folder
json_folder = 'C:/Users/akash/Documents/School/McMaster/Third Year/Side Projects/GroceryDelivery/SmartGroceries/front-end/public/data/seafood'
app_folder = 'C:/Users/akash/Documents/School/McMaster/Third Year/Side Projects/GroceryDelivery/SmartGroceries/front-end/src/app/shop/seafood'

# Create folders and generate page.js for each JSON file
for filename in os.listdir(json_folder):
    if filename.endswith('.json'):
        # Extract fruit name without extension
        veggie_name = os.path.splitext(filename)[0]

        # Create the corresponding folder in app/shop/fruit
        veggie_folder_path = os.path.join(app_folder, veggie_name)
        os.makedirs(veggie_folder_path, exist_ok=True)

        # Define the content for the page.js file
        js_content = f'''
import React from "react";

import ProductCard from "@/components/ProductCard";

export default async function Page() {{
  const res = await fetch("http://localhost:3000/data/seafood/{filename}");
  const data = await res.json();
  const columns = 6;
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {{data.map((item, index) => (
        <ProductCard key={{index}} item={{item}} index={{index}} columns={{columns}} />
      ))}}
    </div>
  );
}}
'''

        # Write the content to page.js in the corresponding folder
        with open(os.path.join(veggie_folder_path, 'page.js'), 'w') as js_file:
            js_file.write(js_content)

print("Folders and page.js files created successfully.")
