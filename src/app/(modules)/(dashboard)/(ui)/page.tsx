import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";

const Page = () => {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Stay Tuned for Exciting Updates !</CardTitle>
        <CardDescription className="text-balance max-w-2xl leading-relaxed">
          Were working hard to bring you new content. Check back soon for more
          updates!
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Page;
