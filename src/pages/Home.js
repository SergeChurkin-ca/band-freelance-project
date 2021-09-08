import React from "react";

import Header from "../components/Header/Header";
import Jams from "../components/Jams/Jams";
import Video from "../components/Video/Video";
import Tracks from "../components/Tracks/Tracks";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Jams />
        <Video />
        <Tracks />
      </main>
      <Contact />
    </div>
  );
}
