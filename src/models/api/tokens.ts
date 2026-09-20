import {SerializedName} from "../../decorators";

export class TokenOutput {
    @SerializedName("access_token")
    accessToken: string;

    @SerializedName("token_type")
    tokenType?: string | null = "Bearer";

    @SerializedName("expires_in")
    expiresIn?: number | null = null;

    @SerializedName("refresh_token")
    refreshToken?: string | null = null;

    @SerializedName("refresh_expires_in")
    refreshExpiresIn?: number | null = null;
}

export class User {
    id: string;
    username: string;
    permissions: Record<string, string[]>;
    created_at: number | null;
    updated_at: number | null;
}

export class AgentMatch {
    @SerializedName("agent_name")
    agentName: string;

    @SerializedName("agent_description")
    agentDescription?: string | null = null;

    user: User;
}

export class MeOutput {
    success: boolean;

    agents: AgentMatch[];

    @SerializedName("auto_selected")
    autoSelected: boolean;
}