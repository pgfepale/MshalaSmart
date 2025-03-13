import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Users, LineChart, FileCheck, ShieldCheck, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
              Smart Test Management Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Effortlessly conduct, manage and analyze tests for better educational outcomes
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileCheck className="w-8 h-8" />}
              title="Online Test Series"
              description="Conduct mock tests, quizzes, and practice exams effortlessly"
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Daily Homework"
              description="Assign, manage, and track homework submissions within the app"
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8" />}
              title="Performance Analytics"
              description="Get detailed insights and reports to monitor student progress"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="50K+ Question Bank"
              description="Ready-to-use exam-focused content to accelerate preparation"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Secure & Scalable"
              description="Handle thousands of students seamlessly with our robust platform"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="White-Labeled App"
              description="Get your institute's name and logo on a fully customized app"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institute?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of institutes using mshala smart test to improve their educational outcomes
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-2">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
