"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuRadioGroup, 
  DropdownMenuRadioItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function LanguagePage() {
  const [language, setLanguage] = React.useState('English');
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Language / Idioma</CardTitle>
        <CardDescription>Choose language below / Elija el idioma a continuación</CardDescription>
      </CardHeader>
      <CardContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>{language}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem 
                  value="english" 
                  onClick={() => setLanguage("English")}
                >
                  English
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem 
                  value="español" 
                  onClick={() => setLanguage("Español")}
                >
                  Español
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  )
}
