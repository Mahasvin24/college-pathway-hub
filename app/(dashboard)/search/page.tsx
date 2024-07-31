import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function CustomersPage() {
  return (
    <Card>
      <CardContent>
          <br></br>
          <p title="Go to"><a href="/checklist">Checklist</a></p>
          <p><a href="/list">List</a></p>
        </CardContent>
      <CardHeader>
        <CardTitle>Search</CardTitle>
        <CardDescription>Find Your College Here</CardDescription>
      </CardHeader>
    </Card>
  );
}
