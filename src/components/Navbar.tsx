'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Github, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import { useGlobalContext } from '@/context/globalContext';

export default function Navbar() {
  const router = useRouter();

  function pushToSourceCode() {
    router.push('/source-code');
  }

  const { state } = useGlobalContext();

  console.log(state);

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <h1 className="">RifkyCuaca.</h1>
      <nav className="flex items-center shrink-0 w-full gap-x-2 sm:w-fit">
        <SearchBar />
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <Button
            className="flex items-center gap-x-2"
            onClick={pushToSourceCode}
          >
            <Github size={20} /> Source Code
          </Button>
        </div>
      </nav>
    </div>
  );
}

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
