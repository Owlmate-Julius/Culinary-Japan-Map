print("Seeding the collection 'locations' in the 'foodlist' db");

db = db.getSiblingDB("culinary-japan-map");
db.dishes.insert([
  {
    "name": "Miso Ramen",
    "description": "Hearty and warming ramen with a broth made from fermented soybean paste. Often topped with corn, butter, and chashu pork.",
    "prefecture": "Hokkaido",
    "imageUrl": "Miso ramen Hokkaido",
    "category": "Noodles"
  },
  {
    "name": "Okonomiyaki",
    "description": "A savory pancake filled with cabbage, batter, and various ingredients like pork, shrimp, and cheese. Grilled and topped with a special sauce and mayonnaise.",
    "prefecture": "Osaka",
    "imageUrl": "Okonomiyaki Osaka",
    "category": "Street Food"
  },
  {
    "name": "Unagi Donburi",
    "description": "Grilled freshwater eel basted in a sweet soy-based sauce and served over a bed of steamed rice.",
    "prefecture": "Shizuoka",
    "imageUrl": "Unagi donburi Shizuoka",
    "category": "Donburi"
  },
  {
    "name": "Kobe Beef",
    "description": "One of the most prized types of wagyu beef, known for its incredible marbling, tenderness, and rich flavor.",
    "prefecture": "Hyogo",
    "imageUrl": "Kobe beef steak",
    "category": "Seafood"
  },
  {
    "name": "Yatsuhashi",
    "description": "A traditional Kyoto sweet made from glutinous rice flour, sugar, and cinnamon. Often folded into a triangle and filled with red bean paste.",
    "prefecture": "Kyoto",
    "imageUrl": "Yatsuhashi sweets Kyoto",
    "category": "Sweets"
  },
  {
    "name": "Soba",
    "description": "Thin buckwheat noodles served either chilled with a dipping sauce or in a hot broth with various toppings.",
    "prefecture": "Nagano",
    "imageUrl": "Soba noodles Nagano",
    "category": "Noodles"
  },
  {
    "name": "Gyoza",
    "description": "Crispy fried dumplings filled with minced pork, cabbage, and ginger. A popular side dish and a classic izakaya snack.",
    "prefecture": "Tochigi",
    "imageUrl": "Gyoza dumplings Utsunomiya",
    "category": "Street Food"
  },
  {
    "name": "Fugu",
    "description": "Blowfish, a delicacy served by licensed chefs who meticulously remove its toxic parts. Known for its subtle, delicate flavor.",
    "prefecture": "Yamaguchi",
    "imageUrl": "Fugu sashimi dish",
    "category": "Seafood"
  },
  {
    "name": "Mitarashi Dango",
    "description": "Skewered rice dumplings grilled and coated with a sweet soy sauce glaze. A popular and simple street food.",
    "prefecture": "Kyoto",
    "imageUrl": "Mitarashi dango street food",
    "category": "Street Food"
  },
  {
    "name": "Sushi",
    "description": "Fresh, raw fish or seafood served on a small bed of vinegared rice. A global symbol of Japanese cuisine.",
    "prefecture": "Tokyo",
    "imageUrl": "Sushi platter Tokyo",
    "category": "Sushi"
  },
  {
    "name": "Tempura",
    "description": "Lightly battered and deep-fried seafood and vegetables. Known for its delicate and crispy texture.",
    "prefecture": "Tokyo",
    "imageUrl": "Tempura deep fried",
    "category": "Fried Food"
  },
  {
    "name": "Katsu Curry",
    "description": "A popular dish of fried pork cutlet served on a bed of rice and topped with a thick, savory Japanese curry sauce.",
    "prefecture": "Tokyo",
    "imageUrl": "Katsu curry Japanese",
    "category": "Fried Food"
  }
])

print("Completed seeding MongoDB!");