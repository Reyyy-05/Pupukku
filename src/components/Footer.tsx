import Link from 'next/link';
import { Logo } from './Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Empowering farmers with quality fertilizers and knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">Products</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground">Farmers' Corner</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Connect With Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><span className="sr-only">Twitter</span><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><span className="sr-only">GitHub</span><Github className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><span className="sr-only">LinkedIn</span><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} Pupukku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
