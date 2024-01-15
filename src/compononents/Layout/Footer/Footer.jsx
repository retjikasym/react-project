import whatsapp from '../../../assets/images/whatsapp.png'
import telagram from '../../../assets/images/telega.png'
import instagram from '../../../assets/images/instagram.png'
export default function Footer() {
  return (
    <footer>
      <div>
        <p>О компании</p>
        <p>Доставка и оплата</p>
        <p>Лента материалов</p>
        <p>Политика возврата</p>
      </div>
      <div>
        <p>Введите номер</p>
        <p>+996 (__) ___ __ __</p>
        <p>Выберите удобный мессенджер для общения</p>
        <div>
          <img src={whatsapp} alt="whatsapp" />
          <img src={telagram} alt="telagram" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div>
        <p>Тел:+996 705 188 955 </p>
        <p>Тел:+996 555 188 955 </p>
        <p>Адрес:Бакаева 126</p>
      </div>
    </footer>
  );
}
