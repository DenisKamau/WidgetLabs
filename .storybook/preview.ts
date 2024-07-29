import "../src/styles/tailwind.css";
import Alpine from 'alpinejs';

// TypeScript declaration for the `window` object
declare global
{
  interface Window
  {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;
Alpine.start();

export const tags = [ "autodocs" ];
