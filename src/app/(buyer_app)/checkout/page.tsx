import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/placeholder-data";

export default function CheckoutPage() {
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
        <h1 className="text-4xl font-extrabold tracking-tight">Checkout</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Address</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Farm Road" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Green Valley" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="West Java" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" placeholder="12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="Indonesia" disabled />
                </div>
                 <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="e.g. leave at the front gate" />
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Confirmation</CardTitle>
              <CardDescription>
                Upload a proof of your manual bank transfer. Your order will be processed after verification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="payment-proof" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Proof of Payment
                </Label>
                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="payment-proof"
                        className="relative cursor-pointer rounded-md bg-background font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:text-primary/80"
                      >
                        <span>Upload a file</span>
                        <Input id="payment-proof" name="payment-proof" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul role="list" className="divide-y divide-border">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        data-ai-hint={product.dataAiHint}
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-sm font-medium">{product.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Qty: {product.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm font-medium">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <Separator />
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-4">
              <Button size="lg" className="w-full">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Confirm and Place Order
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By placing your order, you agree to our terms and conditions.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
