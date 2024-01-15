import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import pizza from "../../../assets/images/pizza.png";
import sety from "../../../assets/images/sety.png";
import wok from "../../../assets/images/wok.png";
import rolly from "../../../assets/images/rolly.png";
import sushi from "../../../assets/images/sushi.png";
import salat from "../../../assets/images/salat.png";
import sup from "../../../assets/images/sup.png";
import corndog from "../../../assets/images/corndog.png";
import sale from "../../../assets/images/sale.png";
import drinks from "../../../assets/images/drinks.png";
import cls from "../LeftMenu/left.module.scss";

export default function LeftMenu() {
  return (
    <div className={cls.block}>
      <ul className={cls.blockList}>
        <NavLink className={cls.blockLink} to="/">
          <li className={cls.blockLogo}>
            <img src={logo} alt="logo" />
            ROMSEM
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={pizza} alt="pizza" />
            Пицца
          </li>
        </NavLink>
        <NavLink className={cls.blockLink} to="/Product">
          <li>
            <img src={sety} alt="Сеты" />
            Сеты
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={wok} alt="WOK" />
            WOK
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={rolly} alt="Rolly" />
            Роллы
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={sushi} alt="Суши" />
            Суши
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={salat} alt="Салаты" />
            Салаты
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={sup} alt="Супы" />
            Супы
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={corndog} alt="корн доги" />
            Корн доги
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={drinks} alt="Напитки" />
            Напитки
          </li>
        </NavLink>
        <NavLink className={cls.blockLink}>
          <li>
            <img src={sale} alt="Акции" />
            Акции
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
