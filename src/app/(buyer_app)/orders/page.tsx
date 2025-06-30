import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { orders as allOrders, products } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";

const getStatusVariant = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'default';
    case 'shipped':
      return 'secondary';
    case 'processing':
      return 'outline';
    default:
      return 'destructive';
  }
};

export default function OrdersPage() {
  const userOrders = allOrders.filter(o => o.customer === "Farmer John");

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">My Orders</h1>
        <p className="mt-2 text-lg text-muted-foreground">View your order history and track current orders.</p>
      </div>
      <div className="space-y-8">
        {userOrders.length > 0 ? (
          userOrders.map(order => (
            <Card key={order.id}>
              <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="space-y-1">
                  <CardTitle>Order #{order.id}</CardTitle>
                  <CardDescription>
                    Date: {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="text-lg font-bold">
                    Total: ${order.total.toFixed(2)}
                  </div>
                  <Badge variant={getStatusVariant(order.status)} className="capitalize">{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <div className="space-y-6">
                  {order.items.map(item => {
                    const product = products.find(p => p.id === item.productId);
                    if (!product) return null;
                    return (
                      <div key={item.productId} className="flex items-center">
                        <Image src={product.imageUrl} alt={product.name} width={64} height={64} className="rounded-md object-cover" data-ai-hint={product.dataAiHint} />
                        <div className="ml-4 flex-1">
                          <p className="font-medium hover:text-primary"><Link href={`/products/${product.id}`}>{product.name}</Link></p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">View Invoice</Button>
                {order.status !== 'Delivered' && <Button>Track Order</Button>}
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card className="text-center py-20">
            <CardContent>
                <h2 className="text-2xl font-semibold">No orders yet</h2>
                <p className="mt-2 text-muted-foreground">You haven't placed any orders with us.</p>
                <Button className="mt-6" asChild>
                    <Link href="/products">Start Shopping</Link>
                </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
