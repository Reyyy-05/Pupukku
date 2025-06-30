export const products = [
  {
    id: 'prod_1',
    name: 'Urea Fertilizer',
    category: 'Nitrogen',
    price: 25.99,
    description: 'High-nitrogen fertilizer to promote leafy growth. Ideal for corn and wheat.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 150,
    seller: 'Agro Store',
    rating: 4.5,
    reviews: 120,
    dataAiHint: 'fertilizer bag',
  },
  {
    id: 'prod_2',
    name: 'Phosphate Rock',
    category: 'Phosphate',
    price: 32.50,
    description: 'Natural source of phosphorus, essential for root development and flowering.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 80,
    seller: 'Green Supplies',
    rating: 4.8,
    reviews: 95,
    dataAiHint: 'soil nutrients',
  },
  {
    id: 'prod_3',
    name: 'Potassium Chloride',
    category: 'Potassium',
    price: 28.00,
    description: 'Improves overall plant health, disease resistance, and water retention.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 200,
    seller: 'Agro Store',
    rating: 4.6,
    reviews: 150,
    dataAiHint: 'farm supplies',
  },
  {
    id: 'prod_4',
    name: 'Organic Compost',
    category: 'Organic',
    price: 19.99,
    description: 'Enriches soil with essential nutrients and improves soil structure. 100% organic.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 300,
    seller: 'Eco Farms',
    rating: 4.9,
    reviews: 250,
    dataAiHint: 'organic compost',
  },
   {
    id: 'prod_5',
    name: 'NPK 15-15-15',
    category: 'Compound',
    price: 45.00,
    description: 'Balanced NPK fertilizer for all-purpose use across various crops.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 120,
    seller: 'Green Supplies',
    rating: 4.7,
    reviews: 180,
    dataAiHint: 'fertilizer pellets',
  },
  {
    id: 'prod_6',
    name: 'Liquid Seaweed Extract',
    category: 'Organic',
    price: 35.50,
    description: 'A biostimulant that promotes vigorous growth and enhances nutrient uptake.',
    imageUrl: 'https://placehold.co/600x400',
    stock: 75,
    seller: 'Eco Farms',
    rating: 4.8,
    reviews: 88,
    dataAiHint: 'liquid fertilizer',
  }
];

export const articles = [
  {
    id: '1',
    slug: 'understanding-npk-ratios',
    title: 'Understanding NPK Ratios',
    author: 'Admin',
    date: '2023-10-26',
    content: '<p>The three numbers on a fertilizer label, such as 10-10-10 or 20-5-5, represent the percentage of three essential macronutrients: Nitrogen (N), Phosphorus (P), and Potassium (K). Understanding what these nutrients do can help you choose the right fertilizer for your plants.</p><h3>Nitrogen (N)</h3><p>Nitrogen is crucial for vegetative growth, particularly the leaves and stem. It is a key component of chlorophyll, the compound that plants use for photosynthesis. A high-nitrogen fertilizer will result in lush, green foliage.</p><h3>Phosphorus (P)</h3><p>Phosphorus is vital for root development, flowering, and fruiting. It plays a significant role in energy transfer within the plant. Fertilizers for flowering plants or new plantings are often high in phosphorus.</p><h3>Potassium (K)</h3><p>Potassium contributes to the overall health and vigor of plants. It helps regulate water movement, improves disease resistance, and is essential for strong stems and stalks.</p>',
    imageUrl: 'https://placehold.co/800x400',
    dataAiHint: 'infographic chart',
  },
  {
    id: '2',
    slug: 'organic-vs-synthetic-fertilizers',
    title: 'Organic vs. Synthetic Fertilizers: Which is Better?',
    author: 'Admin',
    date: '2023-11-05',
    content: '<p>Choosing between organic and synthetic fertilizers depends on your gardening philosophy and goals. Both have their pros and cons.</p><h3>Organic Fertilizers</h3><p>Organic fertilizers are derived from natural sources like compost, manure, and bone meal. They release nutrients slowly, which improves soil structure and microbial life over time. However, their nutrient content can be variable and they may act more slowly.</p><h3>Synthetic Fertilizers</h3><p>Synthetic fertilizers are manufactured and provide a precise, rapid supply of nutrients. They are fast-acting and the exact NPK ratio is known. Overuse, however, can lead to soil degradation and nutrient runoff, which can harm the environment.</p><h3>Conclusion</h3><p>For long-term soil health, organic fertilizers are an excellent choice. For a quick boost or to correct specific nutrient deficiencies, synthetic fertilizers can be very effective. Many gardeners use a combination of both.</p>',
    imageUrl: 'https://placehold.co/800x400',
    dataAiHint: 'nature comparison',
  },
];

export const orders = [
    {
      id: 'ORD001',
      date: '2023-10-01',
      customer: 'Farmer John',
      total: 77.98,
      status: 'Delivered',
      items: [
        { productId: 'prod_1', quantity: 2, price: 25.99 },
        { productId: 'prod_4', quantity: 1, price: 19.99 },
      ],
      shippingAddress: '123 Farm Road, Green Valley',
      paymentProofUrl: 'https://placehold.co/400x300',
    },
    {
      id: 'ORD002',
      date: '2023-10-03',
      customer: 'Jane Doe',
      total: 90.00,
      status: 'Processing',
      items: [{ productId: 'prod_5', quantity: 2, price: 45.00 }],
      shippingAddress: '456 Planter Lane, Flower Town',
      paymentProofUrl: 'https://placehold.co/400x300',
    },
    {
      id: 'ORD003',
      date: '2023-10-05',
      customer: 'Farmer John',
      total: 32.50,
      status: 'Shipped',
      items: [{ productId: 'prod_2', quantity: 1, price: 32.50 }],
      shippingAddress: '123 Farm Road, Green Valley',
      paymentProofUrl: 'https://placehold.co/400x300',
    },
];

export const sellerOrders = [
    { ...orders[0], seller: 'Agro Store' },
    { ...orders[1], seller: 'Green Supplies' },
    { id: 'ORD004', date: '2023-10-06', customer: 'Bob Planter', total: 56.00, status: 'Pending Confirmation', items: [{productId: 'prod_3', quantity: 2, price: 28.00}], seller: 'Agro Store', paymentProofUrl: 'https://placehold.co/400x300'},
];


export const paymentsToVerify = [
    { orderId: 'ORD002', customer: 'Jane Doe', amount: 90.00, date: '2023-10-03', paymentProofUrl: 'https://placehold.co/400x300', dataAiHint: 'receipt bank' },
    { orderId: 'ORD004', customer: 'Bob Planter', amount: 56.00, date: '2023-10-06', paymentProofUrl: 'https://placehold.co/400x300', dataAiHint: 'transfer receipt' },
];

export const shippingZones = [
  { id: 'zone_1', name: 'Metro Area', cost: 5.00 },
  { id: 'zone_2', name: 'Regional', cost: 15.00 },
  { id: 'zone_3', name: 'Interstate', cost: 25.00 },
];
