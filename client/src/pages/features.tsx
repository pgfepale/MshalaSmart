import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          Comprehensive Test Management Solution
        </h1>

        <Tabs defaultValue="tests" className="mb-20">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="tests">Online Tests</TabsTrigger>
            <TabsTrigger value="homework">Homework Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="tests" className="mt-6">
            <FeatureDetail
              title="Advanced Test Creation"
              description="Create and manage online tests with ease"
              benefits={[
                "Multiple question formats support",
                "Timed assessments",
                "Automatic grading",
                "Detailed solutions"
              ]}
            />
          </TabsContent>
          <TabsContent value="homework" className="mt-6">
            <FeatureDetail
              title="Homework Management"
              description="Streamline homework assignments and tracking"
              benefits={[
                "Easy assignment creation",
                "Submission tracking",
                "Automated reminders",
                "Progress monitoring"
              ]}
            />
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <FeatureDetail
              title="Performance Analytics"
              description="Gain valuable insights into student performance"
              benefits={[
                "Detailed performance reports",
                "Progress tracking",
                "Comparative analysis",
                "Actionable insights"
              ]}
            />
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card>
            <CardHeader>
              <CardTitle>For Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <BenefitItem text="Easy test creation and management" />
                <BenefitItem text="Automated grading saves time" />
                <BenefitItem text="Detailed performance insights" />
                <BenefitItem text="Efficient homework tracking" />
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <BenefitItem text="Access to extensive practice material" />
                <BenefitItem text="Instant feedback and solutions" />
                <BenefitItem text="Performance tracking" />
                <BenefitItem text="Mobile-friendly interface" />
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FeatureDetail({ title, description, benefits }: { title: string, description: string, benefits: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} text={benefit} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 text-primary" />
      <span>{text}</span>
    </li>
  );
}
