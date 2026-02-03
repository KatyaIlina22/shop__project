export const products = [
    {
        id: 1,
        title: "Hydrating Face Cream",
        shortDescription: "Deep hydration for dry and sensitive skin",
        description:
            "A rich hydrating face cream designed to restore moisture balance, strengthen the skin barrier and protect against dryness. Regular use helps improve skin elasticity and softness, leaving the skin smooth and comfortable throughout the day.",
        price: 12,
        image: "images/cream1.jpg",
        category: "cream",
        rating: 4.6,
        reviewsCount: 28,
        quantity: 10,
        isAvailable: true,
        characteristics: {
            Brand: "SkinCare Pro",
            SkinType: "Dry, Sensitive",
            Volume: "50 ml",
            Texture: "Cream",
            KeyIngredients: "Hyaluronic Acid, Aloe Vera, Vitamin E",
            Effect: "Hydration, Skin barrier repair",
            Usage: "Morning and evening",
            Country: "Germany"
        }
    },

    {
        id: 2,
        title: "Anti-Aging Serum",
        shortDescription: "Reduces fine lines and improves elasticity",
        description:
            "A concentrated anti-aging serum formulated to reduce visible wrinkles, improve skin elasticity and enhance overall skin texture. Ideal for mature skin requiring intensive care.",
        price: 18,
        image: "images/serum1.jpg",
        category: "serum",
        rating: 4.8,
        reviewsCount: 41,
        quantity: 15,
        isAvailable: true,
        characteristics: {
            Brand: "DermaCare",
            SkinType: "Mature, Normal",
            Volume: "30 ml",
            Texture: "Serum",
            KeyIngredients: "Retinol, Peptides, Niacinamide",
            Effect: "Anti-aging, Firming",
            Usage: "Evening",
            Country: "France"
        }
    },

    {
        id: 3,
        title: "Moisturizing Body Lotion",
        shortDescription: "Lightweight lotion for daily hydration",
        description:
            "A fast-absorbing body lotion that provides long-lasting hydration without stickiness. Leaves skin soft, smooth and refreshed after each use.",
        price: 10,
        image: "images/lotion1.jpg",
        category: "lotion",
        rating: 4.4,
        reviewsCount: 19,
        quantity: 20,
        isAvailable: true,
        characteristics: {
            Brand: "PureBody",
            SkinType: "All skin types",
            Volume: "250 ml",
            Texture: "Lotion",
            KeyIngredients: "Shea Butter, Glycerin, Almond Oil",
            Effect: "Hydration, Softening",
            Usage: "After shower",
            Country: "Italy"
        }
    },

    {
        id: 4,
        title: "SPF 50 Sunscreen",
        shortDescription: "High protection against UVA & UVB rays",
        description:
            "A broad-spectrum sunscreen that provides reliable protection against harmful UVA and UVB rays. Helps prevent sunburn, pigmentation and premature skin aging.",
        price: 14,
        image: "images/sunscreen1.jpg",
        category: "sunscreen",
        rating: 4.7,
        reviewsCount: 35,
        quantity: 12,
        isAvailable: true,
        characteristics: {
            Brand: "SunShield",
            SkinType: "All skin types",
            Volume: "50 ml",
            SPF: "SPF 50",
            Texture: "Cream",
            Effect: "Sun protection",
            Usage: "Before sun exposure",
            Country: "Spain"
        }
    },

    {
        id: 5,
        title: "Coconut Oil Hair Treatment",
        shortDescription: "Nourishes and strengthens hair",
        description:
            "A natural coconut oil treatment that deeply nourishes hair, improves shine and helps protect against breakage and dryness.",
        price: 16,
        image: "images/coconut1.jpg",
        category: "coconut oil",
        rating: 4.5,
        reviewsCount: 22,
        quantity: 8,
        isAvailable: true,
        characteristics: {
            Brand: "NatureOil",
            HairType: "All hair types",
            Volume: "100 ml",
            Texture: "Oil",
            KeyIngredients: "100% Coconut Oil",
            Effect: "Nourishing, Strengthening",
            Usage: "Before washing",
            Country: "Sri Lanka"
        }
    },

    {
        id: 6,
        title: "Vitamin C Face Serum",
        shortDescription: "Brightens and evens skin tone",
        description:
            "A brightening serum with vitamin C that improves skin radiance, helps even skin tone and protects against environmental stressors.",
        price: 20,
        image: "images/serum2.jpg",
        category: "serum",
        rating: 4.9,
        reviewsCount: 56,
        quantity: 10,
        isAvailable: true,
        characteristics: {
            Brand: "GlowLab",
            SkinType: "Dull, Uneven",
            Volume: "30 ml",
            Texture: "Serum",
            KeyIngredients: "Vitamin C, Ferulic Acid",
            Effect: "Brightening, Antioxidant",
            Usage: "Morning",
            Country: "USA"
        }
    },

    {
        id: 7,
        title: "Night Repair Cream",
        shortDescription: "Restores skin overnight",
        description:
            "An intensive night cream that supports skin regeneration during sleep, helping skin look rested, smooth and revitalized by morning.",
        price: 22,
        image: "images/cream2.jpg",
        category: "cream",
        rating: 4.7,
        reviewsCount: 31,
        quantity: 5,
        isAvailable: true,
        characteristics: {
            Brand: "NightCare",
            SkinType: "Dry, Mature",
            Volume: "50 ml",
            Texture: "Cream",
            KeyIngredients: "Ceramides, Peptides",
            Effect: "Repair, Nourishment",
            Usage: "Night",
            Country: "Switzerland"
        }
    },

    {
        id: 8,
        title: "Soothing Aloe Lotion",
        shortDescription: "Calms irritated skin",
        description:
            "A soothing body lotion with aloe vera that helps calm irritation, reduce redness and restore skin comfort.",
        price: 11,
        image: "images/lotion2.jpg",
        category: "lotion",
        rating: 4.3,
        reviewsCount: 16,
        quantity: 18,
        isAvailable: true,
        characteristics: {
            Brand: "AloeFresh",
            SkinType: "Sensitive",
            Volume: "200 ml",
            Texture: "Lotion",
            KeyIngredients: "Aloe Vera, Panthenol",
            Effect: "Soothing, Hydration",
            Usage: "As needed",
            Country: "Poland"
        }
    },

    {
        id: 9,
        title: "Mineral Sunscreen SPF 30",
        shortDescription: "Gentle mineral sun protection",
        description:
            "A mineral-based sunscreen designed for sensitive skin. Provides reliable sun protection without irritation.",
        price: 13,
        image: "images/sunscreen2.jpg",
        category: "sunscreen",
        rating: 4.5,
        reviewsCount: 24,
        quantity: 9,
        isAvailable: true,
        characteristics: {
            Brand: "SunPure",
            SkinType: "Sensitive",
            Volume: "50 ml",
            SPF: "SPF 30",
            Texture: "Cream",
            Effect: "Sun protection",
            Usage: "Before sun exposure",
            Country: "Canada"
        }
    },

    {
        id: 10,
        title: "Organic Coconut Oil",
        shortDescription: "Multi-purpose natural oil",
        description:
            "Cold-pressed organic coconut oil suitable for skin, hair and body care. Helps nourish, soften and protect from dryness.",
        price: 15,
        image: "images/coconut2.jpg",
        category: "coconut oil",
        rating: 4.6,
        reviewsCount: 29,
        quantity: 12,
        isAvailable: true,
        characteristics: {
            Brand: "EcoNature",
            SkinType: "All skin types",
            Volume: "200 ml",
            Texture: "Oil",
            KeyIngredients: "Organic Coconut Oil",
            Effect: "Nourishing, Softening",
            Usage: "Universal",
            Country: "Indonesia"
        }
    },
    {
        id: 11,
        title: "Collagen Boost Cream",
        shortDescription: "Improves skin elasticity and firmness",
        description:
            "A collagen-enriched face cream designed to improve skin elasticity, firmness and overall tone. Helps reduce the appearance of fine lines and supports skin regeneration.",
        price: 19,
        image: "images/cream3.jpg",
        category: "cream",
        rating: 4.7,
        reviewsCount: 34,
        quantity: 7,
        isAvailable: true,
        characteristics: {
            Brand: "DermaLift",
            SkinType: "Normal, Mature",
            Volume: "50 ml",
            Texture: "Cream",
            KeyIngredients: "Collagen, Peptides, Vitamin C",
            Effect: "Firming, Anti-aging",
            Usage: "Morning and evening",
            Country: "France"
        }
    },

    {
        id: 12,
        title: "Hydrating Serum",
        shortDescription: "Intense hydration and skin comfort",
        description:
            "A lightweight hydrating serum that deeply moisturizes the skin, restores balance and helps prevent moisture loss throughout the day.",
        price: 17,
        image: "images/serum3.jpg",
        category: "serum",
        rating: 4.5,
        reviewsCount: 26,
        quantity: 10,
        isAvailable: true,
        characteristics: {
            Brand: "AquaSkin",
            SkinType: "Dry, Dehydrated",
            Volume: "30 ml",
            Texture: "Serum",
            KeyIngredients: "Hyaluronic Acid, Panthenol",
            Effect: "Deep hydration",
            Usage: "Morning",
            Country: "Italy"
        }
    },

    {
        id: 13,
        title: "Refreshing Body Lotion",
        shortDescription: "Light hydration with refreshing effect",
        description:
            "A refreshing body lotion that absorbs quickly and leaves skin soft, smooth and hydrated without a sticky feeling.",
        price: 12,
        image: "images/lotion3.jpg",
        category: "lotion",
        rating: 4.4,
        reviewsCount: 21,
        quantity: 14,
        isAvailable: true,
        characteristics: {
            Brand: "FreshCare",
            SkinType: "All skin types",
            Volume: "250 ml",
            Texture: "Lotion",
            KeyIngredients: "Glycerin, Mint Extract",
            Effect: "Hydration, Refreshing",
            Usage: "Daily",
            Country: "Spain"
        }
    },

    {
        id: 14,
        title: "Waterproof Sunscreen SPF 40",
        shortDescription: "Reliable waterproof sun protection",
        description:
            "A waterproof sunscreen providing strong protection against UVA and UVB rays. Ideal for outdoor activities and swimming.",
        price: 16,
        image: "images/sunscreen3.jpg",
        category: "sunscreen",
        rating: 4.6,
        reviewsCount: 29,
        quantity: 11,
        isAvailable: true,
        characteristics: {
            Brand: "SunActive",
            SkinType: "All skin types",
            Volume: "50 ml",
            SPF: "SPF 40",
            Texture: "Cream",
            Effect: "Sun protection",
            Usage: "Before sun exposure",
            Country: "Australia"
        }
    },

    {
        id: 15,
        title: "Coconut Oil Face Mask",
        shortDescription: "Nourishing mask for glowing skin",
        description:
            "A nourishing face mask with coconut oil that deeply moisturizes, softens and revitalizes tired skin.",
        price: 18,
        image: "images/coconut3.jpg",
        category: "coconut oil",
        rating: 4.5,
        reviewsCount: 18,
        quantity: 6,
        isAvailable: true,
        characteristics: {
            Brand: "NatureGlow",
            SkinType: "Dry, Normal",
            Volume: "100 ml",
            Texture: "Mask",
            KeyIngredients: "Coconut Oil, Shea Butter",
            Effect: "Nourishing, Softening",
            Usage: "1–2 times per week",
            Country: "Indonesia"
        }
    },

    {
        id: 16,
        title: "Brightening Cream",
        shortDescription: "Enhances skin radiance",
        description:
            "A brightening face cream that helps even skin tone, reduce dullness and restore natural glow.",
        price: 21,
        image: "images/cream4.jpg",
        category: "cream",
        rating: 4.8,
        reviewsCount: 37,
        quantity: 9,
        isAvailable: true,
        characteristics: {
            Brand: "GlowExpert",
            SkinType: "Dull, Uneven",
            Volume: "50 ml",
            Texture: "Cream",
            KeyIngredients: "Vitamin C, Niacinamide",
            Effect: "Brightening",
            Usage: "Morning",
            Country: "USA"
        }
    },

    {
        id: 17,
        title: "Revitalizing Serum",
        shortDescription: "Boosts skin vitality and tone",
        description:
            "A revitalizing serum that energizes tired skin, improves texture and supports natural regeneration.",
        price: 23,
        image: "images/serum4.jpg",
        category: "serum",
        rating: 4.9,
        reviewsCount: 42,
        quantity: 8,
        isAvailable: true,
        characteristics: {
            Brand: "ReVita",
            SkinType: "All skin types",
            Volume: "30 ml",
            Texture: "Serum",
            KeyIngredients: "Peptides, Antioxidants",
            Effect: "Revitalizing",
            Usage: "Evening",
            Country: "Switzerland"
        }
    },

    {
        id: 18,
        title: "Calming Lotion",
        shortDescription: "Soothes sensitive skin",
        description:
            "A gentle calming lotion that helps reduce redness, irritation and restores skin comfort.",
        price: 13,
        image: "images/lotion4.jpg",
        category: "lotion",
        rating: 4.3,
        reviewsCount: 17,
        quantity: 15,
        isAvailable: true,
        characteristics: {
            Brand: "CalmDerm",
            SkinType: "Sensitive",
            Volume: "200 ml",
            Texture: "Lotion",
            KeyIngredients: "Chamomile, Panthenol",
            Effect: "Soothing",
            Usage: "As needed",
            Country: "Poland"
        }
    },

    {
        id: 19,
        title: "Daily Sunscreen SPF 25",
        shortDescription: "Light daily sun protection",
        description:
            "A lightweight sunscreen suitable for daily use, providing reliable protection without clogging pores.",
        price: 12,
        image: "images/sunscreen4.jpg",
        category: "sunscreen",
        rating: 4.4,
        reviewsCount: 23,
        quantity: 10,
        isAvailable: true,
        characteristics: {
            Brand: "SunDaily",
            SkinType: "All skin types",
            Volume: "50 ml",
            SPF: "SPF 25",
            Texture: "Cream",
            Effect: "Daily sun protection",
            Usage: "Morning",
            Country: "Germany"
        }
    },

    {
        id: 20,
        title: "Coconut Oil Body Scrub",
        shortDescription: "Exfoliates and nourishes skin",
        description:
            "A natural body scrub with coconut oil that gently exfoliates dead skin cells while nourishing and smoothing the skin.",
        price: 17,
        image: "images/coconut4.jpg",
        category: "coconut oil",
        rating: 4.6,
        reviewsCount: 25,
        quantity: 7,
        isAvailable: true,
        characteristics: {
            Brand: "EcoBody",
            SkinType: "All skin types",
            Volume: "200 ml",
            Texture: "Scrub",
            KeyIngredients: "Coconut Oil, Sugar Crystals",
            Effect: "Exfoliation, Nourishment",
            Usage: "2–3 times per week",
            Country: "Sri Lanka"
        }
    },

];