"use client";

import { NavigationIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useLocationsAutocomplete } from "@/hooks/use-locations-autocomplete";
import { LOCATION_SUGGESTIONS } from "@/lib/constants";
import { Location } from "@/types";

import { Button } from "./ui/button";

export const LocationButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button variant="outline" onClick={onClick}>
      <NavigationIcon size={14} className="mr-2" />
      <p className="text-sm text-muted-foreground">Change location...</p>
    </Button>
  );
};

export const LocationItem = ({
  location,
  onSelect,
}: {
  location: Location;
  onSelect: (value: string) => void;
}) => {
  const value = [
    location.city,
    location.country,
    location.coords.lat,
    location.coords.lon,
  ].join(" ");

  return (
    <CommandItem value={value} onSelect={onSelect}>
      <NavigationIcon size={16} className="mr-2" />
      <p className="flex items-center gap-4">
        <span>
          {location.city}, {location.country}
        </span>
      </p>
    </CommandItem>
  );
};

export const LocationDialog = () => {
  const [open, setOpen] = useState(false);
  const { results, loading, value, setValue } = useLocationsAutocomplete();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleLocationSelect = (location: Location) => {
    router.replace(`/?lat=${location.coords.lat}&lon=${location.coords.lon}`);
    setOpen(false);
  };

  return (
    <>
      <LocationButton onClick={() => setOpen(true)} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={value}
          onValueChange={setValue}
          placeholder="Search city..."
        />
        <CommandList>
          {!loading && <CommandEmpty>No results found.</CommandEmpty>}

          {loading && (
            <div className="py-4 flex items-center justify-center">
              <span className="w-8 h-8 rounded-full border-4 border-r-foreground animate-spin" />
            </div>
          )}

          {value === "" && (
            <CommandGroup heading="Suggestions">
              {LOCATION_SUGGESTIONS.map((location) => (
                <LocationItem
                  key={location.id}
                  location={location}
                  onSelect={() => handleLocationSelect(location)}
                />
              ))}
            </CommandGroup>
          )}

          {results.length > 0 && !loading && (
            <CommandGroup heading="Results">
              {results.map((location) => (
                <LocationItem
                  key={location.id}
                  location={location}
                  onSelect={() => handleLocationSelect(location)}
                />
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
