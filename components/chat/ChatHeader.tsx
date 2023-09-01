import { Hash, } from "lucide-react";
import MobileToggle from "@/components/MobileToggle";

interface ChatHeaderProps {
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}

const ChatHeader = ({
    serverId,
    name,
    type,
    imageUrl
}: ChatHeaderProps) => {
    return (
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
            <MobileToggle serverId={serverId} />
            {type === "channel" && (
                <Hash className="h-5 w-5 text-zinc-500 dark:text-zinc-400 mr-2" />
            )}
            <p className="font-sembold text-black text-base dark:text-white">
                {name}
            </p>
        </div>
    )
}

export default ChatHeader;