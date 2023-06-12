import foodMenuData from "@/db/foodMenuData";

export function getProductsByCategory(type) {
    const products = foodMenuData.filter((product) => product.type === type);
    return products;
  }
  
  export default function handler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
      const products = getProductsByCategory(req.query.category);
      res.status(200).json(products);
    }
  }