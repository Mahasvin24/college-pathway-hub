import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SearchCheck } from 'lucide-react';

export default function LangueagePage() {
  return(
    <Card>
      <CardHeader>
        <CardTitle>Language</CardTitle>
        <CardDescription>Choose language below</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}