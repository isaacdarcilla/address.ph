import { address } from "@utils/helper";

export const regions = async () => {
	return await address("region");
};

console.log(regions().then((res) => console.log(res)));
