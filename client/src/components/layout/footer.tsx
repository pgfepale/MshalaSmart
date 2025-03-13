import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">mshala smart test</h3>
            <p className="text-sm text-muted-foreground">
              Empowering education through smart test management solutions
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <a className="text-muted-foreground hover:text-primary">Features</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Online Test Series</li>
              <li className="text-muted-foreground">Homework Management</li>
              <li className="text-muted-foreground">Performance Analytics</li>
              <li className="text-muted-foreground">Question Bank</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic">
              123 Education Street<br />
              Tech Park, Bangalore<br />
              Karnataka, India<br />
              <a href="mailto:contact@mshala.com" className="hover:text-primary">
                contact@mshala.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} mshala smart test. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
