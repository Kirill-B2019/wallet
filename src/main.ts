//src/main.ts
import CONFIG from "./config";
import GanymedeApi from "./api/ganymedeApi";

const api = new GanymedeApi(CONFIG.NODE_URL);

// Теперь api можно экспортировать или использовать для передачи в компоненты
export default api;
