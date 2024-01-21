import React from "react"
import ArchiveCard from "@/components/ArchiveCard";

const Archive = () => {
  return <div className={"max-w-contentContainer mx-auto px-4 py-24"}>
    <div className={"w-full flex flex-col items-center"}>
      <h2 className={"text-3xl font-titleFont font-semibold"}>Other Noteworthy Projects</h2>
      <p className={"text-[20px] font-titleFont text-textGreen"}>view the archive</p>
    </div>
    <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10"}>
      <ArchiveCard
          title={"Cat Away"}
          des={"School project of an infinite platformer game where player takes a role of a cat going through\n" +
              "city and avoiding obstacles. In this project i actively collaborated with other programmer, and group\n" +
              "of 2D artists using scrum"}
          listItem={["", "", ""]}
          link={"https://github.com/Retsav/Cat-Away"}
      />
      <ArchiveCard
          title={"Inventory and Valheim-like treecutting system"}
          des={"School project where i created simple minecraft style inventory system allowing player to pick up" +
              "objects, stack them, and drop them. It also has a recreation of a treecutting system from Valheim."}
          listItem={["DOTween"]}
          link={"https://github.com/Retsav/projektowanieunity-zajecia"}
      />
      <ArchiveCard
          title={"Ghost Busting"}
          des={"Simple Unity demo project where i created custom Quick-Time event system using DOTween and ScriptableObjects. " +
              "Everything in this system could be set via the inspector for game designers."}
          listItem={["ScriptableObjects", "DOTween", "Cinemachine"]}
          link={"https://github.com/Retsav/GhostBusting"}
      />
    </div>
  </div>  
};

export default Archive;