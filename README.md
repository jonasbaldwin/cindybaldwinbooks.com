# cbb-s

## Running Locally
- Install [Hugo](https://gohugo.io/getting-started/installing/).
- Open "Terminal".
- Navigate to the directory where you have this project located.
  - For example: if the folder you have this is in `~/Documents/cbb-s` type `cd ~/Documents/cbb-s` and press enter.
  - Type `hugo server` then press enter.
    - Most changes you make will automatically get updated if you have the website open in a browser, but sometimes you may need to close this instance by typing `Ctrl + C` in the terminal you have open, then typing `hugo server` again. 
  - In a browser navigate to [localhost:1313](http://localhost:1313).

## Adding a Book
To add a book, add a new file to `/content/books` and follow an example seen from one of the other books. The format is important, espesially for things like `reviews`, but for the most part should be straight forward.

## Changing a page
Most data is contained in the `/content` directory. This includes all data about books. There are some pages that rely on "shortcodes" to render custom HTML (see press-kit).

Some data is set in `config.toml` including the site's title and other metadata, and the bugs (the bees and fireflies), as well as the social links, and the top navigation links in the pages.

## Images and other resources
Add images to `/static/images` (or a subdirectory). Add resources like PDFs/etc. to `/static/class-resources/`.

## Release
- First Backup
  - `./scripts/backup.sh`
  - This creates a folder with the date and time of backup in `~/backups`
- Build Site
  - `hugo`
- Push changes to AWS
  - `./scripts/publish.sh`