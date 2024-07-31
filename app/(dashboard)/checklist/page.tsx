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
          <p title="Go to"><a href="/list">List</a></p>
          <p><a href="/search">Search</a></p>
        </CardContent>
        <CardHeader>
          <CardTitle>Checklist</CardTitle>
          <CardDescription>Check Your Progess Here</CardDescription>
        </CardHeader>
      </Card>
    );
      
  }
  
