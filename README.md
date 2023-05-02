# **Art Gallery Client**

Главная страница сервиса галереи картин.

Основной стек: **React**, **Redux**, **Redux-Thunk**.

Для форматирования кода были использованы **ESLint** и **Prettier**.

Для получения списка картин: [API](https://test-front.framework.team/api-docs/).

## **Описание работы:**

Адаптивная резиновая верстка. Использовался препроцессор SASS.

Для селектов и пагинации использована [ui библиотека](https://www.npmjs.com/package/fwt-internship-uikit).
Фильтрация осуществляется по названию картины через `input`, по местонахождению и автору через компоненты `select` и по дате создания через `range`.

Вся работа с фильтрами и пагинацией происходит через сервер, а не локально.

Реализована смена светлой и тёмной темы.

## **Установка и предварительные требования**

1. Скачать или клонировать данный репозиторий.
2. Применить команду `yarn`.
3. Запустить с помощью команды `yarn start`.
