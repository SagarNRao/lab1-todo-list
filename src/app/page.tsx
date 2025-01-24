/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ListArr from "@/components/sections/listArr";
import localFont from 'next/font/local';

const drukCondSuperTrial = localFont({
  src: '../fonts/DrukCond-Super-Trial.otf',
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <h1 className="text-8xl" style={{ fontFamily: 'drukCondSuperTrial' }}>TO DO LIST</h1>
      <ListArr />
    </>
  );
}
