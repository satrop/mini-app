import MeetUpList from '../components/meetups/MeetUpList';

const DUMMY_DATA = [
	{
		"id": "1",
		"image": "https://picsum.photos/id/1/200/300",
		"title": "First Meetup",
		"description": "This is the first meetup. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		"id": "2",
		"image": "https://picsum.photos/id/2/200/300",
		"title": "Second Meetup",
		"description": "This is the second meetup. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	}
]

function AllMeetUps() {
	return (
		<>
			<div>All Meetups</div>
			<MeetUpList meetups={DUMMY_DATA} />
		</>
	);
};

export default AllMeetUps;
