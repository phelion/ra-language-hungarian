# Hungarian Messages for React-Admin

Hungarian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-hungarian
```

## Usage

```js
import hungarianMessages from 'ra-language-hungarian';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => hungarianMessages, 'hu');

<Admin locale="hu" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.