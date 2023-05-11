import React from "react";

type Props = {};

const FormFooter = (props: Props) => {
	return (
		<div className="flex justify-end p-10 border-0 border-t border-blue-900 border-solid">
			<button className="bg-[#dc1a22] px-10 py-5 text-white text-2xl">
				Continue
			</button>
		</div>
	);
};

export default FormFooter;
