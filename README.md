# IsItADAO

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![GitHub issues](https://img.shields.io/github/issues/Sealjay/isitadao)
![GitHub](https://img.shields.io/github/license/Sealjay/isitadao)
![GitHub Repo stars](https://img.shields.io/github/stars/Sealjay/isitadao?style=social)

This repository is the underlying code for [isitadao.tech](http://isitadao.tech/), a tongue in cheek exploration of... whether or not an org structure is a DAO, or simply a solution in search of a problem.

This repository is build on top of the Salient [Tailwind UI](https://tailwindui.com) site template and [Next.js](https://nextjs.org), and deployed to [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs?WT.mc_id=AI-MVP-5004204)).

## Getting started with this repository

To get started, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## License

The underlying site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license). Changes and additions are licenced under the MIT licence, as an End Product released open source and freely available to End Users.

## Contact
Feel free to contact me [on Twitter](https://twitter.com/sealjay_clj). For bugs, please [raise an issue on GitHub](https://github.com/Sealjay/isitadao/issue).

## Contributing
Contributions are more than welcome! Please bear in mind that most of this is written from a UK point of view. This repository uses [GitHub flow](https://guides.github.com/introduction/flow/) - with [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) to enforce semantic commits (`npm install -g commitizen cz-customizable`, `echo '{ "path": "cz-customizable" }' > ~/.czrc`, and then `git cz`- easy to setup!)

**Note: This adds a .czrc file to your home directory, and will overwrite existing commitzen .czrc files.**
