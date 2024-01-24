"use client";
import React, { FormEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full">
      <form
        className="flex content-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(event: FormEvent) => {
          event.preventDefault();
          if (inputRef.current) handleSearch(inputRef.current.value);
        }}
      >
        <Input
          className="border-2"
          ref={inputRef}
          placeholder="Search Movies"
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </div>
  );
};
export default SearchInput;
