// HeroSection.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  py?: number;
  px?: number;
  
}

const HeroSection: React.FC<HeroSectionProps> = ({

//   subtitle,
//   backgroundColor = 'bg-gray-400',
//   textColor = 'text-white',
//   py = 40,
//   px = 8,
  
}) => {
  return (
    <div className="bg-gray-200 px-40 py-40">
      <div className=""></div>
      <div className="container mx-auto relative ">
        <h1 className="text-4xl md:text-6xl font-bold px-40 py-20"> Flashcard Ai</h1>
        <div className='absolute flex justify-center right-1/3 transform -translate-x-1/2 mr-4 mb-40 px-40'>
            <h2> Create all your flashcards fast!</h2>
        </div>
      <div className='flex justify-end p-80'>
        <div className='absolute top-0 right-0 mt-8 mr-8'>
            <Card className='mr-40 px-20 py-40'>
            <CardHeader>
                <CardTitle>Vocabulary</CardTitle>
                <CardDescription className='p-4'>Spanish Words</CardDescription>
            </CardHeader>
            <CardContent>
                <p></p>
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
            </Card>
         
        </div>
      </div>
        </div>
    </div>
  );
};

export default HeroSection;
