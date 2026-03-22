import IndividualWork from "./IndividualWork";
import Skills from "./Skills";

import greenEmerald from "../assets/green-emerald.png";
import spaceTourism from "../assets/space-tourism.png";
import investmentCalc from "../assets/investment-calculator.png"
import ticTacToe from "../assets/tic-tac-toe.png"
import myTodolist from "../assets/my-todolist.jpg"
import portfolioWebsite from "../assets/portfolio-website.png"
import owl from "../assets/owl.png"
import locationfinder from "../assets/locationfinder.png"
import emeraldbooks from "../assets/emeraldbooks.png"
import lafiamoms from "../assets/lafiamoms.png"

export default function Works(){
    return(
        <section className="Works" >
            <div className="individualWorksWrapper">
                <IndividualWork
                link="https://lafiamoms.com/"
                desktopImage={lafiamoms}
                workTitle="LafiaMoms"
                firstTag="ReactJs/TS"
                secondTag="Tailwind"
                thirdTag="UIUX"/>

                <IndividualWork
                link="https://emeraldbooksng.com/"
                desktopImage={emeraldbooks}
                workTitle="Green Emerald Educational Services"
                firstTag="ReactJs / TS"
                secondTag="Tailwind CSS"
                thirdTag="Sanity CMS"/>

                <IndividualWork
                link="https://location-finder-wine-five.vercel.app/"
                desktopImage={locationfinder}
                workTitle="Location Finder"
                firstTag="React"
                secondTag="TS"
                thirdTag="MapboxGL"/>

                <IndividualWork
                link="https://owl-mocha.vercel.app/"
                desktopImage={owl}
                workTitle="Owl Website"
                firstTag="UIUX"
                secondTag="Html/CSS"
                thirdTag="ReactJS"/>

                <IndividualWork
                link="https://space-tourism-website-tau-three.vercel.app/"
                desktopImage={spaceTourism}
                workTitle="Space Tourism Website"
                firstTag="Html"
                secondTag="CSS"
                thirdTag="Javascript"/>

                <IndividualWork
                link="https://emerald-publishers.vercel.app/"
                desktopImage={greenEmerald}
                workTitle="Green Emerald website"
                firstTag="UIUX"
                secondTag="Html/CSS"
                thirdTag="JS"/>

                <IndividualWork
                link="https://investment-calculator-seven-indol.vercel.app/"
                desktopImage={investmentCalc}
                workTitle="Investment Calculator"
                firstTag="ReactJS"
                secondTag="Html/CSS"
                thirdTag="JS"/>

                <IndividualWork
                link="https://tic-tac-toe-zeta-azure-39.vercel.app/"
                desktopImage={ticTacToe}
                workTitle="Tic-Tac-Toe Game"
                firstTag="ReactJS"
                secondTag="Html/CSS"
                thirdTag="JS"/>

                <IndividualWork
                link="https://my-todolist-10.vercel.app/"
                desktopImage={myTodolist}
                workTitle="My TodoList"
                firstTag="UIUX"
                secondTag="ReactJS"
                thirdTag="Html/CSS"/>

                <IndividualWork
                link="#"
                desktopImage={portfolioWebsite}
                workTitle="Portfolio Website"
                firstTag="UIUX"
                secondTag="Html/CSS"
                thirdTag="ReactJS"/>
            </div>

            <div id="worksDescription" >
                <h1>Works</h1>
                <Skills/>
            </div>

        </section>
    )
}