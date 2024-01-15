import geo from '../../../assets/images/geo.png'

export default function RigthMenu() {
  return (
    <>
    <div>
    <div>
      <p>Ваша корзина пуста.</p>
      <p>Добавьте же скорее что-нибудь!</p>
      <button>Бесплатная доставка от 800 сом</button>
    </div>
    <div>
        <div>
          <img src={geo} alt="адрес" />
        </div>
        <div>
            <p>Укажите адрес</p>
            <p>И узнайте время доставки</p>
        </div>
    </div>
    </div>
    </>
  );
}
