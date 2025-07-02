import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OrderSuccessPage() {
  // Dummy data for demonstration. Replace with actual order data.
  const orderNumber = "ORD123456789";
  const orderSummary = [
    { name: "Product A", quantity: 2, price: 20.00 },
    { name: "Product B", quantity: 1, price: 35.00 },
  ];
  const subtotal = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10.00; // Dummy shipping
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <CheckCircle className="h-24 w-24 text-green-500" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Pesanan Anda Berhasil Dibuat!</h1>
      <p className="text-lg text-muted-foreground mb-8">Nomor Pesanan: <strong>{orderNumber}</strong></p>

      <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle>Ringkasan Pesanan</CardTitle>
        </CardHeader>
        <CardContent>
          <ul role="list" className="divide-y divide-border">
            {orderSummary.map((item, index) => (
              <li key={index} className="flex justify-between py-2 text-sm">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <Separator className="my-4" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pengiriman</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Link href="/">
        <Button size="lg">Kembali ke Beranda</Button>
      </Link>
    </div>
  );
}