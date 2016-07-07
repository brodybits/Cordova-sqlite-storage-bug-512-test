## Test program for Cordova-sqlite-storage bug 512

- Using Bootstrap & JQuery for the test button
- JavaScript from [litehelpers/Cordova-sqlite-storage#512](https://github.com/litehelpers/Cordova-sqlite-storage/issues/512#issuecomment-230995675) with the following fixes:
  - extra horizontal and vertical spacing to make it more readable
  - added navigation.alert in the INSERT success callback
  - added `ignored` tx parameter to the INSERT success and error callbacks
  - added `title` and `alertDismissed` definitions as referenced by the JavaScript in [litehelpers/Cordova-sqlite-storage#512](https://github.com/litehelpers/Cordova-sqlite-storage/issues/512#issuecomment-230995675)

## To prepare and run

Example for Android:

```shell
cordova platform add android
cordova prepare
cordova run android
```
