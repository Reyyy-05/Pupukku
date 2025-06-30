'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreditCard, LayoutDashboard, LogOut, Settings, ShoppingCart, User } from 'lucide-react';

type UserRole = 'buyer' | 'seller' | 'admin';

export function UserNav() {
  // Mock user state
  const [user, setUser] = useState<{ name: string; email: string; role: UserRole } | null>(null);
  // const [user, setUser] = useState({ name: 'Farmer John', email: 'john@farm.com', role: 'buyer' as UserRole });
  // const [user, setUser] = useState({ name: 'Agro Store', email: 'sales@agro.com', role: 'seller' as UserRole });
  // const [user, setUser] = useState({ name: 'Admin', email: 'admin@pupukku.com', role: 'admin' as UserRole });


  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="default" asChild className="bg-accent hover:bg-accent/90">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    );
  }

  const getDashboardLink = () => {
    switch(user.role) {
      case 'admin': return '/admin/dashboard';
      case 'seller': return '/seller/dashboard';
      default: return null;
    }
  }

  const dashboardLink = getDashboardLink();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dashboardLink && (
            <DropdownMenuItem asChild>
              <Link href={dashboardLink}><LayoutDashboard className="mr-2 h-4 w-4" /><span>Dashboard</span></Link>
            </DropdownMenuItem>
          )}
          {user.role === 'buyer' && (
             <DropdownMenuItem asChild>
               <Link href="/orders"><ShoppingCart className="mr-2 h-4 w-4" /><span>My Orders</span></Link>
             </DropdownMenuItem>
          )}
          <DropdownMenuItem disabled>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setUser(null)}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
