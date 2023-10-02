import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoaderMeetups] = useState([]);

  //useEffect makes it that our fetch will only run when our component first loads.
  //Without this useEffect, because everytime the state changes, the componenet gets re-rendered, then the fetch
  //would be triggered everytime.
  useEffect(() => {
    setIsloading(true);
    fetch(
      "https://react-getting-started-1dcbc-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // the following must be done because we receive an object from the DB
        // but we are expecting an array in MeetupList.js on line 7.
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsloading(false);
        setLoaderMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUpsPage;
