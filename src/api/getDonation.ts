import axios from "axios";
interface Props {
	donationId: string | number | null;
}

const getDonation = async ({ donationId }: Props) => {
	try {
		const res = await axios.get(
			`https://${process.env.API_HOST}/api/get-donation?donationId=${donationId}`
		);

		return res.data;
	} catch (e) {
		console.error(e);
	}
	return;
};

export default getDonation;
