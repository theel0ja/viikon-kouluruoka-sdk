DIRECTORY=/app/_WEBSITES/sdk.theel0ja.info/public_html
USER=theel0ja
SERVER=hel03-fi.theel0ja.info
APP_NAME=kouluruoka-v1

mv dist/bundle.js dist/widgets.js
rsync -a dist/widgets.js $USER@$SERVER:$DIRECTORY/$APP_NAME/

# TODO: Create git commit to sdk.theel0ja.info repository!