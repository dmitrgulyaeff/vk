# Проект "Frontend-разработчик в команду сообществ"

## Описание проекта

Этот проект представляет собой простое React приложение, созданное в рамках профильного задания для Frontend-разработчика. Приложение запрашивает список групп с backend и отображает их на одной странице. Приложение использует моки для имитации ответа от backend, а также реализует фильтрацию групп по различным критериям.

## Технологии

- **React**: Используется для создания пользовательского интерфейса.
- **TypeScript**: Для статической типизации и улучшения читаемости кода.
- **Effector**: Для управления состоянием приложения и реализации бизнес-логики.
- **Mock Service Worker (MSW)**: Для имитации ответа от backend в процессе разработки.
- **Zod**: Для валидации ответа от севера.
- **CSS Modules**: Для изоляции стилей компонентов.
- **Docker**: Для упаковки приложения в контейнер для упрощения развертывания.

## Приложение
![скриншот приложения](https://sun9-64.userapi.com/impg/Uf2TSyDTyoNNjIHzdm_7sBf6Qs3TWKEunrvfsw/nh3SSQcH6cg.jpg?size=783x774&quality=96&sign=1fdc4ecd48b443fe9bf4a82ebc6108c0&type=album)
- При открытии страницы происходит запрос к серверу (моку), который может вовзращать ошибки. В случае ошибки, делается новый запрос через 100мс.
- Для фильтрации сделаны три селектора в верхней части экрана, которые имзеняют состояние фильтра.
- Подробная информация об измении состояний и ошибках доступна в консоли:
![cкриншот консоли](https://sun9-9.userapi.com/impg/C06PVPrt4ic_0ScUYuXEcr7m3KcHWwuoRrmU4Q/Z6NBrVN10eM.jpg?size=717x712&quality=96&sign=85349f2a88764904395d717b3ab21e5d&type=album)
## Ознакомиться онлайн: https://vk-sigma.vercel.app
![](https://i.gifer.com/origin/68/68f87b37ccfde22769262c7cdc7b2b0b_w200.gif)

## Развернуть Docker контейнер
### Клонирование репозитория

```bash 
git clone https://github.com/dmitrgulyaeff/vk.git
```

### Старт скрипта
```bash 
sh ./build_and_run.sh
```
Этот скрипт автоматизирует процесс сборки и запуска приложения в Docker контейнере.

## Установка и запуск

### Клонирование репозитория

```bash 
git clone https://github.com/dmitrgulyaeff/vk.git
```

### Установка зависимостей

```bash
npm ci
```

### Сборка проекта

```bash
npm run build
```

### Запуск проекта

```bash
npm run preview
```
