//src/main.ts
import CONFIG from "./config";
import GanymedeApi from "./api/ganymedeApi";
import { Buffer } from 'buffer';

window.Buffer = Buffer;

const api = new GanymedeApi(CONFIG.NODE_URL);

// Теперь api можно экспортировать или использовать для передачи в компоненты
export default api;
