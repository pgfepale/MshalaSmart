import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <header className="w-full border-b">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">mshala smart test</a>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" active={location === "/"}>Home</NavLink>
          <NavLink href="/features" active={location === "/features"}>Features</NavLink>
          <NavLink href="/contact" active={location === "/contact"}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {children}
      </a>
    </Link>
  );
}
