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


import flashcardvector from '/Users/jacobdelott/projects/flashcard-maker/src/assets/flashcardvector.png'


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
    <div className="bg-gray-200 h-screen py-40 px-40 relative"> {/* Added relative positioning to the parent container */}
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold px-20 py-2 pt-16"> Flashcard Ai</h1>
            <h2 className="text-4xl md:text-2xl font-bold py-4 ml-20"> Create all your flashcards fast!</h2>
            <div>
                <form className="flex-col items-center px-20">
                    <input type="text" placeholder="Name" className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full max-w-xs" />
                    <div className="">
                        <input type="email" placeholder="Email" className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full max-w-xs " />
                    </div>
                    <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                    <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 mx-4 rounded">
                        Signup
                    </button>
                </form>
            </div>
            {/* Adjusted positioning classes for the image container */}
            <div className="absolute top-0 right-0 mt-12 mx-40">
                <div className='w-62 h-42'>
                    <img src={flashcardvector} alt='' className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Splash;
