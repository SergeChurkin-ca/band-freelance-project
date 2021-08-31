import React from "react"

import Header from "../components/Header/Header"
import Jams from "../components/Jams/Jams"
import Video from "../components/Video/Video"
import UpcomingEvents from "../components/UpcomingEvents/Events"
import Tracks from "../components/Tracks/Tracks"
import News from "../components/News/News"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
    return (
        <div>

            <h1>home, sweet home</h1>
            <Header />
            <Jams />
            <Video />
            <UpcomingEvents />
            <Tracks />
            <News />
            <Contact />
            <Footer />
        </div>
    )
}


