
const products = [
    {
        id: 1,
        name: "Mens Kurta",
        price: 1500,
        category: "Kurta",
        // yahan jo v image hai uska path yahan
        images: [
            "images/kurta1-image2.png",
            "images/kurta1-image1.png",
            "images/kurta1-image3.png",

        ],
        // main image ka path yahan jo aapko sabse achha lag raha ho jo user ko front me dikhaana hai
        image: "images/kurta1-image2.png",
        description: "Premium quality Kurta.",
        specs: ["Top Fabric- Dupion", "Top colour- Navy", "Line Fabric- NA", "Bottom Fabric- Dupion", "Bottom colour- Light Golden", "Bottom type- Churidar", "Disclaimer Note- Slight variation in colour/Print/Design may vary."],
        featured: true //yahan aap kuchh hi me true krna baaki me false
    },
    {
        id: 2,// yahan numbering krte rahenge
        name: "Mens Kurta",
        price: 1500,
        category: "Kurta",

        images: [
            "images/kurta2-image1.png",
            "images/kurta2-image2.png",
            "images/kurta2-image3.png",

        ],

        image: "images/kurta2-image1.png",
        description: "",
        specs: ["", ""],
        featured: false
    }

];
