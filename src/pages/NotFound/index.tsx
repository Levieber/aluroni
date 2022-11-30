import styles from "./NotFound.module.scss";
import theme from "styles/Theme.module.scss";
import { ReactComponent as NotFoundImg } from "assets/not_found.svg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MdArrowLeft } from "react-icons/md";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.container, theme.container)}>
      <div className={styles.goBack}>
        <button onClick={() => navigate(-1)}>
          <MdArrowLeft /> Voltar
        </button>
      </div>
      <NotFoundImg />
    </div>
  );
}
