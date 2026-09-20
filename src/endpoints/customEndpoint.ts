import {AbstractEndpoint} from "./abstract";

export class CustomEndpoint extends AbstractEndpoint {
    /**
     * This method is used to trigger a custom endpoint with a GET method
     */
    async getCustom(url: string, agentId: string, userId?: string | null, query?: any): Promise<any> {
        return this.get<any>(url, agentId, userId, query);
    }

    /**
     * Read the ``mgmt_message`` plugin's global banner via its public, unauthenticated endpoint.
     *
     * Returns the 4-field settings dict stored by the plugin:
     * ``{"management_message": str, "management_active": bool, "global_message": str, "show_global_msg": bool}``.
     *
     * Uses the base (unauthenticated) HTTP session: the endpoint is public by
     * design, so no auth key or token is required (or useful).
     */
    async getGlobalMessage(): Promise<Record<string, unknown>> {
        const response = await this.client.getHttpClient().createHttpClient().get(
            "/mgmt_message/global_message",
        );

        if (response.status >= 400) {
            throw new Error(`Failed to fetch global message: ${response.statusText}`);
        }

        const data = response.data;
        if (data === null || typeof data !== "object" || Array.isArray(data)) {
            throw new Error("Global message response must be a JSON object");
        }

        return data as Record<string, unknown>;
    }

    /**
     * This method is used to trigger a custom endpoint with a POST method
     */
    async postCustom(url: string, agentId: string, payload?: any, userId?: string | null): Promise<any> {
        return this.post<any>(url, agentId, payload, userId);
    }

    /**
     * This method is used to trigger a custom endpoint with a PUT method
     */
    async putCustom(url: string, agentId: string, payload?: any, userId?: string | null): Promise<any> {
        return this.put<any>(url, payload, agentId, userId);
    }

    /**
     * This method is used to trigger a custom endpoint with a DELETE method
     */
    async deleteCustom(url: string, agentId: string, userId?: string | null, payload?: any): Promise<any> {
        return this.delete<any>(url, agentId, userId, payload);
    }
}