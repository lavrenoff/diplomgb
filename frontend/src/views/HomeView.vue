<template>
  <main>
    <section>
      <SliderComponent />
    </section>
    <section class="dostavka center">
      <div class="dostavka__art">
        <img src="../assets/img/sk1.svg" alt="" />
        <p>
          <span>Бесплатная</span>
          доставка по городу
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk2.svg" alt="" />
        <p>
          Открытка <span>в подарок</span>
          и фото вручения
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk3.svg" alt="" style="margin-bottom: -15px" />
        <p>
          <span>Круглосуточная</span>
          доставка
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk4.svg" alt="" />
        <p>Накопительная система <span>скидок</span></p>
      </div>
    </section>
    
    <section class="tovars center">
      <div class="tovars__filters">
        <div class="tovars__items">
          <div class="tovars__sort_menu">
          <Button class="btnsort" type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" label="Сортировать по:" style="color:#5b4a58;background-color:white;border:0;"/>          
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true"  />  
          <Button class="btnfilter" @click="visibleRight = true" label="Фильтровать" style="color:#5b4a58;background-color:white;border:0;"/>
          <Sidebar v-model:visible="visibleRight" header="Фильтр" position="full">
          <div class="tovars__flt1">          
          <div class="tovars__price">
            <p class="tovars__p">Стоимость:</p>

            <div class="tovars__prtxt">
              <label for="flt0" class="tovars__lb">
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt0"
                  checked="checked"
                  v-model="price2500"
                />

                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>
                до 2500 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt2500" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt2500"                  
                  v-model="price4000"
                  
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                2500-4000 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt4000" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt4000"
                  v-model="price6000"
                  checked
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                4000-6000 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt6000" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt6000"
                  v-model="priceall"
                  checked
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                от 6000 руб.
              </label>
            </div>
          </div>

          <div class="tovars__bukets">
            <p class="tovars__p">Букет с ...:</p>
            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ1" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ1"
                    class="custom-checkbox"
                    checked
                    v-model="fltrose"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Розами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ2" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ2"
                    class="custom-checkbox"
                    v-model="flttulip"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Тюльпанами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ3" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ3"
                    class="custom-checkbox"
                    v-model="flthydrangea"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Гортензиями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ4" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ4"
                    class="custom-checkbox"
                    v-model="fltgerber"
                    
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Герберами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ5" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ5"
                    class="custom-checkbox"
                    v-model="fltsunflower"
                    
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Подсолнухами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ6" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ6"
                    class="custom-checkbox"
                    v-model="fltorchid"

                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Орхидеями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ7" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ7"
                    class="custom-checkbox"
                    v-model="fltiris"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Ирисами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ8" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ8"
                    class="custom-checkbox"
                    v-model="fltlily"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Лилиями
                </label>
              </div>
            </div>
          </div>

          <div class="tovars_packed">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt">
              <label for="buk1" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk1"
                  class="custom-checkbox"
                  checked
                  v-model="package1"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Букетом
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="buk2" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk2"
                  class="custom-checkbox"
                  v-model="package2"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                В корзине
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="buk3" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk3"
                  class="custom-checkbox"
                  v-model="package3"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                В коробке
              </label>
            </div>
          </div>

          <div class="tovars_colors">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt">
              <label for="clr1" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr1"
                  class="custom-checkbox"
                  checked
                  v-model="color[0]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Белая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr2" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr2"
                  class="custom-checkbox"
                  v-model="color[1]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Розовая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr3" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr3"
                  class="custom-checkbox"
                  v-model="color[2]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Красная
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr4" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr4"
                  class="custom-checkbox"
                  v-model="color[3]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Желтая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr5" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr5"
                  class="custom-checkbox"
                  v-model="color[4]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Оранжевая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr6" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr6"
                  class="custom-checkbox"
                  v-model="color[5]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Бордовая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr7" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr7"
                  class="custom-checkbox"
                  v-model="color[6]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Синяя
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr8" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr8"
                  class="custom-checkbox"
                  v-model="color[7]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Фиолетовая
              </label>
            </div>
          </div>

          <div class="tovars_btn">
            <button @click="this.visibleRight=false;filter();">Применить</button>
          </div>
        </div>                        
        </Sidebar>
          </div>                    
          <div class="tovars__sort">
            <p class="tovars__p">Сортировать по:</p>
            <a href="#!" @click="sortNEW()" :class="{ active: tagSort == 0 }">Новизне</a>
            <a href="#!" @click="sortDESC()" :class="{ active: tagSort == 1 }"
              >Цена по возрастанию</a
            >
            <a href="#!" @click="sortASC()" :class="{ active: tagSort == 2 }"
              >Цена по убыванию</a
            >
            <a href="#!" @click="sortPopular()" :class="{ active: tagSort == 3 }"
              >Популярности</a
            >
          </div>
          <div
            class="tovars__items1"
            style="border-radius: 10px; width: 100%; margin-top: 22px"
          >
            <ProductComponent v-for="(product,index) in products" :article="product" @sendProduct="onClickAdd" :key="product.id" @sendIncrement="increment" @sendDecrement="decrement(product,index)"/>
            
          </div>
        </div>
        <div class="tovars__flt">
          <div class="tovars__find">
            <input
              class="text-field__input"
              type="text"
              id="find"
              placeholder="Поиск"
              v-model="fndName"
            />
            <a href="#!" @click="findName(fndName)">
            <span class="text-field__aicon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.29979 1.4C3.59368 1.4 1.39995 3.5938 1.39995 6.3C1.39995 9.00619 3.59368 11.2 6.29979 11.2C9.00589 11.2 11.1996 9.00619 11.1996 6.3C11.1996 3.5938 9.00589 1.4 6.29979 1.4ZM0 6.3C0 2.8206 2.82051 0 6.29979 0C9.77906 0 12.5996 2.8206 12.5996 6.3C12.5996 9.77939 9.77906 12.6 6.29979 12.6C2.82051 12.6 0 9.77939 0 6.3Z"
                  fill="#828282"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.76017 9.76003C10.0335 9.48666 10.4767 9.48666 10.7501 9.76003L13.795 12.805C14.0683 13.0784 14.0683 13.5216 13.795 13.795C13.5216 14.0683 13.0784 14.0683 12.8051 13.795L9.76017 10.75C9.48681 10.4766 9.48681 10.0334 9.76017 9.76003Z"
                  fill="#828282"
                />
              </svg>
            </span>
          </a>
          </div>
          <div class="tovars__price">
            <p class="tovars__p">Стоимость:</p>

            <div class="tovars__prtxt">
              <label for="flt0" class="tovars__lb">
                <input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt0"
                  checked="checked"
                  v-model="price2500"
                />

                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>
                до 2500 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt2500" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt2500"                  
                  v-model="price4000"
                  
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                2500-4000 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt4000" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt4000"
                  v-model="price6000"
                  checked
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                4000-6000 руб.
              </label>
            </div>
            <div class="tovars__prtxt">
              <label for="flt6000" class="tovars__lb"
                ><input
                  class="custom-checkbox"
                  type="checkbox"
                  name=""
                  id="flt6000"
                  v-model="priceall"
                  checked
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                от 6000 руб.
              </label>
            </div>
          </div>

          <div class="tovars__bukets">
            <p class="tovars__p">Букет с ...:</p>
            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ1" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ1"
                    class="custom-checkbox"
                    checked
                    v-model="fltrose"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Розами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ2" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ2"
                    class="custom-checkbox"
                    v-model="flttulip"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Тюльпанами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ3" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ3"
                    class="custom-checkbox"
                    v-model="flthydrangea"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Гортензиями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ4" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ4"
                    class="custom-checkbox"
                    v-model="fltgerber"
                    
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Герберами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ5" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ5"
                    class="custom-checkbox"
                    v-model="fltsunflower"
                    
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Подсолнухами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ6" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ6"
                    class="custom-checkbox"
                    v-model="fltorchid"

                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Орхидеями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ7" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ7"
                    class="custom-checkbox"
                    v-model="fltiris"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Ирисами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt">
                <label for="typ8" class="tovars__lb">
                  <input
                    type="checkbox"
                    name=""
                    id="typ8"
                    class="custom-checkbox"
                    v-model="fltlily"
                  />
                  <div class="svg">
                    <svg
                      class="check"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="#E9FFE2"
                        stroke="#6AAE55"
                      />
                      <path
                        d="M5 7L7.5 9.5L12 5"
                        stroke="#6AAE55"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      class="nocheck"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill="white"
                        stroke="#BDBDBD"
                      />
                    </svg>
                  </div>

                  Лилиями
                </label>
              </div>
            </div>
          </div>

          <div class="tovars_packed">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt">
              <label for="buk1" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk1"
                  class="custom-checkbox"
                  checked
                  v-model="package1"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Букетом
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="buk2" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk2"
                  class="custom-checkbox"
                  v-model="package2"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                В корзине
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="buk3" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="buk3"
                  class="custom-checkbox"
                  v-model="package3"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                В коробке
              </label>
            </div>
          </div>

          <div class="tovars_colors">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt">
              <label for="clr1" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr1"
                  class="custom-checkbox"
                  checked
                  v-model="color[0]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Белая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr2" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr2"
                  class="custom-checkbox"
                  v-model="color[1]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Розовая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr3" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr3"
                  class="custom-checkbox"
                  v-model="color[2]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Красная
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr4" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr4"
                  class="custom-checkbox"
                  v-model="color[3]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Желтая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr5" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr5"
                  class="custom-checkbox"
                  v-model="color[4]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Оранжевая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr6" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr6"
                  class="custom-checkbox"
                  v-model="color[5]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Бордовая
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr7" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr7"
                  class="custom-checkbox"
                  v-model="color[6]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Синяя
              </label>
            </div>

            <div class="tovars__prtxt">
              <label for="clr8" class="tovars__lb">
                <input
                  type="checkbox"
                  name=""
                  id="clr8"
                  class="custom-checkbox"
                  v-model="color[7]"
                />
                <div class="svg">
                  <svg
                    class="check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#E9FFE2"
                      stroke="#6AAE55"
                    />
                    <path
                      d="M5 7L7.5 9.5L12 5"
                      stroke="#6AAE55"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    class="nocheck"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                      stroke="#BDBDBD"
                    />
                  </svg>
                </div>

                Фиолетовая
              </label>
            </div>
          </div>

          <div class="tovars_btn">
            <button @click="filter()">Применить</button>
          </div>
        </div>
      </div>
    </section>

    <section class="buket center">
      <div class="buket__title">
        <h2><span>ЗАКАЗАТЬ</span> В 5 ШАГОВ</h2>
      </div>

      <div class="buket__items">
        <div class="buket__item">
          <img src="../assets/img/buk1.svg" alt="buk1" />
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Выберите букет;</p>
            <p class="buket__txt">В каталоге выберите понравившийся букет;</p>
          </div>
        </div>
        <div class="buket__item">
          <img src="../assets/img/buk2.svg" alt="buk2" />
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Выберите размер и дополнение;</p>
            <p class="buket__txt">
              На странице с описанием букета выберите подходящий размер. По
              желанию, добавьте к букету мягкую игрушку, сладости или любой
              другой подарок;
            </p>
          </div>
        </div>
        <div class="buket__item">
          <img src="../assets/img/buk3.svg" alt="buk3" />
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Укажите данные для доставки;</p>
            <p class="buket__txt">
              Заполните форму доставки и оплатите заказ удобным для вас
              способом;
            </p>
          </div>
        </div>
        <div class="buket__item">
          <img src="../assets/img/buk4.svg" alt="buk4" />
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Букет готов!</p>
            <p class="buket__txt">
              Букет будет собран из свежайших цветов и доставлен получателю к
              указанной дате и времени.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="otziv center">
      <div class="otziv__right">
        <div class="otziv__right_top">
          <h2 class="otziv__title">ОТЗЫВЫ</h2>
          <router-link to="/reviews">Смотреть все</router-link>          
        </div>

        <div class="otziv__comments">
          <ReviewListComponent :review="review" />

          <!-- <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными
              услугами,мастера своего дела! Букетик даже неожиданно красивее чем
              на картинке
            </p>
          </div>

          <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными
              услугами,мастера своего дела! Букетик даже неожиданно красивее чем
              на картинке
            </p>
          </div>

          <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C"
                  />
                </svg>
              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными
              услугами,мастера своего дела! Букетик даже неожиданно красивее чем
              на картинке
            </p>
          </div> -->
        </div>
      </div>
    </section>

    <section class="opisanie center">
      <p>
        Букеты создаются максимально похожими на фотографию с сайта. Приведенные
        примеры букетов являются возможными вариантами составления цветочных
        композиций, так как они изготавливаются вручную флористами, и поэтому
        возможно незначительное отклонение по форме от фотографии на сайте. При
        этом возможна замена по количеству, ассортименту и составу цветов, в
        зависимости от сезонности, наличия цветов в том или ином регионе и
        других факторов на равноценные им по качеству и стоимости. Это позволит
        нам выполнить заказ без задержек.
        <br />
        По России и странам СНГ доставка букета возможна в день оформления и
        оплаты заказа. По странам дальнего зарубежья доставка возможна через 2—3
        рабочих дня после оплаты. Ближайшая дата и время доставки будут
        отображаться на странице оформления заказа с учетом выбранного города
        доставки. Мы рекомендуем оформлять и оплачивать заказы заранее, особенно
        в праздничный период. Более подробную информацию смотрите на страницеrr
      </p>
    </section>
  </main>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import ProductComponent from "../components/ProductComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import ReviewListComponent from "../components/ReviewListComponent.vue"
import StarRating from 'vue-star-rating'
import axios from 'axios';
import '../axios'

export default {
  name: "HomeView",

  components: {
    SliderComponent,
    ProductComponent,
    Menu,
    Button,
    Sidebar,
    ReviewListComponent,
    StarRating
  },

  data() {
    return {
      // products:[{ id: 1, name: 'Букет из разноцветных роз', url: '1.png', price: 1000, new: false, rose: true, tulip: false, hydrangea: true, sunflower: false, orchid: true, iris: false, lily: true, gerbera: false, package: 0, color: '', popularity: 100, promotion: false }],
      products: this.$store.state.ProductList,
      products_old:this.$store.state.ProductList,
      products_price:this.$store.state.ProductList,
      products_package:this.$store.state.ProductList,
      // products_old:this.$store.state.ProductList,

      tagSort: 0,
      price2500: true,
      price4000: true,
      price6000: true,
      priceall: true,
      visibleRight:false,
      
      fltrose:true, 
      flttulip: true, 
      flthydrangea: true, 
      fltgerber:true,
      fltsunflower: true, 
      fltorchid: true, 
      fltiris: true, 
      fltlily: true,  
      package1:true,
      package2:true,
      package3:true, 
      review:[],
      color:[true,true,true,true,true,true,true,true],
      fndName:'',
      items: [                          
                        {
                            label: 'Новизне', 
                            command: (event) => {   
                              this.sortNEW();
                            },                   
                        },
                        {
                            label: 'Цена по возрастанию',                
                            command: (event) => {   
                              this.sortDESC();                              
                            },
                        },
                        {
                            label: 'Цена по убыванию',                
                            command: (event) => {   
                              this.sortASC();
                            },
                        },
                        {
                            label: 'Популярности',                
                            command: (event) => {   
                              this.sortPopular();
                            },
                        },                    
              ],

      tst: [{}],
    };
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
    
  },
  created() {
    
  },
  mounted() {
    this.loadReview();    
  },

  methods: {    
    ...mapActions(['INCREMENT_TO_CART','DECREMENT_TO_CART','ADD_TO_CART','REMOVE_TO_CART_V1']    
    ),
    async loadReview() {            
            try {
                const response = await axios.get('review');
                
                this.review = response.data.splice(1,3);
            } catch (err) {
                console.log(err);
            }

        },
    filter() {
      let flt = {};
      if (this.price2500) {
        const test2500 = this.products_old.filter(
          (element) => element.price <= 2500
        );

        flt = test2500;      
      }

      if (this.price4000) {        
        const test4000 = this.products_old.filter(
          (element) => element.price > 2500 && element.price <= 4000
        );                                 
                
        if (typeof(flt.length)!="undefined") {                  
        for (const n in test4000) {
             flt.push(test4000[n]);
           }
           
         } else {
          flt = test4000;
         }
      }

      if (this.price6000) {
        const test6000 = this.products_old.filter(
          (element) => element.price > 4000 && element.price <= 6000
        );
        if (typeof(flt.length)!="undefined") {
        for (const n in test6000) {
          flt.push(test6000[n]);
        }
      }else{
        flt=test6000;
      }
      }

      if (this.priceall) {
        const testall = this.products_old.filter((element) => element.price > 6000);
        if (typeof(flt.length)!="undefined"){
          for (const n in testall) {
          flt.push(testall[n]);
        }
        }
        else{
          flt=testall;
        }
        
      }
      
      this.products_price=flt;
      
      let flt1=new Set();
            
      
      if (this.fltrose) {        
        const test = this.products_price.filter((element) => element.rose>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.flttulip) {        
        const test = this.products_price.filter((element) => element.tulip>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.flthydrangea) {        
        const test = this.products_price.filter((element) => element.hydrangea>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.fltgerber) {        
        const test = this.products_price.filter((element) => element.gerber>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.fltsunflower) {        
        const test = this.products_price.filter((element) => element.sunflower>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.fltorchid) {        
        const test = this.products_price.filter((element) => element.sunorchid>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.fltiris) {        
        const test = this.products_price.filter((element) => element.iris>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

       if (this.fltlily) {        
        console.log('aaaaa');
        const test = this.products_price.filter((element) => element.lily>0);                
          for (const n in test) {          
            flt1.add(test[n]);
        }              
       }

      this.products_package=Array.from(flt1);
            
      let flt2=new Set();
     
              
      if (this.package1) {        
        const test = this.products_package.filter((element) => element.package===0);                
          for (const n in test) {          
            flt2.add(test[n]);
        }              
       }

       if (this.package2) {        
        const test = this.products_package.filter((element) => element.package===1);                
          for (const n in test) {          
            flt2.add(test[n]);
        }              
       }

       if (this.package3) {        
        const test = this.products_package.filter((element) => element.package===2);                
          for (const n in test) {          
            flt2.add(test[n]);
        }              
       }

       let p=flt2;
       let flt3=new Set();

       for(let n=0; n<this.color.length;n++){
        if (this.color[n]) {        
          const test = this.products_package.filter((element) => element.color===n);                
          for (const n in test) {          
            flt3.add(test[n]);
        }              
       }
        
       }
                  
      this.products = Array.from(flt3);            
    },


    sortNEW() {
      this.tagSort = 0;
      this.products.sort((x, y) => (x["new"] > y["new"] ? -1 : 1));
    },
    sortASC() {
      this.tagSort = 2;
      this.products.sort((x, y) => (x["price"] > y["price"] ? -1 : 1));
    },
    sortDESC() {
      this.tagSort = 1;
      this.products.sort((x, y) => (x["price"] < y["price"] ? -1 : 1));
    },
    sortPopular() {
      this.tagSort = 3;
      this.products.sort((x, y) =>
        x["popularity"] > y["popularity"] ? -1 : 1
      );
    },
    findName(str){            
      this.products = this.products_old.filter((element) => element.name.toLowerCase().indexOf(str.toLowerCase())!==-1);                
    },
    onClickAdd(product){   
      let pr=product;
      pr.quantity=pr.quantity+1;
      this.ADD_TO_CART(pr);      
    },
    increment(product){
      this.INCREMENT_TO_CART(product);
      // console.log('increment');
    },
    decrement(product,index){
      if((product.quantity-1)>0) {
        this.DECREMENT_TO_CART(product);
      } else {
        // console.log(index);
        this.REMOVE_TO_CART_V1(product);
      }
        
      
      // console.log('decrement');
    },
    toggle(event) {
            this.$refs.menu.toggle(event);
        },
    


  },
};
</script>

<style lang="scss" scoped>
@media(min-width:1035px){
  .btnsort{
    display:none;
  }  
}

@media(min-width:993px){
  .btnfilter{
    display:none;
  }  
}


@media(max-width:1035px){    
  .buket{
    padding-left:20px;
    padding-right:20px;                
  }
  .tovars{
    padding-top:50px!important;
    padding-bottom:50px!important;
    padding-left:20px;
    padding-right:20px;                
  }

  .opisanie{
    padding-left:20px;
    padding-right:20px;                
  }

  .tovars__sort{
    display:none!important;
  }

  .buket__item{
    flex-direction: column;
    text-align: center;
    gap: 20px;    
  }

  .otziv__right{
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media(max-width:992px){
  .tovars__items{
     width:100%!important;
   }
  .tovars__flt{
    display:none!important;
  }

@media(max-width:480px)  {
  .buket__item{
    width:100%!important;
  }
}
  
}
.tovars__sort_menu{
  display:flex;
  gap:10px;
}

.tovars_btn {
  display: flex;
  justify-content: center;

  button {
    background-color: #6aae55;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    // width: 100%;
    // height: 40px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px;
    // text-align:center;
  }
}
.active {
  color: #7e6579 !important;
  font-weight: bold;
}
.otziv {
  padding-top: 115px;
  padding-bottom: 115px;
  background-color: #e5e5e5;
  display: flex;

  &__comments {
    display: flex;
    flex-direction: column;
    // height: 356px;
    justify-content: space-between;
  }

  &__comment {
    padding-bottom: 25px;
  }

  &__comment:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  &__family {
    display: flex;
    justify-content: space-between;

    &_p {
      color: #6aae55;
      font-weight: 700;
    }

    &_dt {
      font-size: 12px;
      color: #828282;
    }

    &_txt {
      font-size: 16px;
      color: #7e6579;
    }
  }

  a {
    color: #6aae55;
    font-size: 16px;
    text-decoration: none;
    border-bottom: 1px dotted #6aae55;
    margin-bottom: 10px;
  }

  &__left {
    // width: 35%;

    &_top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;
    }

    &_bottom {
      display: grid;
      grid-template-columns: 168px 168px;
      grid-template-rows: 168px 168px;

      gap: 20px;
    }
  }

  &__right {
    // padding-left: 57px;
    // width: 65%;

    &_top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;
    }
  }

  &__title,
  &__title span {
    font-family: "KARTON";
    color: #5b4a58;
  }

  &__title span {
    color: #6aae55;
  }

  &__title {
    font-size: 26px;
  }
}

.custom-checkbox {
  display: none;
  // -webkit-appearance: none;
}

input:checked ~ .svg .check {
  display: block;
}

input:not(checked) ~ .svg .check {
  display: none;
}

input:checked ~ .svg .nocheck {
  display: none;
}

input:not(checked) ~ .svg .nocheck {
  display: block;
}

#find {
  border: none;
  background-color: #fafafa;
  font-size: 16px;
}

.tovars {
  background-color: #f9f8fb;
  font-size: 16px;
  padding-top: 100px;
  padding-bottom: 100px;

  &__lb {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  &__price,
  &__bukets,
  &_packed,
  &_colors {
    padding: 15px;
    border-bottom: 1px solid #f2f2f2;
  }

  &__p {
    font-size: 14px;
    color: #bdbdbd;
    font-weight: 700;
  }

  &__flt {
    background-color: white;
    border-radius: 10px;
    // padding: 15px;
  }

  &__items {
    // margin-right: 20px;
    // padding-right: 20px;
    // background-color: red;
  }

  &__items1 {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    justify-content: space-evenly;
  }

  &__sort {
    background-color: white;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
  }

  &__sort p {
    color: #828282;
  }

  &__sort a {
    text-decoration: none;
    color: #bdbdbd;
  }

  &__find {
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    padding: 15px;
  }

  &__find input {
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 25px;
  }
}

.text-field__aicon {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 30px;
  // right: 0.875rem;
  // width: 1rem;
  // cursor: pointer;
  // color: #bdbdbd;
  // transition: color 0.15s ease-in-out;
}

.text-field__aicon:hover {
  color: #212529;
}

.tovars {
  &__flt {
    display: flex;
    width: 23%;
    flex-direction: column;
    margin-left:20px;
  }

  &__items {
    width: 76%;
  }

  &__filters {
    display: flex;
  }

  &__sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__prtxt {
    display: flex;
    gap: 13px;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  &__prtxt input {
    border: 1px solid red;
  }
}

.buket {
  padding-bottom: 95px;

  &__zagolovok {
    color: #6aae55;
    font-size: 18px;
    font-weight: 700;
  }

  &__txt {
    color: #5b4a58;
    font-size: 16px;
    font-weight: 400;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
    width: 50%;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &_itemtxt {
    padding-left: 23px;
  }

  &_itemtxt p {
    padding-bottom: 13px;
  }

  &__title {
    padding-top: 80px;
    padding-bottom: 18px;
    text-align: center;
  }

  &__title h2,
  &__title span {
    font-family: "KARTON";
    font-size: 24px;
  }

  &__title span {
    color: #6aae55;
  }
}

.opisanie {
  color: #828282;
  font-size: 16px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f0f0f0;
}

.dostavka {
  display: flex;
  justify-content: space-around;
  // justify-content: center;
  // align-items: flex-end;
  // padding-top: 65px;
  // padding-bottom: 65px;

  &__art span {
    color: #6aae55;
    font-size: 18px;
  }

  &__art {
    text-align: center;
    padding: 50px;
  }
}

@media (max-width: 1035px){
  .dostavka{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-around;
  }

@media (max-width:768px)  {
  .dostavka{
    flex-direction: column;
  }
}
}
</style>
