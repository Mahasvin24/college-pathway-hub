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

export default function SearchPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Colleges</CardTitle>
        <CardDescription>Fill in these boxes and have AI help you find colleges that fit your needs.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex'>
          <div className='flex-1 pr-4'>
            <div className='mb-4'>
              <label>Interested Majors:</label>
              <Input type="text" placeholder="e.g. Computer Science, Environmental Science" className='w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label>Location:</label>
              <Input type="text" placeholder="e.g. California, Northeast" className='w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label>Type of College:</label>
              <Input type="text" placeholder="e.g. Public, Private, Community College" className='w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label>Affordability:</label>
              <Input type="text" placeholder="e.g. Low, Medium, High" className='w-full mt-2' />
            </div>
          </div>
          <div className='w-px bg-gray-300 mx-4'></div>
          <div className='flex-1 pl-4'>
            <div className='mb-4'>
              <label>Campus Size:</label>
              <Input type="text" placeholder="e.g. Small, Medium, Large" className='w-full mt-2 mt-2' />
            </div>
            <div className='mb-4'>
              <label>GPA:</label>
              <Input type="text" placeholder="e.g. 3.5, 4.0" className='w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label>SAT/ACT Scores:</label>
              <Input type="text" placeholder="e.g. 1200-1400 SAT, 25-30 ACT" className='w-full mt-2' />
            </div>
            <div className='mb-4'>
              <label>Other Information:</label>
              <Textarea placeholder="Any additional information or preferences you have" className='w-full mt-2' />
            </div>
            <Button type="submit" className='w-full flex items-center justify-center'>
              <SearchCheck className="h-5 w-5" />
              <span className='ml-2'>Search!</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
