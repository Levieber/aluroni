import NotFoundImg from "@/assets/not-found.svg?react";
import { clsx } from 'clsx';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme.module.scss";
import styles from "./not-found.module.scss";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className={clsx(styles.container, theme.container)}>
			<div className={styles.goBack}>
				<button type="button" onClick={() => navigate(-1)}>
					<MdKeyboardArrowLeft /> Voltar
				</button>
			</div>
			<NotFoundImg />
		</div>
	);
}
