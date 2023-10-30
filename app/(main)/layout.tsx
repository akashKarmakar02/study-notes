"use client";

import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";
import { SearchCommand } from "@/components/SearchCommand";

function layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
}

export default layout;
