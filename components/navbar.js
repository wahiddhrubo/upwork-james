import Link from "next/link";
import Image from "next/image";
import Hamburger from "./hamburger.js";

export default function Navbar({ services, contact, about, research, logo }) {
	const styles = {
		wrapper: `flex w-fit mx-auto absolute left-0 right-0 mx-auto lg:p-8  `,
		logo: `bg-transparent font-["Arapey"] text-white text-[45px] lg:px-20 px-5 mr-auto mt-3 lg:m-auto  `,
		links: " lg:p-10 font-['Montserrat'] text-[16px] font-semibold mt-5 text-white leading-loose ",
		mobileMenu: "lg:hidden flex w-screen ",
	};
	return (
		<div className={styles.wrapper}>
			<div className="lg:block hidden">
				<div>
					<a className={styles.links}>
						<Link href={services ? services : "/services"}>
							Services
						</Link>
					</a>
					<a className={styles.links}>
						<Link href={contact ? contact : "/contact"}>
							Contact
						</Link>
					</a>
					<a className={styles.logo}>
						{logo ? <Image src={logo} /> : "LOGO"}
					</a>
					<a className={styles.links}>
						<Link href={about ? about : "/about"}>About</Link>
					</a>
					<a className={styles.links}>
						<Link href={research ? research : "/research"}>
							Research
						</Link>
					</a>
				</div>
			</div>
			<div className={styles.mobileMenu}>
				<a className={styles.logo}>
					{logo ? <Image src={logo} /> : "LOGO"}
				</a>
				<div className="ml-auto">
					<Hamburger />
				</div>
			</div>
		</div>
	);
}
