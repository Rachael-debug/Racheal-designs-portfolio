import profileImg from '../assets/profile-pic.jpg';
import star from '../assets/star.svg';
import rachaelResume from '../assets/Rachael-Resume.pdf'
import downloadResume from '../assets/downloadResume.svg'

export default function About(){
    return(
        <main id='about'>
            <div id='totalIntro'>  
                <div id="firstInfo">
                    <h1>WEB</h1>
                    <h1>DEVE</h1><h2><span>LOPER</span></h2>
                    <p id='introduction'>Creative and detail-oriented Graphic Designer transitioning into Frontend Development. Proficient in HTML, CSS, and JavaScript, with a strong foundation in UI/UX design principles.</p>
                </div>
            
                <div id='profileImg'>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <a href={rachaelResume} download="Rachael Resume" id='downloadResume'><img src={downloadResume} alt="Download Resume" /></a>
                    <div id='secondInfo'>
                        <p className='appDesriptions'>user-friendly<br/>designs</p>
                        <img src={star} alt="" />
                        <p className='appDesriptions'>responsive<br/>web applications</p>
                    </div>
                </div>
            </div>
            <ul id='roles'>
                <li>[  Frontend Developer  ]</li>
                <li>[  UIUX Designer  ] </li>
                <li>[  Graphic Designer  ]</li>
            </ul>
        </main>
    )
}