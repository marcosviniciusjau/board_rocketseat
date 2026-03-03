import { Link, MoveLeftIcon } from "lucide-react";

export default function IssueLoading() {
  return (
     <main className="max-w-[900px] mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl">
      <Link
        href="/"
        className="flex items-center gap-2 text-navy-200 hover:text-navy-100"
      >
        <MoveLeftIcon className="size-4" />
        <span className="text-xs">Back to board</span>
      </Link>
    <div className="flex items-center gap-2">
      <div className="bg-navy-700 rounded-lg h-7 w-24 animate-pulse"/>
      <div className="bg-navy-700 rounded-lg h-7 w-16 animate-pulse"/>
    </div>

    <div className="space-y-2">
      <div className="bg-navy-700 rounded-lg h-8 w-2/3 animate-pulse"/>
      <div className="space-y-1.5">
        <div className="h-4 bg-navy-700 rounded-lg w-full animate-pulse"/>
        <div className="h-4 bg-navy-700 rounded-lg w-full animate-pulse"/>
        <div className="h-4 bg-navy-700 rounded-lg w-full animate-pulse"/>
        <div className="h-4 bg-navy-700 rounded-lg w-full animate-pulse"/>
        <div className="h-4 bg-navy-700 rounded-lg w-3/5 animate-pulse"/>
      </div>
    </div>
    </main>
  )
}