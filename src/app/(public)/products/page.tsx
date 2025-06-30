import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/placeholder-data";
import { Star, ShoppingCart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function ProductsPage() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Our Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Find the perfect fertilizer to meet your farm's needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <Input placeholder="Search for products..." />
        </div>
        <div className="w-full md:w-auto">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/products/${product.id}`} className="block">
              <CardHeader className="p-0">
                <Image src={product.imageUrl} alt={product.name} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={product.dataAiHint} />
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <p className="text-sm text-primary font-semibold">{product.category}</p>
                <CardTitle className="mt-1 text-xl font-headline">{product.name}</CardTitle>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Link>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" variant="secondary">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
