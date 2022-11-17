import { AiOutlineArrowDown } from "react-icons/ai";
import Post from "./post.js";
import { MdNavigateNext } from "react-icons/md";
import { useEffect } from "react";

export default function InstragramPosts({ posts }) {
	const styles = {
		wrapper:
			"w-screen bg-blue text-center px-[75px] py-[30px] lg:grid flex flex-wrap gap-10 grid-cols-3 ",
	};
	return (
		<div>
			<div className={styles.wrapper}>
				{posts.map((p) => (
					<div key={p.id}>
						{(posts.indexOf(p) + 2) % 3 === 0 ? (
							<Post
								img={p.img}
								title={p.caption}
								date={p.date.split("-").slice(0, 2)}
								year="2022"
								link={p.link}
							/>
						) : (
							<div className="mt-[75px] ">
								<Post
									img={p.img}
									title="Follow For More"
									date={p.date.split("-").slice(0, 2)}
									year="2022"
									link={p.link}
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
