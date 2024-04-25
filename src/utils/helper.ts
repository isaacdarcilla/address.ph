import { Region } from "@utils/type";

export const address = async (path: string): Promise<Region[]> => {
	return (await fetch(`${Bun.env.BASE_URL}${path}.json`)).json();
};
