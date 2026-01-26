const UButtonTheme = {
  base: "uno-rounded-[8px] uno-w-full uno-h-[56px] uno-font-bold uno-text-[16px] md:uno-text-[18px] uno-text-[#ffffff] uno-leading-[27px] uno-justify-center hover:!uno-bg-[var(--Color-31,#0A8165)]",
  variants: {
    // default: "uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--Color-31,#0A8165)]",
    // secondary: "uno-bg-[var(--color-pink-1)] hover:uno-bg-[#F06B9D]",
    // outline: "uno-bg-transparent uno-border-2 uno-border-[var(--ui-primary)] uno-text-[var(--ui-primary)] hover:uno-bg-[rgba(0,157,119,0.1)]",
    // ghost: "uno-bg-transparent uno-text-[var(--ui-primary)] hover:uno-bg-[rgba(0,157,119,0.1)]",
    // disabled: "uno-bg-[var(--ui-muted)] uno-text-[var(--ui-muted-foreground)] uno-cursor-not-allowed"
  },
  sizes: {
    sm: "uno-h-[40px] uno-text-[14px]",
    md: "uno-h-[48px] uno-text-[16px]",
    lg: "uno-h-[56px] uno-text-[18px]",
    xl: "uno-h-[64px] uno-text-[20px]"
  }
}
export const UButtonThemeDark = {
  base: UButtonTheme.base + " uno-bg-[#222222] hover:uno-bg-[var(--Color-31,#0A8165)] uno-text-[var(--ui-primary)]",
}
export default UButtonTheme