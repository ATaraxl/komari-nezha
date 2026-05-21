"use client"

import { useCommand } from "@/hooks/use-command"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

import { Button } from "./ui/button"

export function SearchButton() {
  const { openCommand } = useCommand()

  return (
    <Button
      variant="outline"
      size="sm"
      className="glass-chip cursor-pointer rounded-full px-[9px] hover:bg-white/40 dark:hover:bg-black/35"
      onClick={openCommand}
      title="Search"
    >
      <MagnifyingGlassIcon className="size-4" />
      <span className="sr-only">Search</span>
    </Button>
  )
}
