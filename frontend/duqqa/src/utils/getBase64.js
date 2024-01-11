import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(url) {
	try {
		const buffer = await fetch(url).then(async (res) =>
			Buffer.from(await res.arrayBuffer())
		);

		const { base64 } = await getPlaiceholder(buffer);
		return base64; 
	} catch (err) {
		console.error(err);
	}
}