import { useState, useEffect } from 'react';

import MeetUpList from '../components/meetups/MeetUpList';

function AllMeetUps() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetch(
			'https://react-mini-app-b01ec-default-rtdb.firebaseio.com/meetups.json'
		).then(response => {
			return response.json();
		}).then(data => {
			const meetups = [];

			for (const key in data) {
				const meetup = {
					id: key,
					...data[key]
				};

				meetups.push(meetup);
			}

			setIsLoading(false);
			setLoadedMeetups(meetups);
		});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<>
			<div>All Meetups</div>
			<MeetUpList meetups={loadedMeetups} />
		</>
	);
};

export default AllMeetUps;
