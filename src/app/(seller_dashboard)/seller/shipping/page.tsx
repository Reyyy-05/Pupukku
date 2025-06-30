import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { shippingZones } from "@/lib/placeholder-data";
import { PlusCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ShippingPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Shipping Costs</CardTitle>
            <CardDescription>Set manual shipping costs per zone or region.</CardDescription>
          </div>
           <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Zone
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Zone Name</TableHead>
              <TableHead>Shipping Cost</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shippingZones.map(zone => (
              <TableRow key={zone.id}>
                <TableCell className="font-medium">
                    <Input defaultValue={zone.name} className="max-w-xs" />
                </TableCell>
                <TableCell>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                        <Input type="number" defaultValue={zone.cost.toFixed(2)} className="pl-7 max-w-xs" />
                    </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
