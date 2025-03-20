import IndividualWork from "./IndividualWork";
import Skills from "./Skills";

import greenEmerald from "../assets/green-emerald.png";
import spaceTourism from "../assets/space-tourism.png";
import investmentCalc from "../assets/investment-calculator.png"
import ticTacToe from "../assets/tic-tac-toe.png"
import myTodolist from "../assets/my-todolist.jpg"
import portfolioWebsite from "../assets/portfolio-website.png"

export default function Works(){
    return(
        <section className="Works" >
            <div className="individualWorksWrapper">
                <IndividualWork
                link="https://emerald-publishers.vercel.app/"
                desktopImage={greenEmerald}
                workTitle="Green Emerald website"
                firstTag="UIUX"
                secondTag="Html/CSS"
                thirdTag="JS"/>

                <IndividualWork
                link="https://space-tourism-website-tau-three.vercel.app/"
                desktopImage={spaceTourism}
                workTitle="Space Tourism Website"
                firstTag="Html"
                secondTag="CSS"
                thirdTag="Javascript"/>

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