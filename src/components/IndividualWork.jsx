export default function IndividualWork({link, desktopImage, firstTag, secondTag, thirdTag, workTitle}){
    return(
        <a href={link} className="individualWorksLink" target="_blank">
            <div className="individualWork">
               
                <img src={desktopImage} alt="" />

                <div className="tags">
                    <p>{firstTag}</p>
                    <p>{secondTag}</p>
                    <p>{thirdTag}</p>
                </div>
                <h3 className="workTitle">{workTitle}</h3>
            </div>
        </a>
    )
}