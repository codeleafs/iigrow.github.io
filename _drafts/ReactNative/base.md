
ReactNative使用

StyleSheet.create()

flex:1表示占满空间 多个flex占用空间时 谁的值大占用的空间就大 

eact Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

Also if you have my-icon.ios.png and my-icon.android.png, the packager will pick the file depending on the platform you are running on.

Packager will bundle and serve the image corresponding to device's screen density, e.g. on iPhone 5s check@2x.png will be used, on Nexus 5 – check@3x.png. If there is no image matching the screen density, the closest best option will be selected.

Note that image sources required this way include size (width, height) info for the Image. If you need to scale the image dynamically (i.e. via flex), you may need to manually set { width: undefined, height: undefined } on the style attribute.