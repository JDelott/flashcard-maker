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


import mainpic from '/Users/jacobdelott/projects/flashcard-maker/src/assets/mainpic.png'


interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  py?: number;
  px?: number;
  
}

// eslint-disable-next-line no-empty-pattern
const Splash: React.FC<HeroSectionProps> = ({


}) => {
  return (
    <div className="bg-gray-200 py-40 px-40">
   
      <div className="container mx-auto relative ">
        <h1 className="text-4xl md:text-6xl font-bold px-20 py-2 pt-16"> Flashcard Ai</h1>
        <h2 className="text-4xl md:text-2xl font-bold py-4 ml-20"> Create all your flashcards fast!</h2>
        <div>
        <form className="flex-col items-center px-20">
            <input type="text" placeholder="Name" className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full max-w-md" />
            <div className="" >
              <input type="email" placeholder="Email" className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full max-w-md " />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>
    </div>
        
      <div className='flex justify-end p-80'>
        <div className='absolute top-0 right-0 mt-8 mr-8'>
            <Card className='mr-40 px-20 py-20'>
            <CardHeader>
                <CardTitle>Vocabulary</CardTitle>
                <CardDescription className='p-4'>Spanish Words</CardDescription>
            </CardHeader>
            <CardContent>
               <div className='w-32'>
                <img src={mainpic} alt='' className="" />
              </div>
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
            
            </Card>
            
         
        </div>
      </div >
        </div>
    </div>
  );
};

export default Splash;
