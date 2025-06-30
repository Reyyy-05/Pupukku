import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/placeholder-data';
import { Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AdminProductsPage() {
  // Simulating products waiting for validation
  const productsToValidate = products.slice(0, 4);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Validate Products</CardTitle>
        <CardDescription>Review new products submitted by sellers for approval.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Seller</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsToValidate.map(product => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={product.name}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.imageUrl}
                    data-ai-hint={product.dataAiHint}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.seller}</TableCell>
                <TableCell>
                  <Badge variant="outline">{product.category}</Badge>
                </TableCell>
                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                <TableCell className="text-center space-x-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="icon" variant="ghost" className="text-green-600 hover:text-green-700">
                    <Check className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-red-600 hover:text-red-700">
                    <X className="h-5 w-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
