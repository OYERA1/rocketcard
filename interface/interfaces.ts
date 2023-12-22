export interface User {
  login?: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  location?: string;
  [key: string]: string | number | undefined;
}

export interface InfoItem {
  value?: string | number | undefined;
  key: string;
  label: string;
  icon: string;
}
