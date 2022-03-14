import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';
function NewMeetupPage() {
    const navigate = useNavigate();
    const DB_PATH = 'https://react-meetups-daf4a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';
    function addMeetupHandler(meetupData) {
        fetch(DB_PATH, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/');
        });
    }
    
    return <section>
        <h1>Add New Meetup</h1>

        <NewMeetupForm onAddMeetup={ addMeetupHandler } />
    </section>;
}

export default NewMeetupPage;