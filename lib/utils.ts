
// A simple utility for conditionally joining class names.
// In a full shadcn-ui setup, this would use `clsx` and `tailwind-merge`.
// For this self-contained app, a basic implementation is sufficient.
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(" ");
}
