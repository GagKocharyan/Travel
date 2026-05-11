import { AboutSection } from "./AboutSection/AboutSection"
import { AdventuresSection } from "./AdventureSection/AdventuresSection"
import { AwardsSection } from "./AwardsSection/AwardsSection"
import { ExperienceSection } from "./ExperienceSection/ExperienceSection"
import { PopularSection } from "./Section/PopularSection"
import { StarSection } from "./StarSection/StarSection"
import { VideoSection } from "./VideoSection/VideoSection"

export const Main = ({ data }) => {
    return(
        <main className="main">
            <PopularSection data={data} />
            <VideoSection />
            <AboutSection />
            <AdventuresSection />
            <AwardsSection />
            <ExperienceSection />
            <StarSection />
        </main>
    )
}