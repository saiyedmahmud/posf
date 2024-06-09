import { Col, Layout, Row } from "antd";
import styles from "./Footer.module.css";

function Footer() {
	const { Footer: AntFooter } = Layout;
	const year = new Date().getFullYear();

	return (
		<AntFooter className={styles.footer}>
			<Row>
				<Col xs={24} md={24} lg={12} className={styles.copyrightCol}>
					<p className={styles.copyrightText}>
						{year}{" "}
						<a
							href='https://iamtakdir.xyz'
							className='font-weight-bold'
							target='_blank'
							rel='noreferrer'>
							Potato Squad
						</a>{" "}
					</p>
				</Col>
				<Col xs={24} md={24} lg={12}></Col>
			</Row>
		</AntFooter>
	);
}

export default Footer;
