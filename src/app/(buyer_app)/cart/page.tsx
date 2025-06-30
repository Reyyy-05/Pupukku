import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/placeholder-data";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const cartItems = [
    { ...products[0], quantity: 2 },
    { ...products[2], quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Shopping Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <ul role="list" className="divide-y divide-border">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex p-6">
                      <div className="flex-shrink-0">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                          data-ai-hint={product.dataAiHint}
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium">
                              <Link href={`/products/${product.id}`} className="hover:text-primary">{product.name}</Link>
                            </h3>
                            <p className="ml-4 text-lg font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none"><Minus className="h-4 w-4" /></Button>
                            <span className="px-3 text-sm font-bold">{product.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none"><Plus className="h-4 w-4" /></Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-5 w-5" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping estimate</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Order total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/checkout">
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="text-center py-20">
            <CardContent>
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="mt-2 text-muted-foreground">Looks like you haven't added any products yet.</p>
                <Button className="mt-6" asChild>
                    <Link href="/products">Start Shopping</Link>
                </Button>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
