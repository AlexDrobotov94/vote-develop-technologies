import { SignIn } from "@/features/auth";

export function Header() {
    return <header className="border-b ">
        <div className="container mx-auto flex justify-between items-center py-4">
            <div className="">
                <span className="font-bold text-2xl">PAROMOV'</span>
                <span className="text-xl">чане</span>
            </div>
            <div className="">
                <SignIn />
            </div>
        </div>
    </header>;
}
