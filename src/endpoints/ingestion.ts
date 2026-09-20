import {FactoryObjectSettingsOutput} from "../models/api/factories";
import {AbstractEndpoint} from "./abstract";

export class IngestionEndpoint extends AbstractEndpoint {
    protected prefix = "/ingestion";

    /**
     * This endpoint returns the settings of all ingestions. Ingestions are set to a system level, so usable by all
     * the agents in the system.
     *
     * @returns The settings of all the ingestions
     */
    async getIngestionsSettings(): Promise<FactoryObjectSettingsOutput> {
        const result = await this.get<FactoryObjectSettingsOutput>(
            this.formatUrl("/settings"),
            this.systemId,
        );
        return FactoryObjectSettingsOutput.convertSchemes(result);
    }

    /**
     * This endpoint returns the settings of a specific ingestion. Ingestions are set to a system level, so usable by all
     * the agents in the system.
     *
     * @param ingestion The name of the ingestion to get the settings of
     *
     * @returns The settings of the ingestion
     */
    async getIngestionSettings(ingestion: string): Promise<FactoryObjectSettingsOutput> {
        const result = await this.get<FactoryObjectSettingsOutput>(
            this.formatUrl(`/settings/${ingestion}`),
            this.systemId,
        );
        return FactoryObjectSettingsOutput.convertSchemes(result);
    }

    /**
     * This endpoint updates the settings of a specific ingestion. Ingestions are set to a system level, so usable by all
     * the agents in the system.
     *
     * @param ingestion The name of the ingestion to update the settings of
     * @param values The new settings of the ingestion
     *
     * @returns The updated settings of the ingestion
     */
    async putIngestionSettings(ingestion: string, values: Record<string, any>): Promise<FactoryObjectSettingsOutput> {
        const result = await this.put<FactoryObjectSettingsOutput>(
            this.formatUrl(`/settings/${ingestion}`),
            this.systemId,
            values,
        );
        return FactoryObjectSettingsOutput.convertSchemes(result);
    }
}