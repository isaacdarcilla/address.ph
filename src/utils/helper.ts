import { Address } from "@enums/address";
import { Region } from "@utils/type";

export const address = async (path: Address): Promise<Region[]> => {
	return (await fetch(`${Bun.env.BASE_URL}${path}.json`)).json() as Promise<Region[]>;
};
