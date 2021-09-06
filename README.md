# RASF / React app single file

A stripped down alternative to [Create React App](https://reactjs.org/docs/create-a-new-react-app.html),
RASF compiles to a single `./dist/app.js` file for easy use in `<script src=.../>` tags.
Environment variables are provided by [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) (see `.env.default`).

## Usage

```
yarn install
yarn dev
# http://localhost:8080/
yarn build
```

## Demo: Instagram Feed block

Utilizes [MohammedRaji/react-ig-feed](https://github.com/MohammedRaji/react-ig-feed). [Follow these steps](https://mohammedraji.github.io/posts/get-instagram-graph-API/) to set up your app, admin, and user. Then generate an Access Token,
and add to your `.env.*` files. If using RASF with Drupal, save the token to your [block](http://ddev.site/en/admin/structure/block/manage/sheblocksinstagram).

### Inspiration:

- [Drupal block with React](https://www.mediacurrent.com/blog/recipe-embedded-react-component-drupal/)
- [Webpack environment variables](https://prateeksurana.me/blog/using-environment-variables-with-webpack/)

### Resources

- https://github.com/MohammedRaji/react-ig-feed
- https://mohammedraji.github.io/posts/get-instagram-graph-API/
- http://she.ddev.site/en/admin/structure/block/manage/sheblocksinstagram

