/* ============================================================
   PetHouse — Главный JavaScript-файл
   Версия: 2.0
   ============================================================ */

'use strict';

/* ── 1. БАЗА ДАННЫХ ТОВАРОВ ──────────────────────────────── */

const PRODUCTS = [
    /* ── Корма ── */
    {
        id: 1,
        category: 'food',
        categoryLabel: 'Корма',
        name: 'Royal Canin Adult Indoor',
        price: 1490,
        oldPrice: 1890,
        badge: 'Хит',
        badgeType: 'hot',
        rating: 4.9,
        reviews: 347,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=480&h=360&fit=crop&q=80',
        description: 'Сбалансированный корм для взрослых кошек, живущих в помещении. Поддерживает здоровье почек, шерсти и пищеварения.',
        details: 'Состав: дегидрированная птица, рис, кукуруза, животные жиры, гидролизат белков. Содержит таурин, омега-3 и -6, антиоксиданты. Рекомендуется для кошек старше 1 года весом до 6 кг. Размер упаковки: 2 кг.',
        tags: ['Для кошек', 'Сухой корм', 'Взрослые']
    },
    {
        id: 2,
        category: 'food',
        categoryLabel: 'Корма',
        name: 'Hills Science Plan Dog Medium',
        price: 2290,
        oldPrice: null,
        badge: null,
        badgeType: null,
        rating: 4.7,
        reviews: 214,
        image: 'https://images.unsplash.com/photo-1601758124277-e9e84d02a19a?w=480&h=360&fit=crop&q=80',
        description: 'Премиальный сухой корм для взрослых собак средних пород. Укрепляет иммунитет и поддерживает здоровье суставов.',
        details: 'Состав: курица (26%), цельные зёрна, яйцо, рыбий жир. Обогащён витаминами Е, С и бета-каротином. Содержит глюкозамин и хондроитин для здоровья суставов. Размер упаковки: 2.5 кг.',
        tags: ['Для собак', 'Сухой корм', 'Средние породы']
    },
    {
        id: 3,
        category: 'food',
        categoryLabel: 'Корма',
        name: 'Purina Pro Plan Sensitive',
        price: 1190,
        oldPrice: 1390,
        badge: 'Скидка',
        badgeType: 'sale',
        rating: 4.6,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=480&h=360&fit=crop&q=80',
        description: 'Корм для кошек с чувствительным пищеварением. Основной источник белка — лосось. Улучшает состояние кожи и шерсти.',
        details: 'Состав: лосось (28%), рис, кукурузный глютен, рыбий жир. Без искусственных красителей и консервантов. Пробиотики для нормализации микрофлоры кишечника. Размер упаковки: 1.5 кг.',
        tags: ['Для кошек', 'Сухой корм', 'Чувствительное пищеварение']
    },
    {
        id: 4,
        category: 'food',
        categoryLabel: 'Корма',
        name: 'Farmina N&D Grain Free Dog',
        price: 3490,
        oldPrice: null,
        badge: 'Новинка',
        badgeType: 'new',
        rating: 4.8,
        reviews: 93,
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=480&h=360&fit=crop&q=80',
        description: 'Беззерновой корм класса «супер-премиум» для собак. Высокое содержание свежего мяса — 70%. Без глютена и сои.',
        details: 'Состав: свежая курица (70%), горох, тыква, томаты. Без злаков, картофеля и ГМО. Сертифицирован по стандартам AAFCO. Размер упаковки: 2 кг.',
        tags: ['Для собак', 'Беззерновой', 'Премиум']
    },

    /* ── Игрушки ── */
    {
        id: 5,
        category: 'toys',
        categoryLabel: 'Игрушки',
        name: 'Интерактивная мышь-дразнилка',
        price: 590,
        oldPrice: 790,
        badge: 'Хит',
        badgeType: 'hot',
        rating: 4.8,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=480&h=360&fit=crop&q=80',
        description: 'Электрическая мышь с хаотичным движением. Автоматически включается и выключается, заряжается от USB. Сделана из безопасного пластика.',
        details: 'Питание: встроенный аккумулятор 400 mAh, зарядка через USB-C. Время работы: до 2 часов. Три скоростных режима. Материал: ABS-пластик, тканевый хвост из натурального меха. Размер: 12 × 5 × 4 см.',
        tags: ['Для кошек', 'Интерактивная', 'Электрическая']
    },
    {
        id: 6,
        category: 'toys',
        categoryLabel: 'Игрушки',
        name: 'Мяч для собак Kong Classic',
        price: 890,
        oldPrice: null,
        badge: null,
        badgeType: null,
        rating: 4.9,
        reviews: 528,
        image: 'https://images.unsplash.com/photo-1535370976884-f4376736ab06?w=480&h=360&fit=crop&q=80',
        description: 'Прочный резиновый мяч для активных игр. Внутри можно спрятать лакомство. Выдерживает даже самые мощные укусы крупных пород.',
        details: 'Материал: натуральный каучук. Выдерживает нагрузку до 50 кг. Можно наполнять лакомством. Устойчив к царапинам и прокусываниям. Диаметр: 8 см. Подходит для собак от 10 кг.',
        tags: ['Для собак', 'Резиновый', 'Прочный']
    },
    {
        id: 7,
        category: 'toys',
        categoryLabel: 'Игрушки',
        name: 'Удочка-дразнилка с перьями',
        price: 390,
        oldPrice: 550,
        badge: 'Скидка',
        badgeType: 'sale',
        rating: 4.5,
        reviews: 276,
        image: 'https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?w=480&h=360&fit=crop&q=80',
        description: 'Классическая дразнилка для кошек. Гибкий прут 60 см с мягкими перьями. Развивает охотничий инстинкт и физическую активность.',
        details: 'Длина прута: 60 см. Наполнитель: натуральные перья страуса. Нить: прочная нейлоновая леска 40 см. Рекомендуется для кошек всех возрастов. Материал ручки: бамбук.',
        tags: ['Для кошек', 'Дразнилка', 'Натуральные перья']
    },
    {
        id: 8,
        category: 'toys',
        categoryLabel: 'Игрушки',
        name: 'Интерактивный туннель для кошек',
        price: 1290,
        oldPrice: null,
        badge: 'Новинка',
        badgeType: 'new',
        rating: 4.7,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=480&h=360&fit=crop&q=80',
        description: 'Трёхсекционный складной туннель для игр. Встроенный мячик-шуршалка внутри. Складывается за 10 секунд, занимает мало места.',
        details: 'Длина в разложенном состоянии: 150 см. Диаметр трубы: 25 см. Материал: полиэстер с проволочным каркасом. Внутри — встроенный мяч-шуршалка. Поставляется с мешком для переноски.',
        tags: ['Для кошек', 'Туннель', 'Складной']
    },

    /* ── Аксессуары ── */
    {
        id: 9,
        category: 'accessories',
        categoryLabel: 'Аксессуары',
        name: 'Автоматическая кормушка 4.5 л',
        price: 2990,
        oldPrice: 3690,
        badge: 'Хит',
        badgeType: 'hot',
        rating: 4.8,
        reviews: 301,
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=480&h=360&fit=crop&q=80',
        description: 'Умная кормушка с таймером на 8 приёмов пищи. Объём бункера 4.5 л. Голосовая запись звонка к кормлению. Работает от батареек или USB.',
        details: 'Объём бункера: 4.5 л (до 1.5 кг сухого корма). Настраиваемое расписание: до 8 кормлений в день. Порция: от 5 до 80 г на кормление. Питание: 4 батарейки AA или USB-адаптер. Встроенный ЖК-дисплей.',
        tags: ['Кормушка', 'Автоматическая', 'С таймером']
    },
    {
        id: 10,
        category: 'accessories',
        categoryLabel: 'Аксессуары',
        name: 'Поводок-рулетка Flexi 5 м',
        price: 890,
        oldPrice: null,
        badge: null,
        badgeType: null,
        rating: 4.6,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=480&h=360&fit=crop&q=80',
        description: 'Надёжная рулетка с лентой 5 м. Удобный эргономичный корпус с нескользящим покрытием. Кнопка мгновенной блокировки.',
        details: 'Длина ленты: 5 метров. Ширина ленты: 16 мм. Рассчитана на собак до 25 кг. Материал корпуса: ABS-пластик с резиновым покрытием. Двойная кнопка стопора. Гарантия 2 года.',
        tags: ['Поводок', 'Рулетка', 'Для собак']
    },
    {
        id: 11,
        category: 'accessories',
        categoryLabel: 'Аксессуары',
        name: 'Переноска Ferplast Atlas 20',
        price: 2490,
        oldPrice: 2990,
        badge: 'Скидка',
        badgeType: 'sale',
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=480&h=360&fit=crop&q=80',
        description: 'Пластиковая переноска для кошек и малых пород собак. Ventilation Pro — максимальная вентиляция. Одобрена большинством авиакомпаний.',
        details: 'Размеры: 47 × 30 × 28 см. Максимальный вес питомца: 10 кг. Фронтальная и верхняя дверцы. Материал: прочный ABS-пластик. Вентиляционные отверстия по бокам и сверху. Сертификат IATA.',
        tags: ['Переноска', 'Авиаперевозки', 'Универсальная']
    },
    {
        id: 12,
        category: 'accessories',
        categoryLabel: 'Аксессуары',
        name: 'Миска двойная нержавеющая',
        price: 590,
        oldPrice: null,
        badge: null,
        badgeType: null,
        rating: 4.5,
        reviews: 267,
        image: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=480&h=360&fit=crop&q=80',
        description: 'Двойная миска из пищевой нержавеющей стали на нескользящей подставке. Объём каждой секции 550 мл. Легко моется.',
        details: 'Материал: нержавеющая сталь 18/8 (пищевая), основание — меламин. Объём одной секции: 550 мл. Подходит для посудомоечной машины. Антибактериальное покрытие дна. Диаметр: 36 × 15 × 8 см.',
        tags: ['Миска', 'Нержавеющая сталь', 'Двойная']
    },

    /* ── Для кошек ── */
    {
        id: 13,
        category: 'cats',
        categoryLabel: 'Для кошек',
        name: 'Когтеточка напольная Ecotoys',
        price: 1290,
        oldPrice: 1590,
        badge: null,
        badgeType: null,
        rating: 4.6,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=480&h=360&fit=crop&q=80',
        description: 'Высокая напольная когтеточка из натурального сизаля. Высота 70 см, устойчивое основание. Включает плюшевую мышку-игрушку на пружинке.',
        details: 'Высота: 70 см. Основание: 40 × 40 см. Материал обмотки: натуральный сизаль. Основание: ДСП с плюшевым покрытием. В комплекте: игрушка-мышка на пружине. Максимальная нагрузка: 8 кг.',
        tags: ['Когтеточка', 'Сизаль', 'Напольная']
    },
    {
        id: 14,
        category: 'cats',
        categoryLabel: 'Для кошек',
        name: 'Домик-гамак Dreamy для кошек',
        price: 3990,
        oldPrice: null,
        badge: 'Новинка',
        badgeType: 'new',
        rating: 4.9,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=480&h=360&fit=crop&q=80',
        description: 'Уютный многоуровневый домик с гамаком и когтеточкой. Высота 120 см, два уровня с лежанками. Крепится к стене — не занимает место на полу.',
        details: 'Высота: 120 см. Размеры лежанок: 40 × 30 см. Материал столбиков: натуральный сизаль. Покрытие: высококачественный плюш (стираемый). Максимальный вес: 20 кг. Монтаж к стене: в комплекте.',
        tags: ['Домик', 'Гамак', 'Настенный']
    },
    {
        id: 15,
        category: 'cats',
        categoryLabel: 'Для кошек',
        name: 'Лоток Catit с высокими бортами',
        price: 990,
        oldPrice: 1290,
        badge: 'Скидка',
        badgeType: 'sale',
        rating: 4.5,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=480&h=360&fit=crop&q=80',
        description: 'Лоток с высокими бортами 20 см предотвращает разброс наполнителя. Пластик не впитывает запахи. Совместим со всеми видами наполнителей.',
        details: 'Размеры: 55 × 40 × 20 см. Высота бортов: 20 см. Материал: полипропилен без BPA. Антибактериальное покрытие. Поверхность без швов — легко мыть. Совместим с любыми наполнителями.',
        tags: ['Лоток', 'Высокие борта', 'Для кошек']
    },

    /* ── Для собак ── */
    {
        id: 16,
        category: 'dogs',
        categoryLabel: 'Для собак',
        name: 'Ошейник кожаный Hunter Nevada',
        price: 1190,
        oldPrice: null,
        badge: null,
        badgeType: null,
        rating: 4.8,
        reviews: 143,
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=480&h=360&fit=crop&q=80',
        description: 'Ошейник из натуральной кожи с прошивкой. Быстроразъёмная металлическая пряжка. Мягкая подкладка из замши не натирает шею.',
        details: 'Размеры: XS (20–27 см), S (28–36 см), M (37–46 см), L (47–58 см). Материал: натуральная кожа + замшевая подкладка. Пряжка: нержавеющая сталь. Ширина ремня: 20 мм. Сделано в Германии.',
        tags: ['Ошейник', 'Кожаный', 'Для собак']
    },
    {
        id: 17,
        category: 'dogs',
        categoryLabel: 'Для собак',
        name: 'Шлейка Julius-K9 Power',
        price: 2190,
        oldPrice: 2690,
        badge: 'Хит',
        badgeType: 'hot',
        rating: 4.9,
        reviews: 387,
        image: 'https://images.unsplash.com/photo-1535370976884-f4376736ab06?w=480&h=360&fit=crop&q=80',
        description: 'Профессиональная шлейка с ручкой на спине. Регулируемые ремни из прочного нейлона. Светоотражающие полосы для безопасности в темноте.',
        details: 'Доступные размеры: Baby 1, Baby 2, Mini, Mini-Mini, 0, 1, 2, 3, 4. Материал: прочный нейлон 1200D. Алюминиевая D-образная кольцо-карабин. Светоотражающие вставки. Ручка на спине. Сделано в Венгрии.',
        tags: ['Шлейка', 'Нейлон', 'Профессиональная']
    },
    {
        id: 18,
        category: 'dogs',
        categoryLabel: 'Для собак',
        name: 'Лежанка ортопедическая Trixie',
        price: 3290,
        oldPrice: null,
        badge: 'Новинка',
        badgeType: 'new',
        rating: 4.7,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=360&fit=crop&q=80',
        description: 'Ортопедическая лежанка с наполнением из пены с эффектом памяти. Снимает нагрузку с суставов. Съёмный чехол, стираемый при 40°C.',
        details: 'Размеры: S (60 × 45 см), M (80 × 60 см), L (100 × 75 см), XL (120 × 90 см). Наполнитель: пена высокой плотности + слой Memory Foam. Чехол: флис 300 г/м². Стирка при 40°C. Высота: 8 см.',
        tags: ['Лежанка', 'Ортопедическая', 'Memory Foam']
    }
];

/* ── 2. ОТВЕТЫ ЧАТ-БОТА ─────────────────────────────────── */

const BOT_RESPONSES = [
    {
        keywords: ['доставк', 'привез', 'привёз', 'курьер', 'когда получу', 'как долго', 'сколько ждать', 'привозят', 'доставляете'],
        answer: `Мы доставляем заказы по всему городу! 🚀\n\n📦 Условия доставки:\n• В пределах МКАД — за 2 часа\n• За МКАД — за 3–4 часа\n• Экспресс-доставка за 1 час (+299 ₽)\n\n💰 Стоимость:\n• Бесплатно при заказе от 3 000 ₽\n• До 3 000 ₽ — стоимость 299 ₽\n\nЗаказы принимаем ежедневно с 9:00 до 20:00.`
    },
    {
        keywords: ['оплат', 'оплатить', 'карт', 'наличн', 'сбп', 'перевод', 'как платить', 'способ оплаты', 'apple pay', 'google pay'],
        answer: `Принимаем различные способы оплаты! 💳\n\n✅ Доступные варианты:\n• Банковские карты: Visa, MasterCard, Мир\n• Наличные при получении\n• СБП — Система быстрых платежей\n• Apple Pay и Google Pay\n• Рассрочка 0% на 3 и 6 месяцев\n\nВсе онлайн-платежи защищены SSL-шифрованием.`
    },
    {
        keywords: ['корм', 'питан', 'кормить', 'еда для', 'подобрать', 'порекоменд', 'что лучше', 'какой корм', 'сухой', 'влажный', 'беззерновой'],
        answer: `С удовольствием помогу с выбором корма! 🍖\n\nОсновные критерии выбора:\n🐱 Для кошек: возраст, порода, активность\n🐶 Для собак: размер, порода, условия содержания\n\nМы рекомендуем корма класса "супер-премиум":\n• Royal Canin — разработан ветеринарами\n• Hills Science Plan — клинически доказанная эффективность\n• Farmina N&D — беззерновой, 70% мяса\n\nДля персональной рекомендации, пожалуйста, напишите:\n• Кто ваш питомец (вид, порода)?\n• Сколько ему лет?\n• Есть ли аллергии или проблемы со здоровьем?`
    },
    {
        keywords: ['часы работы', 'график', 'работает', 'работаете', 'когда открыт', 'режим', 'время работы', 'открыто'],
        answer: `Мы работаем без выходных! 🕐\n\n📅 График работы магазина:\n• Понедельник – Пятница: 9:00 – 21:00\n• Суббота – Воскресенье: 10:00 – 20:00\n\n📞 Телефонная поддержка:\n+7 (495) 123-45-67 (ежедневно 9:00–22:00)\n\n💬 Онлайн-чат работает 24/7 в автоматическом режиме.`
    },
    {
        keywords: ['контакт', 'адрес', 'телефон', 'позвонить', 'номер', 'email', 'почта', 'написать', 'связат'],
        answer: `Наши контакты для связи! 📞\n\n📍 Адрес: ул. Пушкина, д. 15, Москва\n\n📞 Телефоны:\n• +7 (495) 123-45-67\n• +7 (800) 555-35-35 (бесплатно)\n\n📧 Email:\n• info@pethouse.ru (общие вопросы)\n• support@pethouse.ru (поддержка)\n\n💬 Соцсети: ВКонтакте, Telegram, Одноклассники\n\nМы также принимаем вопросы через форму на сайте!`
    },
    {
        keywords: ['возврат', 'вернуть', 'обменять', 'брак', 'неисправн', 'не работает', 'гарантия'],
        answer: `Расскажу о нашей политике возврата! ↩️\n\n✅ Условия возврата:\n• Возврат товара в течение 14 дней\n• Товар должен быть в оригинальной упаковке\n• Корма, открытые более чем на 30%, возврату не подлежат\n\n🔧 Гарантийные случаи:\n• Производственный брак — замена за наш счёт\n• Повреждение при доставке — возмещаем стоимость\n\nДля оформления возврата позвоните: +7 (495) 123-45-67`
    },
    {
        keywords: ['скидк', 'акция', 'промокод', 'бонус', 'дешевле', 'выгоднее', 'распродажа', 'подешевле'],
        answer: `У нас действует программа лояльности! 🎁\n\n💎 Как накапливать скидку:\n• Базовая скидка: 5% с первого заказа\n• После 5 заказов: 10%\n• После 10 заказов: 15%\n• Статус VIP (от 20 заказов): 20%\n\n🎉 Текущие акции:\n• -20% на все корма Royal Canin\n• -15% на игрушки Kong при покупке от 2 шт.\n• Бесплатная доставка в ноябре при заказе от 2 500 ₽\n\nПодписывайтесь на Telegram-канал, чтобы первыми узнавать об акциях!`
    },
    {
        keywords: ['ветеринар', 'ветврач', 'вет ', 'болеет', 'заболел', 'заболела', 'здоровье', 'лечение', 'таблетки', 'витамины'],
        answer: `Рады помочь с вопросами о здоровье питомца! 🏥\n\n👨‍⚕️ Наши ветеринарные консультации:\n• Бесплатная консультация при выборе корма\n• Онлайн-консультация нашего ветеринара: support@pethouse.ru\n• Телефон: +7 (495) 123-45-67\n\n⚠️ Важно!\nЕсли у вашего питомца острые симптомы болезни — срочно обратитесь в ветеринарную клинику. Мы не заменяем ветеринара, но всегда можем помочь с выбором профилактических средств.`
    },
    {
        keywords: ['привет', 'здравствуй', 'добрый день', 'добрый вечер', 'доброе утро', 'хай', 'hello', 'hi'],
        answer: `Привет! Рад вас видеть в PetHouse! 🐾\n\nЯ — PetBot, ваш умный помощник по всем вопросам о зоотоварах. Помогу вам с:\n\n🚀 Информацией о доставке\n💳 Способами оплаты\n🍖 Подбором корма\n🕐 Графиком работы\n📞 Контактными данными\n\nЧем могу помочь?`
    },
    {
        keywords: ['спасибо', 'благодар', 'отлично', 'хорошо', 'понятно', 'ок', 'ok', 'окей', 'супер', 'класс'],
        answer: `Всегда рад помочь! 😊\n\nЕсли у вас возникнут другие вопросы — я здесь. Хорошего дня вам и вашему питомцу! 🐾\n\nЕщё можете оставить нам отзыв или написать на почту info@pethouse.ru — мы постоянно работаем над улучшением сервиса.`
    },
    {
        keywords: ['минимальн', 'сумма', 'мин заказ', 'от скольки', 'от какой суммы'],
        answer: `Минимальная сумма заказа для оформления — 500 ₽.\n\n💡 Выгодно знать:\n• От 1 500 ₽ — скидка 5% на следующий заказ\n• От 3 000 ₽ — бесплатная доставка\n• От 5 000 ₽ — бесплатная доставка + подарок на выбор`
    },
    {
        keywords: ['сколько стоит', 'цена', 'стоимость', 'почём', 'дорого', 'дешево'],
        answer: `Ценовой диапазон в нашем магазине очень широкий — от 390 ₽ за игрушки до 3 990 ₽ за домики премиум-класса. 💰\n\nМы работаем напрямую с производителями, поэтому наши цены одни из лучших в городе.\n\nПерейдите в каталог, чтобы найти нужный товар по вашему бюджету! Также действуют скидки при повторных заказах.`
    }
];

/* ── 3. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ──────────────────────────── */

/** Возвращает текущее время в формате ЧЧ:ММ */
function getCurrentTime() {
    return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

/** Плавная прокрутка к якорю */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/** Подсвечивает активный пункт меню в зависимости от секции */
function updateActiveNavLink() {
    const sections = ['home', 'catalog', 'about', 'contacts'];
    const scrollY = window.scrollY + 100;

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const { offsetTop, offsetHeight } = el;
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (!link) return;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/** Показывает Toast-уведомление */
function showToast(title, text, icon = '✓', duration = 3500) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastText = document.getElementById('toastText');
    const toastIcon = document.getElementById('toastIcon');

    toastTitle.textContent = title;
    toastText.textContent  = text;
    toastIcon.textContent  = icon;

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── 4. НАВИГАЦИЯ ────────────────────────────────────────── */

(function initNavbar() {
    const navbar    = document.getElementById('navbar');
    const burgerBtn = document.getElementById('burgerBtn');
    const navLinks  = document.getElementById('navLinks');
    const navOverlay= document.getElementById('navOverlay');

    // Прокрутка — добавляем тень и класс scrolled
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
        updateActiveNavLink();
    }, { passive: true });

    // Мобильное меню
    function toggleMobileMenu(open) {
        burgerBtn.classList.toggle('open', open);
        navLinks.classList.toggle('open', open);
        navOverlay.classList.toggle('active', open);
        burgerBtn.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    }

    burgerBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('open');
        toggleMobileMenu(!isOpen);
    });

    navOverlay.addEventListener('click', () => toggleMobileMenu(false));

    // Закрыть меню при клике на пункт
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Плавный переход по якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = anchor.getAttribute('href');
            if (target === '#') return;
            e.preventDefault();
            smoothScrollTo(target);
        });
    });
})();

/* ── 5. ТЁМНАЯ ТЕМА ──────────────────────────────────────── */

(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon   = document.getElementById('themeIcon');
    const html        = document.documentElement;

    // Читаем сохранённую тему
    const saved = localStorage.getItem('pethouse-theme') || 'light';
    applyTheme(saved);

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('pethouse-theme', theme);
    }
})();

/* ── 6. КНОПКА "НАВЕРХ" ─────────────────────────────────── */

(function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

/* ── 7. АНИМАЦИИ ПОЯВЛЕНИЯ БЛОКОВ (Intersection Observer) ── */

(function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Небольшая задержка для каждого элемента — cascade-эффект
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
})();

/* ── 8. СЧЁТЧИК СТАТИСТИКИ (анимация чисел в hero) ─────── */

(function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.target, 10);
            animateCount(el, target);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));

    function animateCount(el, target) {
        const duration = 1800;
        const start    = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }

        requestAnimationFrame(update);
    }
})();

/* ── 9. КАТАЛОГ ТОВАРОВ ──────────────────────────────────── */

(function initCatalog() {
    const grid          = document.getElementById('productsGrid');
    const filterBtns    = document.querySelectorAll('.filter-btn');
    const loadMoreBtn   = document.getElementById('loadMoreBtn');

    let currentCategory = 'all';
    let visibleCount    = 8; // показываем по 8 карточек

    const CATEGORY_NAMES = {
        food:        'Корма',
        toys:        'Игрушки',
        accessories: 'Аксессуары',
        cats:        'Для кошек',
        dogs:        'Для собак'
    };

    /** Рендерит иконки звёзд */
    function renderStars(rating) {
        const full  = Math.floor(rating);
        const half  = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '★'.repeat(full) + (half ? '✩' : '') + '☆'.repeat(empty);
    }

    /** Форматирует цену в рубли */
    function formatPrice(price) {
        return price.toLocaleString('ru-RU') + ' ₽';
    }

    /** Создаёт HTML одной карточки товара */
    function createProductCard(product, index) {
        const badge = product.badge
            ? `<span class="product-badge product-badge--${product.badgeType}">${product.badge}</span>`
            : '';

        const oldPrice = product.oldPrice
            ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>`
            : '';

        return `
            <div
                class="product-card show"
                data-id="${product.id}"
                data-category="${product.category}"
                style="animation-delay: ${index * 0.06}s"
            >
                <div class="product-img-wrap">
                    ${badge}
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-img"
                        loading="lazy"
                    >
                    <div class="product-rating-badge">
                        ⭐ ${product.rating} (${product.reviews})
                    </div>
                </div>
                <div class="product-body">
                    <span class="product-category-tag">${CATEGORY_NAMES[product.category] || product.categoryLabel}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price-block">
                            <span class="product-price">${formatPrice(product.price)}</span>
                            ${oldPrice}
                        </div>
                        <button
                            class="product-detail-btn"
                            data-id="${product.id}"
                            aria-label="Подробнее о товаре ${product.name}"
                        >
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /** Рендерит все видимые товары */
    function renderProducts() {
        const filtered = currentCategory === 'all'
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === currentCategory);

        const slice = filtered.slice(0, visibleCount);

        grid.innerHTML = slice.map((product, i) => createProductCard(product, i)).join('');

        // Скрыть кнопку "Показать ещё", если показали всё
        if (loadMoreBtn) {
            loadMoreBtn.style.display = (visibleCount >= filtered.length) ? 'none' : 'inline-flex';
        }

        // Навешиваем обработчики кнопок "Подробнее"
        grid.querySelectorAll('.product-detail-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id, 10);
                openProductModal(productId);
            });
        });
    }

    /** Фильтрация по категории */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            visibleCount = 8;
            renderProducts();
        });
    });

    /** Загрузить ещё */
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 4;
            renderProducts();
            showToast('Товары загружены', 'Показываем дополнительные товары', '✓');
        });
    }

    // Первоначальный рендер
    renderProducts();

    /* ── Модальное окно товара ── */

    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody    = document.getElementById('modalBody');
    const modalClose   = document.getElementById('modalCloseBtn');

    function openProductModal(id) {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;

        const oldPriceHtml = product.oldPrice
            ? `<span class="modal-price-old">${formatPrice(product.oldPrice)}</span>`
            : '';

        const discount = product.oldPrice
            ? `<span class="product-badge product-badge--sale" style="position:static;display:inline-block;margin-left:10px;">
                −${Math.round((1 - product.price / product.oldPrice) * 100)}%
               </span>`
            : '';

        const tagsHtml = product.tags
            .map(t => `<span class="quick-reply-btn" style="pointer-events:none">${t}</span>`)
            .join('');

        modalBody.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="modal-product-img"
            >
            <div class="modal-product-info">
                <div class="modal-product-category">${product.categoryLabel}</div>
                <h2 class="modal-product-name">${product.name}</h2>
                <div class="modal-product-rating">
                    <span class="modal-stars">${renderStars(product.rating)}</span>
                    <span class="modal-rating-text">${product.rating} — ${product.reviews} отзывов</span>
                </div>
                <p class="modal-product-desc">${product.description}</p>
                <p class="modal-product-desc" style="font-size:0.88rem;"><strong>Состав / детали:</strong> ${product.details}</p>
                <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:24px;">${tagsHtml}</div>
                <div class="modal-product-price-row">
                    <div class="modal-price-block">
                        <span class="modal-price">${formatPrice(product.price)}</span>
                        ${oldPriceHtml}
                        ${discount}
                    </div>
                    <button
                        class="btn btn--primary"
                        onclick="showToast('Товар добавлен!', '${product.name} добавлен в корзину', '🛒'); closeProductModal();"
                    >
                        В корзину 🛒
                    </button>
                </div>
            </div>
        `;

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Экспортируем closeProductModal в глобальную область (нужно для onclick в шаблоне)
    window.closeProductModal = closeProductModal;
    window.showToast = showToast;

    if (modalClose) modalClose.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) closeProductModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeProductModal();
    });
})();

/* ── 10. ФОРМА ОБРАТНОЙ СВЯЗИ ────────────────────────────── */

(function initContactForm() {
    const form         = document.getElementById('contactForm');
    if (!form) return;

    const inputName    = document.getElementById('inputName');
    const inputEmail   = document.getElementById('inputEmail');
    const inputMessage = document.getElementById('inputMessage');
    const inputAgree   = document.getElementById('inputAgree');
    const charCounter  = document.getElementById('charCounter');
    const submitBtn    = document.getElementById('submitBtn');

    const nameError    = document.getElementById('nameError');
    const emailError   = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const agreeError   = document.getElementById('agreeError');

    /** Обновление счётчика символов */
    if (inputMessage && charCounter) {
        inputMessage.addEventListener('input', () => {
            const len = inputMessage.value.length;
            charCounter.textContent = `${len} / 1000`;
            charCounter.style.color = len > 900 ? '#FF3B82' : 'var(--text-muted)';
        });
    }

    /** Показывает / убирает ошибку поля */
    function setFieldState(input, errorEl, isValid, message = '') {
        input.classList.toggle('error',   !isValid);
        input.classList.toggle('success',  isValid && input.value.trim() !== '');
        if (errorEl) errorEl.textContent = isValid ? '' : message;
    }

    /** Валидация всех полей */
    function validate() {
        let ok = true;

        // Имя: не менее 2 символов, только буквы и пробелы
        const nameVal = inputName.value.trim();
        const nameOk  = nameVal.length >= 2 && /^[а-яёА-ЯЁa-zA-Z\s\-]+$/.test(nameVal);
        setFieldState(inputName, nameError, nameOk,
            nameVal.length < 2
                ? 'Имя должно содержать не менее 2 символов'
                : 'Допустимы только буквы и дефис'
        );
        if (!nameOk) ok = false;

        // Email
        const emailVal = inputEmail.value.trim();
        const emailOk  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal);
        setFieldState(inputEmail, emailError, emailOk,
            'Введите корректный email (например: ivan@mail.ru)'
        );
        if (!emailOk) ok = false;

        // Сообщение: не менее 10 символов
        const msgVal = inputMessage.value.trim();
        const msgOk  = msgVal.length >= 10;
        setFieldState(inputMessage, messageError, msgOk,
            msgVal.length === 0
                ? 'Напишите сообщение'
                : 'Сообщение должно содержать не менее 10 символов'
        );
        if (!msgOk) ok = false;

        // Согласие
        const agreeOk = inputAgree.checked;
        if (agreeError) agreeError.textContent = agreeOk ? '' : 'Необходимо принять политику конфиденциальности';
        if (!agreeOk) ok = false;

        return ok;
    }

    // Inline-валидация по blur
    [inputName, inputEmail, inputMessage].forEach(input => {
        input.addEventListener('blur', validate);
        input.addEventListener('input', () => {
            // Убираем error-класс при вводе
            input.classList.remove('error');
        });
    });

    /** Сабмит формы */
    form.addEventListener('submit', async e => {
        e.preventDefault();
        if (!validate()) {
            showToast('Ошибка', 'Пожалуйста, проверьте заполнение полей', '⚠️');
            return;
        }

        // Имитация отправки
        submitBtn.disabled = true;
        const btnText   = submitBtn.querySelector('.btn-text');
        const btnLoader = document.getElementById('btnLoader');
        const btnArrow  = submitBtn.querySelector('.btn-arrow');

        if (btnText)   btnText.textContent = 'Отправляем...';
        if (btnLoader) btnLoader.style.display = 'inline';
        if (btnArrow)  btnArrow.style.display  = 'none';

        await new Promise(resolve => setTimeout(resolve, 2000)); // имитация сетевого запроса

        // Успех
        form.reset();
        if (charCounter) charCounter.textContent = '0 / 1000';
        [inputName, inputEmail, inputMessage].forEach(i => i.classList.remove('success'));

        submitBtn.disabled = false;
        if (btnText)   btnText.textContent = 'Отправить сообщение';
        if (btnLoader) btnLoader.style.display = 'none';
        if (btnArrow)  btnArrow.style.display  = 'inline';

        showToast(
            'Сообщение отправлено! ✓',
            'Мы ответим вам в течение 30 минут в рабочее время.',
            '✅',
            5000
        );
    });
})();

/* ── 11. ЧАТ-БОТ ────────────────────────────────────────── */

(function initChatBot() {
    const fab           = document.getElementById('chatFab');
    const chatWindow    = document.getElementById('chatWindow');
    const chatCloseBtn  = document.getElementById('chatCloseBtn');
    const chatMessages  = document.getElementById('chatMessages');
    const chatInput     = document.getElementById('chatInput');
    const chatSendBtn   = document.getElementById('chatSendBtn');
    const chatBadge     = document.getElementById('chatBadge');
    const quickReplies  = document.getElementById('chatQuickReplies');

    if (!fab) return;

    let isChatOpen = false;

    // Открыть / закрыть чат
    function toggleChat(open) {
        isChatOpen = (open !== undefined) ? open : !isChatOpen;
        chatWindow.classList.toggle('open', isChatOpen);
        fab.classList.toggle('open', isChatOpen);

        const openIcon  = fab.querySelector('.chat-fab-icon--open');
        const closeIcon = fab.querySelector('.chat-fab-icon--close');
        if (openIcon)  openIcon.style.display  = isChatOpen ? 'none' : 'flex';
        if (closeIcon) closeIcon.style.display = isChatOpen ? 'flex' : 'none';

        if (isChatOpen) {
            // Скрываем бейдж
            chatBadge.classList.add('hidden');
            // Автофокус на ввод
            setTimeout(() => chatInput.focus(), 350);
            // Прокрутить вниз
            scrollChatToBottom();
        }
    }

    fab.addEventListener('click', () => toggleChat());
    if (chatCloseBtn) chatCloseBtn.addEventListener('click', () => toggleChat(false));

    // Показываем приветственное сообщение после небольшой задержки
    setTimeout(() => {
        addBotMessage(
            'Привет! Я — PetBot 🐾\n\nГотов помочь вам с любыми вопросами о товарах, доставке и оплате. Просто напишите или выберите тему ниже!'
        );
    }, 800);

    // Быстрые ответы
    if (quickReplies) {
        quickReplies.querySelectorAll('.quick-reply-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const msg = btn.dataset.msg;
                if (msg) sendUserMessage(msg);
            });
        });
    }

    // Отправка по нажатию кнопки
    chatSendBtn.addEventListener('click', handleSend);

    // Отправка по Enter
    chatInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        chatInput.value = '';
        sendUserMessage(text);
    }

    /** Добавляет сообщение пользователя и запускает ответ бота */
    function sendUserMessage(text) {
        addMessage(text, 'user');
        // Скрыть быстрые ответы после первого сообщения
        if (quickReplies) quickReplies.style.display = 'none';
        // Показать индикатор печати, потом ответить
        showTypingIndicator();
        const delay = Math.random() * 1000 + 900; // 0.9–1.9 с
        setTimeout(() => {
            removeTypingIndicator();
            const answer = getBotAnswer(text);
            addBotMessage(answer);
        }, delay);
    }

    /** Добавляет сообщение в чат */
    function addMessage(text, sender) {
        const time   = getCurrentTime();
        const isBot  = sender === 'bot';
        const avatar = isBot
            ? `<div class="chat-msg-avatar">🐾</div>`
            : `<div class="chat-msg-avatar">👤</div>`;

        const msgEl = document.createElement('div');
        msgEl.className = `chat-msg chat-msg--${sender}`;
        msgEl.innerHTML = `
            ${isBot ? avatar : ''}
            <div class="chat-msg-bubble">${escapeHtml(text)}</div>
            ${!isBot ? avatar : ''}
        `;

        chatMessages.appendChild(msgEl);

        // Время
        const timeEl = document.createElement('span');
        timeEl.className = 'chat-msg-time';
        timeEl.textContent = time;
        chatMessages.appendChild(timeEl);

        scrollChatToBottom();
    }

    /** Добавляет сообщение бота с имитацией эффекта печати */
    function addBotMessage(text) {
        const time = getCurrentTime();

        const msgEl = document.createElement('div');
        msgEl.className = 'chat-msg chat-msg--bot';

        const avatarEl = document.createElement('div');
        avatarEl.className = 'chat-msg-avatar';
        avatarEl.textContent = '🐾';

        const bubbleEl = document.createElement('div');
        bubbleEl.className = 'chat-msg-bubble';
        bubbleEl.textContent = '';

        msgEl.appendChild(avatarEl);
        msgEl.appendChild(bubbleEl);
        chatMessages.appendChild(msgEl);

        const timeEl = document.createElement('span');
        timeEl.className = 'chat-msg-time';
        timeEl.textContent = time;
        chatMessages.appendChild(timeEl);

        // Имитация набора текста
        typeText(bubbleEl, text);
        scrollChatToBottom();
    }

    /** Анимация набора текста посимвольно */
    function typeText(el, text, speed = 18) {
        let i = 0;
        function next() {
            if (i < text.length) {
                el.textContent += text[i];
                i++;
                scrollChatToBottom();
                setTimeout(next, speed);
            }
        }
        next();
    }

    /** Индикатор "печатает..." */
    function showTypingIndicator() {
        const el = document.createElement('div');
        el.className = 'typing-indicator';
        el.id = 'typingIndicator';
        el.innerHTML = `
            <div class="chat-msg-avatar">🐾</div>
            <div class="typing-bubble">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatMessages.appendChild(el);
        scrollChatToBottom();
    }

    function removeTypingIndicator() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    }

    /** Прокрутка чата вниз */
    function scrollChatToBottom() {
        requestAnimationFrame(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

    /** Экранирование HTML */
    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>');
    }

    /** Подбирает ответ по ключевым словам */
    function getBotAnswer(userText) {
        const lower = userText.toLowerCase().trim();

        for (const { keywords, answer } of BOT_RESPONSES) {
            for (const kw of keywords) {
                if (lower.includes(kw)) return answer;
            }
        }

        // Ответ по умолчанию
        return `Извините, я пока не знаю ответа на этот вопрос. 🤔\n\nПопробуйте уточнить запрос или воспользуйтесь одной из быстрых тем.\n\nТакже вы можете связаться с нами напрямую:\n📞 +7 (495) 123-45-67\n📧 support@pethouse.ru`;
    }

    // Показать бейдж через 2 секунды, если чат не открыт
    setTimeout(() => {
        if (!isChatOpen) {
            chatBadge.classList.remove('hidden');
        }
    }, 2000);
})();

/* ── 12. АКТИВНЫЙ ПУНКТ НАВИГАЦИИ ПРИ ЗАГРУЗКЕ ──────────── */

window.addEventListener('load', () => {
    updateActiveNavLink();
});

/* ── 13. ПЛАВНЫЙ SCROLL ДЛЯ КНОПКИ HERO ─────────────────── */

document.querySelectorAll('.btn[href="#catalog"], .filter-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById('catalog');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

/* ── 14. ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ (нативная) ─────────── */

// Уже обрабатывается через атрибут loading="lazy" в HTML.
// Для старых браузеров — полифилл через IntersectionObserver:
(function polyfillLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) return; // нативная поддержка
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const observer   = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => observer.observe(img));
})();
