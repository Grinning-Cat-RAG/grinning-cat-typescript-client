export interface PluginSchemaSettings {
    title: string;
    type: string;
    properties: Record<string, PropertySettingsOutput>;
}

export class PluginSettingsOutput {
    name: string;
    value: Record<string, any>;
    scheme?: PluginSchemaSettings | null;
    description?: string | null;
    enum?: any[] | null;
    format?: string | null;

    static convertScheme(obj: PluginSettingsOutput): PluginSettingsOutput {
        // if obj.scheme is an empty object, set it to null
        if (obj.scheme && Object.keys(obj.scheme).length === 0) {
            obj.scheme = null;
        }
        return obj;
    }
}

export interface PropertySettingsOutput {
    default: any;
    extra?: Record<string, any> | null;
    title?: string | null;
    type?: string | null;
}