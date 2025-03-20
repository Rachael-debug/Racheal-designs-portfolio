export default function MenuList({link, page}){
    return(
        <li>
            <a href={link} target="_top">{page}</a>
        </li>
    )
}