import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
import Navbar from "./navbar.js";
export default function Header({
	logo,
	companyLinkList,
	connectLinkList,
	expertLinkList,
	termLink,
	privacyLink,
}) {
	const styles = {
		wrapper:
			" justify-center gap-10  text-center  lg:w-[1050px] mx-auto shrink lg:flex p-10 lg:p-[50px]  ",
		logoDiv: "lg:w-1/3 lg:text-left ",
		logo: `font-["Arapey"]  text-[64px] leading-[70px] `,
		subHeading: ` text-[18px] leading-[1.5] font-semibold my-[5px] font-["Montserrat"]  `,
		iconWrapper:
			"p-2 rounded-md text-white bg-black w-fit lg:ml-auto lg:mr-0 mx-auto my-10 lg:my-0 ",
		menuDiv: `lg:w-2/3`,
		menus: `flex shrink gap-20 text-left font-['Arapey'] text-[16px] uppercase `,
		menuItems: "text-[14px] mb-1 capitalize",
		newsletter: `lg:w-1/3 font-['Arapey'] lg:text-left text-[16px] uppercase w-fit mx-auto`,
		input: `  w-full text-black bg-white p-3 my-2 h-[40px] placeholder-opacity-100 placeholder:capitalize placeholder:text-black  `,
	};
	return (
		<div className="w-screen bg-light-blue">
			<div className={styles.wrapper}>
				<div className={styles.logoDiv}>
					<div className={styles.logo}>{logo ? logo : "logo"}</div>
					<div className={styles.subHeading}>
						The communications platform for companies where complete
						privacy is business critical.
					</div>
				</div>
				<div className={styles.menuDiv}>
					<div className={styles.iconWrapper}>
						<BsFillPlayFill size={25} />
					</div>

					<div className="flex flex-wrap lg:flex-nowrap justify-center shrink  gap-10">
						<div className={styles.menus}>
							<div className={styles.menuList}>
								<div className="pb-2">company</div>
								{companyLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
							<div className={styles.menuList}>
								<div className="pb-2">connect</div>
								{connectLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
							<div className={styles.menuList}>
								<div className="pb-2">expert</div>
								{expertLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
						</div>
						<div className={styles.newsletter}>
							Stay Up to Date
							<input
								type="email"
								placeholder="email"
								className={styles.input}
							/>
							<div className="cursor-pointer underline capitalize text-[14px] ">
								Sign up for newsletter
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex lg:w-[1050px] mx-auto p-[50px]">
				<div className="mr-auto text-[16px]">
					2020 - Logo - All rights reserved
				</div>
				<div className="ml-auto flex gap-2 underline text-[14px] ">
					<Link href={termLink ? termLink : "/"}>
						<div>Terms</div>
					</Link>
					<Link href={privacyLink ? privacyLink : "/"}>
						<div>Privacy</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
