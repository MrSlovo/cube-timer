import { NextPage } from 'next';
import NavBar from './components/navbar';

const TimerScreen: NextPage = () => {
	return (
		<div>
			<NavBar />
			<h1>Timer Screen</h1>
		</div>
	);
};

export default TimerScreen;