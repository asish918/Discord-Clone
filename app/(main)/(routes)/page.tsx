import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  )
}
