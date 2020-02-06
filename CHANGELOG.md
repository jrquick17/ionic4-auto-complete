# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.6.0]
### Added
* Select on tab out by [Birdstown](https://github.com/Birdstown)
* Auto highlight first result by [Birdstown](https://github.com/Birdstown)

### Fixed
* Highlighting on hover when used with arrow keys by [jrquick17](https://github.com/jrquick17)

## [Released]

## [2.5.3]
### Fixed
* Attributes missing from auto complete options by [jrquick17](https://github.com/jrquick17)

### Added
* PhantomJS by [jrquick17](https://github.com/jrquick17)

## [2.5.2]
### Added
* `@ionic/angular` to UMD module IDs by [jrquick17](https://github.com/jrquick17)
* Do not allow hitting return key when a value is not selected by [jrquick17](https://github.com/jrquick17)

### Fixed
* Empty template were breaking when options were passed without `noItems` set by [jrquick17](https://github.com/jrquick17)
* Show suggestions when the user presses the up/down arrow keys by [jrquick17](https://github.com/jrquick17)

## [2.5.1]
### Fixed
* Suggestions only populating after two characters on new page loads by [jrquick17](https://github.com/jrquick17)

### Removed
* Renderer2 by [jrquick17](https://github.com/jrquick17)

## [2.5.0]
### Added
* Ability to pass custom styles on elements within the Shadow DOM by [HashNotAdam](https://github.com/HashNotAdam)

## [2.4.2]
### Fixed
- Show loading when dataProvider is a function by [jrquick17](https://github.com/jrquick17)
- Do not let loading spinner and clear icon overlap by [jrquick17](https://github.com/jrquick17)

## [2.4.1]
### Fixed
- Keyup events when `[useIonInput]="true"` by [jrquick17](https://github.com/jrquick17)

## [2.4.0]
### Added
- `itemsCleared` event by [jrquick17](https://github.com/jrquick17)
- Hide menu list when user clicks escape by [jrquick17](https://github.com/jrquick17)
- Navigate options using arrow keys by [jrquick17](https://github.com/jrquick17)
- Select item using enter key by [jrquick17](https://github.com/jrquick17)

### Removed
- Demo from npm installs by [jrquick17](https://github.com/jrquick17)

### Moved
- Use stylesheet within component by [jrquick17](https://github.com/jrquick17)

## [2.3.2]
### Fixed
- Event propagation when item is selected by [jrquick17](https://github.com/jrquick17)

## [2.3.1]
### Fixed
- getLabel function in selection template by [jrquick17](https://github.com/jrquick17)

## [2.3.0]
### Added
- `clearInvalidInput` automatically clear the input if a user does not select an item by [jrquick17](https://github.com/jrquick17)
- `maxSelected` allows setting the maximum allowed number of items that can be selected by [jrquick17](https://github.com/jrquick17)
- Custom templates for when there are no matching suggestions and for displaying selected items within multi select by [jrquick17](https://github.com/jrquick17)

## [2.2.1]
### Added
- `maxResults` to allow limiting number of suggestions by [jrquick17](https://github.com/jrquick17)
- `build:demo` command to make testing easier by [jrquick17](https://github.com/jrquick17)
- `enableBrowserAutocomplete` to allow enabling/disabling browser autocomplete by [jrquick17](https://github.com/jrquick17)

### Changed
- Allow exclude to be objects with labels or just the label directly by [jrquick17](https://github.com/jrquick17)

### Fixed
- Automatically remove item from array if not multi by [jrquick17](https://github.com/jrquick17)

### Update
- NPM scripts by [jrquick17](https://github.com/jrquick17)

## [2.2.0]
### Added
- `maxResults` to allow limiting number of suggestions by [jrquick17](https://github.com/jrquick17)
- `build:demo` command to make testing easier by [jrquick17](https://github.com/jrquick17)

### Updated
- Included console logs in the demo for testing `Output()` events by [jrquick17](https://github.com/jrquick17)
- Deprecated fields for IonSearchBar's `showCancelButton` by [jrquick17](https://github.com/jrquick17)

### Fixed
- Build command updated to include assets by [jrquick17](https://github.com/jrquick17)

## [2.1.5]
### Removed
- Removed deprecated by [gnowland](https://github.com/gnowland)

## [2.1.4]
### Fixed
- Multi select getting cleared on search by [jrquick17](https://github.com/jrquick17)

### Removed
- Removed deprecated `HttpClient` by [gnowland](https://github.com/gnowland)

## [2.1.3]
### Removed
- Remove deprecated `@angular/http` by [gnowland](https://github.com/gnowland)

## [2.1.2]
### Fixed
- Two-way binding for [(model)] by [jrquick17](https://github.com/jrquick17)

## [2.1.1]
### Added
- Templates for reporting issues and adding pull requests by [jrquick17](https://github.com/jrquick17)
- Custom template demo by [jrquick17](https://github.com/jrquick17)
- Add routing to the demo by [jrquick17](https://github.com/jrquick17)

## [2.1.0]
### Changed
- Use ng-packagr to handle building the npm dist by [jrquick17](https://github.com/jrquick17)

### Removed
- Gulp by [jrquick17](https://github.com/jrquick17)

## [2.0.0] 
### Changed
- Upgraded to support Angular 8 by [jrquick17](https://github.com/jrquick17)

## [1.10.0]
### Fixed
- Production builds by [jrquick17](https://github.com/jrquick17)
- Migrate all changes up to `v2.5.1` (ng8) by [jrquick17](https://github.com/jrquick17)

## [1.9.0]
### Added
- Added `frontIcon` to selection chips by [jrquick17](https://github.com/jrquick17)
- Added eager loading option by [jrquick17](https://github.com/jrquick17)

### Changed
- Use `ion-chip` for selection instead of `ion-button` by [jrquick17](https://github.com/jrquick17)
- Made `removeIcon` optional within selection by [jrquick17](https://github.com/jrquick17)

## [1.8.1] 
### Added
- Added interface for data provider by [jrquick17](https://github.com/jrquick17)

### Changed
- Updated dependencies by [jrquick17](https://github.com/jrquick17)

### Fixed
- Fixed error with ionic production builds using AOT by [jrquick17](https://github.com/jrquick17)

## [1.8.0] 
### Added
- Added color options by [jrquick17](https://github.com/jrquick17)
- Added multi select to the demo by [jrquick17](https://github.com/jrquick17)

### Changed
- Updated dependencies by [jrquick17](https://github.com/jrquick17)
- Updated to Gulp 4 by [jrquick17](https://github.com/jrquick17)

### Fixed
- Fixed first selectedItem not getting changed initially by [jrquick17](https://github.com/jrquick17)

## [1.7.0]
### Added
- Add exclude by [jrquick17](https://github.com/jrquick17)

## [1.6.1]
### Changed
- Updated dependencies by [jrquick17](https://github.com/jrquick17)

### Added
- Add disable option by [jrquick17](https://github.com/jrquick17)

## [1.6.0]
### Added
- Support for Angular 7.0 by [jrquick17](https://github.com/jrquick17)
- Support for Ionic 4 by [jrquick17](https://github.com/jrquick17)

## [1.4.3]
### Added
- Support for Angular 5.0

## [1.4.3-beta]
### Added
- Support for ngModel

## [1.4.2] 
### Added
- Added `setFocus()` method
- Added `getSelection()` method
- Added option to debounce the search

### Changed
- Minor text changed by [kadoshms](https://github.com/kadoshms).

## [1.4.1]
### Added
- Support for rxjs subject

### Fixed 
- Document click handler issue
- Removed redundant script by [kadoshms](https://github.com/kadoshms).

## [1.3.0]
### Added
- New custom-templates mechanism (please refer to the README file)
- Added [showResultsFirst] option - calls `getItems()` when the component is tapped
- Added [useIonInput] option - use `<ion-input>` instead of `<ion-searchbar>`

