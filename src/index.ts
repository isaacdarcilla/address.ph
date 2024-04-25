import { Address } from "@enums/address";
import { address } from "@utils/helper";
import { Region } from "@utils/type";

export const regions = async (): Promise<Region[]> => {
	return await address(Address.REGION);
};
