# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this project is

`ionic4-auto-complete` is a **publishable Angular/Ionic library** (npm package, MIT, currently
v2.9.10) that provides a single `<ion-auto-complete>` component: a searchbar/input with an
async suggestion list, single- or multi-select, full template customization, and
`ControlValueAccessor` support so it works inside Angular `FormGroup`s.

It is **not** an application. The root project builds a distributable package with `ng-packagr`;
`demo/` is a separate, self-contained Ionic app used to exercise the library by hand.

- Homepage / live demo: https://ionic4-auto-complete.jrquick.com
- Repo: https://github.com/jrquick17/ionic4-auto-complete
- Public API surface and every `@Input`/`@Output` are documented in [README.md](README.md) —
  it is the user-facing contract, keep it in sync with code changes.
- `.claude/ROADMAP.md` (local, git-ignored) holds the working plan — open-issue triage, CI/release
  automation, and the phased path to current Angular/Ionic, as a checklist. Read it if present
  before starting any fix or upgrade work, and tick items off as they land.

## Layout

```
src/                                 the library (this is what ships)
  main.ts                            NgModule (AutoCompleteModule) + all public re-exports
  auto-complete/
    auto-complete.component.ts       the whole component (~880 lines, single class)
    auto-complete.component.html     template: ion-input + ion-searchbar + suggestion list
    auto-complete.component.scss     component styles (inlined into the bundle)
  auto-complete.service.ts           AutoCompleteService interface consumers implement
  auto-complete-options.model.ts     AutoCompleteOptions (searchbar passthrough options)
  auto-complete-styles.model.ts      AutoCompleteStyles (list / listItem / searchbar style hooks)
  bold-prefix.pipe.ts                `boldprefix` pipe, bolds the matched keyword
  scss/auto-complete.scss            global stylesheet consumers import separately
  assets/loading.gif                 spinner shown in the searchbar while loading
  test.ts, polyfills.ts, environments/   Angular CLI scaffolding
demo/                                standalone Ionic demo app (own package.json + node_modules)
docs/                                generated compodoc output — do not hand-edit
CHANGELOG.md                         Keep a Changelog format, update on every user-visible change
```

Two sources of truth for the same styles: `src/scss/auto-complete.scss` (global, shipped as
`dist/auto-complete.scss`) and `src/auto-complete/auto-complete.component.scss` (component-scoped).
They are near-duplicates — **a style change usually needs to be made in both**.

## Architecture notes

- **Everything lives in `AutoCompleteComponent`.** No sub-components, no store, no services of its
  own. State is plain public fields (`selected`, `suggestions`, `keyword`, `showSuggestions`,
  `focusedOption`, `isLoading`).
- **`provider` is the extension point.** It is either a plain `Function` (keyword → array) or an
  object implementing `AutoCompleteService`. `getResults()` may return an array, a `Promise`, a
  `Subject`, or an `Observable` — `getItems()` normalizes all four. Preserve that flexibility.
- **`dataProvider` is an alias setter for `provider`**; both are public API.
- **Two inputs, one visible.** The template always renders both `<ion-input #inputElem>` and
  `<ion-searchbar #searchbarElem>`; `useIonInput` decides which gets the `hidden` class. Any change
  to bindings, key handling, or events must be mirrored on both elements.
- **Templates are projected with `ngTemplateOutlet`** and receive a single `attrs` context object
  (`template`, `listTemplate`, `emptyTemplate`, `selectionTemplate`). Adding a field to `attrs` is
  additive; renaming one is a breaking change for consumers.
- **Debounce** is a `setTimeout` stored in `this.promise` and cleared on each keystroke, using
  `autocompleteOptions.debounce` (default 250ms).
- **Forms integration**: the component registers itself as `NG_VALUE_ACCESSOR`;
  `writeValue`/`registerOnChange`/`registerOnTouched`/`updateModel` implement it.
  `formValueAttribute` (falling back to `labelAttribute`) decides what value the form receives.
- `ngDoCheck` clears stale text by reaching into `nativeElement.children[0].children[0].value`.
  This is fragile against Ionic DOM changes — touch with care and verify in the demo.

## Commands

Run from the repo root unless stated otherwise.

```bash
npm run lint
```

```bash
npm run build
```

```bash
npm run docs:build
```

Gotchas, in order of how often they bite:

- **`ng-packagr` and `@angular-devkit/build-angular` are pinned to `^12`, matching the
  `@angular/*` framework packages (`^12.2.17`).** They briefly drifted to `^17.x` via unreviewed
  Dependabot security bumps (`6cfe7b2`, `76734b2`), which three-majors-mismatched them against
  Angular 12 and made `npm install` fail with an `ERESOLVE` conflict (`@angular-devkit/build-angular@17`
  peer-requires `@angular/compiler-cli@^17`). Resolved by downgrading both back to `^12`
  (`.claude/ROADMAP.md` 0.1, decided 2026-08-09/10) — don't bump them back to `^17` without reading
  that decision record first; it reintroduces both the `ERESOLVE` conflict and the CVEs the
  Dependabot bumps were fixing.
- **`.nvmrc` and `engines.node` pin `^18.13.0 || >=20.9.0`**, set while the toolchain was still on
  `ng-packagr@17` (which requires Node 18+). Now that it's back on `^12` — whose own `engines.node`
  is `^12.14.1 || >=14.0.0` — the pin is stricter than the toolchain strictly needs, but it hasn't
  been revisited; treat Node 18+ as the supported baseline until that's done deliberately.
- **`npm run build` is Windows-only.** It shells out to `copy` / `copy -r`, which is `cmd.exe`
  syntax and fails under Git Bash or on macOS/Linux. Use PowerShell here, or invoke
  `npx ng-packagr -p package.json` directly and copy the SCSS/assets by hand.
- **`npm test` does not work as written.** `angular.json` points the karma builder at
  `karma.conf.js`, which does not exist in the repo — and cannot be committed, because the root
  `.gitignore` ignores `*.js`. The script also runs `snyk test` first (needs a Snyk auth token) and
  passes `--browsers PhantomJS` (launcher is installed, but PhantomJS is dead). To actually run the
  single spec (`src/auto-complete.spec.ts`), generate a karma config locally and run
  `npx ng test --browsers ChromeHeadless --watch false`. Don't assume tests were run — say so if
  they weren't.
- **`.gitignore` ignores `*.js`, `*.d.ts`, and `*.map` repo-wide.** New JS config files need
  `git add -f`, or a `!` exception added to `.gitignore`.
- **The demo installs the *published* package**, not the local source. To test changes against it:
  `npm run build:link` at the root, then `npm link ionic4-auto-complete` and `ionic serve` inside
  `demo/`, and `npm unlink` when done.
- `docs/` is generated by compodoc; regenerate it rather than editing.

## Conventions

Follow the existing style rather than a modern default — this codebase is deliberately consistent:

- **No space after the colon in type annotations**: `public keyword:string;`,
  `getLabel(selection:any|any[]):string`. `tslint.json` enforces this via `typedef-whitespace`.
- Single quotes, semicolons, 2-space indent, 140-char lines, `===` (null check allowed).
- Members sorted **alphabetically** within their group, and grouped: public fields, private
  fields, `@Input`, `@Output`, `@ViewChild`, setters/getters, `@HostListener`, constructor,
  lifecycle hooks, then methods (also roughly alphabetical).
- JSDoc block comments on public methods.
- The component targets **TypeScript 4.3 / Angular 12 / Ionic 5** semantics and compiles to `es5`;
  no optional chaining sugar beyond what the toolchain supports, no standalone components, no
  signals. Devtooling (`ng-packagr`, `@angular-devkit/build-angular`) matches the framework
  packages on `^12` (see the Gotchas section above) — don't bump devtooling ahead of the framework
  packages without reading `.claude/ROADMAP.md` 0.1.
- Loops are written as indexed `for` loops with a cached length, not `forEach`. Match that.

## Making changes

1. Change `src/`.
2. Mirror style edits across both SCSS files.
3. Update the relevant README section (options table, events list, or usage example) — the README
   is the docs site.
4. Add a bullet under `## [Unreleased]` in `CHANGELOG.md`, in the existing format:
   `* Description by [handle](https://github.com/handle)`.
5. Bump `version` in root `package.json` only when releasing (semver; this is a public package —
   renaming an `@Input`, an `@Output`, or an `attrs` template key is a **major**).
6. Verify by hand in `demo/` via the npm-link flow above; the automated suite is a single
   smoke test and proves almost nothing.

Release flow (`npm run shipit`): lint → test → build → docs → `npm publish dist`.
