import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
                The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button asChild>
                <Link href="/">Go back home</Link>
            </Button>
        </main>
    )
} 