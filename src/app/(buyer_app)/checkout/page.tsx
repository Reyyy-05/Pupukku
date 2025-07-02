"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ShieldCheck, Package } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  
  // Data produk sederhana
  const cartItems = [
    { id: 1, name: "Beras Organik Premium", price: 25000, quantity: 2 },
    { id: 2, name: "Sayuran Segar Mix", price: 15000, quantity: 1 },
  ];
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10000;
  const total = subtotal + shipping;

  const formatRupiah = (amount: string | number | bigint) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Checkout</h1>
        <p className="text-gray-600">Lengkapi informasi untuk menyelesaikan pesanan</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form Alamat */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Alamat Pengiriman</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" placeholder="Masukkan nama lengkap" />
            </div>
            
            <div>
              <Label htmlFor="phone">Nomor Telepon</Label>
              <Input id="phone" placeholder="08xx-xxxx-xxxx" />
            </div>
            
            <div>
              <Label htmlFor="address">Alamat Lengkap</Label>
              <Textarea 
                id="address" 
                placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">Kota</Label>
                <Input id="city" placeholder="Yogyakarta" />
              </div>
              <div>
                <Label htmlFor="postal">Kode Pos</Label>
                <Input id="postal" placeholder="55000" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Catatan (Opsional)</Label>
              <Textarea 
                id="notes" 
                placeholder="Instruksi khusus untuk pengiriman"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Ringkasan Pesanan */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Package className="w-5 h-5" />
              Ringkasan Pesanan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">{formatRupiah(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ongkos Kirim</span>
                <span>{formatRupiah(shipping)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatRupiah(total)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metode Pembayaran */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Metode Pembayaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'transfer', name: 'Transfer Bank', desc: 'BCA, Mandiri, BRI' },
              { id: 'ewallet', name: 'E-Wallet', desc: 'GoPay, OVO, DANA' },
              { id: 'cod', name: 'Bayar di Tempat', desc: 'Cash on Delivery' }
            ].map((method) => (
              <div 
                key={method.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  paymentMethod === method.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={() => setPaymentMethod(method.id)}
                    className="text-blue-600"
                  />
                  <div>
                    <p className="font-medium text-sm">{method.name}</p>
                    <p className="text-xs text-gray-500">{method.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tombol Checkout */}
      <Card>
        <CardContent className="pt-6">
          <Button size="lg" className="w-full">
            <Link href="/checkout/success" className="w-full flex justify-center items-center">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Konfirmasi dan Pesan Sekarang
            </Link>
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
            Dengan memesan, Anda menyetujui syarat dan ketentuan kami
          </p>
        </CardContent>
      </Card>
    </div>
  );
}