import { Address } from "../enums/address";
import { Region } from "../utils/type";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const address = async (path: Address): Promise<Region[]> => {
	return (await fetch(`${Bun.env.BASE_URL}${path}.json`)).json() as Promise<Region[]>;
};

export const regions = async (): Promise<Region[]> => {
	return await address(Address.REGION);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
