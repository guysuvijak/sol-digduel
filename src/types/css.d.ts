// Next.js 15 - src/types/css.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
