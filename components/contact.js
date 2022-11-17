export default function InputForm({}) {
	const styles = {
		wrapper: `bg-pink text-center lg:p-[70px] p-10 `,
		title: `font-["Poppins"] mt-[90px] lg:text-[64px] text-5xl font-semibold leading-[70px] lg:mb-[90px] mb-20  `,
		formWrapper: `flex lg:w-[1160px] justify-between mx-auto gap-5 flex-wrap  font-["Montserrat"] `,
		inputDiv: `w-[565px]  shrink`,
		inputDivFull: `w-full `,
		input: ` border-[#717171] w-full text-black bg-transparent px-3 py-3 placeholder-opacity-100 placeholder:capitalize placeholder:text-black  border-b-2`,
		submit: "h-[90px] w-[150px] shadow-xl bg-blue mt-[90px] rounded-[15px] font-bold text-white mx-auto ",
	};
	const submitHander = (e) => {
		e.preventDefault();
		console.log(e);
	};

	const fields = [
		{
			inputType: "select",
			id: "Subject",
			label: "How Can We Help You?",
			options: ["House", "Apartment", "Guesthouse", "Hotel"],
			fullwidth: true,
		},
		{
			inputType: "text",
			id: "name",
			label: "name",
		},

		{
			inputType: "email",
			label: "email",
			id: "email",
		},

		{
			inputType: "number",
			id: "Phone",
			label: "Phone",
		},
		{
			inputType: "text",
			label: "Organization*",
			id: "Organization*",
		},

		{
			inputType: "text",
			id: "Message",
			label: "Message",
			multiline: true,
			fullwidth: true,
		},
	];

	const helpertext = (f) => {
		errors.includes(f.id) ? "Please Fill This Field" : "Required";
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>LET’S WORK TOGETHER</div>
			<form action="" className="w-full" submit={(e) => submitHander(e)}>
				<div className={styles.formWrapper}>
					{fields.map((f) => (
						<div
							key={f.id}
							className={
								f.fullwidth
									? styles.inputDivFull
									: styles.inputDiv
							}
						>
							<textarea
								placeholder={f.label}
								id={f.id}
								rows={f.multiline ? 5 : 1}
								className={styles.input}
								required
							></textarea>
						</div>
					))}
					<input
						type="submit"
						value="Send"
						className={styles.submit}
					/>
				</div>
			</form>
		</div>
	);
}
