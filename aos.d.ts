declare module "aos" {
  export function init(options?: AOSOptions): void;

  export interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }
}
