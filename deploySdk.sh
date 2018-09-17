DIRECTORY=sites/theel0ja.info/www/subdomains/sdk.theel0ja.info
USER=eliaso
SERVER=kapsi.fi
APP_NAME=kouluruoka-v1

# mv dist/bundle.js dist/widgets.js
rsync -a dist/widgets.js $USER@$SERVER:$DIRECTORY/$APP_NAME/

# TODO: Create git commit to sdk.theel0ja.info repository!