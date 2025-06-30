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
import { paymentsToVerify } from '@/lib/placeholder-data';
import { CheckCircle, XCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminPaymentsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Payments</CardTitle>
        <CardDescription>Review and verify manual payment transfers from customers.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentsToVerify.map(payment => (
              <TableRow key={payment.orderId}>
                <TableCell className="font-medium">{payment.orderId}</TableCell>
                <TableCell>{payment.customer}</TableCell>
                <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
                <TableCell className="text-center space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Proof</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Payment Proof for {payment.orderId}</DialogTitle>
                        <DialogDescription>
                          Customer: {payment.customer} | Amount: ${payment.amount.toFixed(2)}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <Image src={payment.paymentProofUrl} alt={`Proof for ${payment.orderId}`} width={600} height={400} className="rounded-md" data-ai-hint={payment.dataAiHint} />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button size="icon" variant="ghost" className="text-green-600 hover:text-green-700">
                    <CheckCircle className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-red-600 hover:text-red-700">
                    <XCircle className="h-5 w-5" />
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
