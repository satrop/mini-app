import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import MeetupForm from '../components/meetups/NewMeetUpForm';

function NewMeetUps() {
	const history = useHistory();

	function addMeetUpHandler(meetupData) {
		fetch(
			'https://react-mini-app-b01ec-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).then(() => {
			history.replace('/');
		});
	}

	return (
		<section>
			<h1>New Meetup</h1>
			<MeetupForm onAddMeetUp={addMeetUpHandler} />
		</section>
	);
};

export default NewMeetUps;
