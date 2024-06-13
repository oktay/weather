"use client";

import { NavigationIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDisclosure, useLocations } from "@/hooks";
import { DEFAULT_SUGGESTIONS } from "@/lib/constants";
import { Location } from "@/types";

import { Button, ButtonProps } from "./ui/button";

export const LocationButton = ({ ...props }: ButtonProps) => {
  return (
    <Button variant="outline" {...props}>
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
    location.name,
    location.state,
    location.country,
    location.lat,
    location.lon,
  ]
    .filter(Boolean)
    .join(" ");

  const name = [location.name, location.state, location.country]
    .filter(Boolean)
    .join(", ");

  return (
    <CommandItem value={value} onSelect={onSelect}>
      <NavigationIcon size={16} className="mr-2" />
      <p className="flex items-center gap-4">
        <span>{name}</span>
      </p>
    </CommandItem>
  );
};

export const LocationDialog = () => {
  const { results, loading, value, setValue } = useLocations();
  const { isOpen, open, close, toggle } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const handleLocationSelect = (location: Location) => {
    router.replace(`/?lat=${location.lat}&lon=${location.lon}`);
    close();
  };

  return (
    <>
      <LocationButton onClick={open} />
      <CommandDialog open={isOpen} onOpenChange={toggle}>
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
              {DEFAULT_SUGGESTIONS.map((location) => (
                <LocationItem
                  key={location.lat}
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
                  key={location.lat}
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
