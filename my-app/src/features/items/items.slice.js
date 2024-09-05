import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: 1,
        name: "Vitamin C",
        details: "Boosts immune system and helps in the absorption of iron.",
        image:
          "https://www.nutrifactor.com.pk/cdn/shop/files/NutraC_1200x.png?v=1716383636",
        rating: 3,
      },
      {
        id: 2,
        name: "Vitamin D",
        details: "Supports bone health by helping the body absorb calcium.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKUT5NISkNOFmivjMLEw1vFVdoy0DDWZIkA&s",
        rating: 5,
      },
      {
        id: 3,
        name: "Vitamin B12",
        details: "Essential for red blood cell formation and nerve function.",
        image:
          "https://m.media-amazon.com/images/I/713dgE1NB6L._AC_UF1000,1000_QL80_.jpg",
        rating: 4,
      },
      {
        id: 4,
        name: "Vitamin E",
        details:
          "Acts as an antioxidant and helps maintain healthy skin and eyes.",
        image:
          "https://opcpharma.com/wp-content/uploads/2023/08/hop-vi-23.webp",
        rating: 3,
      },
      {
        id: 5,
        name: "Calcium",
        details:
          "Promotes strong bones and teeth; supports nerve and muscle function.",
        image:
          "https://naturesbounty.com/cdn/shop/products/083439.png?v=1667506925",
        rating: 1,
      },
      {
        id: 6,
        name: "Magnesium",
        details:
          "Supports muscle and nerve function, regulates blood pressure.",
        image:
          "https://nutrifactorkosovo.com/cdn/shop/products/Magnesium60_1.png?v=1685010051",
        rating: 2,
      },
      {
        id: 7,
        name: "Zinc",
        details: "Boosts the immune system and aids in wound healing.",
        image:
          "https://naturesbounty.com/cdn/shop/products/002060_grande.png?v=1667506836",
        rating: 3,
      },
      {
        id: 8,
        name: "Iron",
        details: "Helps transport oxygen in the blood and prevents anemia.",
        image:
          "https://www.kroger.com/product/images/large/front/0074615579590",
        rating: 4,
      },
      {
        id: 9,
        name: "Fish Oil",
        details: "Rich in omega-3 fatty acids, supports heart health.",
        image:
          "https://naturesbounty.com/cdn/shop/products/087800.png?v=1667506722",
        rating: 3,
      },
      {
        id: 10,
        name: "Folic Acid",
        details:
          "Vital for cell growth and metabolism; essential during pregnancy.",
        image:
          "https://www.nutrifactor.com.pk/cdn/shop/products/FolicAcid60_9cdc5995-767f-4d65-a515-b3535a5ebe49.png?v=1656419104",
        rating: 0,
      },
    ],
  },
  reducers: {
    handleRating: (state, action) => {
      const { itemId, newRating } = action.payload;

      state.items.map((item) => {
        if (item.id === itemId) {
            item.rating = newRating;
        }
      });
    },
  },
});

export const itemReducer = ItemsSlice.reducer;
export const { handleRating } = ItemsSlice.actions;
