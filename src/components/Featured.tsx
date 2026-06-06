export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/5884fed6-f469-48cf-aec3-eacf4d7faed4/files/f87a41a7-4b03-4aef-a6f6-b75c8f2e81d9.jpg"
          alt="Professional massage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="services">Наши услуги</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Классический, тайский, спортивный и расслабляющий массаж — каждая техника подобрана индивидуально под ваше тело и состояние.
        </p>
        <ul className="mb-8 space-y-2 text-neutral-700 text-base">
          <li>✦ Классический расслабляющий массаж</li>
          <li>✦ Тайский массаж</li>
          <li>✦ Спортивный и восстановительный</li>
          <li>✦ Массаж лица и головы</li>
        </ul>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться на сеанс
        </button>
      </div>
    </div>
  );
}