import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { RmsService } from "@buf/ahmeddarwish_mln-api.bufbuild_connect-es/rms/v1/rms_service_connect.js";

const transport = createConnectTransport({
    baseUrl: import.meta.env.VITE_API_URL,
});
const apiClient = createPromiseClient(RmsService, transport);
export default apiClient
