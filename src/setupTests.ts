// ui/wallet/src/setupTests.ts

// Конфигурация тестовой среды для React + TypeScript + Jest + Testing Library

// 1. Подключаем кастомные matchers для DOM-ассертов (toBeInTheDocument и др.)
import '@testing-library/jest-dom';

// 2. (Опционально) — здесь можно добавить глобальные моки, настройки MSW, инициализацию тестовой среды и др.
// Например, для MSW:
// import { server } from './mocks/server';
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// 3. (Опционально) — любые глобальные переменные для тестов
// globalThis.fetch = ...

// Всё, теперь в тестах доступны расширенные matchers и корректная среда для React-компонентов.
