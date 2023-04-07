import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Scheduler = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div className="Scheduler">
      <h2 class="mb-2 title-color">Book an appoinment</h2>
      <InlineWidget url="https://calendly.com/betselotgetnet2227/45min" />
    </div>
  );
};

export default Scheduler;
