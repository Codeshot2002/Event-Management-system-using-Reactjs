import React from 'react'
import "./Events.css"
import Card from './card/Card'
function Events() {
  return (
    <>
    <div className="Main-container">
        <div className="heading-text">
            Upcoming Events
        </div>
        <div className="card-Holder">
            <Card
             card_title="Karan Aujla"
             card_subtitle="Experience the magic of Karan Aujla live on his It Was All A Dream World Tour! Get ready for a night of sensational music as he performs his biggest hits, including the soulful 'Softly', 'Winning Speech', 'IDK HOW', and 'Antidote'."
             location="New Delhi"
             date="19/11/2024"
            />
        </div>
    </div>
    </>
  )
}

export default Events