import { useRef } from 'react';
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";


function NewMeetupForm(props) {

// this is the same as your listeners
const titleInputRef = useRef();
const imageInputRef = useRef();
const addressInputRef = useRef();
const descriptionInputRef = useRef();



    function onSubmitHandler(event) {
        // this helps you to stop it going to the server.S
        event.preventDefault();
        //this is the same as getting the value.
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
          title: enteredTitle,
          image: enteredImage,
          address: enteredAddress,
          description: enteredDescription
        }

        props.onAddMeetup(meetupData);

    };

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image"  ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description"  ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add the New Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
