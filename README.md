# browser-deeplink

Tiny function to open application from browser. Resolves if the application was requested to open.

```js
import { browserDeeplink } from '@macpaw/browser-deeplink';

browserDeeplink('cleanmymac://signin?email=1%401.com&src=dashboard')
  .then(() => {
    console.log('application is requested to open');
  })
  .catch(() => {
    console.log('application is not installed');
  });
```

## Library Release Process

Our library release process is designed to ensure quality, consistency, and proper versioning. The process is broken down into multiple stages to ensure every change is tracked, reviewed, and integrated appropriately.
We use [changesets](https://github.com/changesets/changesets) for version and release management.

### 1. Adding Changes

Whenever you introduce a new change, run the command:

> You have to do this at least once per branch with some changes.

```bash
npm run changes:add
```

- The CLI will prompt you with questions regarding your changes. You'll need to specify the nature and level of the changes (options: patch, minor, major).
- After completing the CLI prompts, commit the changes with a commit message similar to `chore: update changesets`.

### 2. Releasing and Publishing

Steps to make a release:
- To initiate a release, create a pull request from `master`` to release with the title Release.
- Ensure all CI checks pass successfully.
- Once CI checks are green and you have at least one approval, merge the pull request.
- Post-merge, the release GitHub Actions will trigger and create an "update versions" pull request to the `release` branch.
- Wait for the CI to turn green on the "update versions" pull request.
- Once CI is green, merge the "update versions" pull request.
- After this merge, the actions will trigger again. This time, they'll generate a new tag, create a new release, and publish packages to both GitHub and npm registries.

### 3.  Post-Release Activities

After a successful release, ensure you create a backmerge pull request from release to `master`. This ensures that the `master` branch stays up-to-date with the latest versions and changes.
