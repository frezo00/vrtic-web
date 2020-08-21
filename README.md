# VrticWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to use?

After change, change `server.ts` file by uncommenting last 3 lines.
After that, create a build: `npm run build:ssr && npm run serve:ssr`

To make a firebase deploy, first comment last 3 lines in `server.ts`, then make a build with: `npm run build:ssr`. Then hit commands:

```
cd functions
npm run build
firebase serve
```

If it goes well, hit: `firebase deploy`
