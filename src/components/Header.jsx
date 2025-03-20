// import reactImg from '../../assets/react-core-concepts.png';
import MenuList from "./MenuList";

export default function Header() {
  return (
    <header>
      <h2>Rachael</h2>
      <ul id="menuNav">
        <MenuList link="#" page="About"/>
        <MenuList link="#works" page="Works"/>
        <MenuList link="#contactSection" page="Contact"/>
      </ul>
    </header>
  );
}