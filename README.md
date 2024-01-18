
# Магазин мебели Loft Furniture Backend

##О проекте

Backend для проекта Loft Furniture. <br/>
API Documentation: [https://loft-furniture-server.onrender.com/swagger](https://loft-furniture-server.onrender.com/swagger) <br/>
Frontend GitHub: [https://github.com/Zhurvlad/loft-furniture-frontend](https://github.com/Zhurvlad/loft-furniture-frontend) <br/>
Сайт: [https://loft-furniture-frontend.onrender.com](https://loft-furniture-frontend.onrender.com/) <br/>

##Реализовано:

 - Логин
 - Регистрация 
 - Проверка авторизации пользователя после перезагрузки страницы с помощью session(connection.sid) 
 - Получение одного товара
 - Получение товаров с пометкой "New"
 - Получение товаров с пометкой "Bestseller"
 - Поиск товара по названию
 - Поиск товара по поисковому запросу(строчке)
 - Добавление товара в корзину пользователем
 - Получение всех товаров добавленных в корзину пользователем
 - Обновление количества товара
 - Обновление количества товаров
 - Удаление одного товара
 - Удаление всех товаров
 - Фейковая оплата с помощью ЮKassa
 
 ## Развертывание проекта
 
`npm i` - установка зависмостей; <br/>
`npm run start` - запуск backend; <br/>

Создать .env и установить зависимость для БД: <br/>
SQL_DIALECT= <br/>
SQL_LOGGING= <br/>
DATABASE_HOST= <br/>
DATABASE_PORT= <br/>
DATABASE_USER= <br/>
DATABASE_PASSWORD= <br/>
DATABASE_NAME= <br/>
PORT=  <br/>

Установить зависимости в config/config.json для БД.
