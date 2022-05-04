import { ButtonGroup, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';

export default function Home() {
	const navigate = useNavigate();
	const toBuyer = () => navigate('/buyer');
	const toSeller = () => navigate('/seller');
	return (
		<Styles.Wrapper>
			<ButtonGroup variant='contained' aria-label='large button group'>
				<Button onClick={toBuyer}>Buyer</Button>
				<Button onClick={toSeller}>Seller</Button>
			</ButtonGroup>
		</Styles.Wrapper>
	);
}
