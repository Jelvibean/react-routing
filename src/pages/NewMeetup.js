import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

//Test if this makes it out there

function NewMeetupPage() {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
        'https://react-getting-started-1dcbc-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body:  JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
      ).then(() => {
        history.replace('/');
      });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>;
}

export default NewMeetupPage;