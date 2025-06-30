import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            data-ai-hint={product.dataAiHint}
            width={800}
            height={800}
            className="w-full rounded-lg shadow-lg object-cover aspect-square"
          />
        </div>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mt-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">{product.rating} ({product.reviews} reviews)</p>
          </div>

          <p className="text-3xl font-bold mt-6">${product.price}</p>

          <p className="mt-6 text-lg text-muted-foreground">{product.description}</p>
          
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">Sold by: <span className="font-medium text-primary">{product.seller}</span></p>
            <p className="text-sm text-muted-foreground mt-1">Stock: <span className="font-medium text-foreground">{product.stock} bags available</span></p>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
             <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 font-bold">1</span>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <Card>
            <CardContent className="pt-6">
                <p className="text-muted-foreground">
                    Further details about the product composition, application instructions, safety information, etc. would go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
