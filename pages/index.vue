<template>
  <main class="overflow-hidden">
    <section
      class="relative bg-[url('@/assets/svg/home_bg.svg')] _cfe bg-no-repeat bg-cover min-h-fit"
    >
      <nav class="flex items-center justify-between fs_15 px-[50px] pt-14">
        <h1 class="md:text-[30px] text-[15px]">BeFab Web Studio</h1>
        <ul class="2xl:flex hidden justify-between gap-10">
          <li>Портфолио</li>
          <li>Что мы делаем</li>
          <li>Тарифы</li>
          <li>Отзывы</li>
        </ul>
        <button
          @click="contactVisible = true"
          class="flex items-center gap-1 border-2 border-[#8100E9] px-5 py-3"
        >
          <img class="w-3 h-3" src="@/assets/svg/show_contact.svg" alt="" />
          <p class="md:block hidden">Показать контакты</p>
          <p class="fs_15 md:hidden block">Контакты</p>
        </button>
      </nav>
      <div class="2xl:mt-[156px] md:mt-[140px] mt-[110px] page_container">
        <p
          data-aos="fade-up"
          class="2xl::text-[130px] md:text-[100px] text-[45px] text_center md:leading-[140px] leading-[55px] font-bold"
        >
          Создаем <br />
          лендинги
        </p>
        <p
          data-aos="fade-up"
          class="2xl:text-[65px] md:text-[50px] text-[20px] font-bold mt-4 mb-14 text_center"
        >
          для вашего бизнеса
        </p>
        <p
          data-aos="fade-up"
          class="2xl:w-full sm:w-[60%] mx-auto 2xl:text-[65px] md:text-[35px] text-[20px] font-bold mt-4 mb-14 text_center"
        >
          с продуманным дизайном для роста продаж
        </p>
        <div
          data-aos="fade-up"
          @click="modal2Visible = true"
          class="relative max-w-fit m_auto"
        >
          <button class="flex items-center animate-button2">
            <p class="z-10 px-6">Заказать лендинг</p>
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        class="flex text_flex gap-[140px] items-end justify-end"
      >
        <p class="mt-[86px] w-[380px] text-2xl h-[190px]">
          лендинги / корпоративные сайты / лендомагазины / квизы
        </p>
        <button class="_c2d text_button bg-[#F5F5F5] h-[110px] px-10 text-xl">
          Узнать больше
        </button>
      </div>

      <div
        data-aos="fade-up"
        class="ml-[50px] top-0 bottom-0 max-h-fit my-auto absolute"
      >
        <ul class="space-y-[10px]">
          <li class="flex gap-2 items-end leading-4">
            <p class="w-[10px] h-[10px] border border-[#FEFEFE]"></p>
            <p>Главная</p>
          </li>
          <li v-for="i in 5">
            <p class="w-[10px] h-[10px] opacity-50 border border-[#FEFEFE]"></p>
          </li>
        </ul>
      </div>
    </section>
    <section
      class="relative 2xl:max-h-screen md:min-h-screen overflow-hidden overflow-y-auto bg-[#F5F5F5]"
    >
      <h1
        data-aos="fade-up"
        class="2xl:text-[150px] 2xl:sticky md:text-[100px] text-[40px] pb-5 2xl:top-[270px] 2xl:pt-0 md:pt-[100px] pt-10 text-center"
      >
        ПОРТФОЛИО
      </h1>
      <div
        data-aos="fade-up"
        class="2xl:block hidden h-[42px] mx-auto max-w-fit sticky 2xl:top-[520px] top-[300px] pb-[100px]"
      >
        <button class="flex items-center animate-button2 hover:text-white">
          <p class="z-10 px-6"><span class="_cfe">Все р</span>аботы</p>
        </button>
      </div>
      <div class="2xl:hidden block">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="40"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          :effect="'creative'"
          :centeredSlides="true"
          @slide-change-transition-end="handleSlideChange"
          @slide-change="handleSlideChange"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          class="md:w-[633px] md:h-[684px] h-[392px]"
        >
          <SwiperSlide v-for="slide in work_image" :key="slide">
            <img
              class="md:w-[633px] md:h-[684px] h-[392px]"
              :src="slide"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        class="2xl:hidden flex md:flex-row flex-col-reverse gap-5 items-center justify-between mt-[30px] md:pb-[100px] pb-10 px-6"
      >
        <button
          class="bg-[#8100E9] _cfe text-[20px] px-10 py-3 sm:w-fit w-full"
        >
          Все работы
        </button>
        <div class="flex items-center gap-5 text-[40px] min-w-fit">
          <hr class="w-[50px] border-[#2D2C35] opacity-20" />
          <p class="min-w-fit">
            <span class="text_stroke3">0{{ slidestep + 1 }}</span>
            <span class="text_stroke"> / </span>
            <span class="text_stroke">09</span>
          </p>
          <hr class="w-[50px] border-[#2D2C35] opacity-20" />
        </div>
      </div>
      <div class="2xl:grid hidden grid-cols-2 mx-auto max-w-fit gap-[70px]">
        <div class="space-y-[70px] z-10">
          <img v-for="i in work_image1" :src="i" alt="" />
        </div>
        <div class="mt-[250px] z-10 space-y-[70px]">
          <img v-for="i in work_image2" :src="i" alt="" />
        </div>
      </div>
      <div class="ml-[50px] top-0 bottom-0 max-h-fit my-auto absolute">
        <ul class="space-y-[10px]">
          <li>
            <p class="w-[10px] h-[10px] opacity-50 border border-[#2D2C35]"></p>
          </li>
          <li class="flex gap-2 items-end leading-4">
            <p class="w-[10px] h-[10px] border border-[#2D2C35]"></p>
            <p data-aos="fade-up" class="text-[#2D2C35]">Портфолио</p>
          </li>
          <li v-for="i in 4">
            <p class="w-[10px] h-[10px] opacity-50 border border-[#2D2C35]"></p>
          </li>
        </ul>
      </div>
    </section>
    <section
      class="relative bg-[url('@/assets/svg/service.svg')] md:pt-[150px] pt-[60px] md:pb-[240px] pb-20 _c2d bg-no-repeat bg-cover page_container"
    >
      <div
        class="flex items-start gap-10 2xl:text-[50px] md:text-[40px] text-[25px] font-semibold"
      >
        <img
          data-aos="fade-up"
          class="md:block hidden"
          src="@/assets/svg/service_button.svg"
          alt=""
        />
        <div data-aos="fade-up">
          Мы разрабатываем лендинги, которые
          <span class="text_stroke">раскрывают идею</span> вашего бизнеса перед
          целевой аудиторией, и
          <span class="text_stroke">выстраиваем предложение</span>, от которого
          клиенты просто не могут отказаться.
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-[90px] md:mt-[100px] mt-10">
        <div
          v-for="i in services"
          class="leading-[30px] text-[#000] text-[25px]"
        >
          <div data-aos="fade-up" class="flex gap-[10px] md:mb-1 mb-2">
            <img class="md:hidden block w-[30px]" :src="i.img" alt="" />
            <p>
              {{ i.title[0] }} <span class="2xl:hidden">{{ i.title[1] }}</span>
            </p>
          </div>
          <hr class="border-t border-[#2D2C35] opacity-20" />
          <p data-aos="fade-up" class="2xl:block hidden">{{ i.title[1] }}</p>
          <div class="flex gap-[30px] 2xl:ml-[164px] 2xl:mt-0 mt-4">
            <img
              data-aos="fade-up"
              class="md:block hidden md:w-20 w-[30px]"
              :src="i.img"
              alt=""
            />
            <p data-aos="fade-up" class="fs_15 leading-[22px]">
              {{ i.desciption }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative bg-[url('@/assets/svg/convenience_bg.svg')] _cfe bg-no-repeat bg-cover"
    >
      <div
        class="2xl:flex items-start gap-10 text-[25px] font-semibold page_container"
      >
        <h1
          data-aos="fade-up"
          class="text-[50px] font-bold min-w-[500px] leading-[60px] pt-[60px]"
        >
          Мы отвечаем за свои решения
        </h1>
        <div class="flex items-start 2xl:gap-10 gap-5">
          <img
            data-aos="fade-up"
            class="md:block hidden 2xl:mt-0 -mt-9 -ml-4"
            src="@/assets/svg/how_exactly.svg"
            alt=""
          />
          <p data-aos="fade-up" class="2xl:mt-[60px] mt-5">
            Мы не просто разрабатываем и отдаём вам сайт, мы объясняем каждый
            шаг разработки, именно поэтому наши решения обдуманные и
            конкурентоспособные.
          </p>
        </div>
      </div>
      <!-- 4 cards -->
      <div class="md:mt-[70px] mt-10 page_container">
        <div class="flex lg:flex-row flex-col w-full space-x-[-1px]">
          <div
            class="relative md:w-[440px] w-full md:px-[30px] py-5 md:border border-[#FEFEFE]"
          >
            <p data-aos="fade-up" class="text-xl font-medium">
              Комментарии к выполненной работе
            </p>
            <div data-aos="fade-up" class="flex gap-3 items-start mt-4">
              <p
                class="md:static absolute right-0 top-0 md:opacity-100 opacity-30 text_stroke2 text-[70px] font-medium leading-[60px] opacity-50"
              >
                01
              </p>
              <p class="leading-[22px] fs_15">
                Вы получаете детальные объяснения как и почему была реализована
                концепция вашего проекта.
              </p>
            </div>
          </div>
          <div>
            <div
              class="relative ml-auto md:w-[440px] md:px-[30px] py-5 md:border border-[#FEFEFE]"
            >
              <p data-aos="fade-up" class="text-xl font-medium">
                Продукт лицензионный на 100%
              </p>
              <div data-aos="fade-up" class="flex gap-3 items-start mt-4">
                <p
                  class="md:static absolute right-0 top-0 md:opacity-100 opacity-30 text_stroke2 text-[70px] font-medium leading-[60px] opacity-50"
                >
                  02
                </p>
                <p class="leading-[22px] fs_15">
                  Все ресурсы, которые мы внедряем в дизайн, полностью
                  лицензионные и не нарушают авторское право.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex lg:flex-row flex-col w-full space-x-[-1px] lg:ml-[291px] -mt-[1px]"
        >
          <div
            class="relative md:w-[440px] w-full md:px-[30px] py-5 md:border border-[#FEFEFE]"
          >
            <p data-aos="fade-up" class="text-xl font-medium">
              Уникальность продукта - 100%
            </p>
            <div data-aos="fade-up" class="flex gap-3 items-start mt-4">
              <p
                class="md:static absolute right-0 top-0 md:opacity-100 opacity-30 text_stroke2 text-[70px] font-medium leading-[60px] opacity-50"
              >
                03
              </p>
              <p class="leading-[22px] fs_15">
                Мы не используем шаблоны и не заимствуем идеи с других работ,
                дизайн создаётся полностью с нуля.
              </p>
            </div>
          </div>
          <div>
            <div
              class="relative ml-auto md:w-[440px] md:px-[30px] py-5 md:border border-[#FEFEFE]"
            >
              <p data-aos="fade-up" class="text-xl font-medium">
                Планирование срока
              </p>
              <div data-aos="fade-up" class="flex gap-3 items-start mt-4">
                <p
                  class="md:static absolute right-0 top-0 md:opacity-50 opacity-30 text_stroke2 text-[70px] font-medium leading-[60px]"
                >
                  04
                </p>
                <p class="leading-[22px] fs_15">
                  Мы не нарушаем оговоренный срок сдачи проекта, разработка
                  продающей страницы занимает от 5 дней.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- contact -->
      <div
        class="flex bg-[#FEFEFE] _c2d 2xl:h-[290px] md:h-[440px] md:py-0 py-10 px-5 gap-10 mt-[120px]"
      >
        <div class="md:min-w-[480px] min-w-fit w-full">
          <h1
            data-aos="fade-up"
            class="2xl:text-[50px] text-[40px] font-semibold leading-[55px]"
          >
            Получите консультацию сейчас
            <span class="text_stroke">это бесплатно</span>
          </h1>
          <div data-aos="fade-up" class="2xl:flex items-end gap-5">
            <div class="2xl:w-[150px]">
              <input
                class="leading-[55px] placeholder-[#2D2C35]"
                type="text"
                placeholder="Введите имя"
              />
              <hr class="border-[#000] opacity-40 mb-2" />
            </div>
            <div class="2xl:w-[150px]">
              <input
                class="leading-[55px] placeholder-[#2D2C35]"
                type="text"
                placeholder="Номер телефона *"
              />
              <hr class="border-[#000] opacity-40 mb-2" />
            </div>
            <div class="2xl:w-[150px]">
              <input
                class="leading-[55px] placeholder-[#2D2C35]"
                type="text"
                placeholder="Введите e-mail"
              />
              <hr class="border-[#000] opacity-40 mb-2" />
            </div>
            <div class="relative h-[42px] 2xl:mt-0 mt-10">
              <button
                class="flex items-center animate-button2 hover:text-white"
              >
                <p class="z-10 px-4">
                  <span class="_cfe">Получ</span>ить консультацию
                </p>
              </button>
            </div>
          </div>
          <div class="flex items-center gap-[10px]">
            <img
              class="mt-[1px] h-[10px]"
              src="@/assets/svg/checked.svg"
              alt=""
            />
            <p data-aos="fade-up" class="fs_15 opacity-50">
              я согласен с условиями политики конфиденциальности
            </p>
          </div>
        </div>
        <img
          class="mr-[-60px] 2xl:h-[294px] h-[444px] -mt-[3px] min-w-fit"
          src="@/assets/svg/bef_banner.svg"
          alt=""
        />
      </div>
    </section>
    <section
      class="relative bg-[url('@/assets/svg/what_we_do.svg')] pb-[150px] _c2d bg-no-repeat bg-cover page_container"
    >
      <h1
        data-aos="fade-up"
        class="md:text-[50px] text-[25px] md:pt-[130px] pt-[60px] mb-10 font-bold leading-[60px]"
      >
        Стоимость разработки Landing page
      </h1>
      <div class="relative _cfe max-w-fit">
        <p
          data-aos="fade-up"
          class="lg:hidden flex items-center ml-2 -mb-2 justify-center text-center w-[276px] h-[75px] bg-[#8100E9] text-xl font-bold"
        >
          тариф <br />
          “идеальный”
        </p>
        <img
          data-aos="fade-up"
          class="lg:block hidden"
          src="@/assets/svg/ideal_plan.svg"
          alt=""
        />
        <img
          data-aos="fade-up"
          class="lg:hidden block"
          src="@/assets/svg/ideal_plan01.svg"
          alt=""
        />
        <div
          data-aos="fade-down"
          class="md:text-start text-center md:py-0 py-5 absolute lg:bottom-9 md:bottom-3 md:mt-0 -mt-5 lg:right-3 md:right-5 right-4 lg:scale-1 scale-[1.03] bg-[url('@/assets/svg/plan_bg.svg')] bg-no-repeat bg-cover md:h-[70px] h-[165px] flex md:flex-row flex-col items-center justify-between md:w-[711px] w-[95%]"
        >
          <p class="text-[20px] font-medium ml-5">срок разработки: 9-18 дней</p>
          <div class="md:flex items-center gap-10">
            <p class="font-extrabold text-xl">32 000 руб.</p>
            <div class="relative h-[42px] mt-4 mr-2">
              <button
                class="flex items-center text-lg animate-button3 hover:text-[#2d2c35]"
              >
                <p class="z-10 px-4">
                  <span class="_c2d">Заказ</span>ать лендинг
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative _cfe max-w-fit lg:mt-[-40px] md:mt-[40px] mt-[170px] ml-auto"
      >
        <p
          data-aos="fade-up"
          class="lg:hidden flex items-center ml-2 -mb-2 justify-center text-center w-[276px] h-[75px] bg-[#8100E9] text-xl font-bold"
        >
          тариф <br />
          “срочный””
        </p>
        <img
          data-aos="fade-up"
          class="lg:block hidden"
          src="@/assets/svg/urgent_plan.svg"
          alt=""
        />
        <img
          data-aos="fade-up"
          class="lg:hidden block"
          src="@/assets/svg/urgent_plan01.svg"
          alt=""
        />
        <div
          data-aos="fade-down"
          class="md:text-start text-center md:py-0 py-5 absolute lg:bottom-9 md:bottom-3 md:mt-0 -mt-5 lg:right-14 md:right-7 right-4 lg:scale-1 scale-[1.03] bg-[url('@/assets/svg/plan_bg.svg')] bg-no-repeat bg-cover md:h-[70px] h-[165px] flex md:flex-row flex-col items-center justify-between md:w-[711px] w-[95%]"
        >
          <p class="text-[20px] font-medium ml-5">срок разработки: от 5 дней</p>
          <div class="md:flex items-center gap-10">
            <p class="font-extrabold text-xl">45 000 руб.</p>
            <div class="relative h-[42px] mt-4 mr-2">
              <button
                class="flex items-center text-lg animate-button3 hover:text-[#2d2c35]"
              >
                <p class="z-10 px-4">
                  <span class="_c2d">Заказ</span>ать лендинг
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative bg-[url('@/assets/svg/about_our_work.svg')] 2xl:pb-[350px] _cfe bg-no-repeat bg-cover"
    >
      <div
        class="flex justify-between items-end md:pt-[190px] pt-[60px] pb-[50px] page_container"
      >
        <h1
          data-aos="fade-up"
          class="font-bold md:text-[50px] text-[25px] 2xl:w-[500px] leading-[60px] 2xl:h-[190px]"
        >
          Что говорят о нашей работе
        </h1>
        <button
          class="flex items-center text_button gap-1 border-2 border-[#FEFEFE] fs_15 px-5 h-[42px] py-3"
        >
          Больше отзывов
        </button>
      </div>
      <div class="2xl:flex flex-wrap items-start gap-[30px] fs_15">
        <div class="flex flex-col justify-between gap-7">
          <img
            data-aos="fade-up"
            class="-ml-5"
            src="@/assets/svg/reyting.svg"
            alt=""
          />
          <div
            data-aos="fade-up"
            class="relative 2xl:block hidden h-[42px] mt-4 mr-8 ml-auto max-w-fit"
          >
            <button
              class="flex items-center text-lg animate-button3 hover:text-[#2d2c35]"
            >
              <p class="z-10 px-[14px]">
                <span class="_c2d">Напис</span>ать нам
              </p>
            </button>
          </div>
        </div>
        <div class="2xl:flex gap-[40px] hidden">
          <div class="flex items-start w-[370px] relative">
            <img data-aos="fade-up" src="@/assets/svg/titan1.svg" alt="" />
            <div data-aos="fade-right">
              <p class="font-semibold">Смирнов Геннадий</p>
              <p class="text-[13px] mt-[10px] mb-5">
                ЗАО Межгосударственная ассоциация “Титан”
              </p>
              <p class="line-clamp-5">
                Я очень рад, что выбрал вас в качестве исполнителей, ваш
                профессиональный меня поражает, у меня большой опыт работы с
                разработчиками, но таких я еще не встречал.
              </p>
              <button
                class="absolute bottom-3 whitespace-nowrap flex items-center gap-1 border-2 border-[#FEFEFE] fs_15 px-5 py-3"
              >
                Посмотреть рекомендацию
              </button>
            </div>
          </div>
          <div v-for="i in 2" class="relative flex items-start w-[370px]">
            <img data-aos="fade-up" src="@/assets/svg/titan2.svg" alt="" />
            <div data-aos="fade-right">
              <p class="font-semibold">Смирнов Геннадий</p>
              <p class="text-[13px] mt-[10px] mb-5">
                ЗАО Межгосударственная ассоциация “Титан”
              </p>
              <p class="line-clamp-5">
                Я очень рад, что выбрал вас в качестве исполнителей, ваш
                профессиональный меня поражает, у меня большой опыт работы с
                разработчиками, но таких я еще не встречал.
              </p>
              <button
                class="absolute bottom-3 whitespace-nowrap flex items-center gap-1 border-2 border-[#FEFEFE] fs_15 px-5 py-3"
              >
                Посмотреть рекомендацию
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="2xl:hidden block px-6 md:mt-[100px] mt-10">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          :effect="'creative'"
          :centeredSlides="true"
          @slide-change-transition-end="handleSlideChange2"
          @slide-change="handleSlideChange2"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          class="w-full"
        >
          <SwiperSlide
            v-for="slide in 15"
            :key="slide"
            class="lg:!block !hidden"
          >
            <div class="flex gap-[30px]">
              <div v-for="i in 2" class="flex items-start relative w-[90%]">
                <img src="@/assets/svg/titan1.svg" alt="" />
                <div>
                  <p class="font-semibold">Смирнов Геннадий</p>
                  <p class="text-[13px] mt-[10px] mb-5">
                    ЗАО Межгосударственная ассоциация “Титан”
                  </p>
                  <p class="line-clamp-5">
                    Я очень рад, что выбрал вас в качестве исполнителей, ваш
                    профессиональный меня поражает, у меня большой опыт работы с
                    разработчиками, но таких я еще не встречал.
                  </p>
                  <button
                    class="absolute bottom-3 whitespace-nowrap flex items-center gap-1 border-2 border-[#FEFEFE] fs_15 px-5 py-3"
                  >
                    Посмотреть рекомендацию
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            v-for="slide in 15"
            :key="slide"
            class="lg:!hidden !block"
          >
            <div class="flex items-start relative w-[90%]">
              <img
                class="md:block hidden"
                src="@/assets/svg/titan1.svg"
                alt=""
              />
              <div>
                <p class="font-semibold">Смирнов Геннадий</p>
                <p class="text-[13px] mt-[10px] mb-5">
                  ЗАО Межгосударственная ассоциация “Титан”
                </p>
                <p class="line-clamp-5">
                  Я очень рад, что выбрал вас в качестве исполнителей, ваш
                  профессиональный меня поражает, у меня большой опыт работы с
                  разработчиками, но таких я еще не встречал.
                </p>
                <button
                  class="md:absolute md:mt-0 mt-10 bottom-3 whitespace-nowrap flex items-center gap-1 border-2 border-[#FEFEFE] fs_15 px-5 py-3"
                >
                  Посмотреть рекомендацию
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        class="2xl:hidden flex md:flex-row flex-col-reverse gap-4 items-center md:justify-between justify-center mt-[30px] pb-[100px] px-6"
      >
        <div class="flex gap-5">
          <button
            class="lg:block hidden text-[#8100E9] bg-[#fefefe] text-[20px] px-10 py-3"
          >
            Связаться с нами
          </button>
          <button class="border border-[#fefefe] _cfe text-[20px] px-10 py-3">
            Больше отзывов
          </button>
        </div>
        <div class="flex items-center gap-5 text-[40px]">
          <hr class="w-[50px] border-[#2D2C35] opacity-20" />
          <p class="min-w-fit">
            <span class="text_stroke2">{{
              slidestep2 > 9 ? slidestep2 + 1 : 0 + (slidestep2 + 1)
            }}</span>
            <span class="text_stroke2"> / </span>
            <span class="text_stroke2">15</span>
          </p>
          <hr class="w-[50px] border-[#2D2C35] opacity-20" />
        </div>
      </div>
    </section>
    <section
      class="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 _c2d fs_15 py-[50px] page_container"
    >
      <ul data-aos="fade-left" class="leading-[22px]">
        <li class="font-medium text-xl leading-[30px]">Реквизиты</li>
        <li>ИП Стрилецкий М.И.</li>
        <li>ИНН: 325250353986</li>
        <li>ОГРНИП: 319237500175805</li>
      </ul>
      <ul data-aos="fade-left" class="leading-[22px]">
        <li class="font-medium text-xl leading-[30px]">Контакты</li>
        <li>+7 (900) 293-64-55</li>
        <li>info@befab.ru</li>
        <li class="flex gap-[10px] mt-1">
          <img src="@/assets/svg/whatsup.svg" alt="" />
          <img src="@/assets/svg/telegram.svg" alt="" />
          <img src="@/assets/svg/phone.svg" alt="" />
        </li>
      </ul>
      <ul data-aos="fade-left" class="mt-5 space-y-5 max-w-fit">
        <li>
          <div class="relative h-[42px]">
            <button class="flex items-center animate-button2 hover:text-white">
              <p class="z-10 px-5"><span class="_cfe">Заказ</span>ать звонок</p>
            </button>
          </div>
        </li>
        <li>
          <div class="relative h-[42px]">
            <button class="flex items-center animate-button2 hover:text-white">
              <p class="z-10 px-5"><span class="_cfe">Скача</span>ть бриф</p>
            </button>
          </div>
        </li>
      </ul>
      <ul
        data-aos="fade-left"
        class="w-[240px] text-end text-[11px] leading-[15px] space-y-2"
      >
        <li>
          © Все права защищены <br />
          | BeFab Web Studio 2020
        </li>
        <li>Политика конфиденциальности</li>
        <li>
          Предложение носит информационный характер и не является публичной
          офертой
        </li>
      </ul>
    </section>

    <a-modal v-model:open="modal2Visible" centered @ok="modal2Visible = false">
      <div class="md:min-w-[480px] min-w-fit w-full">
        <img
          @click="modal2Visible = false"
          class="cursor-pointer ml-auto"
          src="@/assets/svg/close.svg"
          alt=""
        />
        <h1 class="text-[25px] font-semibold leading-[35px]">
          Введите контактные данные
        </h1>
        <p class="fs_15 mt-5">
          Мы свяжемся с вами в ближайшее время, чтобы ответить на все вопросы.
        </p>
        <div class="items-end gap-5 mt-4">
          <div class="2xl:w-[150px]">
            <input
              class="leading-[55px] placeholder-[#2D2C35]"
              type="text"
              placeholder="Введите имя"
            />
            <hr class="border-[#000] opacity-40 mb-2" />
          </div>
          <div class="2xl:w-[150px]">
            <input
              class="leading-[55px] placeholder-[#2D2C35]"
              type="text"
              placeholder="Номер телефона *"
            />
            <hr class="border-[#000] opacity-40 mb-2" />
          </div>
          <div class="2xl:w-[150px]">
            <input
              class="leading-[55px] placeholder-[#2D2C35]"
              type="text"
              placeholder="Введите e-mail"
            />
            <hr class="border-[#000] opacity-40 mb-2" />
          </div>
          <div class="relative h-[42px] mt-10">
            <button class="flex items-center animate-button2 hover:text-white">
              <p class="z-10 px-4">
                <span class="_cfe">Получ</span>ить консультацию
              </p>
            </button>
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <img
            class="mt-[1px] h-[10px]"
            src="@/assets/svg/checked.svg"
            alt=""
          />
          <p class="fs_15 opacity-50">
            я согласен с условиями политики конфиденциальности
          </p>
        </div>
      </div>
    </a-modal>

    <a-modal
      v-model:open="contactVisible"
      centered
      @ok="contactVisible = false"
    >
      <div class="md:min-w-[480px] min-w-fit w-full">
        <img
          @click="modal2Visible = false"
          class="cursor-pointer mb-5"
          src="@/assets/svg/close.svg"
          alt=""
        />
        <div class="flex gap-5">
          <img src="@/assets/contact/phone.svg" alt="" />
          <p class="text-[25px] font-medium">+7 (952) 871-93-48</p>
        </div>
        <button class="bg-[#8100E9] _cfe text-[20px] px-10 py-3 mt-3">
          Заказать звонок
        </button>
        <hr class="my-[30px]" />
        <div class="flex items-start gap-5">
          <img class="mt-2" src="@/assets/contact/email.svg" alt="" />
          <div>
            <p class="text-[25px] font-medium mb-2">info@befab.ru</p>
            <p>Для заказа Landing Page Вам нужно заполнить наш бриф</p>
          </div>
        </div>
        <button class="bg-[#8100E9] _cfe text-[20px] px-10 py-3 mt-3">
          Скачать бриф
        </button>
        <hr class="my-[30px]" />
        <li class="flex gap-[10px] mb-10 mt-1">
          <img src="@/assets/contact/call_phone.svg" alt="" />
          <img src="@/assets/contact/telegram.svg" alt="" />
          <img src="@/assets/contact/whatsup.svg" alt="" />
          <img src="@/assets/contact/instagram.svg" alt="" />
          <img src="@/assets/contact/facebook.svg" alt="" />
        </li>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
import shape_triangle from "@/assets/svg/shape_triangle.svg";
import triangle from "@/assets/svg/triangle.svg";
import arrow_triangle from "@/assets/svg/arrow_triangle.svg";
import square from "@/assets/svg/square.svg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modal2Visible = ref(false);
const contactVisible = ref(false);
// work images
import work1 from "@/assets/img/work1.png";
import work2 from "@/assets/img/work2.png";
import work3 from "@/assets/img/work3.png";
import work4 from "@/assets/img/work4.png";
import work01 from "@/assets/img/work01.png";
import work02 from "@/assets/img/work02.png";
import work03 from "@/assets/img/work03.png";
import work04 from "@/assets/img/work04.png";
import work05 from "@/assets/img/work05.png";
const modules = [SwiperAutoplay];
const slidestep = ref(0);
const slidestep2 = ref(0);

const work_image = [
  work1,
  work2,
  work3,
  work4,
  work01,
  work02,
  work03,
  work04,
  work05,
];
const work_image1 = [work1, work2, work3, work4];
const work_image2 = [work01, work02, work03, work04, work05];

// function sendEmail() {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "muhammadiyevj768@gmail.com",
//       pass: "epnclgkptkewibws",
//     },
//   });

//   const mailOptions = {
//     from: "muhammadiyevj768@gmail.com",
//     to: "shahbozmamatkarimov2303@gmail.com",
//     subject: "Password Reset",
//     text: `This is your registration confirmation code`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     console.log(error);
//   });
// }

onMounted(() => {
  // sendEmail()
});

const services = [
  {
    title: ["Эксклюзивный", "дизайн"],
    img: shape_triangle,
    desciption:
      "Каждый лендинг уникален, дизайн создаётся полностью с нуля с учётом выбранной, наиболее логичной и интересной концепции.",
  },
  {
    title: ["Бизнес-", "концепция"],
    img: triangle,
    desciption:
      "Мы разрабатываем понятные для клиента бизнес-концепции, которые представляют вашу компанию в самом выгодном свете.",
  },
  {
    title: ["Продающие", "тексты"],
    img: arrow_triangle,
    desciption:
      "Мы разрабатываем лаконичные и простые тексты, которые отвечают на вопросы ваших клиентов еще до звонка консультанта.",
  },
  {
    title: ["Формы", "захвата"],
    img: square,
    desciption:
      "Отправить свои данные — всегда стрессовая ситуация, правильные слова и удобная форма подтолкнут ваших клиентов сделать первый шаг.",
  },
];

function handleSlideChange(e) {
  console.log(e);
  slidestep.value = e.realIndex;
}

function handleSlideChange2(e) {
  console.log(e);
  slidestep2.value = e.realIndex;
}
</script>

<style lang="scss" scoped>
.animate-button:after {
  position: absolute;
  content: "";
  left: 0;
  width: 55px;
  height: 42px;
  background: #8100e9;
  transition: all 0.35s;
}

.animate-button2:after {
  position: absolute;
  content: "";
  left: 0;
  width: 65px;
  height: 42px;
  background: #8100e9;
  transition: all 0.35s;
}

.animate-button3:after {
  position: absolute;
  content: "";
  left: 0;
  width: 65px;
  height: 42px;
  background: #fefefe;
  transition: all 0.35s;
}

.animate-button2:hover:after,
.animate-button3:hover:after {
  width: 100%;
  transition: all 0.35s;
}

.text_stroke {
  color: transparent; /* Make the text itself transparent */
  -webkit-text-stroke: 1px #2d2c35; /* Add text stroke */
}

.text_stroke2 {
  color: transparent; /* Make the text itself transparent */
  -webkit-text-stroke: 1px #fefefe; /* Add text stroke */
}

.text_stroke3 {
  color: transparent; /* Make the text itself transparent */
  -webkit-text-stroke: 1px #8100e9; /* Add text stroke */
}

input {
  outline: none;
}
</style>
