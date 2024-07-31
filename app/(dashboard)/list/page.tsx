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
          <p><a href="/search">Search</a></p>
        </CardContent>
        <CardHeader>
          <CardTitle>Your Colleges</CardTitle>
          <CardDescription>blah</CardDescription>
        </CardHeader>
      </Card>
    );
  }
