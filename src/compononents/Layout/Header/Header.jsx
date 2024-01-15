import cls from "../Header/header.module.scss";
import clock from "../../../assets/images/clock.png";
import search from "../../../assets/images/Search.png";
export default function Header() {
  return (
    <header className={cls.cont}>
      <div className={cls.contInfo}>
        <p>Наш тедефон</p>
        <p>+996 705 188 955</p>
        <p>+996 555 188 955</p>
        <p>
          <img src={clock} alt="clock" />
          работаем с 10:00 до 00:00
        </p>
      </div>
      <div className={cls.contCity}>
        <div className={cls.contCityInfo}>
          <p>Город:</p>
          <p>Бишкек</p>
        </div>
        <div className={cls.contPay}>
          <p>Отзывы</p>
          <p>Доставка и оплата</p>
          <div>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </header>
  );
}
