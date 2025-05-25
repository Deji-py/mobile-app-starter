export interface Session {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
    verified: boolean;
    phone_number?: string;
    phone_verified?: boolean;
    two_factor_enabled?: boolean;
    metadata?: {
      email?: string;
      email_verified?: boolean;
      phone_verified?: boolean;
      sub?: string;
    };
  };
}
